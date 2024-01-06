import { ForwardedRef, forwardRef, KeyboardEvent, useState } from "react";
import { RateProps } from './Rate.props';
import styles from './Rate.module.css';
import { RatingStar } from "./RatingStar";

export const Rate = forwardRef((props: RateProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const {
        isEditable = false,
        rating,
        stars = 5,
        handleRatingChange,
        ...rest
    } = props;

    const [filled, setFilled] = useState<number>(rating);

    const onRatingChange = (newRating: number) => {
        isEditable && handleRatingChange?.(newRating);
    };

    const onFilledChange = (newFilled: number) => {
        isEditable && setFilled(newFilled);
    };

    const onKeyDown = (i: number) => (e: KeyboardEvent<HTMLSpanElement>) => {
        if (e.code === 'Space') {
            onRatingChange(i + 1);
            onFilledChange(i + 1);
        }
    };

    return (
        <div className={styles.rate} ref={ref} {...rest}>
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
});
