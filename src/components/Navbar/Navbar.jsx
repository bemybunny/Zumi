import React, {useState, useContext } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import zomato from '../assets/zomato.avif'
import {Link } from 'react-router-dom';
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const {getUser} = useContext(ShopContext);
  const [toggle,setToggle] = useState(false);
  const navigate = useNavigate();
  const handleClick=()=>{
      setToggle(!toggle);
  }
  const {getTotalCartItem} = useContext(ShopContext);
  return (
    <div className="navbar">
      <h1 className="navbarh">Zumi</h1>
      <div className="navbar_location">
      {toggle===false?(<Link to ="/googlemap"><FaLocationDot color="rgb(255, 55, 55)" size={25} onClick={handleClick}/></Link>)
      :(<Link to ="/"><FaLocationDot color="rgb(255, 55, 55)" size={25}  onClick={handleClick}/></Link>)}
      <div className="search_cnt">
        <CiSearch />
      <input placeholder="Search for restaurant,cuisine or a dish"/>
      </div>
      </div>
    
     
      <div className="btn">
       { localStorage.getItem('auth-token')?
       <button className="navbarbtn" onClick={
        ()=>{
         
          localStorage.removeItem('auth-token');
          getUser();
          navigate('/')
      }}>Logout</button>:
          <div>
            <button className="navbarbtn"><Link to ="/login" style={{ textDecoration: 'none', color: 'grey' }}>Log in</Link></button>
            <button className="navbarbtn"><Link to ="/signup" style={{ textDecoration: 'none', color: 'grey' }}>Sign up</Link></button>
          </div>
        }
        <Link to ="/cart"><img src = {cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar