import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/awesomereact/myawesomereact';
// import AppBar from './components/AppBar/AppBar';
import AppBar from 'material-ui/AppBar';
// import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import './style.css';
import Header from '../components/Header/Header';
import SimpleCard from '../components/card/card';
import Typography from 'material-ui/Typography';
 // import AboutPage from '../pages/about/about';
import Square from '../components/square/square';
 // import { Parallax } from 'react-parallax';



class MainPage extends Component{

    


  render(){
      
    return(

      <div className="container-fluid">

 <SimpleCard/>
<img src={require("../img/water.jpeg")} id="ocean"/>




<img src={require("../img/flowers.png")} id="flowers"/>
   <img src={require("../img/plant.png")} id="plant"/> 


 <img src={require("../img/yellow.png")} id="yellow"/>

    
</div>

 

  

        
        
)
  }
};

export default MainPage;
