import styled from "styled-components";

function Cursor() {

    //shamelessly inspired by the amazing https://reh.at/
    return (
        <CursorEl id="cursor"/>
    )

}

const CursorEl = styled.div`
    position: fixed;
    top: -20px;
    left: -20px;
    pointer-events: none;
    cursor: none!important;
    width: 40px;
    height: 40px;
    background-color: white;
    mix-blend-mode: difference;
    border-radius: 50%;
    transition: height .25s,width .25s,top .25s,left .25s;
    transition-timing-function: cubic-bezier(.68,-.55,.27,1.55);

    @media (max-width: ${props => props.theme.phoneDown}) {

        & {
            display: none;
        }

    }
`

export {Cursor}