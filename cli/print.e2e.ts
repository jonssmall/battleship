import { newSquareGrid } from "../game/maker/gridMaker";
import { Grid } from "../game/models/grid";
import { playerFactory } from "../game/models/player";
import { printGrid } from "./print";

const grid = newSquareGrid(10);
const gridB = newSquareGrid(10);

playerFactory(grid, gridB); // currently randomizes ship placement

function discoverAll(g: Grid): Grid {
    g.rows.forEach((r) => {
        r.cells.forEach((c) => {
            c.discovered = true;
        });
    });
    return g;
}

discoverAll(grid);
printGrid(grid);
