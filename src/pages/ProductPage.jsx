import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { FaStar } from "react-icons/fa";

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  object-fit: fill;
  height: 300px;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding: 10px 0px;
`;

const Description = styled.p`
  margin-bottom: 10px;
  padding: 10px 0px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OriginalPrice = styled.p`
  text-decoration: line-through;
  color: gray;
  margin-bottom: 5px;
`;

const DiscountedPrice = styled.p`
  font-weight: bold;
`;

const CartButton = styled.button`
  background: #ECB390;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 12px; 
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #f4d3be;
  }
`;

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ReviewContainer = styled.div`
  padding: 20px;

  width: 300px;
  background-color: #fff;
  border-radius: 10px;


  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ReviewUsername = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReviewRating = styled.p`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const StarIcon = styled(FaStar)`
  margin-right: 5px;
`;

const ReviewDescription = styled.p`
  margin-bottom: 0;
`;

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then((response) => response.json())
      .then((parsed) => setProduct(parsed));
  }, []);

  return (

    <Layout>
      <br></br>

      <ContentContainer>
        <StyledImage src={product?.imageUrl} alt="Product image" />
        <ProductInfoContainer>
          <Title>{product?.title}</Title>
          <Description>{product?.description}</Description>
          <PriceContainer>
            {product?.discountedPrice < product?.price ? (
              <>
                <OriginalPrice>NOK {product?.price}</OriginalPrice>
                <DiscountedPrice>NOK {product?.discountedPrice}</DiscountedPrice>
              </>
            ) : (
              <DiscountedPrice>NOK {product?.price}</DiscountedPrice>
            )}
          </PriceContainer>
          <CartButton onClick={() => addToCart(product)}>Add to cart</CartButton>
        </ProductInfoContainer>
      </ContentContainer>

      {product?.reviews.length > 0 && (
        <ReviewSection>
          <h2>Reviews</h2>
          {product?.reviews.map((review) => (
            <ReviewContainer key={review.id}>
              <ReviewUsername>{review.username}</ReviewUsername>
              <ReviewRating>
                <StarIcon />
                {review.rating}
              </ReviewRating>
              <ReviewDescription>{review.description}</ReviewDescription>
            </ReviewContainer>
          ))}
        </ReviewSection>

      )}
      <br></br>
    </Layout>
  );
}
