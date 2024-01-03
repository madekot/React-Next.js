import { DetailedHTMLProps, HTMLAttributes } from "react";

type HTMLParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export interface ParagraphProps extends HTMLParagraphProps {
    size?: 's' | 'm' | 'l';
    children: React.ReactNode;
}
