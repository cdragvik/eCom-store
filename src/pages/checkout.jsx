import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { CartButton } from "./ProductPage";
import { StyledImage } from "../components/Product";
import { ContentContainer } from "./Home";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CartCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const ItemImage = styled(StyledImage)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemTitle = styled.h3`
  margin-top: 0;
`;

const ItemPrice = styled.p`
  margin-bottom: 0;
`;

const TotalContainer = styled.div`
  text-align: right;
  padding: 20px;
`;

const TotalHeading = styled.h2`
  margin-top: 0;
`;

const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
`;

function Item({ item }) {
  return (
    <CartCard>
      <ItemImage src={item?.imageUrl} alt="Product image" />
      <ItemInfo>
        <ItemTitle>{item?.title ?? "missing title"}</ItemTitle>
        {item?.discountedPrice ? (
          <>
            <ItemPrice>Discounted price: NOK {item?.discountedPrice}</ItemPrice>
            <ItemPrice>Original Price: NOK {item?.price}</ItemPrice>
          </>
        ) : (
          <ItemPrice>Price: NOK {item?.price ?? "Free"}</ItemPrice>
        )}
      </ItemInfo>
    </CartCard>
  );
}

function sum(items) {
  return items.reduce(function (a, b) {
    return a + (b?.discountedPrice ?? b?.price ?? 0);
  }, 0);
}

export function Checkout({ shoppingCart }) {
  const totalPrice = sum(shoppingCart);

  return (
    <Layout shoppingCart={shoppingCart}>
      <CheckoutContainer>
        <CartContent>
          <h1>Item(s) in cart:</h1>
          {shoppingCart?.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </CartContent>
        <TotalContainer>
          <TotalHeading>Total price:</TotalHeading>
          <TotalPrice>NOK {totalPrice}</TotalPrice>
          <Link to={"/checkout/success"}>
            <CartButton>Checkout</CartButton>
          </Link>
        </TotalContainer>
      </CheckoutContainer>
    </Layout>
  );
}
