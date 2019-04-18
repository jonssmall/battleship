import { expect } from "chai";
import { newSquareGrid } from "../maker/gridMaker";
import { axis, newSmallShip } from "../models/ship";
import { getCell } from "./getCell";

describe("Cell getter", () => {
    const grid = newSquareGrid(10);
    const ship = newSmallShip(axis.X, { x: 0, y: 0 });
    grid.rows[0].cells[0].occupiedBy = ship;

    it ("returns a cell object with a valid grid & coordinate", () => {
        const cell = getCell(grid, { x: 0, y: 0 });
        expect(cell.occupiedBy).to.eql(ship);
    });

    it ("throws an error for negative coordinate X coordinate", () => {
        expect(() => getCell(grid, { x: -1, y: 0 })).to.throw();
    });

    it ("throws an error for negative coordinate Y coordinate", () => {
        expect(() => getCell(grid, { x: 0, y: -1 })).to.throw();
    });

    it ("throws an error for X coordinate out of bounds", () => {
        expect(() => getCell(grid, { x: 10, y: 0 })).to.throw();
    });

    it ("throws an error for Y coordinate out of bounds", () => {
        expect(() => getCell(grid, { x: 0, y: 10 })).to.throw();
    });
});
