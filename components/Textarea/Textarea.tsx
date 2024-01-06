import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    const { className, ...rest } = props;

    return (
        <textarea
            className={cn(className, styles.input)}
            ref={ref}
            {...rest}
        />
    );
});
