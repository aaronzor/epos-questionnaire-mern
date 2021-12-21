import { makeStyles } from '@mui/styles';
import { green, grey } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    // Grid Pieces
    customBorder: {
        border: `3px solid ${green[500]}`
    },
    gridContainer: {
        width: '375px'
    },
    gridBox: {
        width: '155px',
        height: '100%',
        boxShadow: 0,
        borderRadius: '0'
    },
    gridOption: {
        width: '97%',
        height: '170px',
        boxShadow: 1,
        border: `3px solid `,
        borderColor: '#424242',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle'
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
        width: '98.5%',
        height: '116px',
        boxShadow: 1,
        borderRadius: '0',
        border: `3px solid ${grey[400]}`,
        borderColor: '#424242',
        //borderTop: 'none'
        marginTop: '40px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle'
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
    // appbar: {
    //     justifyContent: 'space-between'
    // },

    logo: {
        paddingTop: '5%',
        width: '10rem',
        flexGrow: 1
    },
    // Progress Bar
    progress: {
        width: '100%',
        height: '20%'
        //position: 'relative'
    },
    // Buttons
    navButton: {
        width: '98%',
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
        mt: '10%',
        position: 'relative',
        width: '100%',
        bottom: 0,
        marginTop: '5%'
    },
    footerMain: {
        flexShrink: 0,
        padding: 1.5,
        mt: 'auto',
        width: '100%',
        bottom: 0
    },
    // Flex containers
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },

    //Grid Content
    grid: {
        flex: '1 0 auto'
    },
    // Modal
    topScrollPaper: {
        alignItems: 'flex-start'
    },
    topPaperScrollBody: {
        verticalAlign: 'top'
    }
}));

export default useStyles;
