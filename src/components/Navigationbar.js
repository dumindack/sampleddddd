import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './../img/logo.png';
import './CSS/Navigationbar.css'


const Navigationbar = () =>{
return(

<nav class="navbar navbar-expand-sm navbar-custom">
    <a class="navbar-brand" href="#">
      <img
        src={icon}
        height="55"
        width="auto"
      />
    </a>
    <a href="/" class="navbar-brand">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
        <i class="fa fa-bars fa-lg py-1 text-white"></i>
    </button>
    <div class="navbar-collapse collapse" id="navbarCustom">
        <ul class="navbar-nav">

            <li class="nav-item">
                <a class="nav-link" href="/About">About</a>
            </li>
            <li class="nav-item dropdown">
            <NavDropdown title="Choose From" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Birthday Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cup Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wedding Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Other Design Cakes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
            </li>
        </ul>
        <form class="d-flex input-group w-auto" >
          <input
            type="search"
            class="form-control"
            placeholder="Search for cakes"
            aria-label="Search"
          />
          <button
            class="search-button"
            type="button"
            data-mdb-ripple-color="dark">
            Search
          </button>
        </form>

    </div>

    <div class="topnav">
      <div class="topnav-right">
        <a href="#">Log in</a>
        <a href="/register">Register</a>
        <a href="#">My Profile</a>
      </div>
    </div>
    
</nav>
)
}

export default Navigationbar