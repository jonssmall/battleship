import { Coordinate } from "../models/coordinate";
import { Grid } from "../models/grid";
import { Ship } from "../models/ship";
import { getCell, outOfRange } from "../utilities/getCell";

// todo: Unable to deep copy because we need to preserve references to Ship objects shared
// between grid and player entities. May revisit later.
export function addShip(grid: Grid, newShip: Ship): Grid {

    if (legalPlacement(grid, newShip)) {
        newShip.positions.forEach((p) => {
            getCell(grid, p).occupiedBy = newShip;
        });
    } else {
        // todo: is throw the right approach here?
        throw new Error("Invalid placement detected: " + JSON.stringify(newShip.positions));
    }

    return grid;
}

function isOccupied(grid: Grid, coordinate: Coordinate): boolean {
    return !!getCell(grid, coordinate).occupiedBy;
}

function isOverEdge(grid: Grid, ship: Ship): boolean {
    // last element in positions array is furthest coordinate of ship
    const coordinate = ship.positions[ship.positions.length - 1];
    return outOfRange(grid, coordinate);
}

function legalPlacement(grid: Grid, ship: Ship): boolean {
    return !isOverEdge(grid, ship) && ship.positions.every((p) => !isOccupied(grid, p));
}
