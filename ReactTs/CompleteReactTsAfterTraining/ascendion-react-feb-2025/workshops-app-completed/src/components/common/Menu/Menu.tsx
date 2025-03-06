import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "react-router";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

// import { useTheme } from '../../contexts/ThemeContext';

import "./Menu.scss";

function Menu() {
    // const { theme, toggleTheme, contrastTheme } = useContext(ThemeContext); // { theme: 'light', toggleTheme: fn(), ... }
    // const { theme, toggleTheme, contrastTheme } = useTheme();

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Workshops App
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={CustomNavLink} to="/workshops" end>
                            List of workshops
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/workshops/add">
                            Add a workshop
                        </Nav.Link>
                    </Nav>
                    <NavDropdown title="Personalize" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            as={NavLink}
                            to="/workshops/favorites"
                        >
                            Favorites
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Change Theme
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
