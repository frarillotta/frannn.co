import p5Types from "p5"; 
import {ReactElement} from "react";

export type ThreeFragShaderProps = {
    shader: {
        fragmentShader: string,
        texture?: string
    }
};

export type AnchorProps = {
    href: string;
    children: Element | string;
};

export type HeaderLinkProps = {
    href: string; 
    text: string
};

export type CompositeCardProps = {
    children: JSX.Element, 
    subtitle: string, 
    location: string,
    invert: Boolean, 
    title: ReactElement<AnchorProps>, 
    date: string, 
    renderEl: JSX.Element,
    expanded: boolean,
    setExpanded: Function,
    index: number,
};

export type HeaderProps = {variant: "white"|"black"};

export type TextCarouselProps = {
    terms: string[];
    color: string;
}

export type P5Props =  {
    setup: (p5: p5Types, canvasParentRef: Element) => void;
    draw: (p5: p5Types) => void;
    windowResized: (p5: p5Types) => void;
}

export interface Roles {

    company: ReactElement<AnchorProps>;
    title: string;
    date: string;
    location: string;
    children: JSX.Element;
    shader: ReactElement<ThreeFragShaderProps | P5Props>;

}

export interface AnimationWrapperProps {
    children?: JSX.Element | JSX.Element[];
}