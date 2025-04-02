import React from "react";
import { useState, useEffect} from "react";
import Singleproduct from "./Singleproduct";
import Spinner from "./Spinner"


const ProductDetails = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const res = await fetch('http://localhost:8000/products')
        const dataObj = await res.json();
        setProducts(dataObj)
      } 
      catch(error){
        console.error("Error fetching data", error)
      } finally{
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])
  return (
    <div>
      {loading ? (<Spinner loading={loading}/>) : (
         <div>
         {products.map((product) => (
           <Singleproduct key={product.id} product={product}/>
         ))}
       </div>
      )}
    </div>
   
  );
};

export default ProductDetails;
