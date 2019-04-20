import { addShip } from "../maker/shipPlacer";
import { random } from "../utilities/random";
import { Coordinate } from "./coordinate";
import { Cell, Grid } from "./grid";
import { axis, newHugeShip, newLargeShip, newMedShip, newSmallShip, Ship } from "./ship";
import { isSunk } from "../utilities/isSunk";

export interface Player {
    fleet: Ship[];
    // does this need to return anything special to the user?
    checkSquare: (cell: Cell) => Grid;
    isFleetDestroyed: () => boolean;
}

export function playerFactory(selfGrid: Grid, enemyGrid: Grid): Player {
    const fleet = generateFleet(selfGrid);
    return {
        checkSquare: checkSquare.bind(null, enemyGrid),
        fleet,
        isFleetDestroyed: isFleetDestroyed.bind(null, fleet),
    };
}

// small - 4
// med - 3
// large - 2
// huge - 1
function generateFleet(grid: Grid): Ship[] {
    // todo: IO facade for getting starting coordinates
    // will test out with random placement for now...

    return [
        randomPlacement(grid, newHugeShip),
        randomPlacement(grid, newLargeShip),
        randomPlacement(grid, newLargeShip),
        randomPlacement(grid, newMedShip),
        randomPlacement(grid, newMedShip),
        randomPlacement(grid, newMedShip),
        randomPlacement(grid, newSmallShip),
        randomPlacement(grid, newSmallShip),
        randomPlacement(grid, newSmallShip),
        randomPlacement(grid, newSmallShip),
    ];
}

function randomPlacement(grid: Grid, shipBuilder: (axis: axis, coord: Coordinate) => Ship): Ship {
    let ship: Ship;
    while (true) {
        try {
            ship = shipBuilder(randomAxis(), randomCoordinate(grid));
            addShip(grid, ship);
            break;
        } catch (e) {
            // do nothing for now.
            // console.log((e as Error).message);
        }
    }
    return ship;
}

function randomAxis(): axis {
    return random(0, 1) ? axis.X : axis.Y;
}

function randomCoordinate(grid: Grid): Coordinate {
    return {
        x: random(0, grid.rows.length - 1),
        y: random(0, grid.rows.length - 1),
    };
}

function checkSquare(enemyGrid: Grid, cell: Cell): Grid {
    // todo: private fields w/ external accessors ??
    cell.discovered = true;

    if (cell.occupiedBy && isSunk(enemyGrid, cell.occupiedBy)) {
        cell.occupiedBy.sunk = true;
    }

    return enemyGrid;
}

function isFleetDestroyed(fleet: Ship[]): boolean {
    return fleet.every((s) => s.sunk);
}
