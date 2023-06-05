import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";
import styled from "styled-components";


const ContentContainer = styled.div`
display: grid; 
justify-content: center; 
gap: 40px;
margin: 20px;
grid-template-columns: repeat(3, minmax(0, 1fr));
`

export function Home() {

    const [products, setProducts] = useState();

    useEffect( () => {
        fetch("https://api.noroff.dev/api/v1/online-shop/")
            .then(response => response.json())
            .then(parsed => setProducts(parsed));

    }, [])

    return (
        <Layout>
            <p class="welcome">Welcome paragraph</p>

            <ContentContainer>
                {products?.map(p => (<Product product={p} />))}
            </ContentContainer>
            
        </Layout>
       
    )
} 