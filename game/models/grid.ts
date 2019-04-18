import { Ship } from "./ship";

export interface Grid {
    rows: Row[];
}

export interface Row {
    cells: Cell[];
}

export interface Cell {
    discovered: boolean;
    occupiedBy: null | Ship;
}
