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
      <div style={{padding:"10px",display:"flex",justifyContent:'center'}}>
      <h1 style={{fontFamily: "Josefin Sans",fontSize:"20px"}}>Claim Pup farmer to start Farming $PUPSTAR</h1>
      </div>
      <div className='img-div'>
             <MediaRenderer src={metadata?.image} alt="farmer" style={{width:"100%"}}/>
       </div>
         <div className='btn-div'>
       <Web3Button contractAddress={FARMER_ADDRESS} action={(contract)=>contract.erc1155.claim(0,1)}  style={{fontSize:"10px", borderTop:"4px solid black",borderRight:"4px solid black",borderBottom:"1px solid black",borderLeft:"1px solid black",marginTop:"30px",fontFamily: "Josefin Sans"}}>
        Claim Farmer
      </Web3Button>
         </div>
      
    </div>
  )
}

export default ClaimFarmer