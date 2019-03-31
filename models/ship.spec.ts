import { expect } from "chai";
import { axis, newHugeShip } from "./ship";

describe("Ship Constructor", () => {
    it ("Makes a 4 unit ship from left to right", () => {
        const bigShip = newHugeShip(axis.X, {x: 0, y: 0});
        const horizontalPositions = [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
        ];

        expect(bigShip.positions).to.eql(horizontalPositions);
    });

    it ("Makes a 4 unit ship from top to bottom", () => {
        const bigShip = newHugeShip(axis.Y, {x: 0, y: 0});
        const verticalPositions = [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 0, y: 3},
        ];

        expect(bigShip.positions).to.eql(verticalPositions);
    });
});
