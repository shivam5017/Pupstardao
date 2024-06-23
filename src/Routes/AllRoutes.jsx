import React from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'
import {AnimatePresence} from "framer-motion"


const AllRoute = () => {

  const location=useLocation()

  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
    </Routes>
    </AnimatePresence>
  )
}

export default AllRoute