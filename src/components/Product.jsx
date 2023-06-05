import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Card = styled.div`
    background: white;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    gap: 10px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
`;

const StyledImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 10px;  
`;
const ImageContainer = styled.div`
    flex: 1;
`;

const ProductTitle = styled.h2`
    margin-top: 0;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const OriginalPrice = styled.p`
    text-decoration: line-through;
    color: gray;
    margin-bottom: 5px;
`;

const DiscountedPrice = styled.p`
    font-weight: bold;
`;


export default function Product(props) {
  const product = props.product;
  const { price, discountedPrice } = product;
  const hasDiscount = discountedPrice < price;

  return (
    <StyledLink to={`product/${product.id}`}>
      <Card>
        <ProductTitle>{product.title}</ProductTitle>

        <ImageContainer>
          <StyledImage src={product.imageUrl} />
        </ImageContainer>

        <PriceContainer>
          {hasDiscount ? (
            <div>
              <OriginalPrice>NOK {price}</OriginalPrice>
              <DiscountedPrice>NOK {discountedPrice}</DiscountedPrice>
            </div>
          ) : (
            <DiscountedPrice>NOK {price}</DiscountedPrice>
          )}
        </PriceContainer>
      </Card>
    </StyledLink>
  );
}
