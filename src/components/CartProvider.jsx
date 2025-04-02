import React from 'react'
import { createContext, useState, useContext} from "react"

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id)
        if(isItemInCart){
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity + product.quantity} : cartItem
                )
            )
        }  else{
            setCartItems([...cartItems, {...product, quantity: product.quantity}])
        }  
    };

    const removeFromCart = (product) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id)
        if(isItemInCart){
            if(isItemInCart.quantity === 1){
                setCartItems(cartItems.filter(cartItem => cartItem.id !== product.id))
            } else{
                setCartItems(
                    cartItems.map((cartItem) => cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
                )}
         
        }
    } 

    const clearCart = () => {
        setCartItems([])
    }

    const getCartTotalCost = () =>{
       return cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0 )
        
    }

    const getCartTotalNumOfProduct = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    }
    const getTotalNumofEachProductAdded = (product) => {
      const foundProduct = cartItems.find((cartItem) => (cartItem.id === product.id))
      return foundProduct ? foundProduct.quantity : 0
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotalCost, getCartTotalNumOfProduct,getTotalNumofEachProductAdded }}>
          {children}
        </CartContext.Provider>
      );
}

export const useCart = () => {
    return useContext(CartContext);
  };

export default CartProvider