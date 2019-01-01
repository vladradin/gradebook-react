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
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/courses" className="nav-link">Teachers</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/courses" className="nav-link">Students</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/courses" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/courses" className="nav-link">Administrator</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <i className="fa fa-user-circle fa-lg"></i>
                    </form>
                </div>
            </nav>
        );
    }
}

export default LoggedOutNavbar;