import React,{useState} from 'react'
import all_product from '../assets/all_product'
import './Variety.css';
import Carousel from 'react-elastic-carousel';

const Variety = () => { 

    const breakPoints = [
        {width:1,itemsToShow:2},
        {width:550,itemsToShow:4},
        {width:768,itemsToShow:6},
        {width:1200,itemsToShow:4},
    ]

  return (
    <div className="variety">
      <span>Inspiration for your first order</span>

      <div className="new_varity">
        <Carousel breakPoints={breakPoints}
        >
            {
            all_product.map((item,i)=>{
            return (<div key={i} className="variety_box">
                <img className="variety_img" src={item.image} alt=""/>
                <span className="varity_name">{item.name}</span>
            </div>)
            })}
        </Carousel>
      </div>
    </div>
  )
}

export default Variety
