import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGenerator from '../ImageGenerator/ImageGenerator';
import { Link } from 'react-router-dom'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="./">AI Wizardry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Smart Tools" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/text-generation">Text Generation</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/image-generator">Image Generator</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/text-to-speech">Text to Speech</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://tanighclark.vercel.app/">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
