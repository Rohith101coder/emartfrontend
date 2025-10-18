import React from 'react'
import { useCart } from './context/CartContext'
import NavBar from './components/NavBar'
const UserCart = () => {

    const{cartItems,removeFromCart}=useCart()
  return (
    <>
    <NavBar/>
    <div>
      {cartItems.map((item,index)=>{
        return(
            <div className='cart-section' key={index}>
                <div className="cart-img">
                    <img src={item.image} alt=""/>
                </div>
                <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h3>{item.price}</h3>
                    <h3>{item.model}</h3>
                </div>
                <button onClick={()=>removeFromCart(item)}>Remove from cart</button>

            </div>
        )
      })}
    </div>
    
    </>
    
  )
}

export default UserCart
