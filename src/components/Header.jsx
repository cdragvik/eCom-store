import { styled } from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




const NavBar = styled.nav `
    background-color: #213555;
    height: 100px;
    display: flex;
    flex-direction: row;

`

const StyledList = styled.ul`
list-style: none;
color: #fff;    
`


export default function Header() {
    return (
    <NavBar>
        
        <Link to="/">ONE STOP SHOP</Link>   

        <StyledList>
           <Link to="/">Home</Link> 
           <Link to="/contact">Contact</Link>
        </StyledList>
        
    </NavBar>)
}