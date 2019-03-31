import { Cell, Grid, Row } from "../models/grid";

export function newSquareGrid(size: number): Grid {
    return {
        rows: makeRows(size),
    };
}

function makeRows(size: number): Row[] {
    const rowArray: Row[] = [];

    for (let i = 0; i < size; i++) {
        rowArray.push(newRow(size));
    }

    return rowArray;
}

function newRow(size: number): Row {
    const cells: Cell[] = [];

    for (let i = 0; i < size; i++) {
        cells.push(newCell());
    }

    return {
        cells,
    };
}

function newCell(): Cell {
    return {
        discovered: false,
        occupiedBy: null,
    };
}
