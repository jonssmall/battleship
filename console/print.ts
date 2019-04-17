import { Grid, Cell } from "../models/grid";

// Print each grid.row on its own row separated by a newline
// print each row.cell as an array shape "[ ]"
// with the following:
//  1. if the cell is undiscovered, empty space  " "
//  2. if the cell is discovered + empty, a dash "-"
//  3. if the cell is discovered + ship, an X    "X"
export function printGrid(grid: Grid): void {
    grid.rows.forEach((r) => {
        console.log(r.cells.map((c) => `[${cellToState(c)}]`).join(""));
    });
}

function cellToState(cell: Cell): string {
    if (cell.discovered && cell.occupiedBy) {
        return "X";
    } else if (cell.discovered && !cell.occupiedBy) {
        return "-";
    } else {
        return " ";
    }
}
