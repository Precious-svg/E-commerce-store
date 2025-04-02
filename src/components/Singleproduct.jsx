import React from 'react';
import { Link }from "react-router-dom";
import  NumberOfEachProductToAddToCart from './NumberOfEachProductToAddToCart';


const Singleproduct = ({ product }) => {
  return (
    <div className="flex flex-row justify-evenly w-full items-center h-[75%] mx-auto pt-2 py-6">
          <div className="productImages grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr]  h-full gap-6 w-[30%] pb-[60px]">
    
             <Link to={`/products/${product.id}`}   className="row-span-5  h-full w-full object-contain rounded-md ">
               <img
                  src={product.image1}
                  alt="picture of shoe"
                  width="100px" height="50px"
                  className="row-span-5  h-full w-full object-contain rounded-md "
               />
             </Link>
            
            <div className="row-span-1 flex justify-between w-full pl-4 pr-4">
              <img
                src={product.image1}
                alt={`view of ${product.name}`}
                className="image1 h-auto w-[19.5%] object-contain rounded-md hover:border-3 hover:opacity-40 hover:border-amber-900"
              />
              <img
               src={product.image2}
                alt={`view of ${product.name}`}
                className="image2 h-auto w-[19.5%] object-contain rounded-md hover:border-3 hover:opacity-40 hover:border-amber-900"
              />
              <img
                src={product.image3}
                alt={`view of ${product.name}`}
                className="image3 h-auto w-[19.5%] object-contain rounded-md hover:border-3 hover:opacity-40 hover:border-amber-900"
              />
              <img
                src={product.image4}
                alt={`view of ${product.name}`}
                className="image4 h-auto w-[19.5%] object-contain rounded-md hover:border-3 hover:opacity-40  hover:border-amber-900"
              />
            </div>
          </div>
          <article className=" flex flex-col justify-evenly items-start h-full  w-[33%] py-8 px-6 mb-14">
            <h4 className="name text-md py-8">{product.name}</h4>
            <h1 className="title font-bold text-4xl pb-2">{product.title}</h1>
            <p className="description text-sm">
             {product.description}
            </p>

            <p className="inline-block text-center py-2">
              <span className=" price text-2xl font-bold">${product.price}</span>
              <span className="bg-black text-white px-2 mx-4 text-sm align-middle">
                <span className="">50%</span>
              </span>
            </p>
            <span className="Previous-price line-through py-2">${product.previousprice}</span>
            < NumberOfEachProductToAddToCart product={product} numOfItemsToAddToCart={product.numOfItemsToAddToCart}/>
          </article>
        </div>
  )
}

export default Singleproduct