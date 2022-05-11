import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Nav />

      <main className={classes.main_container}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
