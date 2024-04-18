import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="cardContainer">
        <div className="card_image">
        <Link to={`/dish/${props.id}`}><img className="cardImage" src={props.image} alt=""/></Link>
        <span>50% OFF</span>
        </div>
        <div className="card_name">
            <span className="card_heading" >Rawat Misthan Bhandar</span>
            <span className="card_rating">4.3@</span>
        </div>
        <div className="card_name">
            <span className="card_heading">Mithai North indian south</span>
            <span className="card_heading">100 for one</span>
        </div>
        <div className="flex-end">
            23 min
        </div>
        <hr/>
        <div className="safe_cnt">
            <div className="safe">
                <span className="golden">SAFE</span>
                <span>DELIVERY</span>
            </div>
            <span className="card_heading">Restaurant partner follows WHO protocol</span>
        </div>
    </div>
  )
}

export default Card
