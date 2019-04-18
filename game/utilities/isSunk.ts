import { Grid } from "../models/grid";
import { Ship } from "../models/ship";
import { getCell } from "./getCell";

export function isSunk(grid: Grid, ship: Ship): boolean {
    return ship.positions.every((p) => getCell(grid, p).discovered);
}
