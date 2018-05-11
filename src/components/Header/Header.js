import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
// import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';

import './Header.css';
import './BurgerIcon/BurgerIcon.css';
import BurgerIcon from './BurgerIcon/BurgerIcon';
import Menu from './BurgerIcon/Menu';
import Popup from 'reactjs-popup';

const styles ={
	  fontFamily: "Nunito",
  textAlign: "center",
  marginTop: "40px"
}

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

class Header extends Component{
	constructor(props){
		super(props);
		this.state={value: 1};
	}

	handleChange=(event, index, value) => this.setState({value});

 render(){
    return(
 
    <nav id="header" className="is-dark">
    <div className="header-content">
    	<div className="content-left">
    		<a href="/">
    		<h1 className="myName">Audrey Davis</h1>
    		</a>
    	</div>
    		<div className="content-right">
    <Popup modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    		
    		

    		</div>
    		</div>
  </nav>

  
  );
    		
  }

}


  export default Header;