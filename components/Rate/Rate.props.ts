import { DetailedHTMLProps, HTMLAttributes } from "react";

type HTMLProps = Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">;

export interface RateProps extends HTMLProps {
    stars?: number;
    filled: number;
    isEditable?: boolean;
    rating: number;
    handleRatingChange?: (rating: number) => void;
    handleFilledChange?: (newFilled: number) => void;
}
