/**
 * Verify GA4 Setup
 *
 * This script checks if GA4 is properly configured on your website
 * by verifying:
 * 1. Environment variable is set
 * 2. GA4 tracking code is present in the deployed site
 * 3. GA4 is receiving data (via realtime API)
 *
 * Usage: npm run ga:verify-setup
 */

const GA4Client = require('./client.cjs');
const path = require('path');
const https = require('https');
const fs = require('fs');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '../../rxsynapse-09e57aab275d.json');
const PROPERTY_ID = '517318746';
const WEBSITE_URL = 'https://rxsynapse.com';

function checkEnvFile() {
  const envPath = path.join(__dirname, '../../.env.local');
  const envExamplePath = path.join(__dirname, '../../.env.example');

  console.log('━'.repeat(80));
  console.log('1️⃣  CHECKING LOCAL ENVIRONMENT VARIABLES');
  console.log('━'.repeat(80));
  console.log('');

  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/NEXT_PUBLIC_GA_MEASUREMENT_ID=(.+)/);

    if (match && match[1] && match[1] !== 'G-XXXXXXXXXX') {
      console.log(`✅ .env.local exists`);
      console.log(`✅ NEXT_PUBLIC_GA_MEASUREMENT_ID is set: ${match[1]}`);
      console.log('');
      return match[1];
    } else {
      console.log(`⚠️  .env.local exists but NEXT_PUBLIC_GA_MEASUREMENT_ID is not properly set`);
      console.log(`   Current value: ${match ? match[1] : 'Not found'}`);
      console.log('');
      return null;
    }
  } else {
    console.log('❌ .env.local does not exist');
    console.log('');
    console.log('Create it by running:');
    console.log('  cp .env.example .env.local');
    console.log('  # Then edit .env.local and add your Measurement ID');
    console.log('');

    if (fs.existsSync(envExamplePath)) {
      console.log('ℹ️  .env.example file exists - use it as a template');
    }
    console.log('');
    return null;
  }
}

function checkWebsiteSource() {
  return new Promise((resolve) => {
    console.log('━'.repeat(80));
    console.log('2️⃣  CHECKING DEPLOYED WEBSITE');
    console.log('━'.repeat(80));
    console.log('');
    console.log(`Fetching: ${WEBSITE_URL}`);
    console.log('');

    https.get(WEBSITE_URL, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // Check for GA4 script
        const hasGtagScript = data.includes('googletagmanager.com/gtag/js');
        const hasGtagConfig = data.includes('gtag(');
        const measurementIdMatch = data.match(/G-[A-Z0-9]+/);

        if (hasGtagScript && hasGtagConfig) {
          console.log('✅ GA4 gtag.js script found in HTML');
          console.log('✅ GA4 configuration code found');

          if (measurementIdMatch) {
            console.log(`✅ Measurement ID found: ${measurementIdMatch[0]}`);
            console.log('');
            resolve({ success: true, measurementId: measurementIdMatch[0] });
          } else {
            console.log('⚠️  Measurement ID not found in page source');
            console.log('');
            resolve({ success: false });
          }
        } else {
          console.log('❌ GA4 tracking code NOT found in deployed website');
          console.log('');
          console.log('Possible issues:');
          console.log('- Environment variable not set in production');
          console.log('- Website not redeployed after adding GA4 code');
          console.log('- Build failed during deployment');
          console.log('');
          resolve({ success: false });
        }
      });
    }).on('error', (err) => {
      console.log(`❌ Error fetching website: ${err.message}`);
      console.log('');
      resolve({ success: false });
    });
  });
}

async function checkRealtimeData(client) {
  console.log('━'.repeat(80));
  console.log('3️⃣  CHECKING REALTIME DATA');
  console.log('━'.repeat(80));
  console.log('');

  try {
    const report = await client.getRealtimeReport({
      metrics: [{ name: 'activeUsers' }],
    });

    const data = client.parseReportRows(report)[0] || {};
    const activeUsers = data.activeUsers || 0;

    if (activeUsers > 0) {
      console.log(`✅ Active users detected: ${activeUsers}`);
      console.log('✅ GA4 is successfully tracking visitors!');
      console.log('');
      return true;
    } else {
      console.log('⚠️  No active users currently');
      console.log('');
      console.log('This is normal if:');
      console.log('- No one is visiting your site right now');
      console.log('- GA4 was just set up (allow 1-2 minutes for data)');
      console.log('');
      console.log('To test:');
      console.log('1. Open your website in a browser: ' + WEBSITE_URL);
      console.log('2. Run this script again');
      console.log('3. Or run: npm run ga:realtime -- --watch');
      console.log('');
      return false;
    }
  } catch (error) {
    console.log(`❌ Error fetching realtime data: ${error.message}`);
    console.log('');
    return false;
  }
}

async function main() {
  console.log('\n' + '═'.repeat(80));
  console.log('🔍 GA4 SETUP VERIFICATION');
  console.log('═'.repeat(80));
  console.log('');

  // Step 1: Check local env file
  const localMeasurementId = checkEnvFile();

  // Step 2: Check deployed website
  const websiteCheck = await checkWebsiteSource();

  // Step 3: Check realtime data
  const client = new GA4Client(CREDENTIALS_PATH, PROPERTY_ID);
  await client.initialize();
  const hasRealtimeData = await checkRealtimeData(client);

  // Summary
  console.log('═'.repeat(80));
  console.log('📊 VERIFICATION SUMMARY');
  console.log('═'.repeat(80));
  console.log('');

  const checks = [
    { name: 'Local environment variable', status: !!localMeasurementId },
    { name: 'GA4 code in deployed website', status: websiteCheck.success },
    { name: 'Realtime data flowing', status: hasRealtimeData },
  ];

  checks.forEach(check => {
    const icon = check.status ? '✅' : '❌';
    console.log(`${icon} ${check.name}`);
  });

  console.log('');

  const allPassed = checks.every(check => check.status);

  if (allPassed) {
    console.log('🎉 SUCCESS! GA4 is fully configured and working!');
    console.log('');
    console.log('Next steps:');
    console.log('- Monitor traffic: npm run ga:realtime -- --watch');
    console.log('- View reports: npm run ga:traffic');
    console.log('- Weekly summary: npm run ga:weekly-report');
  } else {
    console.log('⚠️  SETUP INCOMPLETE - Please review the issues above');
    console.log('');
    console.log('Quick fixes:');

    if (!localMeasurementId) {
      console.log('1. Create .env.local with your Measurement ID');
      console.log('   Run: npm run ga:get-measurement-id (after enabling Admin API)');
    }

    if (!websiteCheck.success) {
      console.log('2. Add NEXT_PUBLIC_GA_MEASUREMENT_ID to production environment');
      console.log('   - Railway: Add to Variables tab');
      console.log('   - Vercel/Netlify: Add to Environment Variables');
      console.log('3. Rebuild and redeploy your website');
    }

    if (!hasRealtimeData && websiteCheck.success) {
      console.log('4. Visit your website to generate traffic');
      console.log('5. Wait 1-2 minutes for data to appear');
    }

    console.log('');
    console.log('📖 Full setup guide: See GA4_SETUP.md');
  }

  console.log('');
  console.log('═'.repeat(80));
  console.log('');

  process.exit(allPassed ? 0 : 1);
}

main();
