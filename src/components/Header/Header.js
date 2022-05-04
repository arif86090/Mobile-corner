import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';



const Header = () => {

const[user]=useAuthState(auth);
const handelSignout = () =>{
  signOut(auth);
  
}
    return (
        <div>
            <Navbar className="py-3 navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className='tittle-name'>Mobile Corner</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
      {
        user && <>
         <Nav.Link as={Link} to="/addservice">Add Product</Nav.Link>
       <Nav.Link as={Link} to="/manageItems">Mange Items</Nav.Link>
        <Nav.Link as={Link} to="/myitem">My items</Nav.Link>
        </>
      }
    
     {
       user ? <button className='logOut-btn' onClick={handelSignout} >log Out</button> :  <Nav.Link as={Link} to="/login">
       Login
      </Nav.Link>
     }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
       

};

export default Header;