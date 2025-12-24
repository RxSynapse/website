# GA4 Event Tracking - Quick Reference

## ✅ What's Already Tracking (Automatic)

These events are automatically tracked across your entire site **RIGHT NOW**:

### 1. Landing Pages 📍
- **What**: First page each user visits
- **Data Captured**: URL, referrer, UTM parameters
- **Event Name**: `page_landing`
- **View In GA4**: Reports > Acquisition > Traffic Acquisition

### 2. Time on Page ⏱️
- **What**: How long users spend on each page
- **Data Captured**: Seconds and minutes per page
- **Event Name**: `time_on_page`
- **View In GA4**: Reports > Engagement > Pages and screens

### 3. Scroll Depth 📜
- **What**: How far users scroll (25%, 50%, 75%, 90%, 100%)
- **Data Captured**: Scroll percentage, page URL
- **Event Name**: `scroll_depth`
- **View In GA4**: Reports > Engagement > Events > scroll_depth

### 4. Outbound Links 🔗
- **What**: Clicks on external links (other websites)
- **Data Captured**: Destination URL, link text, link type
- **Event Name**: `outbound_link`
- **View In GA4**: Reports > Engagement > Events > outbound_link

### 5. Page Navigation 🧭
- **What**: Movement between pages on your site
- **Data Captured**: From page, to page, navigation type
- **Event Name**: `page_navigation`
- **View In GA4**: Reports > Engagement > Events > page_navigation

### 6. Page Views 👁️
- **What**: Every page load and route change
- **Data Captured**: Page path, page title
- **Event Name**: `page_view` (built-in)
- **View In GA4**: Reports > Engagement > Pages and screens

## 📊 How to View This Data

### Option 1: Real-Time (Instant)

```bash
# Terminal command - shows live visitors
npm run ga:realtime -- --watch
```

**What you'll see:**
- Active users right now
- Pages they're on
- Their country
- Their device type

### Option 2: GA4 Dashboard (Web UI)

1. Go to https://analytics.google.com/
2. Select "RxSynapse" property
3. Navigate to:
   - **Realtime** → See live activity
   - **Reports > Engagement > Events** → See all custom events
   - **Reports > Engagement > Pages** → See page performance
   - **Reports > Acquisition** → See traffic sources

### Option 3: API Reports (Command Line)

```bash
# Traffic report (last 7 days)
npm run ga:traffic

# Last 30 days
npm run ga:traffic 30

# Weekly comparison report
npm run ga:weekly-report

# Save report to JSON
npm run ga:weekly-report -- --save
```

## 🎯 Adding Button Click Tracking

To track which buttons users click, replace regular buttons with tracked buttons:

### Quick Example:

```tsx
// Before:
import { Button } from '@mui/material';

<Button onClick={() => doSomething()}>
  Click Me
</Button>

// After:
import { TrackedCTAButton } from '@/components/TrackedButton';

<TrackedCTAButton
  trackingName="my_button_name"
  trackingLocation="hero"
  trackingDestination="/flow"
  onClick={() => doSomething()}
>
  Click Me
</TrackedCTAButton>
```

**Full guide**: See `TRACKING_GUIDE.md`

**Example implementation**: See `examples/Hero.with-tracking.example.tsx`

## 📋 Recommended Buttons to Track

Track these buttons to understand user behavior:

### High Priority 🔴
1. **All CTA buttons** (Get Started, Learn More, etc.)
2. **Navigation menu links** (Flow, Communication)
3. **Contact form buttons**
4. **Social media links**

### Medium Priority 🟡
5. **Feature exploration buttons**
6. **Pricing/package buttons**
7. **Download buttons**
8. **Share buttons**

### Low Priority 🟢
9. **Footer links**
10. **Accordion expand buttons**
11. **Modal close buttons**

## 🔍 Key Questions You Can Answer

Once you add button tracking, you'll know:

### User Behavior
- ✅ Which landing page do users come from?
  - *View*: Reports > Acquisition > Traffic acquisition
- ✅ How long do they spend on each page?
  - *View*: Reports > Engagement > Pages and screens
