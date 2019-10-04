/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
var assert = require("assert");
var chaiHttp = require("chai-http");
var expect = require("chai").expect;
var server = require("./../server.js");
var stopwatch = require("./../public/js/stopwatch");
var timer = stopwatch.timer;

testStart = function () {
  timer.clockRunning = false;
  setTimeout(function () {
    timer.count();
    expect(timer.time).to.equal(1);
  }, 1001);
}

describe("canary test", function () {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function () {
    expect(true).to.be.true;
  });
});


describe("timer initial value test", function () {
  it("should start at 0", function () {
    //expect start() to increase intervalId
    expect(timer.time).to.equal(0);
    //
  });
});

describe("timer start test", function () {
  it("should start when start function initiated", function () {
    expect(timer.time).to.equal(0);
    timer.start();
    expect(timer.start).not.to.throw; // Recommended


    testStart();
    //
  });
});

describe("timer stop test", function () {
  it("should stop when stop function is initiated", function () {
    timer.reset();
    expect(timer.time).to.equal(0);
    timer.start();
    expect(timer.start).not.to.throw; // Recommended
    setTimeout(function () {
      timer.start();
      setTimeout(function () {
        expect(timer.time).to.equal(1);
        timer.stop();
      }, 1000);
      expect(timer.time).to.equal(1);
    }, 3001);


  });
});

// describe("timer reset test", function () {
//   it("should reset when stop is pressed", function () {



//     setTimeout(function () {
//       timer.start();
//       setTimeout(function () {
//       setTimeout(function () {
//         timer.start();
//         setTimeout(function(){
//         expect(timer.time).to.equal(2);
//       },2000)
//         timer.stop();
//       }, 2001);
//       timer.reset();
//       expect(timer.time).to.equal(0);
//     }, 3001);
//   },4000)
//   });
// });
//test timer in chai & mocha & jest??
