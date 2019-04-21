import { Cell, Grid, Row } from "../../game/models/grid";

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
    return uiCell;
}
