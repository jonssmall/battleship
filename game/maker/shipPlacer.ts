import { Coordinate } from "../models/coordinate";
import { Grid } from "../models/grid";
import { Ship } from "../models/ship";

// todo: Unable to deep copy because we need to preserve references to Ship objects shared
// between grid and player entities. May revisit later.
export function addShip(grid: Grid, newShip: Ship): Grid {

    if (legalPlacement(grid, newShip)) {
        newShip.positions.forEach((p) => {
            const [x, y] = [p.x, p.y];
            grid.rows[y].cells[x].occupiedBy = newShip;
        });
    } else {
        // todo: is throw the right approach here?
        throw new Error("Invalid placement detected: " + JSON.stringify(newShip.positions));
    }

    return grid;
}

function isOccupied(grid: Grid, coordinate: Coordinate): boolean {
    return !!grid.rows[coordinate.y].cells[coordinate.x].occupiedBy;
}

function isOverEdge(grid: Grid, ship: Ship): boolean {
    // last element in positions array is furthest coordinate of ship
    const coordinate = ship.positions[ship.positions.length - 1];
    return coordinate.x > grid.rows.length - 1 || coordinate.y > grid.rows[0].cells.length - 1;
}

function legalPlacement(grid: Grid, ship: Ship): boolean {
    return !isOverEdge(grid, ship) && ship.positions.every((p) => !isOccupied(grid, p));
}
