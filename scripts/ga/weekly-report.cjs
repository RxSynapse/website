/**
 * Weekly GA4 Performance Report
 *
 * This script generates a comprehensive weekly report of your site's
 * Google Analytics 4 performance, comparing current week to previous week.
 *
 * Usage: npm run ga:weekly-report
 *
 * Options:
 *   --save    Save report to JSON file in reports/ directory
 *
 * Example: npm run ga:weekly-report -- --save
 */

const GA4Client = require('./client.cjs');
const path = require('path');
const fs = require('fs');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');

// TODO: Replace with your GA4 Property ID
// Run `npm run ga:list-properties` to find your Property ID
const PROPERTY_ID = '517318746';

const SAVE_TO_FILE = process.argv.includes('--save');
const OUTPUT_DIR = path.join(__dirname, '../../reports');

// Calculate date ranges (GA4 has ~1 day delay, unlike GSC's 3 days)
const today = new Date();
today.setDate(today.getDate() - 1); // 1 day delay

// Current week (last 7 days)
const currentEndDate = formatDate(new Date(today));
const currentStartDate = formatDate(new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000));

// Previous week (7 days before current week)
const previousEndDate = formatDate(new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000));
const previousStartDate = formatDate(new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000));

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function formatDateDisplay(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

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
  if (PROPERTY_ID === 'YOUR_PROPERTY_ID_HERE') {
    console.error('\n❌ Property ID not configured!');
    console.log('');
    console.log('Please follow these steps:');
    console.log('1. Run: npm run ga:list-properties');
    console.log('2. Copy your Property ID');
    console.log('3. Edit scripts/ga/weekly-report.cjs');
    console.log('4. Replace YOUR_PROPERTY_ID_HERE with your actual Property ID');
    console.log('');
    process.exit(1);
  }

  const client = new GA4Client(CREDENTIALS_PATH, PROPERTY_ID);

  try {
    await client.initialize();

    console.log('\n' + '═'.repeat(100));
    console.log('📊 WEEKLY GOOGLE ANALYTICS 4 REPORT');
    console.log('═'.repeat(100));
    console.log(`\n🗓️  Report Period:`);
    console.log(`   Current Week:  ${formatDateDisplay(currentStartDate)} - ${formatDateDisplay(currentEndDate)}`);
    console.log(`   Previous Week: ${formatDateDisplay(previousStartDate)} - ${formatDateDisplay(previousEndDate)}`);
    console.log('');

    // Fetch current week metrics
    const currentReport = await client.runReport({
      startDate: currentStartDate,
      endDate: currentEndDate,
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
        { name: 'engagementRate' },
      ],
    });

    const current = client.parseReportRows(currentReport)[0] || {};

    // Fetch previous week metrics
    const previousReport = await client.runReport({
      startDate: previousStartDate,
      endDate: previousEndDate,
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
        { name: 'engagementRate' },
      ],
    });

    const previous = client.parseReportRows(previousReport)[0] || {};

    // Overall Summary
    console.log('━'.repeat(100));
    console.log('📈 OVERALL PERFORMANCE SUMMARY');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Metric'.padEnd(25) + 'Current Week'.padStart(15) + 'Previous Week'.padStart(16) + 'Change'.padStart(15) + '   Trend');
    console.log('─'.repeat(100));

    const metrics = [
      { key: 'activeUsers', label: 'Active Users', format: formatNumber },
      { key: 'sessions', label: 'Sessions', format: formatNumber },
      { key: 'screenPageViews', label: 'Page Views', format: formatNumber },
      { key: 'averageSessionDuration', label: 'Avg Session (sec)', format: (v) => Math.round(v) },
      { key: 'bounceRate', label: 'Bounce Rate', format: (v) => `${(v * 100).toFixed(1)}%` },
      { key: 'engagementRate', label: 'Engagement Rate', format: (v) => `${(v * 100).toFixed(1)}%` },
    ];

    metrics.forEach(({ key, label, format }) => {
      const currentVal = current[key] || 0;
      const previousVal = previous[key] || 0;
      const arrow = key === 'bounceRate'
        ? getArrow(previousVal, currentVal) // Lower bounce is better
        : getArrow(currentVal, previousVal);
      const change = key === 'bounceRate'
        ? calculateChange(previousVal, currentVal)
        : calculateChange(currentVal, previousVal);

      console.log(
        label.padEnd(25) +
        format(currentVal).toString().padStart(15) +
        format(previousVal).toString().padStart(16) +
        change.padStart(15) +
        `   ${arrow}`
      );
    });
    console.log('');

    // Top Pages (Current Week)
    const topPagesReport = await client.runReport({
      startDate: currentStartDate,
      endDate: currentEndDate,
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
    console.log('📄 TOP 10 PAGES (Current Week)');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Page Title'.padEnd(45) + 'Path'.padEnd(25) + 'Views'.padStart(12) + 'Users'.padStart(12));
    console.log('─'.repeat(100));

    topPages.forEach(page => {
      const title = (page.pageTitle || 'Untitled').substring(0, 43);
      const pagePath = (page.pagePath || '/').substring(0, 23);
      const views = formatNumber(page.screenPageViews || 0);
      const users = formatNumber(page.activeUsers || 0);

      console.log(
        title.padEnd(45) +
        pagePath.padEnd(25) +
        views.padStart(12) +
        users.padStart(12)
      );
    });
    console.log('');

    // Traffic Sources (Current Week)
    const sourcesReport = await client.runReport({
      startDate: currentStartDate,
      endDate: currentEndDate,
      metrics: [
        { name: 'activeUsers' },
      ],
      dimensions: [
        { name: 'sessionDefaultChannelGroup' },
      ],
      limit: 10,
      orderBys: [
        { metric: { metricName: 'activeUsers' }, desc: true },
      ],
    });

    const sources = client.parseReportRows(sourcesReport);

    console.log('━'.repeat(100));
    console.log('🌐 TOP TRAFFIC CHANNELS (Current Week)');
    console.log('━'.repeat(100));
    console.log('');
    console.log('Channel'.padEnd(40) + 'Users'.padStart(20) + 'Percentage'.padStart(20));
    console.log('─'.repeat(100));

    const totalChannelUsers = sources.reduce((sum, s) => sum + (s.activeUsers || 0), 0);

    sources.forEach(source => {
      const channel = (source.sessionDefaultChannelGroup || 'Unknown').substring(0, 38);
      const users = formatNumber(source.activeUsers || 0);
      const percentage = totalChannelUsers > 0
        ? ((source.activeUsers / totalChannelUsers) * 100).toFixed(1)
        : 0;

      console.log(
        channel.padEnd(40) +
        users.padStart(20) +
        `${percentage}%`.padStart(20)
      );
    });
    console.log('');

    // Insights & Recommendations
    console.log('━'.repeat(100));
    console.log('💡 INSIGHTS & RECOMMENDATIONS');
    console.log('━'.repeat(100));
    console.log('');

    const insights = [];

    const currentUsers = current.activeUsers || 0;
    const previousUsers = previous.activeUsers || 0;
    const currentBounce = current.bounceRate || 0;
    const currentEngagement = current.engagementRate || 0;

    if (currentUsers === 0) {
      insights.push('⚠️  No users detected. Possible issues:');
      insights.push('   - GA4 tracking code not installed');
      insights.push('   - Data collection might be delayed (GA4 has ~24h delay)');
      insights.push('   - Check if GA4 tag is firing properly');
    } else if (currentUsers < 50) {
      insights.push('📊 Low user count detected:');
      insights.push('   - Focus on SEO optimization');
      insights.push('   - Increase marketing efforts');
      insights.push('   - Share content on social media');
    }

    if (currentBounce > 0.7) {
      insights.push('🎯 High bounce rate (>70%):');
      insights.push('   - Improve page load speed');
      insights.push('   - Make content more engaging');
      insights.push('   - Improve internal linking');
      insights.push('   - Check mobile responsiveness');
    }

    if (currentEngagement < 0.5) {
      insights.push('📉 Low engagement rate (<50%):');
      insights.push('   - Add more interactive elements');
      insights.push('   - Improve call-to-action buttons');
      insights.push('   - Reduce friction in user journey');
    }

    if (currentUsers > previousUsers) {
      const growth = ((currentUsers - previousUsers) / previousUsers * 100).toFixed(1);
      insights.push(`✅ Positive trend! Users increased by ${growth}% week-over-week`);
      insights.push('   - Identify which channels are growing');
      insights.push('   - Double down on successful strategies');
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
          current: { start: currentStartDate, end: currentEndDate },
          previous: { start: previousStartDate, end: previousEndDate },
        },
        summary: { current, previous },
        topPages,
        sources,
      };

      const filename = `ga4-report-${formatDate(today)}.json`;
      const filepath = path.join(OUTPUT_DIR, filename);
      fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
      console.log(`💾 Report saved to: ${filepath}\n`);
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.log('');
    console.log('Common issues:');
    console.log('- Invalid Property ID');
    console.log('- Service account not added to GA4 property');
    console.log('- Insufficient permissions (needs Viewer role)');
    console.log('');
    process.exit(1);
  }
}

main();
