import React from 'react'
import { FARMER_ADDRESS } from '../../Const/address'
import { MediaRenderer, Web3Button, useContract, useMetadata } from '@thirdweb-dev/react'
import "./ClaimFarmer.css"

const ClaimFarmer = () => {

  const {contract}=useContract(FARMER_ADDRESS)
  const {data:metadata}=useMetadata(contract)
 console.log(metadata)
  return (
    <div>
      <h1>Claim farmer to start Farming</h1>
      
      <div className='img-div'>
             <MediaRenderer src={metadata?.image} alt="farmer" style={{width:"100%"}}/>
       </div>
         <div className='btn-div'>
         <Web3Button contractAddress={FARMER_ADDRESS} action={(contract)=>contract.erc1155.claim(0,1)} style={{}}>
        Claim Farmer
      </Web3Button>
         </div>
      
    </div>
  )
}

export default ClaimFarmer