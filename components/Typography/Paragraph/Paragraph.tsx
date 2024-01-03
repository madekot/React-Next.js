import { ParagraphProps } from './ParagraphProps';
import stiles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ children, size, className, ...rest }: ParagraphProps): JSX.Element => {
    return <p className={cn(stiles.el, stiles[`size-${size}`], className)} {...rest}>{children}</p>;
};
