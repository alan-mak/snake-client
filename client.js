const net = require('net');
const {IP, PORT} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // Message right after connecting to servier
  conn.on('connect', () => console.log("Successfully connected to game server"));
  // Snake display name
  conn.on('connect', () => conn.write("Name: MAK"));

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // interrpret messages from the server
  conn.on('data', data => console.log('Server Says:', data))
  return conn;
}

module.exports = {connect, net};