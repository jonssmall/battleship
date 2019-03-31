import { Coordinate } from "../models/coordinate";
import { Grid } from "../models/grid";
import { Ship } from "../models/ship";

// todo: rules for preventing ship from being placed off edge of board
// todo: should I make a new clone of board to return?
export function addShip(previousGrid: Grid, newShip: Ship): Grid {

    if (newShip.positions.every((p) => !isOccupied(previousGrid, p))) {
        newShip.positions.forEach((p) => {
            const [x, y] = [p.x, p.y];
            previousGrid.rows[y].cells[x].occupiedBy = newShip;
        });
    } else {
        console.error("Collision detected: " + JSON.stringify(newShip.positions));
    }

    return previousGrid;
}

function isOccupied(grid: Grid, coordinate: Coordinate): boolean {
    return !!grid.rows[coordinate.y].cells[coordinate.x].occupiedBy;
}

// 1. prevent placing ship if ANY of its positions are already occupied on board
// 2. prevent placing ship off the edge
