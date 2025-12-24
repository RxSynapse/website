# Google Analytics 4 (GA4) Integration

Complete GA4 integration with both website tracking and API analytics reporting.

## 🎯 What's Included

1. **Website Tracking**: GA4 tracking code integrated into your Next.js site
2. **API Analytics**: Scripts to fetch and analyze GA4 data via API
3. **Verification Tools**: Automated checks to ensure everything is working

## 📚 Documentation

**For complete setup instructions, see [GA4_SETUP.md](../../GA4_SETUP.md)**

## Quick Start

### 1. Enable Required API

Enable the Google Analytics Admin API:
https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com/overview?project=48423728406

### 2. Get Your Measurement ID

```bash
npm run ga:get-measurement-id
```

Or get it manually from GA4 Admin > Data Streams.

### 3. Configure Environment

Create `.env.local`:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Verify Setup

```bash
npm run ga:verify-setup
```

## Setup Instructions (Detailed)

### 1. Service Account Configuration

You can use the **same service account** that you set up for Google Search Console.

**If you haven't set up a service account yet:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Analytics Data API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Analytics Data API"
   - Click "Enable"
4. Create a service account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Give it a name (e.g., "GA4 API Access")
   - Click "Create and Continue"
   - Grant it "Viewer" role (optional, can skip)
   - Click "Done"
5. Generate JSON key:
   - Click on your service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select "JSON" and click "Create"
   - Save the downloaded JSON file as `rxsynapse-09e57aab275d.json` in the project root

### 2. Add Service Account to GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your GA4 property
3. Go to **Admin** (bottom left gear icon)
4. Under "Property", click **Property Access Management**
5. Click the **"+"** button in the top right
6. Click **"Add users"**
7. Enter your **service account email** (found in the JSON file: `client_email`)
8. Assign at least **"Viewer"** role
9. Click **"Add"**

### 3. Find Your GA4 Property ID

1. Still in GA4 Admin, go to **Property Settings**
2. Find your **Property ID** (a number like `123456789`)
3. Copy this ID

### 4. Configure Scripts

Edit the following files and replace `YOUR_PROPERTY_ID_HERE` with your actual Property ID:

- `scripts/ga/get-traffic.cjs` (line 18)
- `scripts/ga/weekly-report.cjs` (line 20)
- `scripts/ga/get-realtime.cjs` (line 18)

**Find and replace:**
```javascript
const PROPERTY_ID = 'YOUR_PROPERTY_ID_HERE';
```

**With:**
```javascript
const PROPERTY_ID = '123456789'; // Your actual Property ID
```

## Available Scripts

Once configured, you can use these npm commands:

### List Properties
See all GA4 properties accessible to your service account:
```bash
npm run ga:list-properties
```

### Traffic Report
Get detailed traffic analytics:
```bash
npm run ga:traffic           # Last 7 days (default)
npm run ga:traffic 30        # Last 30 days
npm run ga:traffic 2024-01-01 2024-01-31  # Custom date range
```

### Weekly Report
Get a comprehensive weekly performance report comparing current week vs previous week:
```bash
npm run ga:weekly-report          # View in console
npm run ga:weekly-report -- --save  # Save to reports/ directory
```

### Realtime Traffic
Monitor live visitors on your site right now:
```bash
npm run ga:realtime              # One-time snapshot
npm run ga:realtime -- --watch   # Auto-refresh every 10 seconds
```

## What Each Script Does

### `list-properties.cjs`
- Lists all GA4 properties your service account can access
- Useful for finding your Property ID
- Shows property details (name, timezone, currency, etc.)

### `get-traffic.cjs`
- Shows overall metrics (users, sessions, pageviews, bounce rate, etc.)
- Top 10 pages by views
- Traffic breakdown by channel (Organic, Direct, Social, etc.)
- Traffic breakdown by device (Mobile, Desktop, Tablet)

### `weekly-report.cjs`
- Week-over-week comparison of key metrics
- Top 10 pages for the current week
- Top traffic channels
- Insights and recommendations based on performance
- Optional JSON export for archival

### `get-realtime.cjs`
- Live active users count
- Active users by page
- Active users by country
- Active users by device
- Optional watch mode for continuous monitoring

## API Metrics Reference

### Common GA4 Metrics

- **activeUsers**: Number of distinct users who visited your site
- **sessions**: Number of sessions (a session ends after 30 minutes of inactivity)
- **screenPageViews**: Total page views
- **averageSessionDuration**: Average time users spend on site (in seconds)
- **bounceRate**: Percentage of sessions that weren't engaged (0-1 scale, e.g., 0.65 = 65%)
- **engagementRate**: Percentage of engaged sessions (0-1 scale)

### Common GA4 Dimensions

- **pageTitle**: Title of the page
- **pagePath**: URL path of the page
- **sessionDefaultChannelGroup**: Traffic source (Organic Search, Direct, Social, etc.)
- **deviceCategory**: Device type (mobile, desktop, tablet)
- **country**: User's country

## Troubleshooting

### Error: "Property ID not configured"
- Edit the script file and replace `YOUR_PROPERTY_ID_HERE` with your actual Property ID

### Error: "Service account not added to GA4 property"
- Go to GA4 Admin > Property Access Management
- Add your service account email as a Viewer

### Error: "API not enabled"
- Go to Google Cloud Console
- Navigate to "APIs & Services" > "Library"
- Search for "Google Analytics Data API" and enable it

### No data returned / All zeros
- GA4 has a ~24 hour data processing delay (unlike GSC's 3 days)
- Make sure GA4 tracking code is installed on your website
- Check that data is flowing in the GA4 real-time report
- Verify your Property ID is correct

## Data Freshness

- **Standard Reports**: Data is usually available within 24-48 hours
- **Realtime Reports**: Data is available within seconds to minutes
- Always account for processing delays when analyzing recent data

## Security Notes

- **Never commit** the service account JSON file to version control
- Keep it in `.gitignore` (already configured)
- Service accounts should have **minimal permissions** (Viewer role is sufficient)
- Rotate service account keys periodically for security

## Further Reading

- [GA4 Data API Documentation](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [GA4 Dimensions & Metrics Explorer](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema)
- [Service Account Authentication](https://cloud.google.com/iam/docs/service-accounts)
