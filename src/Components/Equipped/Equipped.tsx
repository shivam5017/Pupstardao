import React from 'react'
import { MediaRenderer,Web3Button,useAddress,useContract, useContractRead, useNFT } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { STAKING_ADDRESS,TOOLS_ADDRESS } from '../../Const/address'


interface EquippedProps{
    tokenId:number
}


const Equipped = (props:EquippedProps) => {

    const address= useAddress();
     const {contract:toolsContract}=useContract(TOOLS_ADDRESS);
     const {contract:stakingContract}=useContract(STAKING_ADDRESS);

     const {data:nft} = useNFT(toolsContract,props.tokenId);


     const {data: claimableRewards}= useContractRead(
       stakingContract,
       'getStakeInfoForToken',
       [props.tokenId,address]
     )

   

  return (
    <div style={{overflow:"hidden"}}>
        {nft && (
            <>
            <div  style={{fontSize:"10px",borderBottom:"1px solid black",padding:"10px"}}>

       
            <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                   <MediaRenderer 
                     src={nft.metadata.image}
                     style={{width:"100%",padding:"10px"}}
                   />

               </div>
               <h2  style={{fontFamily: "Josefin Sans",fontSize:"20px"}}>
                {nft.metadata.name}
               </h2>
               <h2  style={{fontFamily: "Josefin Sans",fontSize:"20px"}}>
                Equipped: {ethers.utils.formatUnits(claimableRewards[0],0)}
               </h2>
               <div style={{display:"flex",justifyContent:"center"}}>
               <Web3Button
               style={{fontSize:"10px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",fontFamily: "Josefin Sans"}}
                contractAddress={STAKING_ADDRESS}
                 action={(contract)=>contract.call("withdraw",[props.tokenId,1])}
               >
                 Unequip NFT
               </Web3Button>
               </div>
               
               
            </div>
            <div>
                 <h3 style={{fontFamily: "Josefin Sans",fontSize:"20px"}}>Claimable $PUPSTAR:</h3>
                 <div style={{overflow:"hidden",padding:"5px",width:"118px"}}>
                 <h3 style={{fontFamily: "Josefin Sans",fontSize:"20px"}}>{ethers.utils.formatUnits(claimableRewards[1],18)}</h3>
                 </div>
                 
                 <div style={{display:"flex",justifyContent:"center",padding:"10px"}}>
                 <Web3Button 
                 style={{fontSize:"10px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",fontFamily: "Josefin Sans"}}
                  contractAddress={STAKING_ADDRESS}
                  action={(contract)=>contract.call('claimRewards',[props.tokenId])}
                 > 
                    Claim Pupstar
                 </Web3Button>
                 </div>
            </div>
            </div>
           </>
        )}
       
        
    </div>
  )
}

export default Equipped