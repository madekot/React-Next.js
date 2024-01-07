import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ButtonIcon, Icon } from "@/components";
import { motion } from 'framer-motion';
import { variants } from "./animation";
import { Sidebar } from "../Sidebar";

export const Header = ({className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);


    return (
        <header className={cn(className, styles.header)} {...props}>
            <Icon.Logo />
            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />
            </motion.div>
        </header>
    );
};
