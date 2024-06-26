import React from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import Home from '../Pages/Home.tsx'
import Settings from '../Pages/Settings'
import Shop from '../Pages/Shop.tsx'


const AllRoute = () => {

  const location=useLocation()

  return (
    
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
    </Routes>
 
  )
}

export default AllRoute