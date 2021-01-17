import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './../img/logo.png';


const Navigationbar = () =>{
return(

<Navbar  bg="light"  expand="lg">

  <Navbar.Brand href="/"></Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><h4>Home</h4></Nav.Link>
      <Nav.Link href="/profile"><h4>My Profile</h4></Nav.Link>
      <Nav.Link href="/register"><h4>Register</h4></Nav.Link>
      <Nav.Link href="Login"><h4>Login</h4></Nav.Link>
      <NavDropdown title="Choose From" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Birthday Cakes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Cup Cakes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Wedding Cakes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Other Design Cakes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <br />
  <Navbar bg="transparent">
    <Navbar.Brand href="#home">
      <img
        src={icon}
        width="105"
        height="55"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
  <br />
    <Form inline>
      <FormControl type="text" placeholder="Search For Cakes" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigationbar