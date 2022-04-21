import * as React from "react";
import { 
    Navbar,
    Container,
} from "react-bootstrap";

export default function NavbarComponent(this: unknown) {

    const logo = " Logo";

    return (
        <Navbar 
            collapseOnSelect
            bg="dark" 
            expand="lg" 
            variant="dark"
        >
            <Container>
                <Navbar.Brand>
                    { logo }
                </Navbar.Brand>
                <Navbar.Collapse id="reponsive-navbar-nav">

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}