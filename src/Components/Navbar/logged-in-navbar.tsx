import * as React from 'react';
import { Component } from 'react';
import CoursesPage from '../Content/Courses/CoursesPage';
import { Link, NavLink } from 'react-router-dom';

import userIcon from '../../user.svg';

import "../../App.css";

export interface LoggedInNavbarProps {

}

export interface LoggedInNavbarState {
    username:string
}

class LoggedInNavbar extends React.Component<LoggedInNavbarProps, LoggedInNavbarState> {
    constructor(props: LoggedInNavbarProps) {
        super(props);
        this.state = {username:"vlad radin"};
    }

    oddEvent = (match:any, location:any) => {
        debugger;
        if (!match) {
          return false
        }
        const eventID = parseInt(match.params.eventID)
        return !isNaN(eventID) && eventID % 2 === 1
      }
      
     

    render() {
        return (
            <nav>
                <ul className="navbar-h">
                    <li className="nav-link">
                        <NavLink to="courses" isActive={this.oddEvent} exact activeClassName="active-link">Cursuri</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="teachers" activeClassName={"active-link"}>Profesori</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="students" activeClassName={"active-link"}>Elevi</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="users" activeClassName="active-link">Utilizatori</NavLink>
                    </li>
                </ul>
                <div className="user-menu">
                   <img src={userIcon} width="40px" height="40px"></img>
                   <p>{this.state.username}</p>
                </div>
            </nav>
        );
    }
}

export default LoggedInNavbar;