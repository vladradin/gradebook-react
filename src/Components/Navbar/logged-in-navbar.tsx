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
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={path.coursesUrl} className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={path.teachersUrl} className="nav-link">Teachers</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={path.studentsUrl} className="nav-link">Students</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={path.usersUrl} className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={path.administratorUrl} className="nav-link">Administrator</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default LoggedInNavbar;