import { createTheme } from "@mui/material";
import { blueGrey, orange } from '@mui/material/colors';

const mainTheme = createTheme({
    palette: {
      primary: { main: blueGrey[500] },
      secondary: { main: orange[500] },
    },
    typography: {
      fontFamily: 'Work Sans, Work Sans', 
    fontSize: 16,
    }
  });

export default mainTheme;