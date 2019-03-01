import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api/centers">Centers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/api/users">Profile</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Navbar;