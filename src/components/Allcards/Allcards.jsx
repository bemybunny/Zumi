import React from 'react'
import new_collections from '../assets/new_collections'
import Card from '../card/Card'
import './Allcards.css'
const Allcards = () => {
  
    return (
        <div className="allcard_container">
        <div className="grid-container">
          {new_collections.map((item, i) => (
            <Card key={i} id={item.id} image={item.image} />
          ))}
        </div>
        </div>
      );
}

export default Allcards
