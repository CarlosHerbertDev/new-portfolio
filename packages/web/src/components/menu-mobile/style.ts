import { DisplayFlex } from "@styles/reusable-style";
import styled from "styled-components";

export const ConatinerHamburguer = styled.div `
    z-index: 2;
    width: 48px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px; 
`

export const MenuWrapper = styled.div<{ $isOpen: boolean}> `
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: lightgreen;
    color: #000;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${({$isOpen}) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
`

export const MenuList  = styled(DisplayFlex) `
    flex-direction: column;
    jestify-content: center;
    align-items: center;
    gap: 40px;
`