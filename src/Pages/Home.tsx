import React from 'react'
import './Home.css'
import { MediaRenderer, useAddress,useContract, useContractRead, useOwnedNFTs } from '@thirdweb-dev/react'
import {FARMER_ADDRESS,TOOLS_ADDRESS,STAKING_ADDRESS,REWARDS_ADDRESS} from "../Const/address"
import ClaimFarmer from '../Components/ClaimFarmer/ClaimFarmer'
import { BigNumber, ethers } from 'ethers'
import Inventory from '../Components/Inventory/Inventory.tsx'
import Equipped from '../Components/Equipped/Equipped.tsx'
import Background from "../Images/background.jpeg"
import Logo from "../Images/logo.jpeg"

const Home = () => {

  const address= useAddress();

  const {contract: farmerContract}=useContract(FARMER_ADDRESS)
  const {contract: toolsContract}=useContract(TOOLS_ADDRESS)
  const {contract: stakingContract}=useContract(STAKING_ADDRESS)
  const {contract: rewardContract}=useContract(REWARDS_ADDRESS)


  const {
    data: ownedFarmers,
    isLoading : loadingOwnedFarmers } = useOwnedNFTs(
      farmerContract,address
    )

   
    const {data:ownedTools} = useOwnedNFTs(
      toolsContract,address
    )
  
    const {data: equippedTools}= useContractRead(
        stakingContract,"getStakeInfo",[address]
    )

    const {data: rewardBalance}= useContractRead(
      rewardContract,"balanceOf",[address]
    )

  if(!address) {
    return (
      <>
     
      <div className='home-div'>
         <h1 style={{fontFamily: "Josefin Sans",fontSize:"20px"}}>Welcome to Pupstar please connect</h1>
      </div>
      <div>
        <img src={Background}  style={{height:"100%",width:"100%"}} alt="Background"/>
        <img src={Logo}  style={{height:"100%",width:"100%"}} alt="Background-2"/>
      </div>

      </>
    )
  }

  if(loadingOwnedFarmers){
    return (
      <div>
         <h1>Loading...</h1>
      </div>
    )
  }
 

  if(ownedFarmers?.length===0){
   
    return (
      <div>
         <ClaimFarmer />
      </div>
    )
  }

console.log(equippedTools[0]?.length===0)

  return (
    <>
     <div>
      <div className='home-div'>
       {ownedFarmers?.map((nft)=>(
        <div key={nft.metadata.id} >
            <MediaRenderer 
              src={nft.metadata.image}
              
              style={{width:"100%"}}
              
            />
        </div>
       ))}
       <h2 style={{fontFamily: "Josefin Sans",fontSize:"15px"}}>
              $PUPSTAR Balance:
              {
                rewardBalance && (
                  <p>{ethers.utils.formatUnits(rewardBalance,18)}</p>
                )
              }
      </h2>
      </div>
      {/* inventory */}
      <div className='home-div' style={{height:"fit-content",}}>
         <h1 style={{fontFamily: "Josefin Sans",fontSize:"15px"}}>Inventory:</h1>
        
         <Inventory
            nft={ownedTools}
          />

 
          
      </div>
     
    </div>
    <div > 
        <div style={{display:'flex',justifyContent:"center"}}>
        <h4 style={{fontFamily: "Josefin Sans",fontSize:"15px"}}>Equipped tools:</h4>
        </div>
         {
           equippedTools[0]?.length===0?(
            <div className='home-div'>
               <h3 style={{fontFamily: "Josefin Sans",fontSize:"15px"}}>No tools Equipped Yet</h3>
            </div>
          ):(
          <div className='home-div'>
            {
              equippedTools && equippedTools[0].map((nft:BigNumber)=>(
                 <Equipped
                  key={nft.toNumber()}
                  tokenId={nft.toNumber()}
                 />
              ))
            }
          </div>
          )
         }
          
      </div>
    </>
   
  )
}


export default Home;