import { DisplayFlex} from "@styles/reusable-style";
import styled from "styled-components";

export const Container = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
`

export const Navegation =  styled.ul `

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const ContainerLogo = styled(DisplayFlex) `
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`