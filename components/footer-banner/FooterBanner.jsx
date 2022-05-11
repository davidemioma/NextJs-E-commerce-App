import React from "react";
import Link from "next/link";
import classes from "./Fb.module.css";

const FooterBanner = ({
  discount,
  largeText1,
  largeText2,
  saleTime,
  smallText,
  midText,
  desc,
  btnText,
  image,
  product,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.banner_description}>
        <div className={classes.left}>
          <p>{discount}</p>

          <h3>{largeText1}</h3>

          <h3>{largeText2}</h3>

          <p>{saleTime}</p>
        </div>

        <div className={classes.right}>
          <p>{smallText}</p>

          <h3>{midText}</h3>

          <p>{desc}</p>

          <div className={classes.btn_container}>
            <Link href={`/product/${product}`}>
              <button type="button">{btnText}</button>
            </Link>
          </div>
        </div>
      </div>

      <img className={classes.banner_img} src={image} alt="" />
    </div>
  );
};

export default FooterBanner;
