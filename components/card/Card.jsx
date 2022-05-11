import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { closeCart, clearCart } from "../../store/store";
import { runFireworks } from "../../utils/utils";
import classes from "./Card.module.css";

const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    runFireworks();

    dispatch(closeCart());

    dispatch(clearCart());
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.icon}>
          <BsBagCheckFill />
        </div>

        <h2>Thank you for your order!</h2>

        <p className={classes.email_msg}>
          Check your E-mail inbox for your reciept
        </p>

        <p className={classes.description}>
          If you have any questions, please email
          <a className={classes.email} href="mailto:order@example.c0m">
            order@example.c0m
          </a>
        </p>

        <Link href="/">
          <button className={classes.btn} type="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
