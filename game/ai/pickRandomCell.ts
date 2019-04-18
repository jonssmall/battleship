import { Cell, Grid } from "../models/grid";
import { random } from "../utilities/random";

// flatten grid to one dimensional array of cells
// filter already discovered cells
// generate random number, 0 through array.length - 1
// grab cell from randomly generated index
export function getRandomCell(grid: Grid): Cell {
    const flattenedUndiscovered = grid.rows.reduce((acc: Cell[], r) => {
        acc.push(...r.cells.filter((c) => !c.discovered));
        return acc;
    }, []);

    return flattenedUndiscovered[random(0, flattenedUndiscovered.length - 1)];
}
