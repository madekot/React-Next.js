import { DetailedHTMLProps, HTMLAttributes } from "react";

type HTMLProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface RatingStarProps extends HTMLProps {
    filled: boolean;
    editable?: boolean;
    onKeyDown?: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
}
