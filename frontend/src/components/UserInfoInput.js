import React from 'react';
import { Grid, TextField } from '@mui/material';
import useStyles from '../styles/makeStyle';

const UserInfoInput = (props) => {
    const classes = useStyles();

    const { name, onChange, id, label, error } = props;

    return (
        <Grid item xs={12}>
            <TextField
                error={error}
                name={name}
                onChange={onChange}
                id={id}
                label={label}
                className={classes.questionInput}
            />
        </Grid>
    );
};

export default UserInfoInput;
