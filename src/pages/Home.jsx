import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import styled from "styled-components";
import Product from "../components/Product";


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

export const ContentContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const SearchBar = styled.input`
  width: 400px;
  padding: 10px;
  margin: 30px auto;
  display: block;
  border: none;
  border-radius: 10px;
`;


export function Home({shoppingCart}) {
  const [products, setProducts] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop/")
      .then((response) => response.json())
      .then((parsed) => {
        setProducts(parsed);
        setFilteredProducts(parsed);
      });
  }, []);

  useEffect(() => {
    if (products) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Layout shoppingCart={shoppingCart}>
      <WelcomeContainer>
        <WelcomeParagraph>
          Your One-Stop Destination for All Your Shopping Needs!
        </WelcomeParagraph>
      </WelcomeContainer>

      <SearchBar
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      <ContentContainer>
        {filteredProducts.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </ContentContainer>
    </Layout>
  );
}
