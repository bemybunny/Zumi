import React from 'react'
import './Offer.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
const Offer = (props) => {
  return (
    <div className="offer">
      <div className="offerbox">
        <img src={props.image} alt=""/>
        <span className="offer_heading">{props.heading}</span>
      </div>
      <span>NO CODE REQUIRED | ABOVE  <FaIndianRupeeSign /> {props.price}</span>
    </div>
  )
}

export default Offer
