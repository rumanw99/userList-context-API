import React from 'react';
import { Link } from 'react-router-dom';
import {Nav , Navbar , NavItem , NavbarBrand , Container} from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar className='head'>
        <Container className="conta">
            <NavbarBrand href='/'>My Users</NavbarBrand>
            <Nav>
                <NavItem className="bti">
                    <Link className='bt' to="/add">Add User</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}
