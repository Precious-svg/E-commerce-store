import React from 'react';
import { NavLink } from "react-router-dom"
import { useCart } from "./CartProvider"
import "/src/index.css";


const Navbar = () => {
  const {getCartTotalNumOfProduct} = useCart(0)
  const LinkClass = ({ isActive}) => isActive ? "bg-amber-600 hover:bg-slate-600 hover:text-white rounded-md px-3 py-2" : "hover:bg-slate-600 hover:text-white rounded-md px-3 py-2"
  return (
    <div>
      <header>
          <nav className="grid grid-cols-6 px-[120px] gap-2 my-2 py-0.5">
             <div className='col-span-4 col-start-1 flex flex-row items-center justify-around gap-4'>
                 <h2 className="font-bold text-2xl">SNEAKERS</h2>
                 <NavLink to="/collections" className={LinkClass}>Collections</NavLink>
                 <NavLink to="/men" className={LinkClass}>Men</NavLink>
                 <NavLink to="/women"className={LinkClass}>Women</NavLink>
                 <NavLink to="/" className={LinkClass}>Home</NavLink>
                 <NavLink to="/contact" className={LinkClass}>Contact</NavLink>
              </div>
             
              <div className="col-span-1 col-start-6 flex flex-row items-center justify-around gap-4">
                  <NavLink to="/cart" className="relative">
                    <span className="absolute top-[-10px] right-[-12px] text-xs rounded-lg text-white bg-blue-700 px-2">{getCartTotalNumOfProduct()}</span>
                    <img src="/images/icon-cart.svg" alt="shopping basket image" className='w-20px h-20px' />
                 </NavLink>
                 <NavLink to="/profile">
                   <img src="/images/image-avatar.png" alt="profile picture"/>
                 </NavLink>
             </div>
         </nav>
      </header>
      <div className="lineBreaker border-1 w-[85%] border-gray-400 mx-auto mb-2"></div>
  </div>
  )
}

export default Navbar