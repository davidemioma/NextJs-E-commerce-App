import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../store/store";
import Cart from "../cart/Cart";
import classes from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <div>
      <nav className={classes.container}>
        <p className={classes.logo}>
          <Link href="/">JSM Headphones</Link>
        </p>

        <button
          className={classes.cart_icon}
          type="button"
          onClick={() => dispatch(openCart())}
        >
          <AiOutlineShopping />

          <span className={classes.cart_item_qty}>{cart.length}</span>
        </button>
      </nav>

      {showCart && <Cart />}
    </div>
  );
};

export default Nav;
