const { connect } = require("../snake-client/client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();
setupInput();
