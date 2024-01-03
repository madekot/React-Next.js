import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from "classnames";

export const Tag = (props: TagProps): JSX.Element => {
    const {
        size = 's',
        children,
        color = 'ghost',
        href,
        className,
        ...rest
    } = props;


    const TagElement = href ? 'a' : 'div';

    return (
        <div
            className={
                cn(
                    styles.tag,
                    className,
                    styles[`size-${size}`],
                    styles[color]
                )
            }
            {...rest}
        >
            <TagElement href={href}>{children}</TagElement>
        </div>
    );
};
