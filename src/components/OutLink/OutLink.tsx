import { styled } from "styled-components"


export const OutLink = ({ children, href }: { children: React.ReactNode, href: string }) => <Link href={href} target="_blank">
    {children}
    <OutLinkSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></OutLinkSvg>
</Link>


export const OutLinkSvg = styled.svg`

    height: 20px;
    width: 20px;
    transition: transform .5s ease-in;
    transform: translateX(0px) translateY(2px);
`

const Link = styled.a`

    display: inline;
    cursor: pointer;
    &:hover > ${OutLinkSvg} {
        transition: transform .25s ease-out;
        transform: translateX(2px) translateY(-2px);
    }

`
