let connection;

const handleUserInput = function (input) {
  if (input === "\u0003") {
    process.exit();
  } else if (input === "w") {
    console.log("Move: up");
    connection.write("Move: up");
  } else if (input === "a") {
    console.log("Move: left");
    connection.write("Move: left");
  } else if (input === "s") {
    console.log("Move: down");
    connection.write("Move: down");
  } else if (input === "d") {
    console.log("Move: right");
    connection.write("Move: right");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = setupInput;
