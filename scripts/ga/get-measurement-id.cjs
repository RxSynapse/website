/**
 * Get GA4 Measurement ID (Web Stream ID)
 *
 * This script retrieves your GA4 Measurement ID (also called Web Stream ID or Tag ID)
 * which is needed to install the GA4 tracking code on your website.
 *
 * The Measurement ID format is: G-XXXXXXXXXX
 *
 * Usage: npm run ga:get-measurement-id
 */

const GA4Client = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const PROPERTY_ID = '517318746';

async function main() {
  const client = new GA4Client(CREDENTIALS_PATH, PROPERTY_ID);

  try {
    await client.initialize();

    console.log('\n' + '═'.repeat(80));
    console.log('🔍 FINDING GA4 MEASUREMENT ID (Web Stream ID)');
    console.log('═'.repeat(80));
    console.log('');

    // List all data streams for this property
    console.log('Fetching data streams for property:', PROPERTY_ID);
    console.log('');

    const response = await client.analyticsAdmin.properties.dataStreams.list({
      parent: `properties/${PROPERTY_ID}`,
    });

    const dataStreams = response.data.dataStreams || [];

    if (dataStreams.length === 0) {
      console.log('❌ No data streams found for this property.');
      console.log('');
      console.log('You need to create a Web Data Stream first:');
      console.log('1. Go to https://analytics.google.com/');
      console.log('2. Select your property');
      console.log('3. Go to Admin > Data Streams');
      console.log('4. Click "Add stream" > "Web"');
      console.log('5. Enter your website URL: https://rxsynapse.com');
      console.log('6. Give it a name (e.g., "RxSynapse Website")');
      console.log('7. Click "Create stream"');
      console.log('');
      process.exit(1);
    }

    console.log(`Found ${dataStreams.length} data stream(s):\n`);

    dataStreams.forEach((stream, index) => {
      console.log(`${index + 1}. ${stream.displayName || 'Unnamed Stream'}`);
      console.log(`   Type: ${stream.type || 'Unknown'}`);

      if (stream.type === 'WEB_DATA_STREAM') {
        console.log(`   Website URL: ${stream.webStreamData?.defaultUri || 'Not set'}`);
        console.log(`   ✅ Measurement ID: ${stream.webStreamData?.measurementId || 'Not found'}`);
      } else if (stream.type === 'ANDROID_APP_DATA_STREAM') {
        console.log(`   Package Name: ${stream.androidAppStreamData?.packageName || 'Not set'}`);
      } else if (stream.type === 'IOS_APP_DATA_STREAM') {
        console.log(`   Bundle ID: ${stream.iosAppStreamData?.bundleId || 'Not set'}`);
      }

      console.log(`   Stream ID: ${stream.name.split('/').pop()}`);
      console.log('');
    });

    // Find the web stream for rxsynapse.com
    const webStream = dataStreams.find(stream =>
      stream.type === 'WEB_DATA_STREAM' &&
      stream.webStreamData?.defaultUri?.includes('rxsynapse.com')
    );

    if (webStream) {
      const measurementId = webStream.webStreamData?.measurementId;

      console.log('━'.repeat(80));
      console.log('🎯 YOUR GA4 MEASUREMENT ID');
      console.log('━'.repeat(80));
      console.log('');
      console.log(`   ${measurementId}`);
      console.log('');
      console.log('━'.repeat(80));
      console.log('📋 NEXT STEPS');
      console.log('━'.repeat(80));
      console.log('');
      console.log('1. Copy the Measurement ID above');
      console.log('2. Create .env.local file in your project root:');
      console.log(`   NEXT_PUBLIC_GA_MEASUREMENT_ID=${measurementId}`);
      console.log('');
      console.log('3. The GA4 tracking code will be automatically added to your site');
      console.log('4. Verify tracking is working:');
      console.log('   - Run: npm run ga:realtime -- --watch');
      console.log('   - Visit your website in another browser');
      console.log('   - You should see active users increase');
      console.log('');
    } else {
      console.log('━'.repeat(80));
      console.log('⚠️  NO WEB STREAM FOR rxsynapse.com FOUND');
      console.log('━'.repeat(80));
      console.log('');
      console.log('Please create a Web Data Stream:');
      console.log('1. Go to https://analytics.google.com/');
      console.log('2. Select your property');
      console.log('3. Go to Admin > Data Streams');
      console.log('4. Click "Add stream" > "Web"');
      console.log('5. Enter URL: https://rxsynapse.com');
      console.log('6. Give it a name: "RxSynapse Website"');
      console.log('7. Click "Create stream"');
      console.log('8. Run this script again to get your Measurement ID');
      console.log('');
    }

    console.log('═'.repeat(80));
    console.log('');

  } catch (error) {
    console.error('\n❌ Error:', error.message);

    if (error.message.includes('403')) {
      console.log('');
      console.log('Permission issue detected. Your service account needs "Editor" role:');
      console.log('1. Go to GA4 Admin > Property Access Management');
      console.log('2. Find your service account');
      console.log('3. Change role from "Viewer" to "Editor" (needed to list data streams)');
      console.log('');
    } else {
      console.log('');
      console.log('Common issues:');
      console.log('- Service account needs at least Viewer access to list streams');
      console.log('- Property ID might be incorrect');
      console.log('- GA Admin API not enabled in Google Cloud Console');
      console.log('');
    }

    process.exit(1);
  }
}

main();