- ✅ Which page sections do they read (scroll depth)?
  - *View*: Reports > Engagement > Events > scroll_depth
- ✅ Which buttons do they click most?
  - *View*: Reports > Engagement > Events > button_click
- ✅ Where do they go when they leave your site?
  - *View*: Reports > Engagement > Events > outbound_link

### Conversion Insights
- ✅ Which CTA buttons convert best?
  - *View*: Reports > Engagement > Events > cta_click
- ✅ What's the user journey before conversion?
  - *View*: Reports > Engagement > Events > page_navigation
- ✅ Do users from specific sources behave differently?
  - *View*: Reports > Acquisition + Custom exploration
- ✅ Which pages have the highest exit rates?
  - *View*: Reports > Engagement > Pages (Exit rate column)

### Page Performance
- ✅ Which pages keep users engaged longest?
  - *View*: Reports > Engagement > Events > time_on_page
- ✅ Which pages have the best scroll engagement?
  - *View*: Reports > Engagement > Events > scroll_depth
- ✅ Which pages lead to the most conversions?
  - *View*: Reports > Conversions (after marking events as conversions)

## 🚀 Next Steps

### 1. Verify Tracking is Working (NOW)

```bash
# In one terminal, watch realtime data
npm run ga:realtime -- --watch

# In another terminal or browser
# Visit https://rxsynapse.com

# You should see yourself as an active user within 30 seconds!
```

### 2. Add Button Tracking (This Week)

Choose 3-5 most important buttons and add tracking:

**Example**: Home page "Get Started" button
- See `examples/Hero.with-tracking.example.tsx` for code
- Copy the pattern to other buttons

**Test it**:
```bash
npm run build && npm start
npm run ga:realtime -- --watch
# Click the button, see the event appear!
```

### 3. Set Up Conversions (This Week)

Mark important events as conversions:

1. Go to GA4 Admin > Events
2. Find `cta_click` event
3. Toggle "Mark as conversion"
4. Repeat for `form_submit`, etc.

### 4. Create Custom Reports (Next Week)

In GA4 > Explore:
- Button performance dashboard
- User journey analysis
- Page engagement overview

### 5. Monitor Weekly (Ongoing)

```bash
# Run weekly and track trends
npm run ga:weekly-report -- --save
```

## 📚 Documentation Files

- **`TRACKING_GUIDE.md`** - Complete implementation guide
- **`GA4_SETUP.md`** - Initial GA4 setup instructions
- **`examples/Hero.with-tracking.example.tsx`** - Code example
- **`scripts/ga/README.md`** - API scripts documentation

## 🆘 Troubleshooting

### Events not showing in realtime?

1. Check GA4 is enabled:
   ```bash
   npm run ga:verify-setup
   ```

2. Test in production mode:
   ```bash
   npm run build
   npm start
   # (Development mode disables GA4)
   ```

3. Check browser console for errors (F12)

4. Verify Measurement ID is set:
   ```bash
   railway variables | grep GA_MEASUREMENT
   ```

### Events showing locally but not in production?

- Environment variable not set in Railway
- Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XJEQ542PF5`
- Redeploy

### Need to debug events?

Install Google Analytics Debugger:
https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna

## 🎉 Summary

**You currently have**:
- ✅ GA4 fully configured and working
- ✅ Automatic tracking of landing pages, time on page, scroll depth, outbound links, and navigation
- ✅ Real-time monitoring via CLI
- ✅ API-based reporting
- ✅ All tracking utilities and components ready to use

**You need to add**:
- 🔲 Button click tracking (use `TrackedButton` components)
- 🔲 Form tracking (use `trackFormStart/Submit` functions)
- 🔲 Custom business-specific events (optional)

**Time investment**:
- ~5 minutes per button to add tracking
- ~30 minutes total for key buttons across the site

**ROI**:
- Complete visibility into user behavior
- Data-driven decisions for optimization
- Track conversion funnel performance
- Understand which marketing channels work best

Start with the most important CTA buttons and expand from there!
