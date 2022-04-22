import * as React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdownComponent from "./NavDropdown";

const NavComponent = () => {

    return (
        <Nav className="me-auto">
            <NavDropdownComponent/>
        </Nav>
    );
}

NavComponent.displayName = "Nav";

export default NavComponent;