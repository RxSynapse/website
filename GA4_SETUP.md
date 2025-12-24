# Google Analytics 4 Setup Guide for RxSynapse

Complete guide to set up GA4 tracking on your Next.js website.

## Part 1: Enable Required APIs

### 1. Enable Google Analytics Admin API

The error you encountered is because the GA Admin API is not enabled. Follow these steps:

1. Go to: https://console.developers.google.com/apis/api/analyticsadmin.googleapis.com/overview?project=48423728406
2. Click **"Enable"**
3. Wait 1-2 minutes for the API to activate

**OR manually:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to **"APIs & Services"** > **"Library"**
4. Search for **"Google Analytics Admin API"**
5. Click on it and press **"Enable"**

## Part 2: Get Your GA4 Measurement ID

You have **TWO OPTIONS** to get your Measurement ID:

### Option A: Using the API Script (Recommended)

After enabling the Admin API above, run:

```bash
npm run ga:get-measurement-id
```

This will automatically find your Measurement ID.

### Option B: Manual Method (If API Fails)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (should be "RxSynapse" or similar)
3. Go to **Admin** (bottom left gear icon)
4. Under **"Property"**, click **"Data Streams"**
5. Click on your web data stream (if none exist, create one - see below)
6. Your **Measurement ID** will be displayed at the top right
   - Format: `G-XXXXXXXXXX` (e.g., `G-ABC123DEF4`)
7. Copy this Measurement ID

#### If No Web Data Stream Exists:

1. In **Admin** > **Data Streams**, click **"Add stream"**
2. Select **"Web"**
3. Enter:
   - **Website URL**: `https://rxsynapse.com`
   - **Stream name**: `RxSynapse Website`
4. Enable **"Enhanced measurement"** (recommended)
5. Click **"Create stream"**
6. Copy the **Measurement ID** displayed

## Part 3: Configure Your Website

### 1. Create Environment Variable File

Create `.env.local` in your project root:

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID from Part 2.

### 2. For Production Deployment

If deploying to Railway or another platform, add the environment variable:

**Railway:**
1. Go to your Railway project
2. Click on your service
3. Go to **"Variables"** tab
4. Add new variable:
   - **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX`
5. Redeploy

**Vercel/Netlify:**
Add the same environment variable in your deployment platform's settings.

## Part 4: Verify Installation

### 1. Local Testing

```bash
# Start your development server
npm run dev

# In another terminal, watch realtime analytics
npm run ga:realtime -- --watch
```

Visit `http://localhost:3000` and you should see active users appear in the realtime report.

**Note:** GA4 tracking is disabled in development mode by default. To test locally:

1. Build and run production mode:
   ```bash
   npm run build
   npm start
   ```

2. Or temporarily remove the development check in `app/components/GoogleAnalytics.tsx`

### 2. Production Testing

After deploying:

1. Visit https://rxsynapse.com
2. Run: `npm run ga:realtime -- --watch`
3. You should see your visit appear as an active user

**Alternative verification:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Go to **Reports** > **Realtime**
4. Visit your website in another tab
5. You should see yourself as an active user

### 3. Check Browser Console

1. Visit your website
2. Open browser DevTools (F12)
3. Go to **Console** tab
4. Look for messages about `gtag` or Google Analytics
5. No errors = working correctly

### 4. Using GA Debugger Chrome Extension

1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Enable the extension
3. Visit your website
4. Open browser console
5. You should see detailed GA4 tracking logs

## Part 5: What's Tracking Now

Once configured, GA4 will automatically track:

### Automatic Events:
- ✅ **Page views** (every page navigation)
- ✅ **Sessions** (user visits)
- ✅ **User engagement**
- ✅ **Scroll depth** (if enhanced measurement is on)
- ✅ **Outbound clicks** (if enhanced measurement is on)
- ✅ **Site search** (if enhanced measurement is on)
- ✅ **Video engagement** (if enhanced measurement is on)
- ✅ **File downloads** (if enhanced measurement is on)

### Custom Events (Optional):

