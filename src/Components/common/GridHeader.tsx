import * as React from 'react';
import { Component } from 'react';

export interface GridHeaderProps {

}

export interface GridHeaderState {

}

class GridHeader extends React.Component<GridHeaderProps, GridHeaderState> {
    constructor(props: GridHeaderProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div />);
    }
}

export default GridHeader;