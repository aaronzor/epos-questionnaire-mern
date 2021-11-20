import React from 'react';
import { Grid, TextField } from '@mui/material';
import useStyles from '../styles/makeStyle';
import { motion } from 'framer-motion';

const GridText = (props) => {
    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
    };

    const exit = { y: '-10%', opacity: 0, ...transition };
    const enter = {
        y: '0%',
        opacity: 1,
        transition
    };

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            {props.visable && (
                <motion.div initial={exit} animate={enter} exit={exit}>
                    <TextField
                        sx={{}}
                        name={props.name}
                        onChange={props.onChange}
                        className={classes.gridInput}
                        label={props.label}
                        multiline
                        rows={props.rows}
                    />
                </motion.div>
            )}
        </Grid>
    );
};
export default GridText;
