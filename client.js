const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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