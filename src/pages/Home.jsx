import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  background-image: url("src/assets/brickbackground.avif");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const WelcomeParagraph = styled.p`

  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 35px;
`;

const ContentContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop/")
      .then((response) => response.json())
      .then((parsed) => setProducts(parsed));
  }, []);

  return (
    <Layout>
      <WelcomeContainer>
        <WelcomeParagraph>
          Your One-Stop Destination for All Your Shopping Needs!
        </WelcomeParagraph>
      </WelcomeContainer>

      <ContentContainer>
        {products?.map((p) => (
          <Product product={p} />
        ))}
      </ContentContainer>
    </Layout>
  );
}
