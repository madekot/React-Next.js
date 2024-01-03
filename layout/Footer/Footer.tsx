import { FooterProps } from './Footer.props';
import s from './footer.module.css';
import cn from 'classnames';

export const Footer = ({ className,...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, s.footer)} {...props}>
            <div>
                OwlTop © 2020 - 2016 Все права защищены
            </div>
            <a href="#" target="_blank">Пользовательское соглашение</a>
            <a href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
};
