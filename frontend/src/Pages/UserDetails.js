import React, { useContext } from 'react';
import { Container, Grid } from '@mui/material';
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
                marginTop='5%'
            >
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
                <NavButton variant='back' link='/q5' clear={clear} />
                <SubmitButton link='' />
            </Grid>
        </Container>
    );
};

export default UserDetails;