You can track custom events using the helper function:

```typescript
import { sendGAEvent } from '@/app/components/GoogleAnalytics';

// Track button click
sendGAEvent('click', 'cta_button', {
  button_name: 'Get Started',
  page: '/flow'
});

// Track form submission
sendGAEvent('submit', 'contact_form', {
  form_type: 'inquiry'
});
```

## Part 6: View Your Analytics

### Using GA4 Reports Scripts:

```bash
# Weekly performance report
npm run ga:weekly-report

# Traffic report (last 7 days)
npm run ga:traffic

# Last 30 days
npm run ga:traffic 30

# Custom date range
npm run ga:traffic 2024-01-01 2024-12-31

# Realtime monitoring
npm run ga:realtime
npm run ga:realtime -- --watch  # Auto-refresh
```

### Using Google Analytics UI:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Explore:
   - **Realtime**: See live visitors
   - **Reports** > **Acquisition**: Where users come from
   - **Reports** > **Engagement**: Page views, events
   - **Reports** > **Monetization**: Conversions (if configured)
   - **Reports** > **Retention**: User retention rates
   - **Reports** > **Demographics**: User location, device, etc.

## Part 7: Troubleshooting

### Issue: No data in GA4 after 24 hours

**Solutions:**
1. Check that `.env.local` or production env var is set correctly
2. Verify Measurement ID format: `G-XXXXXXXXXX`
3. Check browser console for errors
4. Ensure you're testing in production build (`npm run build && npm start`)
5. Verify data stream is active in GA4 Admin

### Issue: "Measurement ID not found" error

**Solution:**
- Make sure you created a **Web Data Stream** in GA4 (see Part 2, Option B)

### Issue: API script fails with 403 error

**Solution:**
- Service account needs "Viewer" or "Editor" role in GA4 Property Access Management
- Ensure Admin API is enabled (Part 1)

### Issue: Tracking works locally but not in production

**Solution:**
- Verify environment variable is set in your production deployment platform
- Check production build logs for errors
- Ensure `.env.local` is not committed to git (it shouldn't be)

### Issue: Realtime shows 0 users but I'm on the site

**Solutions:**
1. GA4 has a 1-2 minute delay even for realtime
2. Try opening in incognito/private browsing
3. Disable ad blockers (they block GA4)
4. Check browser console for errors

## Summary Checklist

- [ ] Enable Google Analytics Admin API
- [ ] Get GA4 Measurement ID (either via script or manually)
- [ ] Create `.env.local` with `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Add environment variable to production deployment platform
- [ ] Build and deploy: `npm run build`
- [ ] Verify tracking with: `npm run ga:realtime -- --watch`
- [ ] Visit your website and confirm active user appears
- [ ] Wait 24-48 hours for full data to appear in reports

## Files Created

1. **`app/components/GoogleAnalytics.tsx`** - GA4 tracking component
2. **`app/layout.tsx`** - Updated to include GA4 (line 6, 73)
3. **`scripts/ga/get-measurement-id.cjs`** - Script to get Measurement ID via API
4. **`.env.example`** - Example environment variables
5. **`GA4_SETUP.md`** - This documentation

## Next Steps After Setup

Once GA4 is tracking data:

1. **Set up Conversions** (Goals):
   - GA4 Admin > Events > Mark important events as conversions
   - Examples: "contact_form_submit", "get_started_click"

2. **Create Custom Audiences**:
   - GA4 Admin > Audiences
   - Target specific user segments

3. **Link to Google Search Console**:
   - Already done via API! Data will flow automatically

4. **Set up Alerts**:
   - GA4 Admin > Custom Alerts
   - Get notified of traffic spikes/drops

5. **Schedule Weekly Reports**:
   - Run `npm run ga:weekly-report -- --save` to archive reports

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all environment variables are set
3. Ensure APIs are enabled in Google Cloud Console
4. Check GA4 Realtime report in GA4 UI
5. Review this documentation again

**Common mistake:** Forgetting to add the env var to production deployment platform!
