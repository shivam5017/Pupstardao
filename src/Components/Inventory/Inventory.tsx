import React from 'react'
import { MediaRenderer,Web3Button,useAddress,useContract } from '@thirdweb-dev/react'
import { NFT } from '@thirdweb-dev/sdk'
import { STAKING_ADDRESS,TOOLS_ADDRESS } from '../../Const/address'
import { useNavigate } from 'react-router-dom'


type Props={
    nft:NFT[]  | undefined;
    
}

const Inventory = ({nft}:Props) => {
    const navigate=useNavigate()
     const address= useAddress();
     const {contract:toolsContract}=useContract(TOOLS_ADDRESS);
     const {contract:stakingContract}=useContract(STAKING_ADDRESS);


     if(nft?.length===0){
        return (
          <div style={{display:"flex",justifyContent:"space-between",padding:'10px'}}>
             <h1 style={{fontFamily: "Josefin Sans",fontSize:"15px"}}>No Tools in Inventory.</h1>
             <button style={{fontSize:"20px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",fontFamily: "Josefin Sans"}} onClick={()=>navigate('/shop')}>Shop</button>
          </div>
        )
     }


    const stakedNFT= async(id:string)=>{
        if(!address){
            return;
        }

        const isApproved = await toolsContract?.erc1155.isApproved(
            address,
            STAKING_ADDRESS
        )

        if(!isApproved) {
            await toolsContract?.erc1155.setApprovalForAll(
                STAKING_ADDRESS,
                true
            )
        }

        await stakingContract?.call(
            "stake",[id,1]
        );

    } 


  return (
    <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
       {
        nft?.map((nft)=>(
            <div>
                <MediaRenderer 
                  src={nft?.metadata?.image}
                  style={{width:"100%"}}
                />
                <h3 style={{fontFamily: "Josefin Sans"}}>{nft?.metadata?.name}</h3>
                <div style={{display:"flex",justifyContent:"center"}}>
               <Web3Button 
               style={{fontSize:"10px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",fontFamily: "Josefin Sans"}}
                 contractAddress={STAKING_ADDRESS}
                 action={()=>stakedNFT(nft.metadata.id)}
               >Equip</Web3Button>
               </div>
         </div>
        ))
       }
    </div>
  )
}

export default Inventory