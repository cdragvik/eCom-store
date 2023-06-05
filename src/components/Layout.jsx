import Footer from "./Footer";
import Header from "./Header";
import React from "react";




export default function Layout(props) {

    return (
      <>
        <Header />
        {props.children}
        <Footer></Footer>
      </>
    );
  }
