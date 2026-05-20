const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

// Generate secure random token
exports.generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Hash a token
exports.hashToken = token => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

// Format price for display
exports.formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

// Clean file name for security
exports.sanitizeFileName = (fileName) => {
  return fileName
    .replace(/\s+/g, '-')          // Replace spaces with dashes
    .replace(/[^a-zA-Z0-9\-_.]/g, '') // Remove non-alphanumeric chars except dashes, dots and underscores
    .toLowerCase();
};

// Delete file if exists
exports.deleteFileIfExists = (filePath) => {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    return true;
  }
  return false;
};

// Generate a unique slug
exports.generateUniqueSlug = (baseSlug, existingSlugs) => {
  let slug = baseSlug;
  let counter = 1;
  
  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return slug;
};

// Paginate array
exports.paginateArray = (array, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  
  return array.slice(startIndex, endIndex);
};