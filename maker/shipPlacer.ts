import { Coordinate } from "../models/coordinate";
import { Grid } from "../models/grid";
import { Ship } from "../models/ship";

// todo: should I make a new clone of board to return?
export function addShip(previousGrid: Grid, newShip: Ship): Grid {

    if (isOverEdge(previousGrid, newShip) || newShip.positions.some((p) => isOccupied(previousGrid, p))) {
        console.error("Invalid placement detected: " + JSON.stringify(newShip.positions));
    } else {
        newShip.positions.forEach((p) => {
            const [x, y] = [p.x, p.y];
            previousGrid.rows[y].cells[x].occupiedBy = newShip;
        });
    }

    return previousGrid;
}

function isOccupied(grid: Grid, coordinate: Coordinate): boolean {
    return !!grid.rows[coordinate.y].cells[coordinate.x].occupiedBy;
}

function isOverEdge(grid: Grid, ship: Ship): boolean {
    // last element in positions array is furthest coordinate of ship
    const coordinate = ship.positions[ship.positions.length - 1];
    return coordinate.x > grid.rows.length - 1 && coordinate.y > grid.rows[0].cells.length - 1;
}
