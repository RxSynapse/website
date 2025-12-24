/**
 * Set Up GA4 Conversions
 *
 * This script marks important events as conversions in GA4.
 * Conversions are key business actions you want to track and optimize for.
 *
 * Usage: npm run ga:setup-conversions
 *
 * Important Note:
 * - Events must exist (have been fired at least once) before you can mark them as conversions
 * - After running this script, wait 24-48 hours for conversions to appear in reports
 * - You can also mark conversions manually in GA4 UI: Admin > Events > Toggle "Mark as conversion"
 */

const GA4Client = require('./client.cjs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const PROPERTY_ID = '517318746';

// Events to mark as conversions
const CONVERSION_EVENTS = [
  {
    name: 'cta_click',
    description: 'User clicked a CTA button (primary conversion)',
  },
  {
    name: 'button_click',
    description: 'User clicked any tracked button',
  },
  {
    name: 'form_submit',
    description: 'User submitted a form',
  },
  {
    name: 'outbound_link',
    description: 'User clicked external link (e.g., Telegram signup)',
  },
  {
    name: 'page_landing',
    description: 'User landed on the site (useful for attribution)',
  },
];

async function main() {
  console.log('\n' + '═'.repeat(80));
  console.log('🎯 GA4 CONVERSION SETUP');
  console.log('═'.repeat(80));
  console.log('');

  console.log('⚠️  IMPORTANT NOTES:');
  console.log('');
  console.log('1. Events must exist (fired at least once) before marking as conversions');
  console.log('2. Custom events cannot be marked as conversions via API yet');
  console.log('3. You must manually mark custom events as conversions in GA4 UI');
  console.log('');
  console.log('━'.repeat(80));
  console.log('📋 MANUAL SETUP INSTRUCTIONS');
  console.log('━'.repeat(80));
  console.log('');
  console.log('Follow these steps to mark your events as conversions:');
  console.log('');
  console.log('1. Go to: https://analytics.google.com/');
  console.log('2. Select your GA4 property: RxSynapse');
  console.log('3. Navigate to: Admin (bottom left) > Events');
  console.log('4. Wait for your custom events to appear in the list');
  console.log('   (Events appear after they\'ve been fired at least once)');
  console.log('');
  console.log('5. Mark these events as conversions by toggling the switch:');
  console.log('');

  CONVERSION_EVENTS.forEach(({ name, description }, index) => {
    console.log(`   ${index + 1}. ${name.padEnd(20)} - ${description}`);
  });

  console.log('');
  console.log('━'.repeat(80));
  console.log('🚀 GENERATING CONVERSION EVENTS');
  console.log('━'.repeat(80));
  console.log('');
  console.log('To ensure events exist before marking as conversions:');
  console.log('');
  console.log('1. Build and deploy your site:');
  console.log('   npm run build');
  console.log('   git add . && git commit -m "Add GA4 event tracking"');
  console.log('   git push');
  console.log('');
  console.log('2. Visit your site and click buttons:');
  console.log('   - Home "Get Started" button');
  console.log('   - Flow "Start Free on Telegram" button');
  console.log('   - Communication "View Demo" button');
  console.log('   - Navbar navigation links');
  console.log('   - Social media icons in footer');
  console.log('');
  console.log('3. Verify events are being tracked:');
  console.log('   npm run ga:realtime -- --watch');
  console.log('   (You should see the events appear)');
  console.log('');
  console.log('4. Wait 24-48 hours for events to appear in GA4 Admin > Events');
  console.log('');
  console.log('5. Then mark them as conversions using the instructions above');
  console.log('');

  console.log('━'.repeat(80));
  console.log('📊 VIEWING CONVERSION DATA');
  console.log('━'.repeat(80));
  console.log('');
  console.log('After marking events as conversions, view them here:');
  console.log('');
  console.log('• GA4 Dashboard:');
  console.log('  Reports > Conversions');
  console.log('');
  console.log('• Realtime:');
  console.log('  Reports > Realtime > Conversions card');
  console.log('');
  console.log('• API:');
  console.log('  npm run ga:traffic');
  console.log('  npm run ga:weekly-report');
  console.log('');

  console.log('━'.repeat(80));
  console.log('🎨 CONVERSION VALUE (Optional)');
  console.log('━'.repeat(80));
  console.log('');
  console.log('You can assign a monetary value to conversions:');
  console.log('');
  console.log('1. In GA4 Admin > Events');
  console.log('2. Click on the event name');
  console.log('3. Add a default value (e.g., $10 for contact form submission)');
  console.log('4. This helps calculate ROI and track revenue attribution');
  console.log('');

  console.log('━'.repeat(80));
  console.log('💡 CONVERSION TRACKING BEST PRACTICES');
  console.log('━'.repeat(80));
  console.log('');
  console.log('Primary Conversions (Most Important):');
  console.log('  ✅ cta_click - Primary CTA button clicks');
  console.log('  ✅ form_submit - Form submissions');
  console.log('  ✅ outbound_link - External links (e.g., Telegram signup)');
  console.log('');
  console.log('Secondary Conversions:');
  console.log('  ✅ button_click - All button interactions');
  console.log('  ✅ page_landing - Landing page visits (for attribution)');
  console.log('');
  console.log('Micro Conversions (Optional):');
  console.log('  • scroll_depth (75% or 100% milestone)');
  console.log('  • time_on_page (5+ minutes)');
  console.log('  • page_navigation (3+ pages visited)');
  console.log('');

  console.log('━'.repeat(80));
  console.log('🔗 QUICK LINKS');
  console.log('━'.repeat(80));
  console.log('');
  console.log('• GA4 Events:        https://analytics.google.com/ > Admin > Events');
  console.log('• GA4 Conversions:   https://analytics.google.com/ > Reports > Conversions');
  console.log('• Realtime Data:     npm run ga:realtime -- --watch');
  console.log('');

  console.log('═'.repeat(80));
  console.log('✅ Setup guide complete!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Deploy your tracking changes');
  console.log('2. Test by clicking buttons on your site');
  console.log('3. Wait 24-48 hours');
  console.log('4. Mark events as conversions in GA4 UI');
  console.log('═'.repeat(80));
  console.log('');
}

main();
