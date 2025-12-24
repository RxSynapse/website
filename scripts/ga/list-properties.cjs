/**
 * List Google Analytics 4 Properties
 *
 * This script lists all GA4 properties accessible to your service account.
 * Use this to find your Property ID to configure in other scripts.
 *
 * Usage: npm run ga:list-properties
 *
 * Setup:
 * 1. Make sure your service account has been added to your GA4 property
 * 2. Go to GA4 Admin > Property Settings to find your Property ID
 * 3. In GA4 Admin > Property Access Management, add your service account email as Viewer
 */

const GA4Client = require('./client.cjs');
const path = require('path');

// Configuration - same credentials as GSC
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');

async function main() {
  // We pass null as propertyId since we're just listing properties
  const client = new GA4Client(CREDENTIALS_PATH, null);

  try {
    await client.initialize();

    console.log('\n' + '═'.repeat(80));
    console.log('📊 GOOGLE ANALYTICS 4 PROPERTIES');
    console.log('═'.repeat(80));
    console.log('');

    const properties = await client.listProperties();

    if (properties.length === 0) {
      console.log('⚠️  No GA4 properties found.');
      console.log('');
      console.log('This means your service account does not have access to any GA4 properties.');
      console.log('');
      console.log('To grant access:');
      console.log('1. Go to GA4 Admin > Property Access Management');
      console.log('2. Click "+" to add users');
      console.log('3. Add your service account email (found in credentials JSON)');
      console.log('4. Assign at least "Viewer" role');
      console.log('');
    } else {
      console.log(`Found ${properties.length} GA4 ${properties.length === 1 ? 'property' : 'properties'}:\n`);

      properties.forEach((property, index) => {
        console.log(`${index + 1}. ${property.displayName || 'Unnamed Property'}`);
        console.log(`   Property ID: ${property.name.replace('properties/', '')}`);
        console.log(`   Industry: ${property.industryCategory || 'Not specified'}`);
        console.log(`   Time Zone: ${property.timeZone || 'Not specified'}`);
        console.log(`   Currency: ${property.currencyCode || 'Not specified'}`);
        console.log('');
      });

      console.log('━'.repeat(80));
      console.log('💡 Next Steps:');
      console.log('');
      console.log('1. Copy the Property ID from above (just the numeric part)');
      console.log('2. Update your GA4 scripts to use this Property ID');
      console.log('3. Run other GA4 scripts like:');
      console.log('   - npm run ga:traffic        (Get traffic report)');
      console.log('   - npm run ga:realtime       (Get realtime visitors)');
      console.log('   - npm run ga:weekly-report  (Weekly performance report)');
      console.log('');
    }

    console.log('═'.repeat(80));
    console.log('');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('');
    console.log('Common issues:');
    console.log('- Service account not added to GA4 property');
    console.log('- Incorrect credentials file path');
    console.log('- API not enabled in Google Cloud Console');
    console.log('');
    process.exit(1);
  }
}

main();
