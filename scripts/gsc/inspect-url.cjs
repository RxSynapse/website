/**
 * Inspect URL Indexing Status
 *
 * This script checks the indexing status of specific URLs
 * to help diagnose why pages aren't being indexed.
 *
 * Usage: node scripts/gsc/inspect-url.cjs [url]
 * Example: node scripts/gsc/inspect-url.cjs https://rxsynapse.com/flow
 */

const { google } = require('googleapis');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const SITE_URL = 'sc-domain:rxsynapse.com';

// Get URL from command line or use homepage
const INSPECT_URL = process.argv[2] || 'https://rxsynapse.com/';

async function main() {
  try {
    // Initialize auth
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

    console.log('✓ Google Search Console API client initialized successfully');
    console.log(`\n🔍 Inspecting URL: ${INSPECT_URL}\n`);

    // Inspect URL
    const response = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: INSPECT_URL,
        siteUrl: SITE_URL,
      },
    });

    const result = response.data.inspectionResult;

    console.log('Indexing Status:');
    console.log('━'.repeat(80));

    if (result.indexStatusResult) {
      const indexStatus = result.indexStatusResult;
      console.log(`Coverage State: ${indexStatus.coverageState || 'N/A'}`);
      console.log(`Indexing State: ${indexStatus.indexingState || 'N/A'}`);
      console.log(`Verdict: ${indexStatus.verdict || 'N/A'}`);
      console.log(`Last Crawl Time: ${indexStatus.lastCrawlTime || 'Never'}`);
      console.log(`Page Fetch State: ${indexStatus.pageFetchState || 'N/A'}`);
      console.log(`Robots Txt State: ${indexStatus.robotsTxtState || 'N/A'}`);

      if (indexStatus.crawledAs) {
        console.log(`Crawled As: ${indexStatus.crawledAs}`);
      }
    }

    if (result.mobileUsabilityResult) {
      console.log(`\nMobile Usability: ${result.mobileUsabilityResult.verdict || 'N/A'}`);
      if (result.mobileUsabilityResult.issues && result.mobileUsabilityResult.issues.length > 0) {
        console.log('Issues:');
        result.mobileUsabilityResult.issues.forEach(issue => {
          console.log(`  - ${issue.issueType}: ${issue.message}`);
        });
      }
    }

    if (result.richResultsResult) {
      console.log(`\nRich Results: ${result.richResultsResult.verdict || 'N/A'}`);
      if (result.richResultsResult.detectedItems && result.richResultsResult.detectedItems.length > 0) {
        console.log('Detected Items:');
        result.richResultsResult.detectedItems.forEach(item => {
          console.log(`  - ${item.richResultType}`);
        });
      }
    }

    console.log('━'.repeat(80));

  } catch (error) {
    console.error('Error:', error.message);
    if (error.code === 403) {
      console.error('\n⚠️  Note: URL Inspection API requires broader permissions.');
      console.error('Current scope is read-only. This is expected behavior.');
    }
    process.exit(1);
  }
}

main();
