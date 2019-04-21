import { newSquareGrid } from "../../game/maker/gridMaker";
import { gridToBoard } from "../misc/gridToBoard";

const grid = newSquareGrid(10);
const board = gridToBoard(grid);

const app = document.querySelector("#app");

if (app) {
    app.appendChild(board);
}
