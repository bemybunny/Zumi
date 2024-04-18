import React from 'react'
import delivery from '../assets/delivery.avif'
import dining_out from '../assets/dining_out.avif'
import './Delivery.css'
const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery_row">
        <div className="delivery_box">
            <img src={delivery} alt=""/>
            <span>Delivery</span>
        </div>
        <div className="delivery_box">
            <img src={dining_out} alt=""/>
            <span>Dining Out</span>
        </div>
      </div>
      <div className="deliverybtn">
        <button>Filters</button>
        <button>Rating: 4.0+</button>
        <button>Pure Veg</button>
        <button>Cuisines</button>
      </div>
    </div>
  )
}

export default Delivery
