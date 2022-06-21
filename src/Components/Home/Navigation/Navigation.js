import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../../Assets/logo2.png' 
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";


import './Navigation.css'
import useAuth from "../../../Hooks/useAuth";


const Navigation = () => {
  const {user, logOut} = useAuth(); 
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand  href="/home">
              <img src={logo} height='50px' width='auto' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features"><FaCartArrowDown /></Nav.Link>
              <h5 className="pt-3 mx-3">{user?.displayName && <span>{user.displayName}</span>}</h5>
              {user?.displayName ? <button onClick={logOut} className="btn btn-danger btn-logout">Logout</button> : (
                <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link className="signUp" as={Link} to="/register"><button className="btn btn-danger btn-signIn">Sign Up</button></Nav.Link>
                </>
              )}
               
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
