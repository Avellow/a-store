import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
}
