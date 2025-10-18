import React from 'react'
import { useParams } from 'react-router-dom'
import { kitchenData } from '../stores/data/kitchen'
import NavBar from '../stores/components/NavBar'
import { useCart } from '../stores/context/CartContext'

const KitchenSingles = () => {
    const {id}=useParams()
    const {addToCart}=useCart();
    const product=kitchenData.find((item)=>item.id === id);
  return (
    <>
    <NavBar/>
     <div className="ind-section">


<div className='ind-image'> 
    <img src={product.image} alt=""/>
</div>
<div className="ind-details   ">
    <div className="ind-company">
        <h2>{product.company}</h2>
    </div>

    <div className="ind-model  ">
    <h3>{product.model}</h3>
</div>
<div className="ind-price  ">
    <h3>{product.price}</h3>
</div>
<div className="ind-des  ">
    <p>{product.description}</p>
</div>
<button onClick={()=>addToCart(product)}>Add to Cart</button>
</div>

   </div>
    </>
  )
}

export default KitchenSingles
