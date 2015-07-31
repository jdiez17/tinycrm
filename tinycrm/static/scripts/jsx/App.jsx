import React from "react";

import {Navbar, Nav, NavItem} from 'react-bootstrap';

export class App extends React.Component { 
    constructor() {
        super();
    }

    render() {
        return (
            <Navbar brand="tinycrm">
                <Nav>
                    <NavItem eventKey={1} href="#">Main</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default App;
