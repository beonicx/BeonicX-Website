require('dotenv').config();

module.exports = {
  // Server configuration
  port: process.env.PORT || 5001,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // MongoDB configuration
  mongo: {
    uri: process.env.MONGO_URI ,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  
  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET ,
    expiresIn: process.env.JWT_EXPIRES_IN || '90d',
    cookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN || 90
  },
  
  // Email configuration
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM || 'noreply@beonicx.com',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@beonicx.com'
  },
  
  // Upload configuration
  upload: {
    maxSize: process.env.UPLOAD_MAX_SIZE || 5 * 1024 * 1024, // 5MB
    directory: process.env.UPLOAD_DIRECTORY || 'uploads'
  },
  
  // Rate limiting
  rateLimit: {
    windowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, // 15 minutes
    max: process.env.RATE_LIMIT_MAX || 100 // Limit each IP to 100 requests per windowMs
  },
  
  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
};