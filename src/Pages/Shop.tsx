import React from 'react'
import { useContract, useNFTs } from '@thirdweb-dev/react'
import { TOOLS_ADDRESS } from '../Const/address'
import NFTCARD from '../Components/NFT/NFT.tsx'

const Shop = () => {

     const {contract} = useContract(TOOLS_ADDRESS)
     const {data:nfts} = useNFTs(contract);

      



  return (
    <div >
        <div >
            <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
            <h1 style={{fontFamily: "Josefin Sans",fontSize:"25px"}}>Shop</h1>
            </div>
             <div style={{display:'flex',justifyContent:"center",alignItems:"center",padding:"10px"}}>
             <p style={{fontFamily: "Josefin Sans",fontSize:"15px"}}> Bought NFT's using $PUPSTAR to earn more tokens </p>
             </div>

             {
                !nfts? (
                    <h1>Loading...</h1>
                ):(
                    <div style={{padding:"10px"}}>
                        {
                            nfts?.map((nftItem)=>(
                                <NFTCARD
                                 key={nftItem.metadata.id}
                                 nft={nftItem}
                                />
                            ))
                        }
                   </div>
                )
             }
        </div>
    </div>
  )
}

export default Shop