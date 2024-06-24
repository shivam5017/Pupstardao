import React,{useEffect, useState} from 'react'
import './Home.css'
import { LuDog } from "react-icons/lu";

const Home = () => {

  
  const [mined,setMined]=useState(false)
 const [totalMined,setTotalMined]=useState(0)
   

//  Add mining strucutre
   useEffect(()=>{
  
     if(totalMined===100){
      setMined(true) 
    }
    let intervalId = setInterval(() => {
      setTotalMined((prevCount) => Math.min(prevCount + 1, 100)); // Limit count to 100
    }, 1000); // Adjust for 1 second intervals

    return () => clearInterval(intervalId);

    

   },[mined])
   console.log(totalMined,'check')
   console.log(mined)
  
  const startMine=()=>{
    setMined(false)
    setTotalMined(0);
    
  }



  return (
    <>
     <div className='home-div'>
      <div className='home-div-1'>
         <h5>Total Balance</h5>
      </div>
      <div className='home-div-2'>
          <h3>0</h3>
      </div>
    </div>
    <div className='game-div'>
          <div className='balance-div'> 
             <h2>PupStar Balance</h2>
             <h3>0</h3>
          </div>
          <div className='miner-div'>
            <div className='miner-icons'>
            <LuDog size={50} className={mined?'game-icon-full-mined':'game-icon '} />
            <LuDog size={50} className={mined?'game-icon-full-mined':'game-icon '} />
            <LuDog size={50} className={mined?'game-icon-full-mined':'game-icon '} />
            <LuDog size={50} className={mined?'game-icon-full-mined':'game-icon '} />
            <LuDog size={50} className={mined?'game-icon-full-mined':'game-icon '} />
            </div>
            <div className='miner-btn'>
               <div className='mining-indicator-div'>
                 <h3>{totalMined}/100%</h3>
               </div>
               <button onClick={startMine}>{!mined?'Mining':'Claim'}</button>
            </div>
          
          </div>
    </div>
    </>
   
  )
}

export default Home;