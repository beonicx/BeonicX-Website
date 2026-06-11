#!/usr/bin/env node

/**
 * Production Readiness Checker
 * Verifies all environment variables and dependencies are properly configured
 */

require('dotenv').config();

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('🔍 Running Production Readiness Checks...\n');

// Check 1: Environment Variables
console.log('1️⃣  Checking Environment Variables...');
const requiredEnvVars = [
  'NODE_ENV',
  'PORT',
  'MONGODB_URI',
  'JWT_SECRET',
  'EMAIL_HOST',
  'EMAIL_PORT',
  'EMAIL_USER',
  'EMAIL_PASS',
  'EMAIL_FROM',
  'ADMIN_EMAIL'
];

requiredEnvVars.forEach(envVar => {
  if (process.env[envVar]) {
    checks.passed.push(`✅ ${envVar} is set`);
  } else {
    checks.failed.push(`❌ ${envVar} is missing`);
  }
});

// Check 2: MongoDB URI Format
console.log('\n2️⃣  Validating MongoDB Connection String...');
if (process.env.MONGODB_URI) {
  if (process.env.MONGODB_URI.startsWith('mongodb://') ||
      process.env.MONGODB_URI.startsWith('mongodb+srv://')) {
    checks.passed.push('✅ MongoDB URI format is valid');
  } else {
    checks.failed.push('❌ MongoDB URI format is invalid');
  }
} else {
  checks.failed.push('❌ MONGODB_URI not set');
}

// Check 3: Port Configuration
console.log('\n3️⃣  Checking Port Configuration...');
const port = parseInt(process.env.PORT);
if (port && port > 0 && port < 65536) {
  checks.passed.push(`✅ PORT ${port} is valid`);
} else {
  checks.failed.push('❌ PORT is invalid or not set');
}

// Check 4: Email Configuration
console.log('\n4️⃣  Validating Email Configuration...');
if (process.env.EMAIL_HOST && process.env.EMAIL_PORT &&
    process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  checks.passed.push('✅ Email configuration is complete');

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(process.env.EMAIL_FROM)) {
    checks.passed.push('✅ EMAIL_FROM format is valid');
  } else {
    checks.warnings.push('⚠️  EMAIL_FROM format may be invalid');
  }

  if (emailRegex.test(process.env.ADMIN_EMAIL)) {
    checks.passed.push('✅ ADMIN_EMAIL format is valid');
  } else {
    checks.warnings.push('⚠️  ADMIN_EMAIL format may be invalid');
  }
} else {
  checks.failed.push('❌ Email configuration is incomplete');
}

// Check 5: JWT Secret Strength
console.log('\n5️⃣  Checking JWT Secret Strength...');
if (process.env.JWT_SECRET) {
  if (process.env.JWT_SECRET.length >= 32) {
    checks.passed.push('✅ JWT_SECRET is strong');
  } else {
    checks.warnings.push('⚠️  JWT_SECRET should be at least 32 characters');
  }
} else {
  checks.failed.push('❌ JWT_SECRET not set');
}

// Check 6: Node Environment
console.log('\n6️⃣  Checking Node Environment...');
if (process.env.NODE_ENV === 'production') {
  checks.passed.push('✅ NODE_ENV is set to production');
} else if (process.env.NODE_ENV === 'development') {
  checks.warnings.push('⚠️  NODE_ENV is set to development (should be production for deployment)');
} else {
  checks.warnings.push('⚠️  NODE_ENV is not set or has an unexpected value');
}

// Check 7: Required Dependencies
console.log('\n7️⃣  Checking Required Dependencies...');
const requiredDeps = [
  'express',
  'mongoose',
  'dotenv',
  'nodemailer',
  'express-validator',
  'cors',
  'helmet'
];

try {
  const packageJson = require('../package.json');
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      checks.passed.push(`✅ ${dep} is installed`);
    } else {
      checks.failed.push(`❌ ${dep} is missing`);
    }
  });
} catch (error) {
  checks.failed.push('❌ Could not read package.json');
}

// Print Results
console.log('\n' + '='.repeat(60));
console.log('📊 PRODUCTION READINESS REPORT');
console.log('='.repeat(60) + '\n');

if (checks.passed.length > 0) {
  console.log('✅ PASSED CHECKS:');
  checks.passed.forEach(check => console.log('   ' + check));
  console.log('');
}

if (checks.warnings.length > 0) {
  console.log('⚠️  WARNINGS:');
  checks.warnings.forEach(warning => console.log('   ' + warning));
  console.log('');
}

if (checks.failed.length > 0) {
  console.log('❌ FAILED CHECKS:');
  checks.failed.forEach(fail => console.log('   ' + fail));
  console.log('');
}

console.log('='.repeat(60));
console.log(`Total: ${checks.passed.length} passed, ${checks.warnings.length} warnings, ${checks.failed.length} failed`);
console.log('='.repeat(60) + '\n');

if (checks.failed.length > 0) {
  console.log('🔴 PRODUCTION DEPLOYMENT: NOT READY');
  console.log('Please fix all failed checks before deploying to production.\n');
  process.exit(1);
} else if (checks.warnings.length > 0) {
  console.log('🟡 PRODUCTION DEPLOYMENT: READY WITH WARNINGS');
  console.log('Review warnings before deploying to production.\n');
  process.exit(0);
} else {
  console.log('🟢 PRODUCTION DEPLOYMENT: READY');
  console.log('All checks passed! Safe to deploy to production.\n');
  process.exit(0);
}
