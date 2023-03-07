import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProductDeatils = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);

      setProduct(data.products);
    };
    getProductDeatils();
  }, []);
  return (
    <div className="allProducts">
      {product.map((each) => {
        return (
          <div key={each.id} className="kairosD">
            <Link to={`/products/${each.id}`} className="link-item">
              <img alt="timer" src={each.thumbnail} className="product" />
            </Link>
            <div className="description">
              <h5>{each.title}</h5>
              <p>{"description : " + each.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
