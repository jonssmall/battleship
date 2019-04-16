import { expect } from "chai";
import { axis, newHugeShip, newSmallShip } from "../models/ship";
import { newSquareGrid } from "./gridMaker";
import { addShip } from "./shipPlacer";

describe("Ship Placer", () => {
    it ("Puts a ship on an unoccupied square", () => {
        const grid = newSquareGrid(10);
        const ship = newSmallShip(axis.X, {x: 0, y: 0});
        addShip(grid, ship);
        expect(grid.rows[0].cells[0].occupiedBy).to.equal(ship);
    });

    it ("Does not put a ship on an occupied square", () => {
        const grid = newSquareGrid(10);
        const shipA = newSmallShip(axis.X, {x: 0, y: 0});
        const shipB = newSmallShip(axis.X, {x: 0, y: 0});
        addShip(grid, shipA);

        expect(() => addShip(grid, shipB)).to.throw("detected");
        expect(grid.rows[0].cells[0].occupiedBy).to.equal(shipA);
        expect(grid.rows[0].cells[0].occupiedBy).to.not.equal(shipB);
    });

    it ("Does not put a ship on an occupied square of a long ship", () => {
        const grid = newSquareGrid(10);
        const shipA = newHugeShip(axis.X, {x: 0, y: 3});
        const shipB = newHugeShip(axis.Y, {x: 3, y: 0});
        addShip(grid, shipA);
        expect(() => addShip(grid, shipB)).to.throw("detected");

        expect(grid.rows[3].cells[0].occupiedBy).to.equal(shipA);
        expect(grid.rows[3].cells[1].occupiedBy).to.equal(shipA);
        expect(grid.rows[3].cells[2].occupiedBy).to.equal(shipA);
        expect(grid.rows[3].cells[3].occupiedBy).to.equal(shipA);

        expect(grid.rows[0].cells[3].occupiedBy).to.not.equal(shipB);
        expect(grid.rows[1].cells[3].occupiedBy).to.not.equal(shipB);
        expect(grid.rows[2].cells[3].occupiedBy).to.not.equal(shipB);
        expect(grid.rows[3].cells[3].occupiedBy).to.not.equal(shipB);
    });

    it ("Does not put a ship over the right edge", () => {
        const grid = newSquareGrid(10);
        const ship = newHugeShip(axis.X, {x: 7, y: 0});

        expect(() => addShip(grid, ship)).to.throw("detected");
        expect(grid.rows[0].cells[6].occupiedBy).to.equal(null);
        expect(grid.rows[0].cells[7].occupiedBy).to.equal(null);
        expect(grid.rows[0].cells[8].occupiedBy).to.equal(null);
        expect(grid.rows[9].cells[9].occupiedBy).to.equal(null);
    });

    it ("Does not put a ship over the bottom edge", () => {
        const grid = newSquareGrid(10);
        const ship = newHugeShip(axis.Y, {x: 0, y: 7});

        expect(() => addShip(grid, ship)).to.throw("detected");
        expect(grid.rows[6].cells[0].occupiedBy).to.equal(null);
        expect(grid.rows[7].cells[0].occupiedBy).to.equal(null);
        expect(grid.rows[8].cells[0].occupiedBy).to.equal(null);
        expect(grid.rows[9].cells[0].occupiedBy).to.equal(null);
    });
});
