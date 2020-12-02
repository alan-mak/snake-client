const { connect } = require('./client');
console.log('Connecting ...');
connect();

// Used for user input
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //Handling Ctrl + C
  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    }
  }
  stdin.on('data', handleUserInput)
  return stdin;
}
setupInput();

