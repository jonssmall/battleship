import { newSquareGrid } from "../game/maker/gridMaker";
import { readFactory } from "./read";

const grid = newSquareGrid(10);

readFactory(grid).getCoordinate();
