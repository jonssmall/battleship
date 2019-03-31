import { expect } from "chai";
import { newSquareGrid } from "./gridMaker";

describe("Grid Maker", () => {
    const grid = newSquareGrid(10);
    it ("Makes a square", () => {
        expect(grid.rows.length).to.equal(10);
        grid.rows.forEach((r) => {
            expect(r.cells.length).to.equal(10);
        });
    });
});
