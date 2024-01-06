import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    const { className, error, ...rest } = props;

    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                    [styles.error]: error
                })}
                ref={ref} {...rest}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
