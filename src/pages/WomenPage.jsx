import React from 'react'
import { useState, useEffect} from "react";
import Singleproduct from '../components/Singleproduct'
import Spinner from "../components/Spinner"

const WomenPage = () => {
    
    const [womenProducts, setWomenProducts] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
      const fetchWomenProducts = async () => {
        try{
          const res = await fetch ('http://localhost:8000/products')
          const data = await res.json()
          const womenOnly = data.filter(product => product.section.includes("women"));

          setWomenProducts(womenOnly);
        }catch(error){
          console.error(error, "Error fetching women product data")
        }finally{
          setLoading(false)
        };
      }
      fetchWomenProducts();
    }, [])
  return (
    <div>
      {loading ? (<Spinner loading={loading}/>) : (<div>
        {womenProducts.map((product) => (
          <Singleproduct key={product.id} product={product}/>
        ))}
      </div>)}
    </div>
  )
}

export default WomenPage