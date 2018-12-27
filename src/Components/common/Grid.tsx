import * as React from 'react';
import { Component } from 'react';
import GridColumn from './GridColumn';


export interface GridProps {
    data: any[];
}

export interface GridState {
}

class Grid extends React.Component<GridProps, GridState> {
    dataContext: React.Context<any[]>;
    constructor(props: GridProps) {
        super(props);
        this.dataContext = React.createContext(this.props.data);
    }
    render() {
        var dataContext = this.dataContext;
        var columns: React.ReactNode = this.props.children;
        
        return (
            <dataContext.Provider value={this.props.data}>
                <table className="table table-bordered">

                </table>
            </dataContext.Provider>
        );
    }
}

export default Grid;