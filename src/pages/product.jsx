
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ContentContainer = styled.div`
display: grid; 
justify-content: center; 
gap: 40px;
margin: 20px;
text-align: center;
`
const StyledImage = styled.img`
object-fit: fill;
height: 200px;
`
const CartButton = styled.button`
  background: #008CBA; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 24px; /* Some padding */
  cursor: pointer; /* Mouse pointer on hover */
  display: block;
  margin: 20px auto;
  
  &:hover {
    background: #007B9A;
  }
`;

const ImageContainer = styled.div` height: 200px; overflow: hidden;`

const ReviewContainer = styled.div`text-align: left; background: green;`


export function ProductPage() {

    const {id} = useParams();
    const [product, setProduct] = useState();

    useEffect( () => {
        fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
            .then(response => response.json())
            .then(parsed => setProduct(parsed));

    }, [])

    return (
        <Layout>
            <ContentContainer>
            <h1>{product?.title}</h1>
            <ImageContainer>
                <StyledImage src={product?.imageUrl} alt="Product image"/>
            </ImageContainer>
            <p>{product?.description}</p>
            <p>Price: ${product?.discountedPrice}</p>
                {product?.discountedPrice < product?.price && 
                <p>
                Discount: ${product.price - product.discountedPrice} ({((1 - product.discountedPrice / product.price) * 100).toFixed(2)}%)
                </p>
                }
            <CartButton onClick={() => addToCart(product)}>Add to cart</CartButton>
                <h3>Reviews:</h3>
                {product?.reviews.map(r => (
                <ReviewContainer>
                <p>Username: {r.username}</p>
                <p>Rating: {r.rating} </p>
                <p>Description: {r.description}</p>
                </ReviewContainer>
                ))}
            </ContentContainer>
        </Layout>
    )

}