import React, {Component} from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {withTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B2EBF2',
      main: '#00BCD4',
      dark: '#0097A7',
    },
    secondary: {
      light: '#FFECB3',
      main: '#FFC107',
      dark: '#FFA000'
    },
    error: {
      main: '#FF5722',
    }
  },
  typography: {
    headline: {
      color: '#0097A7',
      fontSize: '.95rem'
    },
    title: {
      color: '#0097A7'
    },
    subheading: {
      color: '#FFA000'
    }
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        borderRadius: 3,
        border: 0,
        color: '#fff !important',
        height: 48,
        margin: '30px 0',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Main id="test"/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withTheme()(App);