import React, { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../../store/store";
import classes from "./ProductInfo.module.css";

const ProductInfo = ({ id, image, name, details, price }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id,
        image,
        name,
        details,
        qty: amount,
        price,
      })
    );
  };

  const handleBuyNow = () => {
    dispatch(
      addToCart({
        id,
        image,
        name,
        details,
        qty: amount,
        price,
      })
    );

    dispatch(openCart());
  };

  return (
    <div className={classes.description}>
      <h1>{name}</h1>

      <div className={classes.reviews}>
        <div>
          <AiFillStar />

          <AiFillStar />

          <AiFillStar />

          <AiFillStar />

          <AiOutlineStar />
        </div>

        <p>(20)</p>
      </div>

      <h4>Details:</h4>

      <p>{details}</p>

      <p className={classes.price}>${price * amount}</p>

      <div className={classes.quantity}>
        <h3>Quantity:</h3>

        <div className={classes.quantity_desc}>
          <span
            className={classes.minus}
            onClick={() => amount > 1 && setAmount((prev) => prev - 1)}
          >
            <AiOutlineMinus />
          </span>

          <span className={classes.num}>{amount}</span>

          <span
            className={classes.plus}
            onClick={() => amount >= 1 && setAmount((prev) => prev + 1)}
          >
            <AiOutlinePlus />
          </span>
        </div>
      </div>

      <div className={classes.btns}>
        <button
          className={classes.add_to_cart}
          type="button"
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>

        <button
          className={classes.buy_now}
          type="button"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
