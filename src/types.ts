import p5 from "p5"; 
import {ReactElement} from "react";
import type { ReactNode, CSSProperties } from "react";

export type ThreeFragShaderProps = {
    shader: {
        fragmentShader: string,
        texture?: string
    },
    isVisible?: boolean;
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
    title: JSX.Element, 
    date: string, 
    renderEl: JSX.Element,
};

export type HeaderProps = {variant: "white"|"black"};

export type TextCarouselProps = {
    terms: string[];
    color: string;
}

export type P5RendererProps =  {
    /** The p5 sketch function to be run. Must be written in p5's instance mode. */
    sketch: (p: typeof p5) => void;
    /** If true, the canvas will resize to window whenever the window is resized */
    autoResizeToWindow?: boolean;
}

export interface Roles {

    company: JSX.Element;
    title: string;
    date: string;
    location: string;
    children: JSX.Element;
    shader: ReactElement<ThreeFragShaderProps | P5RendererProps>;

}

export interface AnimationWrapperProps {
    children?: JSX.Element | JSX.Element[];
}