import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import './CSS/Dishes.css'
import TopPicks from '../components/TopPicks/TopPicks';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
const Dishes = () => {
  const {new_collections} = useContext(ShopContext);
  const {productId} = useParams();
  const product = new_collections.find((e)=>e.id===Number(productId))
  return (
    <div className="dishes">
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <TopPicks />
      <RelatedProducts />
    </div>
  )
}

export default Dishes
