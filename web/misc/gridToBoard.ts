import { Coordinate } from "../../game/models/coordinate";
import { Cell, Grid, Row } from "../../game/models/grid";
import { discoverCell } from "../offline/game";

export function gridToBoard(grid: Grid): HTMLElement {
    const board = document.createElement("div");

    const rows = grid.rows.map(rowToDiv);
    rows.forEach((r) => board.appendChild(r));

    return board;
}

function rowToDiv(row: Row, index: number): HTMLElement {
    const uiRow = document.createElement("div");
    uiRow.setAttribute("data-row", index.toString());

    const cells = row.cells.map(cellToDiv);
    cells.forEach((c) => uiRow.appendChild(c));

    return uiRow;
}

function cellToDiv(cell: Cell, index: number): HTMLElement {
    const uiCell = document.createElement("div");

    uiCell.setAttribute("data-cell", index.toString());
    uiCell.classList.add("cell");

    uiCell.addEventListener("click", (e) => {
        const coords = targetToCoords(e.target as HTMLElement);
        const nextCell = discoverCell(coords);

        if (nextCell.discovered) {
            if (nextCell.occupiedBy) {
                uiCell.classList.add("occupied");
            } else {
                uiCell.classList.add("discovered");
            }
        }
    });

    return uiCell;
}

function targetToCoords(target: HTMLElement): Coordinate {
    const x = target.getAttribute("data-cell");
    const y = target.parentElement.getAttribute("data-row");

    return {
        x: parseInt(x, 10),
        y: parseInt(y, 10),
    };
}
