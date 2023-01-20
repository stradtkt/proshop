import React from 'react';
import { Navbar, NavbarBrand, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' collapseOnSelect>
            <Container>
            <LinkContainer to='/'>
              <NavbarBrand>
                  ProShop
              </NavbarBrand>
            </LinkContainer>
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                <LinkContainer to='/cart'>
                  <Nav.Link><i className='fas fa-shopping-cart'></i>{' '}Card</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link><i className='fas fa-user'></i>{' '} Sign In</Nav.Link>
                </LinkContainer>
                </Nav>    
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;