import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';

const headerStyle = {
    background: 'white',
}


function Header () {
    return (
        <div className = "Header" style = {headerStyle}>
            <br/>
            <Nav className = "justify-content-center">
                <Nav.Item>
                    <h1>Mobolaji Rotibi</h1>

                </Nav.Item>
                </Nav>
                <Nav className="justify-content-center">
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
            <br/>
            <hr/>
        </div>
    );
}

export default Header;