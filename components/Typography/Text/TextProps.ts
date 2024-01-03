import { DetailedHTMLProps, HTMLAttributes } from "react";

type HTMLParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export interface TextProps extends HTMLParagraphProps {
    children: React.ReactNode;
}
