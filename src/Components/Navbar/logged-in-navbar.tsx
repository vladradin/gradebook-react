import * as React from 'react';
import { Component } from 'react';
import CoursesPage from '../Content/Courses/CoursesPage';
import { Link, NavLink } from 'react-router-dom';

import * as path from '../Content/routesUrl';

export interface LoggedInNavbarProps {

}

export interface LoggedInNavbarState {
}

class LoggedInNavbar extends React.Component<LoggedInNavbarProps, LoggedInNavbarState> {
    constructor(props: LoggedInNavbarProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav>
                <ul className="navbar-h">
                    <li className="nav-link">
                        <Link to="courses">Cursuri</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="teachers">Profesori</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="students">Elevi</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="users">Utilizatori</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default LoggedInNavbar;