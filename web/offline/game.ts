import { newSquareGrid } from "../../game/maker/gridMaker";
import { Coordinate } from "../../game/models/coordinate";
import { Cell } from "../../game/models/grid";
import { playerFactory } from "../../game/models/player";
import { getCell } from "../../game/utilities/getCell";
import { gridToBoard } from "../misc/gridToBoard";
import "./style.css";

const playerGrid = newSquareGrid(10);
const botGrid = newSquareGrid(10);
const player = playerFactory(playerGrid, botGrid);
const bot = playerFactory(botGrid, playerGrid);

const board = gridToBoard(botGrid);

const app = document.querySelector("#app");

if (app) {
    app.appendChild(board);
}

// todo: clarity of scope in gridToBoard
export function discoverCell(coord: Coordinate): Cell {
    const cell = getCell(botGrid, coord);
    player.checkSquare(cell);
    return cell;
}
