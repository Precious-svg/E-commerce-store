import React from 'react'
import {useState, useEffect} from "react"
import Singleproduct from '../components/Singleproduct'
import { useParams } from 'react-router-dom';
import Spinner from "../components/Spinner"


const EachProductPage = () => {
const {id} = useParams();
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

useEffect (() => {
    const fetchProduct = async () => {
        try{
           const res = await  fetch(`http://localhost:8000/products/${id}`)
           const data = await res.json();
           setProduct(data)
        }catch(error){
            console.error("Error fetching product id data", error)
        }finally{
            setLoading(false)
        }
    }
    fetchProduct();
}, [id])
  return (
    <div>
        {loading ? (<Spinner loading={loading}/>) : (
            <Singleproduct product={product}/>
        )}
    </div>
  )
}

export default EachProductPage