import styles from './Sidebar.module.css';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import { Menu } from "../Menu";
import { Icon } from '@/components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Icon.Logo className={styles.logo}/>
            <div>поиск</div>
            <Menu />
        </div>
    );
};
