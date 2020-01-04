import { runAsap } from "./run.js";
import { setupStargazerCounters } from "./github.js";
import { setupScroll } from "./navscroll.js";

export const init = function() {
  runAsap({ callbackFunction: setupStargazerCounters });
  runAsap({ callbackFunction: setupScroll });
};
