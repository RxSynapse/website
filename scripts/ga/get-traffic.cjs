/**
 * Get GA4 Traffic Report
 *
 * This script fetches basic traffic metrics from Google Analytics 4
 * including users, sessions, pageviews, and top pages.
 *
 * Usage:
 *   npm run ga:traffic           (Last 7 days)
 *   npm run ga:traffic 30        (Last 30 days)
 *   npm run ga:traffic 2024-01-01 2024-01-31  (Custom date range)
 */

const GA4Client = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');

// TODO: Replace with your GA4 Property ID
// Run `npm run ga:list-properties` to find your Property ID
const PROPERTY_ID = '517318746';

// Parse command line arguments
const args = process.argv.slice(2);
let startDate, endDate;

if (args.length === 0) {
  // Default: last 7 days
  startDate = '7daysAgo';
  endDate = 'today';
} else if (args.length === 1) {
  // Single number: N days ago
  const days = parseInt(args[0]);
  if (isNaN(days)) {
    console.error('Invalid argument. Usage: npm run ga:traffic [days] or [startDate endDate]');
    process.exit(1);
  }
  startDate = `${days}daysAgo`;
  endDate = 'today';
} else if (args.length === 2) {
  // Two dates: custom range (YYYY-MM-DD format)
  startDate = args[0];
  endDate = args[1];
} else {
  console.error('Invalid arguments. Usage: npm run ga:traffic [days] or [startDate endDate]');
  process.exit(1);
}

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

async function main() {
  if (PROPERTY_ID === 'YOUR_PROPERTY_ID_HERE') {
    console.error('\n❌ Property ID not configured!');
    console.log('');
    console.log('Please follow these steps:');
    console.log('1. Run: npm run ga:list-properties');
    console.log('2. Copy your Property ID');
    console.log('3. Edit scripts/ga/get-traffic.cjs');
    console.log('4. Replace YOUR_PROPERTY_ID_HERE with your actual Property ID');
    console.log('');
    process.exit(1);
  }

  const client = new GA4Client(CREDENTIALS_PATH, PROPERTY_ID);

  try {
    await client.initialize();

    console.log('\n' + '═'.repeat(100));
    console.log('📊 GOOGLE ANALYTICS 4 TRAFFIC REPORT');
    console.log('═'.repeat(100));
    console.log(`\n📅 Period: ${startDate} to ${endDate}\n`);

    // Fetch overall metrics
    const overallReport = await client.runReport({
      startDate,
      endDate,
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
        { name: 'engagementRate' },
      ],
    });

    const overall = client.parseReportRows(overallReport)[0] || {};

    console.log('━'.repeat(100));
    console.log('📈 OVERALL METRICS');
    console.log('━'.repeat(100));
    console.log('');
    console.log(`Active Users:          ${formatNumber(overall.activeUsers || 0)}`);
    console.log(`Sessions:              ${formatNumber(overall.sessions || 0)}`);
    console.log(`Page Views:            ${formatNumber(overall.screenPageViews || 0)}`);
    console.log(`Avg Session Duration:  ${Math.round(overall.averageSessionDuration || 0)}s`);
    console.log(`Bounce Rate:           ${(overall.bounceRate * 100 || 0).toFixed(2)}%`);
    console.log(`Engagement Rate:       ${(overall.engagementRate * 100 || 0).toFixed(2)}%`);
    console.log('');

    // Fetch top pages
    const topPagesReport = await client.runReport({
      startDate,
      endDate,
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' },
      ],
      dimensions: [
        { name: 'pageTitle' },
        { name: 'pagePath' },
      ],
      limit: 10,
      orderBys: [
        { metric: { metricName: 'screenPageViews' }, desc: true },
      ],
    });

    const topPages = client.parseReportRows(topPagesReport);

    console.log('━'.repeat(100));
    console.log('📄 TOP 10 PAGES');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Page Title'.padEnd(45) + 'Path'.padEnd(30) + 'Views'.padStart(12) + 'Users'.padStart(12));
    console.log('─'.repeat(100));

    topPages.forEach(page => {
      const title = (page.pageTitle || 'Untitled').substring(0, 43);
      const path = (page.pagePath || '/').substring(0, 28);
      const views = formatNumber(page.screenPageViews || 0);
      const users = formatNumber(page.activeUsers || 0);

      console.log(
        title.padEnd(45) +
        path.padEnd(30) +
        views.padStart(12) +
        users.padStart(12)
      );
    });
    console.log('');

    // Fetch traffic by source
    const sourceReport = await client.runReport({
      startDate,
      endDate,
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
      ],
      dimensions: [
        { name: 'sessionDefaultChannelGroup' },
      ],
      limit: 10,
      orderBys: [
        { metric: { metricName: 'sessions' }, desc: true },
      ],
    });

    const sources = client.parseReportRows(sourceReport);

    console.log('━'.repeat(100));
    console.log('🌐 TRAFFIC BY CHANNEL');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Channel'.padEnd(30) + 'Users'.padStart(20) + 'Sessions'.padStart(20));
    console.log('─'.repeat(100));

    sources.forEach(source => {
      const channel = (source.sessionDefaultChannelGroup || 'Unknown').substring(0, 28);
      const users = formatNumber(source.activeUsers || 0);
      const sessions = formatNumber(source.sessions || 0);

      console.log(
        channel.padEnd(30) +
        users.padStart(20) +
        sessions.padStart(20)
      );
    });
    console.log('');

    // Fetch traffic by device
    const deviceReport = await client.runReport({
      startDate,
      endDate,
      metrics: [
        { name: 'activeUsers' },
      ],
      dimensions: [
        { name: 'deviceCategory' },
      ],
      orderBys: [
        { metric: { metricName: 'activeUsers' }, desc: true },
      ],
    });

    const devices = client.parseReportRows(deviceReport);

    console.log('━'.repeat(100));
    console.log('📱 TRAFFIC BY DEVICE');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Device'.padEnd(30) + 'Users'.padStart(20) + 'Percentage'.padStart(20));
    console.log('─'.repeat(100));

    const totalUsers = devices.reduce((sum, d) => sum + (d.activeUsers || 0), 0);

    devices.forEach(device => {
      const category = (device.deviceCategory || 'Unknown').substring(0, 28);
      const users = formatNumber(device.activeUsers || 0);
      const percentage = totalUsers > 0 ? ((device.activeUsers / totalUsers) * 100).toFixed(1) : 0;

      console.log(
        category.padEnd(30) +
        users.padStart(20) +
        `${percentage}%`.padStart(20)
      );
    });
    console.log('');

    console.log('═'.repeat(100));
    console.log(`Report generated: ${new Date().toLocaleString()}`);
    console.log('═'.repeat(100));
    console.log('');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('');
    console.log('Common issues:');
    console.log('- Invalid Property ID');
    console.log('- Service account not added to GA4 property as Viewer');
    console.log('- API not enabled in Google Cloud Console');
    console.log('');
    process.exit(1);
  }
}

main();
