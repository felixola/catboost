import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
    typography : {
        fontFamily: ['Work sans', 'sans-serif'].join(',')
    },
    palette: {
        secondary: {
          main: "#002663",
        }
      }, 
      
   
});

export default Theme;