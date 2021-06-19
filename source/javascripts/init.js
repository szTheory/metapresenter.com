import { runAsap } from "./run.js";
import { setupScroll } from "./navscroll.js";

export const init = function () {
  runAsap({ callbackFunction: setupScroll });
};
