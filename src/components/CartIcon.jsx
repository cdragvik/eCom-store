import CartSvg from "../assets/cart.svg"
import styled from "styled-components"

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

export function CartIcon (props) {
    return (
        <CartIconContainer>
            <img src={CartSvg} alt="cart"/>
            <Overlay>
                {props.itemsInCart ?? 0}
            </Overlay>
        </CartIconContainer>

    )
}