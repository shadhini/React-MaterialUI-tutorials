// Now, all children of a MuiThemeProvider have the uniformly customizable style!

//A createMuiTheme function usually takes the object to define a theme:
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//-----Custom Theme
//To create a custom theme, use a createMuiTheme function and pass its return value to a MuiThemeProvider element at root of your App.
const theme = createMuiTheme();

// const theme = createMuiTheme({
//   palette: {
//     primary: '#e89eef',
//     secondary: '#336b87'
//   }
// });

const App = props => (
  <MuiThemeProvider theme={theme}>
    // your app
  </MuiThemeProvider>
);

