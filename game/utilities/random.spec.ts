import { expect } from "chai";
import { random } from "./random";

describe("Random number generator", () => {
    it ("returns a number within a min/max interval, inclusive", () => {
        const randomNumber = random(0, 9);
        expect(randomNumber).to.be.lessThan(10);
        expect(randomNumber).to.be.greaterThan(-1);
    });
});
