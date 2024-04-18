import React,{useContext, useState} from 'react'
import './CSS/cart.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Rolls from '../components/assets/Rolls.avif'
import veg from '../components/assets/veg.png'
import arrow_icon from '../components/assets/breadcrum_arrow.png';
import { FaMinus } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';

const Cart = () => {
    const {new_collections,cartItems,removeFromCart,getTotalCartAmount,addToCart} = useContext(ShopContext);
  return (
    <div className="cart">
        <div className="cartcnt">
            <div className="cartbox">
                <span className="carboxheading">Add a delivery address</span>
                <span className="grey">You seem to be in the new location</span>
                <div className="cartaddress">
                    <div className="cartaddressflex">
                        <FaLocationDot color="grey" size={23}/>
                        <FaCircle className="facircleplus" color="green" size={12}></FaCircle>
                        <FaPlus className="faplus" color="white" size={8}/>
                        <div className="cartadddresscolumn">
                            <span className="carboxheading">Add New Address</span>
                            <span className="cartaddresscolumnspan">Jaipur, Rajasthan, India</span>
                        </div>
                    </div>
                    <button>ADD NEW</button>
                </div>
            </div>
            <div className="payment">
                <span>Payment</span>
            </div>
            <div className="cartitems-promocode">
            <p>If you have a Coupon code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder ="coupon code"/>
                <button>Submit</button>
            </div>
        </div>
        </div>
        <div className="cartpaymentcnt">
            <div className="cartpaymentimage">
                <img  src={Rolls} alt="/"/>
                <div className="cartpaymentcolumn">
                    <span>The Bombay Roll Express</span>
                    <span>Civil Lines</span>
                </div>
            </div>
           {new_collections.map((e,id)=>{
            if(cartItems[e.id]>0){
                return (            
                <div className="customize_flex" key={id}>
                <div>
                    <div className="cartdish">
                        <img className="veg" src={veg} alt="/"/>
                        <span>{e.name}</span>
                    </div>
                    <span className="grey">Customize {">"}</span>
                </div>
                <div className="cartdishprice">
                    <button >
                        <FaMinus className="faminusicon" onClick={()=>{removeFromCart(e.id)}}/>
                            {cartItems[e.id]}
                        <FaPlus  className="faplusicon" onClick={()=>{addToCart(e.id)}} /></button>
                    <div className="cartdishpricespan">
                        <span className="spanunderline">{e.old_price}</span>
                        <span>{e.new_price}</span>
                    </div>
                </div>
            </div>
                )}
           }) }
            <button>Any suggestions? We will pass it on...</button>
            <div className="cartpara">
               <span className="opt">Opt in for No-contact Delivery</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo, ratione amet rem in dolorum exercitationem porro voluptate praesentium neque. Reiciendis animi natus tempora neque!</p>
            </div>
            <div className="billflexbox">
            <span>Bill Details</span>
            <div className="billflex">
                <span>Item Total</span>
                <span>{getTotalCartAmount()}</span>
            </div>
            <div className="billflex">
                <span>Delivery Fee | 1.1kms</span>
                <span>₹30</span>
            </div>
            <div><hr/></div>
            <div className="billflex">
                <span className="green">Item Discount</span>
                <span className="green">₹20.54</span>
            </div>
            <div><hr/></div>
            <div className="billflex">
                <span>Delivery Tip</span>
                <span className="red">Add tip</span>
            </div>
            <div className="billflex">
                <span>Platform fee</span>
                <span>₹5.00</span>
            </div>
            <div className="billflex">
                <span>GST and Restaurant Charges</span>
                <span>₹77.50</span>
            </div>
            <div><hr/></div>
            <div className="billflex billflexpay">
                <span>TO PAY</span>
                <span>{`₹${(getTotalCartAmount()+ 30 -20.54 + 5 + 77.5).toFixed(2)}`}</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
