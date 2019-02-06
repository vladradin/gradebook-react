import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export interface LoggedOutNavbarProps {

}

export interface LoggedOutNavbarState {
}

class LoggedOutNavbar extends Component<LoggedOutNavbarProps, LoggedOutNavbarState> {
    constructor(props: LoggedOutNavbarProps) {
        super(props);
        this.state = { user: {} };
    }
    render() {
        return null;       
    }
}

export default LoggedOutNavbar;