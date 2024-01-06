import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const {
        className,
        error,
        ...rest
    } = props;

    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input
                className={cn(styles.input, {
                    [styles.error]: error
                })}
                ref={ref}
                {...rest}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
