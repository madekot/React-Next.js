import cn from 'classnames';
import styles from './RatingStar.module.css';
import StarIcon from './star.svg';
import { RatingStarProps } from "./RatingStar.props";

export const RatingStar = (props: RatingStarProps): JSX.Element => {
    const {
        filled,
        editable,
        className,
        onMouseEnter,
        onMouseLeave,
        onClick,
        onKeyDown,
        ...rest
    } = props;

    return (
        <div
            className={cn(
                styles.star,
                className,
                {
                    [styles.filled]: filled,
                    [styles.editable]: editable,
                })}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            tabIndex={editable ? 0 : -1}
            onKeyDown={onKeyDown}
            {...rest}
        >
            <StarIcon className={styles.icon} />
        </div>
    );
};
