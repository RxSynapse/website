# Complete GA4 Event Tracking Guide

## What's Being Tracked Automatically

Your site now automatically tracks:

### ✅ Automatically Tracked Events:

1. **Landing Pages** - First page user visits
   - Tracks referrer, UTM parameters
   - Tracks only once per session

2. **Page Views** - Every page navigation
   - Automatic page path tracking
   - Query parameters included

3. **Time on Page** - How long users spend on each page
   - Tracked in seconds and minutes
   - Sent when user leaves the page

4. **Scroll Depth** - How far users scroll
   - Tracked at milestones: 25%, 50%, 75%, 90%, 100%
   - Per-page tracking

5. **Outbound Links** - External website clicks
   - Automatically detects external links
   - Categorizes as social/resource/other
   - Tracks location on page

6. **Page Navigation** - Movement between pages
   - Tracks from/to pages
   - Navigation type (click/back/forward)

### 📊 Enhanced Measurement (Already Enabled in GA4):

- **Scrolls** (90% scroll depth)
- **Outbound clicks**
- **Site search** (if you add search)
- **Video engagement** (if you add videos)
- **File downloads** (PDFs, docs, etc.)

## Adding Button Click Tracking

### Method 1: Using TrackedButton Component (Recommended)

Replace regular MUI buttons with `TrackedButton`:

```tsx
// Before:
import { Button } from '@mui/material';

<Button
  variant="contained"
  onClick={() => setContactOpen(true)}
>
  Get Started Today
</Button>

// After:
import { TrackedButton } from '@/components/TrackedButton';

<TrackedButton
  trackingName="get_started_hero"
  trackingType="cta"
  trackingLocation="hero"
  trackingDestination="contact_form"
  isCTA={true}
  variant="contained"
  onClick={() => setContactOpen(true)}
>
  Get Started Today
</TrackedButton>
```

### Method 2: Using Pre-configured CTA Button

```tsx
import { TrackedCTAButton } from '@/components/TrackedButton';

<TrackedCTAButton
  trackingName="get_started_hero"
  trackingLocation="hero"
  trackingDestination="contact_form"
  onClick={() => setContactOpen(true)}
>
  Get Started Today
</TrackedCTAButton>
```

### Method 3: Manual Tracking with Utility Functions

```tsx
import { trackButtonClick, trackCTAClick } from '@/lib/analytics';

<Button
  onClick={() => {
    // Track the click
    trackCTAClick('get_started_hero', {
      ctaLocation: 'hero',
      ctaDestination: 'contact_form',
      ctaText: 'Get Started Today',
    });

    // Your original logic
    setContactOpen(true);
  }}
>
  Get Started Today
</Button>
```

## Tracking Navigation Links

### Using TrackedLink Component:

```tsx
import { TrackedLink } from '@/components/TrackedLink';

<TrackedLink
  href="/flow"
  trackingName="flow_nav_link"
  trackingLocation="navbar"
>
  RxFlow
</TrackedLink>
```

## All Available Tracking Functions

Import from `@/lib/analytics`:

### Button Tracking
```tsx
trackButtonClick('button_name', {
  buttonType: 'cta' | 'navigation' | 'action' | 'social' | 'download',
  buttonLocation: 'hero' | 'navbar' | 'footer' | string,
  buttonDestination: '/path' | 'url',
  buttonText: 'Button Text',
});

trackCTAClick('cta_name', {
  ctaLocation: 'hero',
  ctaDestination: '/flow',
  ctaText: 'Get Started',
});
```

### Form Tracking
```tsx
trackFormStart('contact_form', {
  formLocation: 'footer',
  formType: 'contact',
});

trackFormSubmit('contact_form', {
  formLocation: 'footer',
  formType: 'contact',
  success: true,
});
```

### Custom Events
```tsx
trackEvent('custom_event_name', {
  custom_param1: 'value',
  custom_param2: 123,
});
```

### Video Tracking
```tsx
trackVideoPlay('video_title', {
  videoUrl: '/path/to/video.mp4',
  videoLocation: 'hero',
  videoDuration: 120,
});
```

### Search Tracking
```tsx
trackSearch('user search query', {
  searchLocation: 'navbar',
  resultsCount: 42,
});
```

## Example: Complete Hero Component with Tracking

```tsx
'use client';

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { TrackedCTAButton } from '@/components/TrackedButton';
import { motion } from "framer-motion";

interface HeroProps {
  setContactOpen: (state: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setContactOpen }) => {
  return (
    <Box sx={{ /* styles */ }}>
      <Typography variant="h3">
        Transforming BFSI with AI-Powered Innovation
      </Typography>

      <Typography variant="h6">
        Expertise in Automation, Integration, Migration
      </Typography>

      {/* Tracked CTA Button */}
      <TrackedCTAButton
        trackingName="get_started_home"
        trackingLocation="home_hero"
        trackingDestination="contact_form"
        trackingParams={{
          pageSection: 'hero',
          actionType: 'contact',
        }}
        sx={{
          mt: 4,
          bgcolor: "#007BFF",
          fontSize: "1.2rem",
          px: 4,
          py: 1.5,
        }}
        onClick={() => setContactOpen(true)}
      >
        Get Started Today
      </TrackedCTAButton>
    </Box>
  );
};

export default Hero;
```

## How to View Tracked Events in GA4

### Real-Time View (Immediate)

1. **Using CLI (Easiest)**:
   ```bash
   npm run ga:realtime -- --watch
   ```

2. **Using GA4 Dashboard**:
   - Go to https://analytics.google.com/
   - Select your property
   - Go to **Reports** > **Realtime**
   - See live events as they happen

### Event Reports (Historical Data - 24-48 hours delay)

