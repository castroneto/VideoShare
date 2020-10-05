const localtunnel = require('localtunnel');


module.exports = async (port) => {
  const tunnel = await localtunnel({ port: port });
  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  console.log(tunnel.url)
 
  tunnel.on('close', () => {
    // tunnels are closed
  });
}