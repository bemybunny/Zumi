import React, { useContext } from 'react';
import new_collections from '../assets/new_collections';
import Card from '../card/Card';
import './Allcards.css';
import { ShopContext } from '../../Context/ShopContext';

const Allcards = () => {
    const { filteredCollections } = useContext(ShopContext);

    return (
        <div className="allcard_container">
            <div className="grid-container">
                {filteredCollections.length !== 0 ? (
                    filteredCollections.map((item, i) => (
                        <Card key={i} id={item.id} image={item.image} />
                    ))
                ) : (
                    new_collections.map((item, i) => (
                        <Card key={i} id={item.id} image={item.image} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Allcards;
