#!/usr/bin/env node

/**
 * Port availability checker
 * Checks if the specified port is available before starting the server
 */

const net = require('net');

const PORT = process.env.PORT || 5002;

function checkPort(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        reject(err);
      }
    });

    server.once('listening', () => {
      server.close();
      resolve(true);
    });

    server.listen(port);
  });
}

async function main() {
  console.log(`🔍 Checking if port ${PORT} is available...`);

  const isAvailable = await checkPort(PORT);

  if (isAvailable) {
    console.log(`✅ Port ${PORT} is available\n`);
    process.exit(0);
  } else {
    console.error(`❌ Port ${PORT} is already in use!`);
    console.error('\nTo free up the port, run:');
    console.error(`  lsof -ti:${PORT} | xargs kill -9\n`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Error checking port:', error);
  process.exit(1);
});
