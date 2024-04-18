import React from 'react'
import './ProductDisplay.css'
import { FaStar } from "react-icons/fa6";
import { MdOutlineTimelapse } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import Offer from '../offer/Offer';
import offer1 from '../assets/offer1.avif'
import offer2 from '../assets/offer2.avif'
import offer3 from '../assets/offer3.avif'
import offer4 from '../assets/offer4.avif'
import offer5 from '../assets/offer5.avif'
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productDisplay">
        <div className="productcnt">
            <div className="productbox">
                <span>{product.name}</span>
                <span className="grey">{product.category}</span>
                <span className="grey">{product.address}</span>
            </div>
            <div className="starcnt">
                <div>
                    <FaStar color="green" />
                    <span className="green">4.4</span>
                </div>
                <div><hr/></div>
                <span>10K+ ratings</span>
            </div>
        </div>
       <div className="dotted-line-container"></div>
       <div className="productime">
        <div className="productimebox">
            <MdOutlineTimelapse size={25}/>
            <span>25-30 MINS</span>
        </div>
        <div className="productimebox">
            <HiOutlineCurrencyRupee size={25}/>
                <div  className="productruppes">
                <FaIndianRupeeSign />
                <span> 400 for two</span>
            </div>
        </div>
       </div>
       <div className="product_offer">
        <Offer image={offer1} heading="Free Medium Fries" price="199"/>
        <Offer image={offer2} heading="FLAT ₹100 OFF  " price="550"/>
        <Offer image={offer3} heading="FLAT ₹50 OFF" price="400"/>
        <Offer image={offer4} heading="20% OFF UPTO ₹100" price="129"/>
        <Offer image={offer5} heading="15% OFF UPTO ₹300" price="1200"/>
       </div>
    </div>
  )
}

export default ProductDisplay
