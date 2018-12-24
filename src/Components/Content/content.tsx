import * as React from 'react';
import { Component } from 'react';
import { Route, Switch } from 'react-router';
import { CoursesPage, StudentsPage, TeachersPage, NotFoundPage, UsersPage } from '.';

import * as path from '../Content/routesUrl';

export interface MainContentProps {

}

export interface MainContentState {

}

class MainContent extends React.Component<MainContentProps, MainContentState> {
    constructor(props: MainContentProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ height: "300px" }}>
                <Switch>
                    <Route path={path.coursesUrl} component={CoursesPage} />
                    <Route path={path.studentsUrl} component={StudentsPage} />
                    <Route path={path.teachersUrl} component={TeachersPage} />
                    <Route path={path.usersUrl} component={UsersPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default MainContent;