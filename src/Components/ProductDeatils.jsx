import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ProductCard = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProductDeatils = async (index) => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data.images);
      setProduct(data);
    };

    getProductDeatils(id);
  }, [id]);
  //   const {productData} = props

  //   const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <div>
      <img src={product.thumbnail} alt="product" className="thumbnail" />
      <p>Description: {product.description}</p>
      <h1>{product.title}</h1>
      <p>by {product.brand}</p>
      <div>
        <p>Rs {product.price}/-</p>
        <div>
          <p>{" Rating : " + product.rating}</p>
        </div>
      </div>
      {product.images?.map((each) => (
        <img src={each} alt="product" className="similerImages" />
      ))}
    </div>
  );
};
export default ProductCard;
