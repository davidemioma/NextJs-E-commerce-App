import React from "react";
import classes from "./ProductLayout.module.css";

const ProductLayout = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};

export default ProductLayout;
