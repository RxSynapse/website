/**
 * Get Page Performance Data
 *
 * This script fetches search analytics data grouped by page/URL
 * to see which pages are getting the most traffic from Google Search.
 *
 * Usage: node scripts/gsc/get-page-performance.js
 */

const GSCClient = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const SITE_URL = 'sc-domain:rxsynapse.com';

// Calculate date range (last 30 days)
const endDate = new Date();
endDate.setDate(endDate.getDate() - 3); // GSC data has ~3 day delay
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 30);

const formatDate = (date) => date.toISOString().split('T')[0];

async function main() {
  const client = new GSCClient(CREDENTIALS_PATH, SITE_URL);

  try {
    // Initialize client
    await client.initialize();

    console.log('\n📄 Fetching page performance data...');
    console.log(`Date range: ${formatDate(startDate)} to ${formatDate(endDate)}\n`);

    // Query search analytics by page
    const results = await client.querySearchAnalytics({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      dimensions: ['page'],
      rowLimit: 25,
    });

    if (results.length === 0) {
      console.log('No data available for this period.');
      return;
    }

    console.log('Top 25 Pages:\n');
    console.log('━'.repeat(120));
    console.log(
      'Page URL'.padEnd(70),
      'Clicks'.padStart(8),
      'Impr.'.padStart(10),
      'CTR'.padStart(8),
      'Position'.padStart(10)
    );
    console.log('━'.repeat(120));

    results.forEach((row) => {
      const page = row.keys[0];
      const clicks = row.clicks || 0;
      const impressions = row.impressions || 0;
      const ctr = ((row.ctr || 0) * 100).toFixed(2);
      const position = (row.position || 0).toFixed(1);

      // Shorten URL for display
      const displayUrl = page.replace('https://rxsynapse.com', '');

      console.log(
        displayUrl.substring(0, 70).padEnd(70),
        clicks.toString().padStart(8),
        impressions.toString().padStart(10),
        `${ctr}%`.padStart(8),
        position.padStart(10)
      );
    });

    console.log('━'.repeat(120));

    // Calculate totals
    const totalClicks = results.reduce((sum, row) => sum + (row.clicks || 0), 0);
    const totalImpressions = results.reduce((sum, row) => sum + (row.impressions || 0), 0);
    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions * 100).toFixed(2) : 0;

    console.log('\n📈 Summary:');
    console.log(`Total Clicks: ${totalClicks}`);
    console.log(`Total Impressions: ${totalImpressions}`);
    console.log(`Average CTR: ${avgCTR}%`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
