import { styled } from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



const NavBar = styled.nav `
background-color: red;

`



export default function Header() {
    return (
    <NavBar>
        <Link to="/">Home</Link>

    </NavBar>)
}