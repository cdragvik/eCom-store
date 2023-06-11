import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import styled from "styled-components";
import { CartButton } from "./ProductPage";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const SuccessHeading = styled.h1`
  text-align: center;
`;

const SuccessMessage = styled.p`
  text-align: center;
`;



export function CheckoutSuccessPage({ shoppingCart, setShoppingCart }) {
  useEffect(() => {
    setShoppingCart([]);
  }, [setShoppingCart]);

  return (
    <Layout shoppingCart={shoppingCart}>
      <SuccessContainer>
        <SuccessHeading>Success!</SuccessHeading>
        <SuccessMessage>Your order has been placed.</SuccessMessage>

        <Link to={"/"}>
          <CartButton>Back to home</CartButton>
        </Link>
      </SuccessContainer>
    </Layout>
  );
}
