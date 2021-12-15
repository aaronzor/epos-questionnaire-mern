import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
    components: {
        // MuiPaper: {
        //     styleOverrides: {
        //         root: {
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             textAlign: 'center',
        //             verticalAlign: 'middle'
        //         }
        //     }
        // },
        MuiLinearProgress: {
            styleOverrides: {
                bar: {
                    backgroundColor: '#c98ced'
                },
                root: {
                    backgroundColor: '#ECECEC',
                    height: '0.4rem'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    '&.MuiElevatedCard--01': {
                        margin: 'auto',
                        marginTop: '8%',
                        borderRadius: 5,
                        transition: '0.3s',
                        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
                        position: 'relative',
                        width: '50%',
                        overflow: 'initial',
                        background: '#fefefe',
                        padding: 2,
                        '& .MuiCardHeader-root': {
                            flexShrink: 0,
                            position: 'absolute',
                            top: -40,
                            right: 20,
                            left: 20,
                            borderRadius: 5,
                            backgroundColor: grey[800],
                            overflow: 'hidden',
                            boxShadow: '4px 4px 20px 1px rgba(0, 0, 0, 0.2)',
                            textAlign: 'left',
                            '& .MuiCardHeader-title': {
                                color: '#ffffff',
                                fontWeight: 900,
                                letterSpacing: 1
                            },
                            '& .MuiCardHeader-subheader': {
                                color: '#ffffff',
                                opacity: 0.87,
                                fontWeight: 200,
                                letterSpacing: 0.4
                            }
                        },
                        '& .MuiCardContent-root': {
                            textAlign: 'left',
                            '& .MuiCardContent-inner': {
                                paddingTop: '38px',
                                overflowX: 'auto'
                            }
                        }
                    }
                }
            }
        }
    },
    palette: {
        background: {
            default: `#ECECEC`,
            paper: '#ffffff'
        },
        primary: {
            main: '#424242',
            light: '#6d6d6d',
            dark: '#1b1b1b'
        },
        secondary: {
            main: '#4a148c',
            light: '#7c43bd',
            dark: '#12005e'
        },
        text: {
            primary: '#000000',
            secondary: '#000000'
        }
    }
});
