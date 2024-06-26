import React from 'react'
import { MediaRenderer,Web3Button,useActiveClaimCondition, useContract, } from '@thirdweb-dev/react'
import { NFT } from '@thirdweb-dev/react'
import { TOOLS_ADDRESS } from '../../Const/address';
import { ethers } from 'ethers';
import { Skeleton,Box } from '@mui/material';


type Props = {
 nft: NFT;

}



const NFTCARD = ({nft}:Props) => {

  const {contract}=useContract(TOOLS_ADDRESS)
  const {data,isLoading}=useActiveClaimCondition(
    contract,
    nft.metadata.id
  )

  return (
    <div style={{fontSize:"8px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",fontFamily: "Josefin Sans",display:"flex",justifyContent:"center",marginTop:"20px",borderRadius:"10px",height:"450px"}}>
      <div key={nft.metadata.id} style={{overflow:"hidden"}}>
       <MediaRenderer 
        src={nft.metadata.image}
       />
       <div style={{display:"flex",justifyContent:"center"}}>
       <h1>{nft.metadata.name}</h1>
       </div>
       
       {
        !isLoading && data?(
          <div style={{display:"flex",justifyContent:"center"}}>
           <h2>Cost: {ethers.utils.formatEther(data?.price)}{" " + data?.currencyMetadata.symbol}</h2>
           </div>
        ):
        (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"}}>
          <Box sx={{ width: 300}}>
          <Skeleton animation="wave"  height={40} width={"100%"}/>
          </Box>
        </div>
        )
       }
       <div style={{display:"flex",justifyContent:"center"}}>
       <Web3Button
        contractAddress={TOOLS_ADDRESS}
        action={(contract)=> contract.erc1155.claim(nft.metadata.id,1)}
        style={{fontSize:"10px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",fontFamily: "Josefin Sans"}}
       >Buy</Web3Button>
       </div>
      
      </div>
    </div>
  )
}

export default NFTCARD;