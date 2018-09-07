import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class HeaderComponent extends Component{
	constructor(){
    super();
    this.state = {
      current:'Default'
    	}
    }

	render(){
		return(
			<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="#home">DevFolio</a>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Nav>
			    <NavItem eventKey={1} href="#" id='Home' onClick={this.props.handler}>
			      Home
			    </NavItem>
			    <NavItem eventKey={2} href="#" id='Report' onClick={this.props.handler}>
			      Report
			    </NavItem>
			    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			      <MenuItem eventKey={3.1}>Action</MenuItem>
			      <MenuItem eventKey={3.2}>Another action</MenuItem>
			      <MenuItem eventKey={3.3}>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem eventKey={3.4}>Separated link</MenuItem>
			    </NavDropdown>
			  </Nav>
			</Navbar>
		);
	}
}

export default HeaderComponent;