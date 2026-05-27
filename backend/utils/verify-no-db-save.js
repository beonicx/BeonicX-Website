/**
 * Verify that queries are NOT being saved to database
 * Run with: node utils/verify-no-db-save.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('../config/db');

async function verifyNoDatabaseSave() {
  try {
    console.log('🔍 Verifying that queries are NOT saved to database...\n');

    // Connect to database
    await connectDB();
    console.log('✅ Connected to database\n');

    const Contact = require('../models/contact');

    // Count all contacts
    const totalContacts = await Contact.countDocuments();
    console.log('📊 Total contacts in database:', totalContacts);

    // Count only query type contacts
    const queryTypeContacts = await Contact.countDocuments({ formType: 'query' });
    console.log('📊 Query type contacts in database:', queryTypeContacts);

    // Get the most recent entries
    const recentContacts = await Contact.find()
      .sort('-createdAt')
      .limit(5)
      .select('name email subject formType createdAt');

    console.log('\n📋 Last 5 database entries:');
    if (recentContacts.length === 0) {
      console.log('   (No entries found)');
    } else {
      recentContacts.forEach((contact, index) => {
        console.log(`\n   ${index + 1}. ${contact.name}`);
        console.log(`      Email: ${contact.email}`);
        console.log(`      Subject: ${contact.subject}`);
        console.log(`      Type: ${contact.formType}`);
        console.log(`      Date: ${contact.createdAt}`);
      });
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n✅ Verification Complete!');
    console.log('\n📝 Summary:');
    console.log(`   - Total database entries: ${totalContacts}`);
    console.log(`   - Query form entries: ${queryTypeContacts}`);
    console.log('\n💡 Expected Behavior:');
    console.log('   - When submitting via "Drop Your Queries":');
    console.log('     → Emails are sent ✅');
    console.log('     → Database entry is NOT created ❌');
    console.log('   - When submitting via regular contact form:');
    console.log('     → Emails are sent ✅');
    console.log('     → Database entry IS created ✅');

    // Check if "Test Query - Full Flow" was saved (it shouldn't be)
    const testQuery = await Contact.findOne({ subject: 'Test Query - Full Flow' });
    if (testQuery) {
      console.log('\n⚠️  WARNING: Test query was found in database!');
      console.log('   This should NOT happen. Query submissions should not be saved.');
    } else {
      console.log('\n✅ VERIFIED: Test queries are NOT being saved to database');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

verifyNoDatabaseSave();
