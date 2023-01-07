
// Create a Stopwatch?
// ----------------------------
function Stopwatch() {
  let startTime,
    endTime,
    running = false,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch is already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not running.");

    running = false;

    endTime = new Date();

    const total = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += total;
  };

  this.reset = function () {
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();