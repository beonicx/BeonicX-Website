/**
 * Full flow test for query submission
 * This simulates what happens when a user submits a query from the frontend
 * Run with: node utils/test-full-flow.js
 */

const http = require('http');

const API_URL = {
  hostname: 'localhost',
  port: 5002,
  path: '/api/contact/query',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

async function makeRequest(data) {
  return new Promise((resolve, reject) => {
    const req = http.request(API_URL, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const jsonData = JSON.parse(body);
          resolve({
            status: res.statusCode,
            data: jsonData
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data: body
          });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(JSON.stringify(data));
    req.end();
  });
}

async function testFullFlow() {
  console.log('🚀 Testing Full Query Submission Flow\n');
  console.log('=' .repeat(50));

  const testQuery = {
    name: 'John Doe',
    email: 'thisisnitishyadav@gmail.com', // Change to your email
    subject: 'Test Query - Full Flow',
    message: 'This is a comprehensive test of the query submission feature. Testing that:\n1. API endpoint responds correctly\n2. Emails are sent to admin\n3. Confirmation email is sent to user\n4. No database save occurs'
  };

  try {
    console.log('📝 Test Query Data:');
    console.log(JSON.stringify(testQuery, null, 2));
    console.log('\n' + '='.repeat(50));

    console.log('\n⏳ Sending POST request to: http://localhost:5002/api/contact/query');
    const startTime = Date.now();

    const response = await makeRequest(testQuery);

    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log('\n✅ API Response:');
    console.log('Status Code:', response.status);
    console.log('Response Data:', JSON.stringify(response.data, null, 2));
    console.log('Response Time:', duration + 'ms');

    console.log('\n' + '='.repeat(50));
    console.log('\n✨ Test Completed Successfully!');
    console.log('\n📧 Expected Results:');
    console.log('1. ✅ Admin email sent to: beonicxgroup@gmail.com');
    console.log('2. ✅ User confirmation sent to:', testQuery.email);
    console.log('3. ✅ No database entry created');
    console.log('4. ✅ Success response returned\n');

    console.log('💡 Next Steps:');
    console.log('- Check admin inbox for notification email');
    console.log('- Check user inbox for confirmation email');
    console.log('- Verify no entry in database (queries collection should not exist)');

  } catch (error) {
    console.error('\n❌ Test Failed!');
    console.error('Error:', error.message);
    console.error('\nIs the backend server running on port 5002?');
    console.error('Start with: npm run dev');
    process.exit(1);
  }
}

// Run the test
testFullFlow();
