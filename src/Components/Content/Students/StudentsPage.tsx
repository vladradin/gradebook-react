import * as React from 'react';
import { Component } from 'react';

export interface StudentsPageProps {

}

export interface StudentsPageState {

}

class StudentsPage extends React.Component<StudentsPageProps, StudentsPageState> {
    constructor(props: StudentsPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>Students Page</div>);
    }
}

export default StudentsPage;