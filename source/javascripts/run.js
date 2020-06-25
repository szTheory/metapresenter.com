export const runWithDelay = function ({ callbackFunction }) {
  run({
    callbackFunction: function () {
      setTimeout(() => {
        callbackFunction();
      }, 0);
    },
  });
};

export const runAsap = function ({ callbackFunction }) {
  runWithDelay({ callbackFunction: callbackFunction, delay: 0 });
};

// if already fired run callback immediately
// otherwise wait for DOM to finish loading
// source: https://stackoverflow.com/a/50026257
function run({ callbackFunction }) {
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    callbackFunction();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", callbackFunction());
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") {
        callbackFunction();
      }
    });
  }
}
