import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const {
        className,
        ...rest
    } = props;

    return (
        <input className={cn(className, styles.input)} ref={ref} {...rest} />
    );
});
