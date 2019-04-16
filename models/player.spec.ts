import { expect } from "chai";
import { newSquareGrid } from "../maker/gridMaker";
import { playerFactory } from "./player";

describe("Player Constructor", () => {
    it ("Makes a player with a fleet: 4 small, 3 med, 2 large, 1 huge", () => {
        const player = playerFactory(newSquareGrid(10), newSquareGrid(10));

        expect(player.fleet.length).to.eql(10);
    });
});
