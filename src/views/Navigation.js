import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <div className='Navigation'>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><h1>Mobolaji Rotibi</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/"><h2>Projects</h2></Nav.Link>
                        <Nav.Link href="/resume"><h2>Resume</h2></Nav.Link>
                        <Nav.Link href="/about"><h2>About Me</h2></Nav.Link>
                    </Nav>
                    <Nav className="mr-sm-2">
                        <Nav.Link href="https://github.com/brotibi">
                            <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                                alt="Github Logo" width="40" height="30" />GitHub</Nav.Link>
                        <Nav.Link href="https://stackoverflow.com/users/11155035/brotibi">
                            <img src="https://streamdata.io/wp-content/uploads/2018/04/stack-overflow-orange.png"
                                alt="Stack Overflow Logo"
                                width="30" height="30" />Stack Overflow</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/mobolaji-rotibi/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                alt="LinkedIn Logo"
                                width="30" height="30" /> LinkedIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
