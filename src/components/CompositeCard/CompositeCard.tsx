import {CompositeCardProps} from "../../types";
import styled from 'styled-components';

const CompositeCard = ({children, subtitle, location, invert = false, title, date = "", renderEl = null}: CompositeCardProps) => {

    const flexDirection = invert ? "row-reverse" : "row"

    return (
        <SectionWrapper
            style={{
                '--flexDirection': flexDirection
            }} 
        >
            <ContentWrapper>
                <TitleWrapper>
                    <Title>
                        {title}
                    </Title>
                    <Subtitle>
                        {subtitle}
                    </Subtitle>
                    <Location>
                        {location}
                    </Location>
                    <Date>
                        {date}
                    </Date>
                </TitleWrapper>
                <ContentText>
                    {children}
                </ContentText>
            </ContentWrapper>
            <RenderElWrapper>
                <RenderEl>
                    {renderEl}
                </RenderEl>
            </RenderElWrapper>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
    display: flex;
    padding: 2rem;
    flex-wrap:wrap;
    flex-direction: var(--flex-direction);
    gap: 1rem;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 400px;
    gap: 2rem;
    min-height: 250px;
    padding: 1rem;
`

const TitleWrapper = styled.div`
    display: flex;
    font-size: 1rem;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
`

const Subtitle = styled.h2`
    font-style: italic;
`

const Location = styled.h2`
    font-style: italic;
    color: hsl(0deg 0% 43%);
`

const Date = styled.h2`
    font-size: 0.9rem;
    color: hsl(0deg 0% 43%);
`

const ContentText = styled.article`
    align-self: center;
    line-height: 1.5rem;
`

const RenderElWrapper = styled.aside`
    flex: 1 1 450px;
    align-self: center;
    padding: 1rem;
`

const RenderEl = styled.div`
    margin: auto;
    border-radius: 10%;
    overflow: hidden;
`

export { CompositeCard }