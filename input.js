let connection;
// Used for user input
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // makes the snake move
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = ("data", data => {
  //Handling Ctrl + C
  if (data === '\u0003') {
    process.exit();
  }
  //Handle movements
  if (data === 'w') {
    connection.write('Move: up')
  } else if (data === 's') {
    connection.write('Move: down')
  } else if (data === 'a') {
    connection.write('Move: left')
  } else if (data === 'd') {
    connection.write('Move: right')
  } else if (data === 'q') {
    connection.write("Say: newb")
  }
})

module.exports = {setupInput};