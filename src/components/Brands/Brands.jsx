import React from 'react'
import new_brands from '../assets/new_brand';
import './Brands.css';
import Carousel from 'react-elastic-carousel';

const Brands = () => { 

  const breakPoints = [
    {width:1,itemsToShow:2},
    {width:550,itemsToShow:4},
    {width:768,itemsToShow:6},
    {width:1200,itemsToShow:4},
]

  return (
    <div className="Brands">
      <span>Top brands for you</span>

      <div className="new_Brands">
        <Carousel breakPoints={breakPoints}
        >
            {
            new_brands.map((item,i)=>{
            return (<div key={i} className="Brands_box">
                <img className="Brands_img" src={item.image} alt=""/>
                <span className="Brands_name">{item.name}</span>
            </div>)
            })}
        </Carousel>
      </div>
    </div>
  )
}

export default Brands