import { getRandomCell } from "../game/ai/pickRandomCell";
import { newSquareGrid } from "../game/maker/gridMaker";
import { playerFactory } from "../game/models/player";
import { printGrid } from "./print";

// zero-player AI vs. AI game.
// instantiate 2 players with randomly generated fleets
// each takes turns randomly selecting undiscovered cells
// after selection, check if enemy's fleet is completely sunk
// end game and declare winner if so
// print winner + loser boards

function zeroPlayerGame() {
    const gridA = (newSquareGrid(10));
    const gridB = (newSquareGrid(10));

    const botA = playerFactory(gridA, gridB);
    const botB = playerFactory(gridB, gridA);

    let done = false;
    let currentPlayer = botA;
    let enemyGrid = gridB;
    let turn = 1;
    while (!done) {
        // todo: revisit the purpose of player.checkSquare
        currentPlayer.checkSquare(getRandomCell(enemyGrid));

        if (botA.isFleetDestroyed() || botB.isFleetDestroyed()) {
            done = true;
        } else {
            currentPlayer = currentPlayer === botA ? botB : botA;
            enemyGrid = enemyGrid === gridA ? gridB : gridA;
            turn++;
        }
    }

    console.log(`Total turns elapsed: ${turn}`);
    // todo: refactor this
    if (botA.isFleetDestroyed()) {
        console.log("Winner: Bot B");
        printGrid(gridB);
        console.log("Loser: Bot A");
        printGrid(gridA);
    } else {
        console.log("Winner: Bot A");
        printGrid(gridA);
        console.log("Loser: Bot B");
        printGrid(gridB);
    }

}

zeroPlayerGame();
