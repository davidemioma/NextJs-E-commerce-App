import React, { useState } from "react";
import { urlFor } from "../../utils/client";
import classes from "./ProductImage.module.css";

const ProductImage = ({ image }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={classes.product_images}>
      <div className={classes.img_container}>
        <img src={urlFor(image && image[index])} alt="" />
      </div>

      <div className={classes.img_lists}>
        {image?.map((item, i) => (
          <div
            className={`${classes.img_item} ${index === i && classes.selected}`}
            onMouseEnter={() => setIndex(i)}
            key={i}
          >
            <img src={urlFor(item)} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
