import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/awesomereact/myawesomereact';
import AppBar from './components/AppBar/AppBar';
// import AppBar from 'material-ui/AppBar';
// import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import Header from './components/Header/Header';
import Popup from 'reactjs-popup';
// import Parallax from './components/random/parallax';
import AboutPage from './pages/about/about';
import MainPage from './pages/mainPage';
import SimpleCard from './components/card/card';
class App extends Component{
  

  render(){
    return(
      <MuiThemeProvider>
   
      <Header/>
      <MainPage/>
   
  
      </MuiThemeProvider>
      );
  }

}




export default App;
