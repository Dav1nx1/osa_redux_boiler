import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBlock, CardTitle, CardText,
          Form, FormGroup, Input, Label} from 'reactstrap';

// Home page component
export default class Login extends React.Component {
  // render
  render() {
    return (
      <Row className='justify-content-md-center'>
        <Col sm="12" md={{ size: 10, offset: 2 }}>
          <Card block>
            <CardHeader>Form Login</CardHeader>
            <Form onSubmit={this.props.handleSubmit}>
              <FormGroup row>
                <Label for="email" sm={4}>Email</Label>
                <Col sm={8}>
                  <Input type="email"
                         name="email"
                         placeholder="Insert a Email"
                         value={this.props.email}
                         onChange={this.props.handleInputs} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={4}>Password</Label>
                <Col sm={8}>
                  <Input type="password"
                    name="password"
                    placeholder="Insert a password"
                    value={this.props.password}
                    onChange={this.props.handleInputs}
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

// propTypes and contextTypes are supported
Login.propTypes = {
  email: PropTypes.string,
  handleInputs: PropTypes.func
};
