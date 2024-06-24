import React,{useState,useEffect} from 'react'
import "./Navbar.css"
import { IoMdSettings } from "react-icons/io"
import Logo from "../../Images/logo.jpeg"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";

const Navbar = () => {
  const navigate=useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (isSpinning) {
      const timeoutId = setTimeout(() => {
        setIsSpinning(false); // Change state after 3 seconds
      }, 3000);

      // Cleanup function to clear the timeout on unmount
      return () => clearTimeout(timeoutId);
    }

  }, [isSpinning]);

  
  const handleSpin = () => {
    navigate('/settings')
    setIsSpinning(!isSpinning);
  };

  const backbtn=()=>{
     navigate('/')
  }



  return (
    <div className='nav-div'>
        {location.pathname!=="/"?<IoArrowBackCircle  size={25} className='back-logo' onClick={backbtn} />:<img src={Logo} alt="logo" className='logo' />}
        <IoMdSettings size={24} className={isSpinning ? 'settings-icon' : 'setting-icon-off'} onClick={handleSpin}/>
    </div>
  )
}

export default Navbar