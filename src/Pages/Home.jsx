import React from 'react'
import transition from "../transition"
import './Home.css'

const Home = () => {
  return (
    <div className='home-div'>
      <div className='home-div-1'>
         <h5>Total Balance</h5>
      </div>
      <div className='home-div-2'>
          <h3>50,00,00,00</h3>
      </div>
    </div>
  )
}

export default transition(Home);