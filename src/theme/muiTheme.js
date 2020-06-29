import { createMuiTheme } from '@material-ui/core/styles';
const darkTheme = createMuiTheme({
  palette: {
    type : 'dark',
    background: {
      default: "#000"
    },
    primary: {
      light: '#4fc2f7',
      main: '#02db68',
      hover:'#76afe4',
      background: '#000',
      dark: '#18db73',
      contrastText: '#000'
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
  
});

export default darkTheme;