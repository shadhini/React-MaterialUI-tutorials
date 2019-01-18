import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


import Navbar from './Navbar';
import MediaCard from './Card';

//---------Icon
// names of the icons are PascalCase.
//--------Button props
//variant: The visual style of the component, either contained, outlined, fab, or empty for the default link-style.
//color: One of primary, secondary, or default, which is the same color as if it’s left empty. 
//mini: If the variant is set to fab (floating action button), then the size of the button is reduced
//------TextField
//  The TextField, we have imported from @material-ui/core/TextField, behaves like the standard React input component.

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Button variant="outlined" color='primary'>
          <Bookmarks></Bookmarks>
        </Button> <br />
        <TextField
          placeholder="Placeholder here"
          label="Basic TextField" />
          <MediaCard />
      </div>
    );
  }
}

export default App;
