import * as React from 'react';
import { Component } from 'react';

export interface GridRowProps {
}

export interface GridRowState {
}

class GridRow extends React.Component<GridRowProps, GridRowState> {
    constructor(props: GridRowProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div />);
    }
}

export default GridRow;