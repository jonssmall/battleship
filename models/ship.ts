import { Coordinate } from "./coordinate";

export interface Ship {
    positions: Coordinate[];
    sunk: boolean;
}

export enum axis {
    X,
    Y,
}

enum shipSize {
    small = 1,
    medium,
    large,
    huge,
}

export function newSmallShip(alignment: axis, startPosition: Coordinate): Ship {
    return newShip(alignment, startPosition, shipSize.small);
}

export function newMedShip(alignment: axis, startPosition: Coordinate): Ship {
    return newShip(alignment, startPosition, shipSize.medium);
}

export function newLargeShip(alignment: axis, startPosition: Coordinate): Ship {
    return newShip(alignment, startPosition, shipSize.large);
}

export function newHugeShip(alignment: axis, startPosition: Coordinate): Ship {
    return newShip(alignment, startPosition, shipSize.huge);
}

function newShip(alignment: axis, startPosition: Coordinate, size: shipSize) {
    return {
        positions: buildShipLength(alignment, size, startPosition),
        sunk: false,
    };
}

function buildShipLength(alignment: axis, size: shipSize, startPosition: Coordinate): Coordinate[] {
    const positions: Coordinate[] = [startPosition];

    if (alignment === axis.X) { // left to right

        for (let i = 1; i < size; i++) {
            positions.push({
                x: startPosition.x + i,
                y: startPosition.y,
            });
        }

    } else { // top to bottom

        for (let i = 1; i < size; i++) {
            positions.push({
                x: startPosition.x,
                y: startPosition.y + i,
            });
        }

    }

    return positions;
}
