# Google Search Console API Integration

This directory contains scripts for interacting with Google Search Console API programmatically. All credentials and configuration are scoped to this project only.

## 📋 Prerequisites

1. ✅ Google Cloud Project created
2. ✅ Search Console API enabled
3. ✅ Service Account created with credentials JSON file
4. ✅ Service Account added to Search Console with Owner permissions

## 🗂️ Files

### Core Module
- **`client.js`** - Reusable GSC API client with authentication and common methods

### Scripts
- **`list-sites.cjs`** - List all sites accessible to the service account
- **`submit-sitemap.cjs`** - Submit sitemap to Google Search Console
- **`check-sitemap.cjs`** - Check sitemap status and indexing progress
- **`get-search-performance.cjs`** - Get top search queries with clicks, impressions, CTR
- **`get-page-performance.cjs`** - Get performance metrics grouped by page/URL
- **`weekly-report.cjs`** - Generate comprehensive weekly performance report
- **`inspect-url.cjs`** - Inspect URL indexing status (requires full permissions)

## 🚀 Quick Start

### 1. Verify Access
First, verify that your service account has access to your site:

```bash
node scripts/gsc/list-sites.js
```

Expected output:
```
✓ Google Search Console API client initialized successfully

🔍 Listing all accessible sites...

Found 1 site(s):

────────────────────────────────────────────────────────────────────────────────
Site URL                                           Permission Level
────────────────────────────────────────────────────────────────────────────────
https://rxsynapse.com/                                        Owner
────────────────────────────────────────────────────────────────────────────────

✓ All sites listed successfully
```

### 2. Submit Sitemap (One-time)
```bash
node scripts/gsc/submit-sitemap.js sitemap.xml
```

### 3. Check Sitemap Status
```bash
node scripts/gsc/check-sitemap.js
```

### 4. Get Search Performance Data
```bash
# Top search queries (last 7 days)
node scripts/gsc/get-search-performance.js

# Top pages (last 30 days)
node scripts/gsc/get-page-performance.js
```

## 📊 Example Outputs

### Search Performance
```
📊 Fetching search performance data...
Date range: 2025-12-15 to 2025-12-22

Top 50 Search Queries:

────────────────────────────────────────────────────────────────────────────────────────────────────────
Query                                                    Clicks      Impr.      CTR  Position
────────────────────────────────────────────────────────────────────────────────────────────────────────
rxsynapse                                                    45        234    19.23%       3.2
institutional trading platform                               12        156     7.69%       8.5
options flow tracking                                         8         89     8.99%      12.1
...
```

### Page Performance
```
📄 Fetching page performance data...
Date range: 2025-11-22 to 2025-12-22

Top 25 Pages:

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Page URL                                                                       Clicks      Impr.      CTR  Position
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
/                                                                                  65        456    14.25%       4.5
/flow                                                                              23        189    12.17%       6.8
/communication                                                                     12         78    15.38%       5.2
...
```

## 🔒 Security

### Credentials Management
- ✅ Service account credentials stored in `rxsynapse-09e57aab275d.json` (root directory)
- ✅ Credentials file excluded from git via `.gitignore`
- ✅ Read-only API scope: `https://www.googleapis.com/auth/webmasters.readonly`

### .gitignore Configuration
The following patterns ensure credentials are never committed:
```
# Google Service Account Credentials
*.json
!package.json
!package-lock.json
!tsconfig.json
!tsconfig.node.json
!railway.json
!.vscode/*.json
```

## 🛠️ API Client Usage

### Basic Usage
```javascript
const GSCClient = require('./scripts/gsc/client');
const path = require('path');

const client = new GSCClient(
  path.join(__dirname, 'rxsynapse-09e57aab275d.json'),
  'https://rxsynapse.com/'
);

await client.initialize();
```

### Available Methods

#### `listSites()`
Get all sites accessible to the service account.

```javascript
const sites = await client.listSites();
console.log(sites);
```

#### `querySearchAnalytics(options)`
Query search analytics data with flexible options.

```javascript
const results = await client.querySearchAnalytics({
  startDate: '2025-12-01',
  endDate: '2025-12-22',
  dimensions: ['query', 'page'],
  rowLimit: 100,
  type: 'web'
});
```

**Dimensions:**
- `query` - Search queries
- `page` - URLs
- `country` - Country codes
- `device` - DESKTOP, MOBILE, TABLET
- `searchAppearance` - How result appeared in search

#### `listSitemaps()`
Get all submitted sitemaps.

```javascript
const sitemaps = await client.listSitemaps();
```

#### `getSitemap(feedpath)`
Get detailed sitemap information.

```javascript
const sitemap = await client.getSitemap('sitemap.xml');
console.log(`Submitted: ${sitemap.contents[0].submitted}`);
console.log(`Indexed: ${sitemap.contents[0].indexed}`);
```

#### `submitSitemap(feedpath)`
Submit a new sitemap (one-time operation).

```javascript
await client.submitSitemap('sitemap.xml');
```

## 🔧 Customization

### Changing Date Ranges
Edit the date calculation in each script:

