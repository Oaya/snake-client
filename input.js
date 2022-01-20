const { MOVE_UP_KEY } = require("./constant");
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === MOVE_UP_KEY[5]) {
    process.exit();
  }
  if (key === MOVE_UP_KEY[0]) {
    connection.write("Move: up");
  }
  if (key === MOVE_UP_KEY[1]) {
    connection.write("Move: left");
  }
  if (key === MOVE_UP_KEY[2]) {
    connection.write("Move: down");
  }
  if (key === MOVE_UP_KEY[3]) {
    connection.write("Move: right");
  }
  if (key === MOVE_UP_KEY[4]) {
    connection.write("Say: Go! Go!");
  }
};

module.exports = { setupInput };
