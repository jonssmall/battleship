import { Coordinate } from "../models/coordinate";
import { Cell, Grid } from "../models/grid";

export function getCell(grid: Grid, coordinate: Coordinate): Cell {
    if (outOfRange(grid, coordinate)) {
        throw new Error("Coordinate out of range of game grid.");
    } else {
        return grid.rows[coordinate.y].cells[coordinate.x];
    }
}

export function outOfRange(grid: Grid, coordinate: Coordinate): boolean {
    return (
        coordinate.y < 0 ||
        coordinate.x < 0 ||
        coordinate.y >= grid.rows.length ||
        coordinate.x >= grid.rows[0].cells.length
    );
}
