import React, { useContext } from 'react';
import {
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography
} from '@mui/material';
import NavButton from '../components/NavButton';
import SubmitButton from '../components/SubmitButton';
import UserInfoInput from '../components/UserInfoInput';
import { ResultContext } from '../contexts/ResultContext';

const UserDetails = () => {
    const clear = {
        'Online Ordering': false,
        'Table Ordering': false
    };

    const { object, setObject } = useContext(ResultContext);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setObject({ ...object, [name]: value });
    };

    return (
        <Container disableGutters maxWidth='xs'>
            <Grid
                spacing={2}
                align='center'
                justifyContent='center'
                container
                marginTop='15%'
            >
                <Grid item xs={12}>
                    <Typography>Please enter your details below</Typography>
                </Grid>
                <UserInfoInput
                    name='Contact Name'
                    onChange={handleOnChange}
                    id='userDetailsName'
                    label='Contact Name'
                />
                <UserInfoInput
                    name='Email'
                    onChange={handleOnChange}
                    id='userDetailsEmail'
                    label='Email'
                />
                <UserInfoInput
                    name='Contact Number'
                    onChange={handleOnChange}
                    id='userDetailsNumber'
                    label='Contact Number'
                />
                <Grid item xs={12}>
                    <Typography marginTop='5%'>
                        Please select your preferred contact method(s)
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup sx={{ paddingLeft: '5%', marginBottom: '3%' }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Phone'
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Email'
                        />
                    </FormGroup>
                </Grid>
                <NavButton variant='back' link='/q5' clear={clear} />
                <SubmitButton link='' />
            </Grid>
        </Container>
    );
};

export default UserDetails;
