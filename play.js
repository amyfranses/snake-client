const { connect } = require("./client.js");

console.log("Connecting ...");
connect();

const handleUserInput = function (input) {
  if (input === "\u0003") {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput();
