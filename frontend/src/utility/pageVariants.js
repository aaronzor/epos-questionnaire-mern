const pageVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5 }
    },
    exit: {
        opacity: 0,
        transition: { delay: 0.2, duration: 0.5 }
    }
};

export default pageVariants;
