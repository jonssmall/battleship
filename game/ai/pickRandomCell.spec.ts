import { expect } from "chai";
import { newSquareGrid } from "../maker/gridMaker";
import { getRandomCell } from "./pickRandomCell";

describe("Random cell picker", () => {
    it ("returns an undiscovered cell from a grid", () => {
        const grid = newSquareGrid(10);
        grid.rows[0].cells.forEach((c) => c.discovered === true);
        grid.rows[2].cells.forEach((c) => c.discovered === true);
        grid.rows[4].cells.forEach((c) => c.discovered === true);
        grid.rows[6].cells.forEach((c) => c.discovered === true);
        grid.rows[8].cells.forEach((c) => c.discovered === true);

        expect(getRandomCell(grid).discovered).to.eql(false);
    });
});