#### Method 1: GA4 Dashboard

1. Go to https://analytics.google.com/
2. Select your property
3. Go to **Reports** > **Engagement** > **Events**

**Key Events to Look For:**
- `button_click` - All button clicks
- `cta_click` - CTA button clicks specifically
- `page_landing` - Landing pages
- `time_on_page` - Time spent on pages
- `scroll_depth` - Scroll milestones
- `outbound_link` - External link clicks
- `page_navigation` - Navigation between pages
- `form_start` - Form interactions
- `form_submit` - Form submissions

#### Method 2: Using API Scripts

```bash
# Get traffic report with events
npm run ga:traffic

# Get weekly report
npm run ga:weekly-report
```

### Viewing Specific Event Details

1. In GA4, go to **Reports** > **Engagement** > **Events**
2. Click on any event name (e.g., `button_click`)
3. See all the parameters:
   - `button_name`
   - `button_type`
   - `button_location`
   - `button_destination`
   - `button_text`
   - `page_url`
   - `timestamp`

### Creating Custom Reports

1. In GA4, go to **Explore**
2. Click **Create new exploration**
3. Choose **Free form**
4. Add dimensions:
   - Event name
   - Page path
   - Button name (custom dimension)
   - Button location (custom dimension)
5. Add metrics:
   - Event count
   - Total users
6. Drag to build your report

### Setting Up Conversions

Mark important events as conversions:

1. Go to **Admin** > **Events**
2. Find your event (e.g., `cta_click`)
3. Toggle **"Mark as conversion"**

Now these events will appear in conversion reports!

## Advanced: Exporting Data via API

Use the scripts we created:

```bash
# Get traffic data including events
npm run ga:traffic 30  # Last 30 days

# Get weekly comparison
npm run ga:weekly-report -- --save

# Monitor realtime
npm run ga:realtime -- --watch
```

## Debugging Tracked Events

### Development Mode

Events are logged to console in development:

1. Run `npm run dev`
2. Open browser console (F12)
3. Click buttons, navigate pages
4. See console logs: `📊 GA4 Event: button_click { ... }`

### Production Mode

Use **Google Analytics Debugger** Chrome Extension:

1. Install: https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna
2. Enable the extension
3. Visit your site
4. Open browser console
5. See detailed GA4 event logs

## Best Practices

### Naming Conventions

Use clear, descriptive names:

```tsx
// ✅ Good
trackingName="get_started_home_hero"
trackingLocation="home_hero"

// ❌ Avoid
trackingName="button1"
trackingLocation="page"
```

### Button Types

- `cta` - Primary call-to-action buttons
- `navigation` - Menu, nav links
- `action` - Secondary actions (submit, save)
- `social` - Social media links
- `download` - File downloads

### Location Names

Be specific about where the button is:

- `home_hero`
- `flow_features`
- `navbar`
- `footer`
- `pricing_section`
- `testimonials`

## Common Tracking Patterns

### Contact Form Tracking

```tsx
<form
  onFocus={() => trackFormStart('contact_form', {
    formLocation: 'footer',
    formType: 'contact',
  })}
  onSubmit={(e) => {
    e.preventDefault();
    // ... submit logic
    trackFormSubmit('contact_form', {
      formLocation: 'footer',
      formType: 'contact',
      success: true,
    });
  }}
>
  {/* form fields */}
</form>
```

### Multiple CTAs on Same Page

Give each a unique name:

```tsx
<TrackedCTAButton trackingName="get_started_hero" />
<TrackedCTAButton trackingName="get_started_features" />
<TrackedCTAButton trackingName="get_started_pricing" />
```

Then in GA4, you can see which CTA performs best!

### Social Media Tracking

```tsx
import { TrackedSocialButton } from '@/components/TrackedButton';

<TrackedSocialButton
  trackingName="linkedin_footer"
  trackingLocation="footer"
  trackingDestination="https://linkedin.com/company/rxsynapse"
  href="https://linkedin.com/company/rxsynapse"
  target="_blank"
>
  LinkedIn
</TrackedSocialButton>
```

## Key Metrics to Monitor

### Button Performance
- Which buttons get clicked most?
- Which CTAs convert best?
- Where do users click before converting?

### User Behavior
- What's the landing page distribution?
- Average time on each page?
- Scroll depth by page?
- Exit pages (where users leave)?

### Navigation Patterns
- Most common user journeys?
- Pages visited before conversion?
- Navigation drop-off points?

### External Traffic
- Which outbound links get clicked?
- Where do users go after leaving?
- Social media click rates?

## Summary

### Files Created
- ✅ `lib/analytics.ts` - Tracking utilities
- ✅ `hooks/useAnalytics.ts` - Automatic tracking hooks
- ✅ `components/TrackedButton.tsx` - Tracked button components
- ✅ `components/TrackedLink.tsx` - Tracked link component
- ✅ `app/components/GoogleAnalytics.tsx` - Updated with auto-tracking

### What's Already Working
- ✅ Automatic landing page tracking
- ✅ Automatic time on page tracking
- ✅ Automatic scroll depth tracking
- ✅ Automatic outbound link tracking
- ✅ Automatic page navigation tracking

### What You Need to Add
- 🔲 Button click tracking (use `TrackedButton`)
- 🔲 Form interaction tracking (use `trackFormStart/Submit`)
- 🔲 Custom events specific to your business

### How to View Data
- **Realtime**: `npm run ga:realtime -- --watch`
- **Dashboard**: https://analytics.google.com/ > Reports > Events
- **API Reports**: `npm run ga:traffic` / `npm run ga:weekly-report`

Need help? Check the examples above or run `npm run ga:verify-setup` to ensure everything is configured correctly!
