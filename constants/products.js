import { ALL } from "./all";
import { shuffleArray } from "../libs/mixin";

const STANDOUT = shuffleArray(ALL).slice(0, 10);

export { STANDOUT };
