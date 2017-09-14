import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router'

class AppContainer extends Component {

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
    return (
      <div>
        <header>
          <Navbar className='navbar-expand-md' color="danger" light fixed='top' toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink active href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="dashboard">Dashboard</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }

}


export default connect()(AppContainer);
