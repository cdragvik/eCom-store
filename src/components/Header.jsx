import { styled } from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Logo from "../assets/onestopshop.png";
import {CartIcon} from "./CartIcon";

const NavBar = styled.nav `
    background-color: #213555;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #4F709C;
  }
`

const StyledList = styled.ul`
    display: flex;
    gap: 4vh;
    padding: 4vh;
    font-size: 20px;
`


export default function Header() {
    return (

    <NavBar>
        
        <img src={Logo} alt="logo"/>  

        <StyledList>
           <StyledLink to="/">Home</StyledLink> 
           <StyledLink to="/contact">Contact</StyledLink>
           <CartIcon></CartIcon>
        </StyledList>

        
        
    </NavBar>)
}