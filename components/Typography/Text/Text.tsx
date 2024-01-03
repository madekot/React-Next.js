import { TextProps } from './TextProps';
import stiles from './Text.module.css';
import cn from 'classnames';

export const Text = ({ children, className, ...rest }: TextProps): JSX.Element => {
    return <span className={cn(stiles.el, className)} {...rest}>{children}</span>;
};
