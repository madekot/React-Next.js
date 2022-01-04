import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

export const Paragraph = ({ size = 'medium', children, className, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.small] : size === 'small',
        [styles.medium] : size === 'medium',
        [styles.big] : size === 'big',
      })}
      { ...props }
    >
      {children}
    </p>
  );
};