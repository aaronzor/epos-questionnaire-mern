import React from 'react';

// MUI Imports
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Other Imports
import { Link } from 'react-router-dom';
import qube from '../assets/qube-final.png';
import useStyles from '../styles/makeStyle';

const Header = (props) => {
    const classes = useStyles();

    return (
        <AppBar elevation={0} className={classes.appbar}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <MenuIcon sx={{ color: '#424242' }} />

                <Link to='/'>
                    <img
                        className={classes.logo}
                        src={qube}
                        alt='Qube epos logo'
                    />
                </Link>
                <IconButton onClick={props.click}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
