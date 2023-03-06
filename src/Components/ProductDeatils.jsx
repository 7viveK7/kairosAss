import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ProductCard = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProductDeatils = async (index) => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      const productdetails = data.products.filter((each) => index == each.id);

      setProduct(productdetails[0]);
    };

    getProductDeatils(id);
  }, [id]);
  //   const {productData} = props

  //   const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <div>
      <img src={product.thumbnail} alt="product" className="thumbnail" />
      <p>{product.description}</p>
      <h1>{product.title}</h1>
      <p>by {product.brand}</p>
      <div>
        <p>Rs {product.price}/-</p>
        <div>
          <p>{product.rating}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
