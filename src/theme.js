import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC05F',
            contrastText: '#222328'
        },
        secondary: {
            main: '#222328',
            contrastText: '#fff'
        },
        background: {
            default: '#F8F5ED',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
    components: {
        // Name of the component
        MuiContainerBase: {
            defaultProps: {
                boxShadow: 1,
                borderRadius: 1,
                p: 2,
                
            },
        },
    },
});

export default theme;