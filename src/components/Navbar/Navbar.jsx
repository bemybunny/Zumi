import React, { useState, useContext } from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const { getUser, getTotalCartItem, inputVal, setInputVal } = useContext(ShopContext);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <h1 className="navbarh">Zumi</h1>
      <div className="navbar_location">
        {toggle === false ? (
          <Link to="/googlemap">
            <FaMapMarkerAlt color="rgb(255, 55, 55)" size={25} onClick={handleClick} />
          </Link>
        ) : (
          <Link to="/">
            <FaMapMarkerAlt color="rgb(255, 55, 55)" size={25} onClick={handleClick} />
          </Link>
        )}
        <div className="search_cnt">
          <CiSearch />
          <input placeholder="Search for restaurants, cuisines, or dishes" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        </div>
      </div>

      <div className="btn">
        {localStorage.getItem('auth-token') ? (
          <button className="navbarbtn" onClick={() => {
            localStorage.removeItem('auth-token');
            getUser();
            navigate('/');
          }}>
            Logout
          </button>
        ) : (
          <div className="auth-buttons">
            <button className="navbarbtn">
              <Link to="/login" style={{ textDecoration: 'none', color: 'grey' }}>
               Log in
              </Link>
            </button>
            <button className="navbarbtn">
              <Link to="/signup" style={{ textDecoration: 'none', color: 'grey' }}>
                Sign up
              </Link>
            </button>
          </div>
        )}
        <Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
