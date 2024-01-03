import React, { KeyboardEvent } from "react";
import { RateProps } from './Rate.props';
import styles from './Rate.module.css';
import { RatingStar } from "./RatingStar";

export const Rate = (props: RateProps): JSX.Element => {
    const {
        isEditable = false,
        rating,
        stars = 5,
        filled,
        handleRatingChange,
        handleFilledChange,
        ...rest
    } = props;

    const onRatingChange = (newRating: number) => {
        isEditable && handleRatingChange?.(newRating);
    };

    const onFilledChange = (newFilled: number) => {
        isEditable && handleFilledChange?.(newFilled);
    };

    const onKeyDown = (i: number) => (e: KeyboardEvent<HTMLSpanElement>) => {
        if (e.code === 'Space') {
            onRatingChange(i + 1);
            onFilledChange(i + 1);
        }
    };

    return (
        <div className={styles.rate} {...rest}>
            {Array.from({ length: stars }, (_, i: number) => (
                <RatingStar
                    className={styles.item}
                    key={i}
                    filled={i < filled}
                    editable={isEditable}
                    onMouseEnter={() => onFilledChange(i + 1)}
                    onMouseLeave={() => onFilledChange(rating)}
                    onClick={() => onRatingChange(i + 1)}
                    onKeyDown={onKeyDown(i)}
                />
            ))}
        </div>
    );
};
