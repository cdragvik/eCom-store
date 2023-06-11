import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { styled } from 'styled-components';

const LayoutContainer = styled.div`
  background-color: #f7f1e8;

`;


export default function Layout(props) {

    return (
      <>
        <Header shoppingCart={props.shoppingCart}></Header>
        <LayoutContainer>
            {props.children}   
        </LayoutContainer>
        <Footer></Footer>
      </>
    );
  }
