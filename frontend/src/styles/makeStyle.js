import { makeStyles } from '@mui/styles';
import { green, grey } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    // Grid Pieces
    customBorder: {
        border: `3px solid ${green[500]}`
    },
    gridOption: {
        width: '100%',
        height: '155px',
        boxShadow: 1,
        borderRadius: '0',
        border: `3px solid ${grey[400]}`
    },
    gridQuestion: {
        width: '100%',
        height: '116px',
        boxShadow: 1,
        borderRadius: '0',
        border: `3px solid ${grey[400]}`,
        borderTop: 'none',
        marginTop: '-40px'
    },
    root: {
        flexGrow: 1
    },
    // Text
    subTitle: {
        align: 'center',
        fontSize: '20px'
    },
    // App Bar
    appbar: {
        alignItems: 'center'
    },

    logo: {
        width: '10rem'
    },
    // Progress Bar
    progress: {
        width: '101.4%',
        height: '7px',
        position: 'relative',
        marginTop: '15px'
    }
}));

export default useStyles;
