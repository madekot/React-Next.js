import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ variant, children, className, arrow, ...rest }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, styles[variant])}
            {...rest}
        >
            {children}
            {arrow &&
              <span className={cn(styles.arrow, styles[arrow])}>
                <ArrowIcon />
              </span>
            }
        </button>
    );
};
