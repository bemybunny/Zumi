import React, { useContext } from 'react';
import topicks from '../assets/topicks';
import './TopPicks.css';
import { FaPlus, FaMinus } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const TopPicks = () => {
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
    const authToken = localStorage.getItem('auth-token');

    return (
        <div className="topicks">
            <span>Top Picks</span>
            <div className="topicks_overflow">
                {topicks.map((item, id) => {
                    return (
                        <div key={id} className="topicks_image">
                            <img src={item.image} alt="" />
                            {authToken ? (
                                // If auth-token is present
                                <div className="topick_adjust">
                                    {cartItems[item.id] === 0 ? (
                                        <button className="topickbtn" onClick={() => { addToCart(item.id) }}>Add</button>
                                    ) : (
                                        <button className="topickbtn">
                                            <FaMinus className="faminusicon topickfaminus" onClick={() => { removeFromCart(item.id) }} />
                                            {cartItems[item.id]}
                                            <FaPlus className="faplusicon topickfaminus" onClick={() => { addToCart(item.id) }} />
                                        </button>
                                    )}
                                </div>
                            ) : (
                                // If auth-token is not present
                                <Link to="/signup">
                                  <button className="topickbtn" >Add</button>
                            </Link>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TopPicks;

