import * as PRODUCT from "./all";
import { shuffleArray } from "../libs/mixin";

const STANDOUT = shuffleArray(PRODUCT.ALL).slice(0, 10);

export { STANDOUT, PRODUCT };
