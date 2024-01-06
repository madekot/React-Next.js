import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type HTMLProps = Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">;

export interface RateProps extends HTMLProps {
    stars?: number;
    isEditable?: boolean;
    rating: number;
    error?: FieldError;
    handleRatingChange?: (rating: number) => void;
}
