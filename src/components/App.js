import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { Link, IndexLink } from 'react-router';
import HelloWorld from './../containers/HelloWorld'
import { logoutAndRedirect } from '../actions';

class App extends React.Component {

  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    let button = null;
    if (this.props.token) {
      button = <NavItem>
        <NavLink href="/login" onClick={this.props.onClick}>Logout</NavLink>
      </NavItem>;
    } else {
      button = <NavItem>
        <NavLink href="/login">Login</NavLink>
      </NavItem>;
    }
    return (
      <div>
        <Navbar className='navbar-expand-md' color="danger" light fixed='top' toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink active href="/">Home</NavLink>
              </NavItem>
              { button }
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App
