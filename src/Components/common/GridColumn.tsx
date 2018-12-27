import * as React from 'react';
import { Component, Provider } from 'react';



export interface GridColumnProps {
    field: string;
    title: string;
}

export interface GridColumnState {
}

interface persoana {
    nume: string,
    prenume: string
}

class GridColumn extends React.Component<GridColumnProps, GridColumnState> {
    static defaultProps: GridColumnProps;
    constructor(props: GridColumnProps) {
        super(props);
    }


}



export default GridColumn;