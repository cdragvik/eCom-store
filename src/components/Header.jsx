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
    text-decoration: underline;
  }
`

const StyledList = styled.ul`
    display: flex;
    gap: 2vh;
    padding: 4vh;
`


export default function Header() {
    return (

    <NavBar>
        
        <img src={Logo}/>  

        <StyledList>
           <StyledLink to="/">Home</StyledLink> 
           <StyledLink to="/contact">Contact</StyledLink>
           <CartIcon></CartIcon>
        </StyledList>

        
        
    </NavBar>)
}