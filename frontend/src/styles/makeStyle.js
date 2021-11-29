import { makeStyles } from '@mui/styles';
import { green, grey } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    // Grid Pieces
    customBorder: {
        border: `3px solid ${green[500]}`
    },
    gridBox: {
        width: '155px',
        height: '100%',
        boxShadow: 0,
        borderRadius: '0'
    },
    gridOption: {
        width: '160px',
        height: '160px',
        boxShadow: 1,
        border: `3px solid `,
        borderColor: '#424242'
    },
    gridOptionLg: {
        width: '205px',
        height: '205px',
        boxShadow: 1,
        borderRadius: '0',
        border: `3px solid ${grey[400]}`,
        borderColor: '#424242'
    },
    gridQuestionLg: {
        width: '436px',
        height: '136px',
        boxShadow: 1,
        borderRadius: '0',
        border: `3px solid ${grey[400]}`,
        borderColor: '#424242',
        //borderTop: 'none'
        marginTop: '60px',
        marginLeft: '1px'
    },
    gridQuestion: {
        width: '355px',
        height: '116px',
        boxShadow: 1,
        borderRadius: '0',
        border: `3px solid ${grey[400]}`,
        borderColor: '#424242',
        //borderTop: 'none'
        marginTop: '40px'
    },
    root: {
        flexGrow: 1
    },
    // Text
    subTitle: {
        align: 'center',
        fontSize: '25rem'
    },
    questionHeader: {
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '2%'
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
        width: '100%',
        height: '20%',
        position: 'relative'
    },
    // Buttons
    navButton: {
        width: '162px',
        height: '55px',
        marginTop: '25px',
        alignItems: 'center',
        color: `${grey[800]}`,
        borderRadius: '4px'
    },
    navButtonLg: {
        width: '206px',
        height: '55px',
        marginTop: '25px',
        alignItems: 'center',
        color: `${grey[800]}`,
        borderRadius: '4px'
    },
    // Text inputs
    gridInput: {
        border: `3px solid ${grey[400]}`,
        width: '345px',
        padding: '5%',
        textDecoration: 'none'
    },
    gridInputLg: {
        border: `3px solid ${grey[400]}`,
        width: '436px',
        padding: '5%',
        textDecoration: 'none'
    },
    questionInput: {
        border: `3px solid ${grey[400]}`,
        width: '95%',
        textDecoration: 'none',
        marginBottom: '-100px'
    },
    // Footer
    footerWrap: {
        display: 'flex',
        flexDirection: 'column',
        mt: 'auto',
        position: 'fixed',
        width: '100%',
        bottom: 0
    },
    footerMain: {
        padding: 1.5,
        mt: 'auto',
        position: 'static',
        width: '100%',
        bottom: 0
    }
}));

export default useStyles;
