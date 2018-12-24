import * as React from 'react';
import { Component } from 'react';

export interface TeachersPageProps {

}

export interface TeachersPageState {

}

class TeachersPage extends React.Component<TeachersPageProps, TeachersPageState> {
    constructor(props: TeachersPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>Teachers Page</div>);
    }
}

export default TeachersPage;