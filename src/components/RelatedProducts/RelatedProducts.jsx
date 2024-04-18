import React, { useContext } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import new_collections from '../assets/new_collections';
import './RelatedProducts.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const RelatedProducts = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    const authToken = localStorage.getItem('auth-token');

    return (
        <div>
            {new_collections.map((item, id) => {
                return (
                    <div className="relatedProductflex" key={id}>
                        <div className="relatedheading">
                            <span>{item.name}</span>
                            <span className="related_price">{item.old_price}</span>
                            <p className="relatedparagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quod perferendis distinctio hic dicta enim sint ipsum nam officiis voluptatibus. Tenetur dolores magni consectetur, omnis beatae minima doloremque neque, architecto est accusantium rerum ad ullam ipsam. Tempora adipisci inventore provident. Odit et neque repellendus vel.</p>
                        </div>
                        <div className="relatedImage">
                            <img src={item.image} alt="/" />
                            {authToken ? (
                                // If auth-token is present
                                <div className="relatedProductadd">
                                    {cartItems[item.id] === 0 ? (
                                        <button className="relatedproductkbtn" onClick={() => { addToCart(item.id) }}>Add</button>
                                    ) : (
                                        <button className="relatedproductkbtn">
                                            <FaMinus className="relatedfaminus" onClick={() => { removeFromCart(item.id) }} />
                                            {cartItems[item.id]}
                                            <FaPlus className="relatedfaplus" onClick={() => { addToCart(item.id) }} />
                                        </button>
                                    )}
                                </div>
                            ) : (
                                // If auth-token is not present
                                <Link to="/signup" >
                                    {/* <div className="relatedproductkbtn"> */}
                                    <button className="relatedproductkbtn" >Add</button>
                                    {/* </div> */}
                                </Link>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RelatedProducts;
