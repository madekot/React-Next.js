const variants = {
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.06
        }
    },
    hidden: { marginBottom: 0 }
};

const variantsChildren = {
    visible: {
        opacity: 1,
        height: 35
    },
    hidden: { opacity: 0, height: 0 }
};

export { variants, variantsChildren };
