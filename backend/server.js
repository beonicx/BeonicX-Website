require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const app = require('./app');
const { connectDB } = require('./config/db');

// Global error tracking
let isShuttingDown = false;
let server = null;

// Graceful shutdown function
const gracefulShutdown = async (signal) => {
  if (isShuttingDown) {
    console.log('Shutdown already in progress...');
    return;
  }

  isShuttingDown = true;
  console.log(`\n${signal} signal received: Starting graceful shutdown...`);

  // Stop accepting new connections
  if (server) {
    console.log('Closing HTTP server...');
    server.close(async (err) => {
      if (err) {
        console.error('Error closing HTTP server:', err);
      } else {
        console.log('✅ HTTP server closed');
      }

      // Close database connections
      try {
        console.log('Closing database connections...');
        await mongoose.connection.close(false);
        console.log('✅ Database connections closed');
      } catch (error) {
        console.error('Error closing database:', error);
      }

      // Exit process
      console.log('Exiting process...');
      process.exit(err ? 1 : 0);
    });

    // Force close after 10 seconds
    setTimeout(() => {
      console.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  } else {
    process.exit(0);
  }
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('\n💥 UNCAUGHT EXCEPTION! Shutting down...');
  console.error('Error Name:', err.name);
  console.error('Error Message:', err.message);
  console.error('Error Stack:', err.stack);

  // If it's EADDRINUSE, log helpful message
  if (err.code === 'EADDRINUSE') {
    console.error('\n🔴 PORT ALREADY IN USE!');
    console.error('Another process is using port', process.env.PORT || 5002);
    console.error('\nTo fix this:');
    console.error('1. Stop all running backend processes');
    console.error('2. Run: lsof -ti:5002 | xargs kill -9');
    console.error('3. Restart the server\n');
  }

  gracefulShutdown('UNCAUGHT_EXCEPTION');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('\n💥 UNHANDLED REJECTION! Shutting down...');
  console.error('Error Name:', err.name);
  console.error('Error Message:', err.message);
  console.error('Error Stack:', err.stack);

  gracefulShutdown('UNHANDLED_REJECTION');
});

// Handle graceful shutdown signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Start server function
const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();

    const PORT = process.env.PORT || 5002;

    // Start HTTP server
    server = app.listen(PORT, () => {
      console.log(`\n🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
      console.log(`📡 API Base URL: http://localhost:${PORT}/api`);
      console.log(`📝 Contact endpoint: http://localhost:${PORT}/api/contact`);
      console.log(`\n✅ Server is ready to accept connections`);
      console.log(`Press Ctrl+C to stop the server\n`);
    });

    // Handle server errors
    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`\n🔴 ERROR: Port ${PORT} is already in use`);
        console.error('Please ensure no other instance is running or change the PORT in .env file\n');
        process.exit(1);
      } else {
        console.error('Server error:', error);
        process.exit(1);
      }
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();
