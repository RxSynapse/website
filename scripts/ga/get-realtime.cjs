/**
 * Get GA4 Realtime Traffic
 *
 * This script shows realtime visitors on your website right now.
 * Great for monitoring live traffic, events, or campaigns.
 *
 * Usage: npm run ga:realtime
 *
 * Options:
 *   --watch    Refresh every 10 seconds (Ctrl+C to stop)
 *
 * Example: npm run ga:realtime -- --watch
 */

const GA4Client = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');

// TODO: Replace with your GA4 Property ID
// Run `npm run ga:list-properties` to find your Property ID
const PROPERTY_ID = '517318746';

const WATCH_MODE = process.argv.includes('--watch');
const REFRESH_INTERVAL = 10000; // 10 seconds

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

function clearScreen() {
  process.stdout.write('\x1Bc');
}

async function fetchRealtimeData(client) {
  try {
    // Get total active users
    const overallReport = await client.getRealtimeReport({
      metrics: [
        { name: 'activeUsers' },
      ],
    });

    const overall = client.parseReportRows(overallReport)[0] || {};
    const totalActiveUsers = overall.activeUsers || 0;

    // Get active users by page
    const pageReport = await client.getRealtimeReport({
      metrics: [
        { name: 'activeUsers' },
      ],
      dimensions: [
        { name: 'unifiedScreenName' },
      ],
      limit: 10,
    });

    const pages = client.parseReportRows(pageReport);

    // Get active users by country
    const countryReport = await client.getRealtimeReport({
      metrics: [
        { name: 'activeUsers' },
      ],
      dimensions: [
        { name: 'country' },
      ],
      limit: 10,
    });

    const countries = client.parseReportRows(countryReport);

    // Get active users by device
    const deviceReport = await client.getRealtimeReport({
      metrics: [
        { name: 'activeUsers' },
      ],
      dimensions: [
        { name: 'deviceCategory' },
      ],
    });

    const devices = client.parseReportRows(deviceReport);

    return {
      totalActiveUsers,
      pages,
      countries,
      devices,
      timestamp: new Date().toLocaleTimeString(),
    };

  } catch (error) {
    console.error('Error fetching realtime data:', error.message);
    throw error;
  }
}

function displayRealtimeData(data) {
  if (WATCH_MODE) {
    clearScreen();
  }

  console.log('\n' + '═'.repeat(80));
  console.log('🔴 LIVE WEBSITE TRAFFIC - REALTIME DASHBOARD');
  console.log('═'.repeat(80));
  console.log(`\n⏰ Last updated: ${data.timestamp}\n`);

  // Active Users
  console.log('━'.repeat(80));
  console.log('👥 ACTIVE USERS RIGHT NOW');
  console.log('━'.repeat(80));
  console.log('');
  console.log(`   ${formatNumber(data.totalActiveUsers)} active users`);
  console.log('');

  if (data.totalActiveUsers === 0) {
    console.log('   No active users detected at this moment.');
    console.log('   Check back later or verify GA4 is properly configured.');
    console.log('');
  }

  // Active users by page
  if (data.pages.length > 0) {
    console.log('━'.repeat(80));
    console.log('📄 ACTIVE USERS BY PAGE');
    console.log('━'.repeat(80));
    console.log('');
    console.log('Page'.padEnd(55) + 'Active Users'.padStart(20));
    console.log('─'.repeat(80));

    data.pages.forEach(page => {
      const pageName = (page.unifiedScreenName || 'Unknown').substring(0, 53);
      const users = formatNumber(page.activeUsers || 0);

      console.log(pageName.padEnd(55) + users.padStart(20));
    });
    console.log('');
  }

  // Active users by country
  if (data.countries.length > 0) {
    console.log('━'.repeat(80));
    console.log('🌍 ACTIVE USERS BY COUNTRY');
    console.log('━'.repeat(80));
    console.log('');
    console.log('Country'.padEnd(55) + 'Active Users'.padStart(20));
    console.log('─'.repeat(80));

    data.countries.forEach(country => {
      const countryName = (country.country || 'Unknown').substring(0, 53);
      const users = formatNumber(country.activeUsers || 0);

      console.log(countryName.padEnd(55) + users.padStart(20));
    });
    console.log('');
  }

  // Active users by device
  if (data.devices.length > 0) {
    console.log('━'.repeat(80));
    console.log('📱 ACTIVE USERS BY DEVICE');
    console.log('━'.repeat(80));
    console.log('');
    console.log('Device'.padEnd(55) + 'Active Users'.padStart(20));
    console.log('─'.repeat(80));

    data.devices.forEach(device => {
      const deviceName = (device.deviceCategory || 'Unknown').substring(0, 53);
      const users = formatNumber(device.activeUsers || 0);

      console.log(deviceName.padEnd(55) + users.padStart(20));
    });
    console.log('');
  }

  console.log('═'.repeat(80));
  if (WATCH_MODE) {
    console.log(`Refreshing every ${REFRESH_INTERVAL / 1000} seconds... (Press Ctrl+C to stop)`);
  }
  console.log('═'.repeat(80));
  console.log('');
}

async function main() {
  if (PROPERTY_ID === 'YOUR_PROPERTY_ID_HERE') {
    console.error('\n❌ Property ID not configured!');
    console.log('');
    console.log('Please follow these steps:');
    console.log('1. Run: npm run ga:list-properties');
    console.log('2. Copy your Property ID');
    console.log('3. Edit scripts/ga/get-realtime.cjs');
    console.log('4. Replace YOUR_PROPERTY_ID_HERE with your actual Property ID');
    console.log('');
    process.exit(1);
  }

  const client = new GA4Client(CREDENTIALS_PATH, PROPERTY_ID);

  try {
    await client.initialize();

    // Initial fetch
    const data = await fetchRealtimeData(client);
    displayRealtimeData(data);

    // Watch mode: refresh periodically
    if (WATCH_MODE) {
      setInterval(async () => {
        try {
          const data = await fetchRealtimeData(client);
          displayRealtimeData(data);
        } catch (error) {
          console.error('Error refreshing data:', error.message);
        }
      }, REFRESH_INTERVAL);
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('');
    console.log('Common issues:');
    console.log('- Invalid Property ID');
    console.log('- Service account not added to GA4 property');
    console.log('- Realtime API not enabled in Google Cloud Console');
    console.log('');
    process.exit(1);
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\n👋 Stopping realtime monitor...\n');
  process.exit(0);
});

main();
