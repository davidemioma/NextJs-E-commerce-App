import React from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { totalAmount } from "../../store/cart-slice";
import {
  addToCart,
  removeFromCart,
  closeCart,
  deleteCartitem,
} from "../../store/store";
import { urlFor } from "../../utils/client";
import Link from "next/link";
import axios from "axios";
import getStripe from "../../utils/getStripe";
import classes from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const total = useSelector(totalAmount);

  const createCheckoutSession = async () => {
    const stripe = await getStripe();

    const checkoutSession = await axios.post("/api/stripe", {
      items: cart,
    });

    toast.loading("Redirecting...");

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <button
          className={classes.cart_heading}
          type="button"
          onClick={() => dispatch(closeCart())}
        >
          <AiOutlineLeft />

          <span className={classes.heading}>Your Cart</span>

          <span className={classes.num_items}>({cart.length} Items)</span>
        </button>

        {cart.length < 1 && (
          <div className={classes.empty_cart}>
            <AiOutlineShopping size={150} />

            <h3>Your shopping cart is empty</h3>

            <Link href="/">
              <button
                className={classes.btn}
                type="button"
                onClick={() => dispatch(closeCart())}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className={classes.products}>
          {cart?.map((item) => (
            <div className={classes.product} key={item.id}>
              <img
                className={classes.product_img}
                src={item.image && urlFor(item?.image[0])}
                alt=""
              />

              <div className={classes.item_desc}>
                <div className={classes.top}>
                  <h5>{item.name}</h5>
                  <h4>${item.price * item.qty}</h4>
                </div>

                <div className={classes.bottom}>
                  <div className={classes.quantity_desc}>
                    <span
                      className={classes.minus}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <AiOutlineMinus />
                    </span>

                    <span className={classes.num}>{item.qty}</span>

                    <span
                      className={classes.plus}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>

                  <button
                    className={classes.remove_item}
                    type="button"
                    onClick={() => dispatch(deleteCartitem(item.id))}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length >= 1 && (
          <div className={classes.cart_btm}>
            <div className={classes.total}>
              <h3>Subtotal:</h3>

              <h3>${total}</h3>
            </div>

            <div className={classes.btn_container}>
              <button
                className={classes.btn}
                type="button"
                onClick={createCheckoutSession}
              >
                Pay with stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
