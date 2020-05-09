import React, {Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import * as firebase from 'firebase'


//Components
import Navbar from './components/Navbar';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const firebaseConfig = {
    apiKey: "AIzaSyDNzPoNyKsSxtaU0frqzVlsfKu1sAH55y4",
    authDomain: "cyberrr-8219c.firebaseapp.com",
    databaseURL: "https://cyberrr-8219c.firebaseio.com",
    projectId: "cyberrr-8219c",
    storageBucket: "cyberrr-8219c.appspot.com",
    messagingSenderId: "710526151269",
    appId: "1:710526151269:web:9dbe4b191750be8e61348c",
    measurementId: "G-DTNDER4WCV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#33c9dc',
            main: '#00bcd4',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff'
        }

    },
    typography:{
        useNextVariants: true
    }
});

class App extends Component {
render(){
  return (
     <MuiThemeProvider theme={theme}>
         <div className="App">
             <Router>
                 <Navbar />
                 <div className="container">
                     <Switch>
                         <Route exact path = "/" component={home}/>
                         <Route exact path = "/login" component={login}/>
                         <Route exact path = "/signup" component={signup}/>
                     </Switch>
                 </div>
             </Router>
         </div>
     </MuiThemeProvider>
  );
}
}

export default App;
