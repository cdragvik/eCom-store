import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../assets/onestopshop.png";
import { CartIcon } from "./CartIcon";

const NavBar = styled.nav`
  background-color: #5b7053;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #a2c296;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;
  margin-right: 10px;
`;

const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Header() {
  return (
    <NavBar>
      <LogoContainer>
        <StyledLogoLink to="/">
          <LogoImage src={Logo} alt="Logo" />
        </StyledLogoLink>
      </LogoContainer>

      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
        <li>
          <CartIcon />
        </li>
      </StyledList>
    </NavBar>
  );
}
