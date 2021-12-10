import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#222328',
        },
        secondary: {
            main: '#ff8f00',
        },
        background: {
            default: '#F8F5ED',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: 'Helvetica',
    },
});

export default theme;