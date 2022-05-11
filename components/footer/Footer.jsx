import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <p>2022 JSM Headphones All Rights Reserved.</p>

      <div className={classes.icons}>
        <AiFillInstagram />

        <AiOutlineTwitter />
      </div>
    </footer>
  );
};

export default Footer;
