/**
 * Submit Sitemap to Google Search Console
 *
 * This script submits a sitemap to Google Search Console.
 * You only need to do this once - Google will check it regularly after that.
 *
 * Usage: node scripts/gsc/submit-sitemap.js [sitemap-path]
 * Example: node scripts/gsc/submit-sitemap.js sitemap.xml
 */

const GSCClient = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const SITE_URL = 'sc-domain:rxsynapse.com';

// Get sitemap path from command line argument or use default
const SITEMAP_PATH = process.argv[2] || 'sitemap.xml';

async function main() {
  const client = new GSCClient(CREDENTIALS_PATH, SITE_URL);

  try {
    // Initialize client
    await client.initialize();

    console.log(`\n🚀 Submitting sitemap: ${SITEMAP_PATH}\n`);

    // Submit sitemap
    await client.submitSitemap(SITEMAP_PATH);

    console.log('\n✅ Sitemap submitted successfully!');
    console.log('\nNote: It may take some time for Google to process your sitemap.');
    console.log('You can check the status by running:');
    console.log('  node scripts/gsc/check-sitemap.js\n');

  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('\n✓ Sitemap is already submitted.');
      console.log('Google will automatically check it periodically.');
      console.log('\nTo check its status, run:');
      console.log('  node scripts/gsc/check-sitemap.js\n');
    } else {
      console.error('\n❌ Error submitting sitemap:', error.message);
      process.exit(1);
    }
  }
}

main();
