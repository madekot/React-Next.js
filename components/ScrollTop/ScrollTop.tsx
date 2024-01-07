import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from './ScrollTop.module.css';
import { useScrollY } from "./hooks/useScrollY";
import { ButtonIcon } from "@/components";

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
        <motion.div
            className={styles.scrollTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
        </motion.div>
    );
};
