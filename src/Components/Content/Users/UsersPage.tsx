import * as React from 'react';
import { Component } from 'react';

export interface UsersPageProps {

}

export interface UsersPageState {

}

class UsersPage extends React.Component<UsersPageProps, UsersPageState> {
    constructor(props: UsersPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>Users Page</div>);
    }
}

export default UsersPage;