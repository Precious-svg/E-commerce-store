import React from 'react'
import {useState} from "react";
import { useCart } from './CartProvider';


const NumberOfEachProductToAddToCart = ({ product }) => {

    const [addToQuantity, setQuantity] = useState(0)

    const {addToCart} = useCart()
    

    const handleAddToCart = () =>{
      if (addToQuantity > 0){
        addToCart({...product, quantity: addToQuantity})
      } else{
        alert("Please add one item!")
      }
     
    };

  return (
 <div className="flex justify-start items-center gap-2">
    <div className="w-[130px] h-[35px] flex justify-between items-center bg-slate-200 text-center px-4 py-4 mr-2.5 rounded-md">
      <button onClick={() => {if(addToQuantity >= 1){setQuantity(addToQuantity - 1)}}} className="inline-block">
        <img src="/images/icon-minus.svg" alt="minus icon" />
      </button>
      <span className="inline-block align-middle px-6">{addToQuantity}</span>
      <button  onClick={() => setQuantity(addToQuantity + 1)} className="inline-block">
        <img src="/images/icon-plus.svg" alt="plus icon" />
      </button>
    </div>
    <div className="w-[240px] h-[35px] mr-2 bg-amber-700 rounded-md">
      <button onClick={handleAddToCart} className="mx-auto flex items-center align-middle text-center h-full gap-2">
        <img src="/images/icon-cart.svg" alt="cart icon"></img>
        <p>Add to cart</p>
      </button>
    </div>
  </div>
  )
}

export default  NumberOfEachProductToAddToCart