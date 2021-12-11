import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff8f00',
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
});

export default theme;