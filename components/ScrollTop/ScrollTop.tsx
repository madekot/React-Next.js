import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from './ScrollTop.module.css';
import UpIcon from './up.svg';
import { useScrollY } from "./hooks/useScrollY";

export const ScrollTop = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <UpIcon />
        </motion.button>
    );
};
