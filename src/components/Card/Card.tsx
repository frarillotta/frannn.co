import { device } from "@/utils"
import React from "react"
import styled from "styled-components"



export const Card = ({ children }: { children: React.ReactNode }) => {

    return <CardWrapper>
        {children}

    </CardWrapper>

}

const CardWrapper = styled.div`

    @media ${device.tablet} {
        min-width: 650px;
    }

    @media ${device.mobile} {
        min-width: 450px;
    }
    min-width: 200px;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 8px;
    display: grid;
    padding: 8px;
    border-bottom: solid 1px #d0d0d0;
`

Card.PresentationImage = styled.div`
    width: 100%;
    height: 100%;
    grid-area: 1/1/5/1;

    aspect-ratio: revert;
    @media ${device.tablet} {
        aspect-ratio: 1 / 1;
    }
    @media ${device.tablet} {
        aspect-ratio: revert;
    }
`

Card.Title = styled.h1`
    grid-area: 1/2/1/5;
`

Card.AdditionalTitle = styled.h4`

    grid-area: 1/4/2/5;
    justify-self: end;
    align-self: end;

`

Card.Subtitle = styled.h3`
    grid-area: 2/2/3/3;
`;

Card.AdditionalSubtitle = styled.h4`

    grid-area: 2/3/3/5;
    justify-self: end;

`

Card.Description = styled.p`

    grid-area: 3/2/5/5;
    align-self: end;

`
