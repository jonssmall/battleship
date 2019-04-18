import { newSquareGrid } from "./maker/gridMaker";
import { Grid } from "./models/grid";
import { Player, playerFactory } from "./models/player";

export function newGame(): Game {
    const gridA = newSquareGrid(10);
    const gridB = newSquareGrid(10);

    return {
        currentTurn: this.self,
        enemy: {
            board: gridB,
            user: playerFactory(gridB, gridA),
        },
        self: {
            board: gridA,
            user: playerFactory(gridA, gridB),
        },
        winner: null,
    };
}

interface Game {
    self: {
        user: Player,
        board: Grid,
    };
    enemy: {
        user: Player,
        board: Grid,
    };
    winner: null | Player;
    currentTurn: Player;
}
