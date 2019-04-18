import { expect } from "chai";
import { newSquareGrid } from "../maker/gridMaker";
import { axis, newHugeShip } from "../models/ship";
import { isSunk } from "./isSunk";
import { addShip } from "../maker/shipPlacer";

describe("Ship sunk checker", () => {

    it ("returns true when all ship positions are discovered on grid", () => {
        const grid = newSquareGrid(10);
        const ship = newHugeShip(axis.X, { x: 0, y: 0 });
        addShip(grid, ship);

        grid.rows[0].cells[0].discovered = true;
        grid.rows[0].cells[1].discovered = true;
        grid.rows[0].cells[2].discovered = true;
        grid.rows[0].cells[3].discovered = true;

        expect(isSunk(grid, ship)).to.eql(true);
    });

    it ("returns false when some (but not all) ship positions are discovered on grid", () => {
        const grid = newSquareGrid(10);
        const ship = newHugeShip(axis.X, { x: 0, y: 0 });
        addShip(grid, ship);

        grid.rows[0].cells[1].discovered = true;
        grid.rows[0].cells[2].discovered = true;
        grid.rows[0].cells[3].discovered = true;

        expect(isSunk(grid, ship)).to.eql(false);
    });

    it ("returns false when no ship positions are discovered on grid", () => {
        const grid = newSquareGrid(10);
        const ship = newHugeShip(axis.X, { x: 0, y: 0 });
        addShip(grid, ship);

        expect(isSunk(grid, ship)).to.eql(false);
    });
});
