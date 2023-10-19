import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
 
const Product = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((item) => {
        setProduct(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(product);
  return (
    <div>
      <div className="space-y-1 my-3">
        <div className="flex gap-2 items-center">
           
        
        </div>
        <h1 className="text-3xl font-semibold my-2">
          My Product </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product?.map((item, i) => (
          <ProductCard key={i} product={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
