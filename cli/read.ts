import { createInterface } from "readline";
import { Coordinate } from "../game/models/coordinate";
import { Grid } from "../game/models/grid";
import { outOfRange } from "../game/utilities/getCell";

export function readFactory(grid: Grid) {
    const height = grid.rows.length;
    const width = grid.rows[0].cells.length;
    const rule = new RegExp(/\d,\d/);

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return {
        getCoordinate: () => {
            rl.question(promptText(height, width), (answer) => {
                if (isValidFormat(answer, rule)) {
                    const [x, y] = answer.split(",");
                    const coord: Coordinate = {
                        x: parseInt(x, 10),
                        y: parseInt(y, 10),
                    };
                    if (outOfRange(grid, coord)) {
                        console.log(`Coordinates out of range: ${answer}`);
                    } else {
                        console.log(`Coordinates selected: ${answer}`);
                    }
                } else {
                    console.log(`Invalid coordinate format: ${answer}`);
                }
                rl.close();
            });
        },
    };
}

function promptText(height: number, width: number): string {
    return `Please enter a coordinate in the format x,y\nWithin range 0,0 and ${width - 1},${height - 1}\n\n`;
}

function isValidFormat(userInput: string, rule: RegExp): boolean {
    return rule.test(userInput);
}
