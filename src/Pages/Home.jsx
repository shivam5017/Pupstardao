import React from 'react'
import './Home.css'
import { useAddress,useContract, useOwnedNFTs } from '@thirdweb-dev/react'
import {FARMER_ADDRESS} from "../Const/address"
import ClaimFarmer from '../Components/ClaimFarmer/ClaimFarmer'
// STAKING_ADDRESS, TOOLS_ADDRESS,REWARDS_ADDRESS
const Home = () => {

  const address= useAddress();

  const {contract: farmerContract}=useContract(FARMER_ADDRESS)
  // const {contract: toolsContract}=useContract(TOOLS_ADDRESS)
  // const {contract: stakingContract}=useContract(STAKING_ADDRESS)
  // const {contract: rewardContract}=useContract(REWARDS_ADDRESS)


  const {
    data: ownedFarmers,
    isLoading : loadingOwnedFarmers } = useOwnedNFTs(
      farmerContract,address
    )
  

  if(!address) {
    return (
      <div>
         <h1>Welcome to Pupstar please connect</h1>
      </div>
    )
  }

  if(loadingOwnedFarmers){
    return (
      <div>
         <h1>Loading...</h1>
      </div>
    )
  }
 

  if(ownedFarmers.length===0){
    
    return (
      <div>
         <ClaimFarmer />
      </div>
    )
  }



  return (
    <>
     <div className='home-div'>
      <h1>Content</h1>
    </div>
    </>
   
  )
}


export default Home;