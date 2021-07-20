import p5 from "p5"; 
import {ReactElement} from "react";
import type { CSSProperties } from "react";

export type ThreeFragShaderProps = {
    shader: {
        fragmentShader: string,
        shaderLink: string,
        texture?: string
    },
    isVisible?: boolean;
};

export type AnchorProps = {
    href: string;
    children: JSX.Element | string;
    style: CSSProperties;
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
    title: string, 
    date: string, 
    renderEl: JSX.Element,
    shaderLink: string
};

export type HeaderProps = {
    variant: "white"|"black",
    style?: CSSProperties
};

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

    company: string;
    title: string;
    date: string;
    location: string;
    children: JSX.Element;
    shader: ReactElement<ThreeFragShaderProps | P5RendererProps>;
    shaderLink: string

}

export interface AnimationWrapperProps {
    children?: JSX.Element | JSX.Element[];
}