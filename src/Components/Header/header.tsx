import * as React from 'react';
import { Component } from 'react';

export interface HeaderProps {

}

export interface HeaderState {

}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="jumbotron mb-0">
                <h1 className="text-center">Scoala Postliceala numarul 21</h1>
                <h2 className="text-muted text-center">Liceu cu profil tehnic</h2>
            </div>
        );
    }
}

export default Header;