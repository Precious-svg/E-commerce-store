import React from 'react'
import { useCart } from '../components/CartProvider';
import { Link } from "react-router-dom";

const CartPage = () => {

  const {cartItems, addToCart, removeFromCart, clearCart, getCartTotalCost, getCartTotalNumOfProduct, getTotalNumofEachProductAdded} = useCart()
  return (
    <div>
      <h1>Your Cart Is Empty!</h1>
      {cartItems.length === 0 ? (<p>Your cart is empty <Link to="/"><button>Go to shop</button></Link></p>) : (
    
        <div>
         <button onClick={() => clearCart()}>clear</button>
          {cartItems.map((product) => (
            <article key={product.id}>
              <img src={product.image1} width="100px" height="100px"></img>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>${getTotalNumofEachProductAdded(product) * product.price} </span>
                <div>
                  <button onClick={() => removeFromCart(product)}><img src="../../images/icon-delete.svg" alt="delete icon"/></button>
                   <span>{getTotalNumofEachProductAdded(product)}</span>
                   <button onClick={() => addToCart(product)}><img src="../../images/icon-plus.svg" alt="add icon"/></button>
                </div>
              </div>
            </article>
          ))}
          
        </div>
      )}
    </div>
  )
}

export default CartPage 