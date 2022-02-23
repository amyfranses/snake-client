// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
    // code that does something when the connection is first established
  });
  conn.on("connect", () => {
    console.log("You are successfully connected to game server");
    conn.write("Name: AF");
    // code that does something when the connection is first established
  });

  return conn;
};
module.exports = { connect };
