'use client'

import Link from 'next/link';
import { styled } from 'styled-components';

export default function ShaderPagesLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <Main>
            <Back href={"/"}>
                Back to homepage
            </Back>
            <CanvasWrapper>
                <CanvasContainer>
                    {children}

                </CanvasContainer>
            </CanvasWrapper>
        </Main>

    )
}

const Back = styled(Link)`
    position: absolute;
    top: 12px;
    left: 12px;
    text-decoration: underline;
`

const Main = styled.main`
    height: 100%;
    display: grid;
`;

const CanvasWrapper = styled.div`

    border: 2px solid black;
    margin: auto;
    width: min(50vh, 50vw);
    position: relative;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

`

const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`
