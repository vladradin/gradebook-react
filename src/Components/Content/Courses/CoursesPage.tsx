import * as React from 'react';
import { Component } from 'react';

export interface CoursesPageProps {

}

export interface CoursesPageState {

}

class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {
    constructor(props: CoursesPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>Courses Page</div>);
    }
}

export default CoursesPage;