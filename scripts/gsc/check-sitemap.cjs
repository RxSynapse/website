/**
 * Check Sitemap Status
 *
 * This script checks the status of your sitemap in Google Search Console,
 * including submission status, discovered URLs, and any errors.
 *
 * Usage: node scripts/gsc/check-sitemap.js
 */

const GSCClient = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const SITE_URL = 'sc-domain:rxsynapse.com';
const SITEMAP_PATH = 'sitemap.xml';

async function main() {
  const client = new GSCClient(CREDENTIALS_PATH, SITE_URL);

  try {
    // Initialize client
    await client.initialize();

    console.log('\n🗺️  Checking sitemap status...\n');

    // List all sitemaps
    const sitemaps = await client.listSitemaps();

    if (sitemaps.length === 0) {
      console.log('⚠️  No sitemaps found. Would you like to submit one?');
      console.log(`Run: node scripts/gsc/submit-sitemap.js ${SITEMAP_PATH}`);
      return;
    }

    console.log(`Found ${sitemaps.length} sitemap(s):\n`);

    sitemaps.forEach((sitemap, index) => {
      console.log(`Sitemap #${index + 1}:`);
      console.log(`  Path: ${sitemap.path}`);
      console.log(`  Type: ${sitemap.type || 'N/A'}`);
      console.log(`  Last Submitted: ${sitemap.lastSubmitted || 'Never'}`);
      console.log(`  Last Downloaded: ${sitemap.lastDownloaded || 'Never'}`);
      console.log(`  Is Pending: ${sitemap.isPending || false}`);
      console.log(`  Is Sitemaps Index: ${sitemap.isSitemapsIndex || false}`);

      if (sitemap.contents) {
        console.log(`  Content:`);
        sitemap.contents.forEach((content) => {
          console.log(`    - Type: ${content.type}`);
          console.log(`      Submitted: ${content.submitted || 0}`);
          console.log(`      Indexed: ${content.indexed || 0}`);
        });
      }

      if (sitemap.warnings && sitemap.warnings > 0) {
        console.log(`  ⚠️  Warnings: ${sitemap.warnings}`);
      }

      if (sitemap.errors && sitemap.errors > 0) {
        console.log(`  ❌ Errors: ${sitemap.errors}`);
      }

      console.log('');
    });

    // Get specific sitemap details
    try {
      console.log(`\n📋 Detailed status for ${SITEMAP_PATH}:\n`);
      const sitemapDetails = await client.getSitemap(SITEMAP_PATH);

      console.log('Status:');
      if (sitemapDetails.isPending) {
        console.log('  ⏳ Sitemap is pending (being processed by Google)');
      } else {
        console.log('  ✓ Sitemap has been processed');
      }

      if (sitemapDetails.contents) {
        console.log('\nIndexing Status:');
        sitemapDetails.contents.forEach((content) => {
          const submitted = content.submitted || 0;
          const indexed = content.indexed || 0;
          const percentage = submitted > 0 ? ((indexed / submitted) * 100).toFixed(1) : 0;

          console.log(`  ${content.type}:`);
          console.log(`    Submitted: ${submitted}`);
          console.log(`    Indexed: ${indexed} (${percentage}%)`);
        });
      }

    } catch (error) {
      if (error.message.includes('404')) {
        console.log(`⚠️  Sitemap '${SITEMAP_PATH}' not found in Search Console.`);
        console.log(`To submit it, run: node scripts/gsc/submit-sitemap.js ${SITEMAP_PATH}`);
      } else {
        throw error;
      }
    }

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
