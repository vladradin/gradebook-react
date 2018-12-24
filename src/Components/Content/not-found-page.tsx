import * as React from 'react';
import { Component } from 'react';

export interface NotFoundPageProps {

}

export interface NotFoundPageState {

}

class NotFoundPage extends React.Component<NotFoundPageProps, NotFoundPageState> {
    constructor(props: NotFoundPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>Not Found Page</div>);
    }
}

export default NotFoundPage;