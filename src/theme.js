import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#1e376d',
        },
        secondary: {
            main: '#d9ab28',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;