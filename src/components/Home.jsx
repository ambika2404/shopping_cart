import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import styles from "./styles.css";
import Filters from "./Filters";

export default function Home() {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}
