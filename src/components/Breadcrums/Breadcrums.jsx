import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../assets/breadcrum_arrow.png'
const Breadcrums = (props) => {
    const {product}=props;
    console.log(product);
  return (
    <div>
      <div className="breadcrums">
      HOME <img src={arrow_icon} alt=""/>SHOP <img src={arrow_icon} alt=""/>{product.category}<img src={arrow_icon} alt=""/>{product.name}
        </div>
    </div>
  )
}

export default Breadcrums
