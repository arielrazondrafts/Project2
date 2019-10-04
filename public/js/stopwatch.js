/* eslint-disable prettier/prettier */
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
this.onload = function () {
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#pause").on("click", pause);
  $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;

function reset() {
  time = 0;

  // DONE: Change the "display" div to "00:00."
  $("#display").text("00:00");

  // DONE: Empty the "laps" div.
  $("#laps").text("");
}

function start() {
  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

function pause() {
  clearInterval(intervalId);
  clockRunning = false;
}
function stop() {
  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false;

  var converted = Math.ceil(time / 60);
  // DONE: Add the current lap and time to the "laps" div.
  $("#timeMessage").prepend(
    "<p>Good job! You worked " + converted + " minutes!</p>"
  );
  var mathAmount =
    (converted / 60) *
    $("#hourly")
      .val()
      .trim();
  $("#invoice-input").val(mathAmount);
}

function count() {
  // DONE: increment time by 1, remember we cant use "this" here.
  time++;
  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);
  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#display").text(converted);
}
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

exports.timer = {
  intervalId: intervalId,
  clockRunning: clockRunning,
  time: time,
  reset: function () {
    this.time = 0;
  },
  start: function () {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!this.clockRunning) {
      this.intervalId = setInterval(this.count, 1000);
      this.clockRunning = true;
    }
  },
  pause: pause,
  stop: function () {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(this.intervalId);
    this.clockRunning = false;
  },
  count: function () {
    // DONE: increment time by 1, remember we cant use "this" here.
    this.time++;
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    return this.time;
  },
  timeConverter: timeConverter
};
