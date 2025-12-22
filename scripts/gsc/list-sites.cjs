/**
 * List All Sites Accessible to Service Account
 *
 * This script lists all sites that the service account has access to
 * in Google Search Console. Useful for debugging permissions.
 *
 * Usage: node scripts/gsc/list-sites.js
 */

const GSCClient = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const SITE_URL = 'sc-domain:rxsynapse.com'; // Not used for listing, but required by client

async function main() {
  const client = new GSCClient(CREDENTIALS_PATH, SITE_URL);

  try {
    // Initialize client
    await client.initialize();

    console.log('\n🔍 Listing all accessible sites...\n');

    // List sites
    const sites = await client.listSites();

    if (sites.length === 0) {
      console.log('❌ No sites found!');
      console.log('\nThis usually means:');
      console.log('1. You haven\'t added the service account to any site in Search Console');
      console.log('2. The service account email hasn\'t been verified yet');
      console.log('\nService account email format: xyz@project-id.iam.gserviceaccount.com');
      console.log('\nTo fix:');
      console.log('1. Go to https://search.google.com/search-console');
      console.log('2. Select your property');
      console.log('3. Settings → Users and permissions → Add user');
      console.log('4. Add the service account email with "Owner" permission\n');
      return;
    }

    console.log(`Found ${sites.length} site(s):\n`);
    console.log('━'.repeat(80));
    console.log('Site URL'.padEnd(50), 'Permission Level'.padStart(20));
    console.log('━'.repeat(80));

    sites.forEach((site) => {
      console.log(
        site.siteUrl.padEnd(50),
        (site.permissionLevel || 'N/A').padStart(20)
      );
    });

    console.log('━'.repeat(80));
    console.log('\n✓ All sites listed successfully\n');

  } catch (error) {
    console.error('Error:', error.message);
    console.error('\nIf you see a 403 error, check that:');
    console.error('1. The service account is added to Search Console');
    console.error('2. The API is enabled in Google Cloud Console');
    console.error('3. The credentials file path is correct\n');
    process.exit(1);
  }
}

main();
