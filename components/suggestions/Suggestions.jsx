import React from "react";
import { urlFor } from "../../utils/client";
import ProductItem from "../product-item/ProductItem";
import classes from "./Suggestions.module.css";

const Suggestions = ({ products }) => {
  return (
    <div className={classes.container}>
      <h2>You may also like</h2>

      <div className={classes.marquee}>
        <div className={`${classes.products} ${classes.track}`}>
          {products.map((item) => (
            <ProductItem key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