```javascript
// Last 7 days
const endDate = new Date();
endDate.setDate(endDate.getDate() - 3); // GSC has ~3 day delay
const startDate = new Date(endDate);
startDate.setDate(startDate.getDate() - 7);

// Last 30 days
startDate.setDate(startDate.getDate() - 30);

// Last 90 days
startDate.setDate(startDate.getDate() - 90);
```

### Changing Dimensions
Modify the `dimensions` array in query calls:

```javascript
// Group by query and device
dimensions: ['query', 'device']

// Group by page and country
dimensions: ['page', 'country']

// Multiple dimensions
dimensions: ['query', 'page', 'device']
```

### Changing Row Limit
```javascript
rowLimit: 1000  // Maximum 25,000
```

## 📚 API Documentation

- [Search Console API Reference](https://developers.google.com/webmaster-tools/v1/api_reference_index)
- [Search Analytics API](https://developers.google.com/webmaster-tools/v1/searchanalytics)
- [Sitemaps API](https://developers.google.com/webmaster-tools/v1/sitemaps)

## 📅 Weekly Reports & Automation

### Generate Weekly Report
Get a comprehensive week-over-week performance comparison:

```bash
npm run gsc:weekly-report
```

The report includes:
- Overall performance summary with week-over-week changes
- Top 10 search queries with metrics
- Top pages by clicks
- Automated insights and recommendations
- Trend indicators (↑ ↓ →)

### Save Report to File
```bash
npm run gsc:weekly-report -- --save
```

This creates a JSON file in `reports/gsc-report-YYYY-MM-DD.json` for archival and historical tracking.

### Automate Reports with Cron

#### macOS/Linux Setup

1. **Open crontab editor:**
```bash
crontab -e
```

2. **Add weekly report (every Monday at 9 AM):**
```cron
0 9 * * 1 cd /Users/keshavram/WebstormProjects/website && /usr/local/bin/node scripts/gsc/weekly-report.cjs --save >> logs/gsc-cron.log 2>&1
```

3. **Add daily quick check (every day at 8 AM):**
```cron
0 8 * * * cd /Users/keshavram/WebstormProjects/website && /usr/local/bin/node scripts/gsc/get-search-performance.cjs >> logs/gsc-daily.log 2>&1
```

4. **Find your node path:**
```bash
which node
```

**Cron Schedule Format:**
```
* * * * * command
│ │ │ │ │
│ │ │ │ └─── Day of week (0-7, 0 and 7 are Sunday)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)
```

**Common Schedules:**
- `0 9 * * 1` - Every Monday at 9 AM
- `0 */6 * * *` - Every 6 hours
- `0 0 * * *` - Daily at midnight
- `0 8 * * 1-5` - Weekdays at 8 AM

#### Create Log Directory
```bash
mkdir -p /Users/keshavram/WebstormProjects/website/logs
```

#### View Cron Logs
```bash
tail -f logs/gsc-cron.log
```

### Email Reports

To email reports automatically, you can pipe the output to mail:

```bash
# Install mailutils (Ubuntu/Debian)
sudo apt-get install mailutils

# Modify cron job
0 9 * * 1 cd /path/to/project && node scripts/gsc/weekly-report.cjs | mail -s "Weekly GSC Report" your@email.com
```

For macOS, use the built-in `mail` command or set up with Gmail SMTP.

### Alternative: GitHub Actions

Create `.github/workflows/gsc-weekly-report.yml`:

```yaml
name: Weekly GSC Report

on:
  schedule:
    - cron: '0 9 * * 1'  # Every Monday at 9 AM UTC
  workflow_dispatch:  # Manual trigger

jobs:
  report:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Generate GSC Report
        env:
          GSC_CREDENTIALS: ${{ secrets.GSC_CREDENTIALS }}
        run: |
          echo "$GSC_CREDENTIALS" > rxsynapse-09e57aab275d.json
          npm run gsc:weekly-report -- --save

      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: gsc-report
          path: reports/
```

Then add your credentials as a GitHub secret named `GSC_CREDENTIALS`.

## ⚠️ Common Issues

### "No sites found"
**Solution:** Add service account email to Search Console:
1. Go to https://search.google.com/search-console
2. Select your property (rxsynapse.com)
3. Settings → Users and permissions → Add user
4. Add service account email with "Owner" permission
5. Wait a few minutes for permissions to propagate

### "403 Forbidden"
**Solution:**
1. Verify API is enabled: https://console.cloud.google.com/apis/library/searchconsole.googleapis.com
2. Check service account has correct permissions
3. Ensure credentials file path is correct

### "No data available"
**Solution:**
- GSC data has a 2-3 day delay
- Ensure your site has been indexed by Google
- Check date range is not too recent

## 🎯 Next Steps

1. **Automate Reports**: Set up cron jobs to run scripts periodically
2. **Data Export**: Add CSV/JSON export functionality
3. **Dashboards**: Create visual dashboards with the data
4. **Alerts**: Set up alerts for traffic drops or indexing issues
5. **Integration**: Integrate with other analytics tools

## 📝 License

This integration is part of the RxSynapse project and uses Google's Search Console API under their terms of service.
