import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBlock, CardTitle, CardText,
          Form, FormGroup, Input, Label} from 'reactstrap';

// Home page component
export class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onClick(){
    dispatch({ type: HELLO_WORLD })
  }

  handleInputs(e){
    var name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    this.setState(obj)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.actions.loginUser(this.state, '/')
  }

  render() {
    return (
      <Row className='justify-content-md-center'>
        <Col sm="12" md={{ size: 10, offset: 2 }}>
          <Card block>
            <CardHeader>Form Login</CardHeader>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup row>
                <Label for="email" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input type="email"
                         name="email"
                         placeholder="Insert a Email"
                         value={this.state.email}
                         onChange={this.handleInputs.bind(this)} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={4}>Password</Label>
                <Col sm={8}>
                  <Input type="password"
                    name="password"
                    placeholder="Insert a password"
                    value={this.state.password}
                    onChange={this.handleInputs.bind(this)}
                   />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Button type='submit' outline color="primary" size="lg" block >Login</Button>{' '}
                </Col>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);
