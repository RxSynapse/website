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
- **`list-sites.js`** - List all sites accessible to the service account
- **`submit-sitemap.js`** - Submit sitemap to Google Search Console
- **`check-sitemap.js`** - Check sitemap status and indexing progress
- **`get-search-performance.js`** - Get top search queries with clicks, impressions, CTR
- **`get-page-performance.js`** - Get performance metrics grouped by page/URL

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
