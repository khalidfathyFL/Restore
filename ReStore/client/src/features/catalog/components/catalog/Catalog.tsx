import { Product } from "../../../../app/models/product";
import ProductList from "./Productlist";
import { useState, useEffect } from "react";




// you can path props and do it of type any  products: Product[]  props : any
export default function Catalog() {
  // Declaring the products state with an initial value of an empty array (Product[] is the type)
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect hook to fetch product data from an API once when the component mounts
  useEffect(() => {
    // Fetching data from a local API endpoint
    fetch('http://localhost:5000/api/products')
      .then(response => response.json()) // Converting the API response to JSON format
      .then(data => setProducts(data)) // Setting the products state with the fetched data
  }, []); // Empty dependency array ensures this useEffect only runs once, on component mount

  return (


    <>
     
      <ProductList products={products} />
      {/* Button to add a new product by calling addProduct when clicked */}
    
    </>
  );
}


