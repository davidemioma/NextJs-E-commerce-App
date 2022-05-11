import React from "react";
import Link from "next/link";
import classes from "./HeroBanner.module.css";

const HeroBanner = ({
  smallText,
  midText,
  largeText,
  btnText,
  product,
  desc,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p>{smallText}</p>

        <h3>{midText}</h3>

        <h1>{largeText}</h1>

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{btnText}</button>
          </Link>

          <div className={classes.desc}>
            <h5>Description</h5>

            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
