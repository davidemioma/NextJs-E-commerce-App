import React from "react";
import classes from "./Headings.module.css";

const Headings = ({ header, text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>{header}</h2>

        <p>{text}</p>
      </div>
    </div>
  );
};

export default Headings;
