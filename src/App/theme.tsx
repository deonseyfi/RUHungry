import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            light: '#f50057',
            dark: '#f50031',
            main: '#f50031',
        },
        type: 'dark',
    },
});
export default theme;
