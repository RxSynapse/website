#!/usr/bin/env node

/**
 * Request Google to re-index specific URLs
 *
 * This script uses the Google Indexing API to notify Google when
 * pages are updated and should be re-crawled.
 *
 * Usage: node scripts/gsc/request-indexing.cjs
 */

const { google } = require('googleapis');
const path = require('path');

const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const URLS_TO_INDEX = [
  'https://rxsynapse.com/',
  'https://rxsynapse.com/flow',
  'https://rxsynapse.com/communication',
];

async function requestIndexing() {
  try {
    console.log('🔄 Initializing Google Indexing API...\n');

    // Initialize auth with Indexing API scope
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    console.log('✓ API client initialized\n');
    console.log('📝 Requesting indexing for URLs:\n');

    const results = [];

    for (const url of URLS_TO_INDEX) {
      try {
        console.log(`   Submitting: ${url}`);

        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED', // or 'URL_DELETED' for removals
          },
        });

        results.push({
          url,
          status: 'success',
          data: response.data,
        });

        console.log(`   ✓ Success: ${url}`);
        console.log(`     Notification type: ${response.data.urlNotificationMetadata?.latestUpdate?.type || 'N/A'}`);
        console.log(`     Notification time: ${response.data.urlNotificationMetadata?.latestUpdate?.notifyTime || 'N/A'}\n`);
      } catch (error) {
        results.push({
          url,
          status: 'error',
          error: error.message,
        });

        console.log(`   ✗ Error: ${url}`);
        console.log(`     Message: ${error.message}\n`);
      }
    }

    // Summary
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 INDEXING REQUEST SUMMARY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const successCount = results.filter((r) => r.status === 'success').length;
    const errorCount = results.filter((r) => r.status === 'error').length;

    console.log(`✓ Successful requests: ${successCount}/${URLS_TO_INDEX.length}`);
    console.log(`✗ Failed requests: ${errorCount}/${URLS_TO_INDEX.length}\n`);

    if (errorCount > 0) {
      console.log('⚠️  ERRORS:');
      results
        .filter((r) => r.status === 'error')
        .forEach((r) => {
          console.log(`   ${r.url}: ${r.error}`);
        });
      console.log();
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (successCount > 0) {
      console.log('✅ NEXT STEPS:\n');
      console.log('1. Google will re-crawl these URLs within 24-48 hours');
      console.log('2. Monitor indexing status in Google Search Console:');
      console.log('   https://search.google.com/search-console\n');
      console.log('3. Check sitemap status:');
      console.log('   npm run gsc:check-sitemap\n');
      console.log('4. Run weekly report after 7 days:');
      console.log('   npm run gsc:weekly-report\n');
    }

    if (errorCount === URLS_TO_INDEX.length) {
      console.log('❌ ALL REQUESTS FAILED\n');
      console.log('This may mean:');
      console.log('1. The Indexing API has restrictions for general web pages');
      console.log('2. Service account needs additional permissions\n');
      console.log('🔧 MANUAL ALTERNATIVE:\n');
      console.log('Use Google Search Console URL Inspection tool:');
      console.log('1. Go to: https://search.google.com/search-console');
      console.log('2. Select property: rxsynapse.com');
      console.log('3. Use "URL Inspection" tool in top search bar');
      console.log('4. Enter each URL and click "Request Indexing"\n');
      console.log('URLs to inspect:');
      URLS_TO_INDEX.forEach((url) => console.log(`   - ${url}`));
      console.log();
    }

    process.exit(errorCount === URLS_TO_INDEX.length ? 1 : 0);
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
requestIndexing();
