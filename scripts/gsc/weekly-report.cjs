/**
 * Weekly GSC Performance Report
 *
 * This script generates a comprehensive weekly report of your site's
 * Google Search Console performance, comparing current week to previous week.
 *
 * Usage: node scripts/gsc/weekly-report.cjs
 *
 * Output: Console output + optional JSON file for archival
 */

const GSCClient = require('./client.cjs');
const path = require('path');
const fs = require('fs');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const SITE_URL = 'sc-domain:rxsynapse.com';
const SAVE_TO_FILE = process.argv.includes('--save');
const OUTPUT_DIR = path.join(__dirname, '../../reports');

// Calculate date ranges
const today = new Date();
today.setDate(today.getDate() - 3); // GSC has ~3 day delay

// Current week (last 7 days)
const currentEndDate = new Date(today);
const currentStartDate = new Date(currentEndDate);
currentStartDate.setDate(currentStartDate.getDate() - 7);

// Previous week (7 days before current week)
const previousEndDate = new Date(currentStartDate);
previousEndDate.setDate(previousEndDate.getDate() - 1);
const previousStartDate = new Date(previousEndDate);
previousStartDate.setDate(previousStartDate.getDate() - 7);

const formatDate = (date) => date.toISOString().split('T')[0];
const formatDateDisplay = (date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

function calculateChange(current, previous) {
  if (previous === 0) return current > 0 ? '+∞' : '0';
  const change = ((current - previous) / previous * 100).toFixed(1);
  return change > 0 ? `+${change}%` : `${change}%`;
}

function getArrow(current, previous) {
  if (current > previous) return '↑';
  if (current < previous) return '↓';
  return '→';
}

async function main() {
  const client = new GSCClient(CREDENTIALS_PATH, SITE_URL);

  try {
    // Initialize client
    await client.initialize();

    console.log('\n' + '═'.repeat(100));
    console.log('📊 WEEKLY GOOGLE SEARCH CONSOLE REPORT');
    console.log('═'.repeat(100));
    console.log(`\n🗓️  Report Period:`);
    console.log(`   Current Week: ${formatDateDisplay(currentStartDate)} - ${formatDateDisplay(currentEndDate)}`);
    console.log(`   Previous Week: ${formatDateDisplay(previousStartDate)} - ${formatDateDisplay(previousEndDate)}`);
    console.log('');

    // Fetch current week data
    const currentWeekQuery = await client.querySearchAnalytics({
      startDate: formatDate(currentStartDate),
      endDate: formatDate(currentEndDate),
      dimensions: ['query'],
      rowLimit: 25,
    });

    const currentWeekPage = await client.querySearchAnalytics({
      startDate: formatDate(currentStartDate),
      endDate: formatDate(currentEndDate),
      dimensions: ['page'],
      rowLimit: 10,
    });

    // Fetch previous week data
    const previousWeekQuery = await client.querySearchAnalytics({
      startDate: formatDate(previousStartDate),
      endDate: formatDate(previousEndDate),
      dimensions: ['query'],
      rowLimit: 25,
    });

    // Calculate totals for current week
    const currentClicks = currentWeekQuery.reduce((sum, row) => sum + (row.clicks || 0), 0);
    const currentImpressions = currentWeekQuery.reduce((sum, row) => sum + (row.impressions || 0), 0);
    const currentCTR = currentImpressions > 0 ? (currentClicks / currentImpressions * 100) : 0;
    const currentAvgPosition = currentWeekQuery.length > 0
      ? currentWeekQuery.reduce((sum, row) => sum + (row.position || 0), 0) / currentWeekQuery.length
      : 0;

    // Calculate totals for previous week
    const previousClicks = previousWeekQuery.reduce((sum, row) => sum + (row.clicks || 0), 0);
    const previousImpressions = previousWeekQuery.reduce((sum, row) => sum + (row.impressions || 0), 0);
    const previousCTR = previousImpressions > 0 ? (previousClicks / previousImpressions * 100) : 0;
    const previousAvgPosition = previousWeekQuery.length > 0
      ? previousWeekQuery.reduce((sum, row) => sum + (row.position || 0), 0) / previousWeekQuery.length
      : 0;

    // Overall Summary
    console.log('━'.repeat(100));
    console.log('📈 OVERALL PERFORMANCE SUMMARY');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Metric'.padEnd(20) + 'Current Week'.padStart(15) + 'Previous Week'.padStart(16) + 'Change'.padStart(15) + '   Trend');
    console.log('─'.repeat(100));
    console.log(
      'Total Clicks'.padEnd(20) +
      currentClicks.toString().padStart(15) +
      previousClicks.toString().padStart(16) +
      calculateChange(currentClicks, previousClicks).padStart(15) +
      `   ${getArrow(currentClicks, previousClicks)}`
    );
    console.log(
      'Total Impressions'.padEnd(20) +
      currentImpressions.toString().padStart(15) +
      previousImpressions.toString().padStart(16) +
      calculateChange(currentImpressions, previousImpressions).padStart(15) +
      `   ${getArrow(currentImpressions, previousImpressions)}`
    );
    console.log(
      'Average CTR'.padEnd(20) +
      `${currentCTR.toFixed(2)}%`.padStart(15) +
      `${previousCTR.toFixed(2)}%`.padStart(16) +
      calculateChange(currentCTR, previousCTR).padStart(15) +
      `   ${getArrow(currentCTR, previousCTR)}`
    );
    console.log(
      'Average Position'.padEnd(20) +
      currentAvgPosition.toFixed(1).padStart(15) +
      previousAvgPosition.toFixed(1).padStart(16) +
      calculateChange(previousAvgPosition, currentAvgPosition).padStart(15) +
      `   ${getArrow(previousAvgPosition, currentAvgPosition)}` // Lower is better
    );
    console.log('');

    // Top Queries
    console.log('━'.repeat(100));
    console.log('🔍 TOP 10 SEARCH QUERIES (Current Week)');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Query'.padEnd(45) + 'Clicks'.padStart(10) + 'Impressions'.padStart(13) + 'CTR'.padStart(10) + 'Position'.padStart(12));
    console.log('─'.repeat(100));

    currentWeekQuery.slice(0, 10).forEach((row) => {
      const query = row.keys[0];
      const clicks = row.clicks || 0;
      const impressions = row.impressions || 0;
      const ctr = ((row.ctr || 0) * 100).toFixed(2);
      const position = (row.position || 0).toFixed(1);

      console.log(
        query.substring(0, 45).padEnd(45) +
        clicks.toString().padStart(10) +
        impressions.toString().padStart(13) +
        `${ctr}%`.padStart(10) +
        position.padStart(12)
      );
    });
    console.log('');

    // Top Pages
    console.log('━'.repeat(100));
    console.log('📄 TOP PAGES BY CLICKS (Current Week)');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Page URL'.padEnd(55) + 'Clicks'.padStart(10) + 'Impressions'.padStart(13) + 'CTR'.padStart(10));
    console.log('─'.repeat(100));

    currentWeekPage.forEach((row) => {
      const page = row.keys[0].replace('https://rxsynapse.com', '').replace('https://www.rxsynapse.com', '') || '/';
      const clicks = row.clicks || 0;
      const impressions = row.impressions || 0;
      const ctr = ((row.ctr || 0) * 100).toFixed(2);

      console.log(
        page.substring(0, 55).padEnd(55) +
        clicks.toString().padStart(10) +
        impressions.toString().padStart(13) +
        `${ctr}%`.padStart(10)
      );
    });
    console.log('');

    // Insights & Recommendations
    console.log('━'.repeat(100));
    console.log('💡 INSIGHTS & RECOMMENDATIONS');
    console.log('━'.repeat(100));
    console.log('');

    const insights = [];

    if (currentClicks === 0 && currentImpressions === 0) {
      insights.push('⚠️  No traffic detected. Possible issues:');
      insights.push('   - Site might not be indexed yet');
      insights.push('   - Check if sitemap is submitted and processed');
      insights.push('   - Verify robots.txt is not blocking search engines');
    } else if (currentClicks < 10) {
      insights.push('📊 Low click volume detected:');
      insights.push('   - Focus on improving meta titles and descriptions');
      insights.push('   - Target long-tail keywords with lower competition');
      insights.push('   - Consider content marketing and backlink building');
    }

    if (currentCTR < 2) {
      insights.push('🎯 Low CTR indicates poor click-through:');
      insights.push('   - Optimize title tags to be more compelling');
      insights.push('   - Add emotional triggers or numbers to titles');
      insights.push('   - Improve meta descriptions to match search intent');
    }

    if (currentAvgPosition > 10) {
      insights.push('📍 Average position is low (page 2+):');
      insights.push('   - Improve on-page SEO (headings, content quality)');
      insights.push('   - Build authoritative backlinks');
      insights.push('   - Target less competitive keywords initially');
    }

    if (currentClicks > previousClicks) {
      insights.push('✅ Positive trend! Clicks increased week-over-week');
      insights.push('   - Identify which pages/queries are growing');
      insights.push('   - Double down on what\'s working');
    }

    if (insights.length === 0) {
      insights.push('✅ Performance looks good! Keep monitoring trends.');
    }

    insights.forEach(insight => console.log(insight));
    console.log('');

    console.log('═'.repeat(100));
    console.log(`Report generated: ${new Date().toLocaleString()}`);
    console.log('═'.repeat(100));
    console.log('');

    // Save to file if requested
    if (SAVE_TO_FILE) {
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
      }

      const report = {
        generatedAt: new Date().toISOString(),
        period: {
          current: {
            start: formatDate(currentStartDate),
            end: formatDate(currentEndDate),
          },
          previous: {
            start: formatDate(previousStartDate),
            end: formatDate(previousEndDate),
          },
        },
        summary: {
          current: {
            clicks: currentClicks,
            impressions: currentImpressions,
            ctr: currentCTR,
            avgPosition: currentAvgPosition,
          },
          previous: {
            clicks: previousClicks,
            impressions: previousImpressions,
            ctr: previousCTR,
            avgPosition: previousAvgPosition,
          },
        },
        topQueries: currentWeekQuery.slice(0, 10),
        topPages: currentWeekPage,
      };

      const filename = `gsc-report-${formatDate(today)}.json`;
      const filepath = path.join(OUTPUT_DIR, filename);
      fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
      console.log(`💾 Report saved to: ${filepath}\n`);
    }

  } catch (error) {
    console.error('Error generating report:', error.message);
    process.exit(1);
  }
}

main();
