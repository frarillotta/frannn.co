import {HeaderLink} from "../HeaderLink/HeaderLink";
import {HeaderProps} from "../../types";
import styled from "styled-components";
import { memo } from "react";

let Header = ({variant = "black"}: HeaderProps) => {

    return (
    
        <HeaderWrapper style={{"--color": `${variant}`}}>
            <li>
                <HeaderLink text={"Home"} href={"/"}/>
            </li>
            <li>
                <HeaderLink text={"About"} href={"/about"}/>
            </li>
            <li>
                <HeaderLink text={"Work"} href={"/work"}/>
            </li>
        </HeaderWrapper>
    )
}
Header = memo(Header);

const HeaderWrapper = styled.ul`
    display: flex;
    gap: 3rem;
    align-items: center;
    padding: 3rem;
    padding-top: calc(3rem + 4px);
    color: var(--color);
    justify-content: space-around;

    @media (max-width: ${props => props.theme.phoneDown}) {
        flex-direction: column;
    }
`

export {Header}