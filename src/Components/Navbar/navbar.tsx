import * as React from 'react';
import { Component } from 'react';
import LoggedInNavbar from './logged-in-navbar';
import LoggedOutNavbar from './logged-out-navbar';

export interface NavbarProps {
    firstName?: string,
    lastNme?: string,
    userName?: string
}

export interface NavbarState {

}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {};
    }
    render() {
        const userName = "salut";
        if (userName)
            return (<LoggedInNavbar />);
        else
            return (<LoggedOutNavbar />)
    }
}

export default Navbar;