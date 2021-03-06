import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#' target={'black'} className={styles.userAgreement}>Пользовательское соглашение</a>
      <a href='#' target={'black'} className={styles.privacyPolicy}>Политика конфиденциальности</a>
    </footer>
  );
};