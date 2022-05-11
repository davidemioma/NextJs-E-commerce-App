import React from "react";
import { urlFor } from "../../utils/client";
import Link from "next/link";
import classes from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className={classes.item}>
          <img
            src={urlFor(product.image && product.image[0])}
            width={250}
            height={250}
            alt=""
          />

          <p className={classes.name}>{product.name}</p>

          <p className={classes.price}>${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
