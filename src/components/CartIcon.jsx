import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components"; 
import React from "react";

const CartIconContainer = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    color: #fff;
`

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    cursor: default;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export function CartIcon ({shoppingCart}) {
    return (
        <Link to="/checkout">
        <CartIconContainer>
            <FaShoppingCart/>
            <Overlay>
                <p>{shoppingCart?.length || 0 }</p>
            </Overlay>
        </CartIconContainer>
        </Link>
    )
}