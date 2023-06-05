import { Link } from "react-router-dom";
import styled from "styled-components"



const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const Card = styled.div`
    background: white;
    border-radius: 10px;
    display: grid;
    text-align: center;
    padding: 20px;
    gap: 10px;


    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    }
`

const StyledImage = styled.img`
object-fit: cover;
height: 100%;
width: 100%; 
`
const ImageContainer = styled.div``

export default function Product (props) {

    const product = props.product;
    return (
        <StyledLink to={`/product/${product.id}`}>
        <Card>
            
            <h2>{product.title}</h2>
            <ImageContainer>
                <StyledImage src={product.imageUrl} height="100" width={150}   />
            </ImageContainer>
            <p>{product.description}</p>
            {product.price}<br/>
            
        </Card>
        </StyledLink>
    )
}