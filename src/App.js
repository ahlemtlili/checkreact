import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form' ;
import {FormControl,FormSelect, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {NavbarBrand,NavLink,Container,Nav,NavDropdown } from "react-bootstrap";
import React from 'react';

function App() {
  return (
    <div className="App " >
      <Navbar className="ha" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Inscription</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Work</Nav.Link>
      <Nav.Link href="#pricing">About-as</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Youtube</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Twitter</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
      <Form className="for" >
  <Form.Group className="mb-3 name" controlId="formBasicEmail">
    <Form.Label className='lab'>Email address</Form.Label>
    <Form.Control className="contr" type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3 name" controlId="formBasicPassword">
    <Form.Label className='lab'>Password</Form.Label>
    <Form.Control className="contr" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="name">
          <Form.Label className='lab'>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button  variant="primary" type="submit">
                            Submit
            </Button>
  
</Form>
      
    </div>
  );
}
export default App 
