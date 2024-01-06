import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef((props: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const {
        color = 'white',
        children,
        className,
        ...rest
    } = props;

    return (
        <div
            className={cn(styles.card, className, {
                [styles.blue]: color == 'blue'
            })}
            ref={ref}
            {...rest}
        >
            {children}
        </div>
    );
});
