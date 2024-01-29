import { createTheme } from "@mui/material";
import { blueGrey, orange } from '@mui/material/colors';

const mainTheme = createTheme({
    palette: {
        primary: { main: blueGrey[700] },
        secondary: { main: orange[500] },
        text: { main: '#ffffff' },
    },
    typography: {
        fontFamily: 'Work Sans, Work Sans',
        fontSize: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'background-color 0.3s',
                    '&:hover': {
                        backgroundColor: orange[500], // Cambia al color secundario al pasar el cursor
                    },
                },
            },
        },
    },
});

export default mainTheme;
