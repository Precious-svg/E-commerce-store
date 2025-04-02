import React from 'react'
import { useState, useEffect} from "react";
import Singleproduct from '../components/Singleproduct'

const MenPage = ({isHome = false}) => {
    
    const [menProducts, setMenProducts] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
      const fetchMenProducts = async () => {
        try{
          const res = await fetch ('http://localhost:8000/products')
          const data = await res.json()
          const menOnly = data.filter(product => product.section.includes("men"));

          setMenProducts(menOnly);
        }catch(error){
          console.error(error, "Error fetching men product data")
        }finally{
          setLoading(false)
        };
      }
      fetchMenProducts();
    }, [])
  return (
    <div>
        {loading ? (<h2>Loading...</h2>) : (
            <div>
            {menProducts.map((product) => (
              <Singleproduct key={product.id} product={product}/>
            ))}
          </div>
        )} 
    </div>
    
  )
}

export default MenPage