import React from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'


const AllRoute = () => {

  const location=useLocation()

  return (
    
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
    </Routes>
 
  )
}

export default AllRoute