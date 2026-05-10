import type { Metadata } from 'next';
import { Container, Typography, Box, Link as MuiLink, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | RxSynapse',
  description: 'Terms of Service for RxSynapse and RxFlow - Read our terms and conditions before using the platform',
};

export default function TermsPage() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
          <Typography variant="h2" component="h1" sx={{ mt: 3, mb: 2, color: 'white', fontWeight: 'bold', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
            Terms of Service
          </Typography>
          <Typography variant="body1" sx={{ color: '#9ca3af', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Last Updated: May 10, 2026
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ color: '#d1d5db', '& h2': { color: 'white', mt: { xs: 4, md: 6 }, mb: { xs: 2, md: 3 }, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '1.875rem' }, fontWeight: 'bold' }, '& h3': { color: 'white', mt: { xs: 3, md: 4 }, mb: 2, fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' }, fontWeight: 'semibold' }, '& h4': { color: 'white', mt: { xs: 2, md: 3 }, mb: 1.5, fontSize: { xs: '1.125rem', sm: '1.25rem' }, fontWeight: 'medium' }, '& p': { mb: 2, lineHeight: 1.7, fontSize: { xs: '0.875rem', sm: '1rem' } }, '& ul': { mb: 3, pl: { xs: 3, sm: 4 } }, '& li': { mb: 1.5, fontSize: { xs: '0.875rem', sm: '1rem' } }, '& a': { color: '#60a5fa', '&:hover': { color: '#93c5fd' } }, '& strong': { color: 'white' } }}>

          {/* Introduction */}
          <Typography paragraph>
            Welcome to RxFlow, a real-time options intelligence platform operated by RxSynapse (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our platform, website, Telegram bot, and related services (collectively, the &quot;Services&quot;).
          </Typography>
          <Typography paragraph>
            By accessing or using RxFlow, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
          </Typography>

          {/* Acceptance */}
          <Typography variant="h2" component="h2">
            1. Acceptance of Terms
          </Typography>
          <Box component="ul">
            <li>You must be at least 18 years old to use RxFlow</li>
            <li>You must have the legal capacity to enter into binding contracts</li>
            <li>You represent that all information you provide is accurate and current</li>
            <li>You agree to comply with all applicable laws and regulations</li>
          </Box>

          {/* Account Registration */}
          <Typography variant="h2" component="h2">
            2. Account Registration and Security
          </Typography>

          <Typography variant="h3" component="h3">
            2.1 Account Creation
          </Typography>
          <Box component="ul">
            <li>You must register with a valid phone number for authentication</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must notify us immediately of any unauthorized access or security breach</li>
            <li>You may not share your account with others or create multiple accounts</li>
          </Box>

          <Typography variant="h3" component="h3">
            2.2 Account Termination
          </Typography>
          <Typography paragraph>
            We reserve the right to suspend or terminate your account if you:
          </Typography>
          <Box component="ul">
            <li>Violate these Terms of Service</li>
            <li>Engage in fraudulent or illegal activities</li>
            <li>Abuse or misuse the platform or services</li>
            <li>Harass other users or our support team</li>
          </Box>

          {/* Service Description */}
          <Typography variant="h2" component="h2">
            3. Service Description
          </Typography>

          <Typography variant="h3" component="h3">
            3.1 Platform Features
          </Typography>
          <Typography paragraph>
            RxFlow provides:
          </Typography>
          <Box component="ul">
            <li><strong>Real-Time Options Monitoring:</strong> Tracks 940+ option strikes across Nifty, BankNifty, FinNifty, MidcapNifty, and 15 top stocks</li>
            <li><strong>Unusual Activity Detection:</strong> Identifies volume spikes, open interest changes, and aggressive buying/selling patterns</li>
            <li><strong>Smart Money Correlation:</strong> Correlates options activity with FII/DII flows, bulk deals, and block deals</li>
            <li><strong>Alert Delivery:</strong> Instant notifications via Telegram with customizable severity levels</li>
            <li><strong>Performance Tracking:</strong> Tracks alert outcomes at 15min, 30min, 1hr, and 1-day intervals</li>
            <li><strong>Daily Summaries:</strong> Comprehensive daily reports with feedback collection</li>
          </Box>

          <Typography variant="h3" component="h3">
            3.2 Subscription Tiers
          </Typography>

          <Typography variant="h4" component="h4">
            FREE Tier
          </Typography>
          <Box component="ul">
            <li>EXTREME severity alerts: Unlimited</li>
            <li>HIGH severity alerts: 25 per day</li>
            <li>MEDIUM severity alerts: 25 per day</li>
            <li>LOW severity alerts: 50 per day</li>
            <li>Default watchlist (indices and top stocks)</li>
          </Box>

          <Typography variant="h4" component="h4">
            PAID Tier (Premium)
          </Typography>
          <Box component="ul">
            <li>Unlimited alerts across all severity levels (LOW, MEDIUM, HIGH, EXTREME)</li>
            <li>Custom watchlists with strike-level granularity</li>
            <li>Priority alert delivery</li>
            <li>Full access to historical performance data</li>
          </Box>

          {/* Subscription Plans */}
          <Typography variant="h2" component="h2">
            4. Subscription Plans and Pricing
          </Typography>

          <Typography variant="h3" component="h3">
            4.1 Available Plans
          </Typography>
          <TableContainer component={Paper} sx={{ bgcolor: '#1f2937', mt: 2, mb: 3, overflowX: 'auto' }}>
            <Table size={{ xs: 'small', sm: 'medium' }}>
              <TableHead>
                <TableRow sx={{ bgcolor: '#374151' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>Plan</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>Price (INR)</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>Telegram Stars</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>1 Day Pass</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>₹29</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>20 Stars</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>1 day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>7 Day Pass</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>₹149</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>100 Stars</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>7 days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>1 Month</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>₹299</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>200 Stars</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>30 days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>3 Months</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>₹799</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>533 Stars</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>90 days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, whiteSpace: 'nowrap' }}>1 Year</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>₹2,399</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>1,600 Stars</TableCell>
                  <TableCell sx={{ color: '#d1d5db', fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}>365 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h3" component="h3">
            4.2 Payment Methods
          </Typography>
          <Box component="ul">
            <li><strong>Telegram Stars:</strong> Primary payment method via Telegram&apos;s in-app purchase system</li>
            <li><strong>Razorpay:</strong> Credit card, debit card, UPI, net banking, and other methods (when available)</li>
            <li><strong>Manual Payment:</strong> Available for enterprise or special cases (contact support)</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.3 GST and Taxes
          </Typography>
          <Box component="ul">
            <li>All prices are inclusive of 18% GST as per Indian tax regulations</li>
            <li>GST breakdown: 9% CGST + 9% SGST (intra-state) or 18% IGST (inter-state)</li>
            <li>Tax invoices are generated automatically and available via Razorpay</li>
            <li>GSTIN and tax details are stored for compliance purposes</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.4 Billing and Renewal
          </Typography>
          <Box component="ul">
            <li>Subscriptions are prepaid for the selected duration</li>
            <li>Subscriptions do NOT auto-renew unless explicitly configured</li>
            <li>You will receive notifications 3 days and 1 day before subscription expiry</li>
            <li>Upon expiry, your account automatically downgrades to the FREE tier</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.5 Refund Policy
          </Typography>
          <Typography paragraph>
            Due to the digital nature of our service and instant access provided upon purchase, <strong>all sales are final and non-refundable</strong>. Exceptions may be made at our sole discretion in cases of:
          </Typography>
          <Box component="ul">
            <li>Technical failures preventing service access</li>
            <li>Duplicate payments or billing errors</li>
            <li>Service outages lasting more than 48 hours</li>
          </Box>
          <Typography paragraph>
            We recommend starting with a 1-day pass (₹29) to evaluate the service before committing to longer subscriptions.
          </Typography>

          <Typography variant="h3" component="h3">
            4.6 Upgrades and Downgrades
          </Typography>
          <Box component="ul">
            <li>You can purchase a new subscription plan at any time</li>
            <li>The new plan activates immediately upon successful payment</li>
            <li>Any remaining days from your current plan will be forfeited (no prorated refunds)</li>
            <li>Downgrades take effect automatically when your current subscription expires</li>
          </Box>

          {/* Acceptable Use */}
          <Typography variant="h2" component="h2">
            5. Acceptable Use Policy
          </Typography>

          <Typography variant="h3" component="h3">
            5.1 Permitted Use
          </Typography>
          <Typography paragraph>
            You may use RxFlow for:
          </Typography>
          <Box component="ul">
            <li>Personal trading research and market analysis</li>
            <li>Monitoring unusual options activity for educational purposes</li>
            <li>Receiving real-time alerts for your watchlist</li>
            <li>Tracking smart money flows and institutional trades</li>
          </Box>

          <Typography variant="h3" component="h3">
            5.2 Prohibited Activities
          </Typography>
          <Typography paragraph>
            You may NOT:
          </Typography>
          <Box component="ul">
            <li>Use automated bots, scrapers, or scripts to access the platform (except authorized trading bots)</li>
            <li>Reverse engineer, decompile, or attempt to extract source code</li>
            <li>Resell, redistribute, or sublicense our alerts or data</li>
            <li>Share your account credentials or subscription with others</li>
            <li>Interfere with or disrupt the platform&apos;s operation or servers</li>
            <li>Engage in fraudulent activity, including chargeback abuse</li>
            <li>Harass, threaten, or abuse other users or support staff via Telegram</li>
            <li>Use the service for illegal activities or market manipulation</li>
          </Box>

          {/* Disclaimer */}
          <Box sx={{ bgcolor: '#7f1d1d20', border: '1px solid #7f1d1d', borderRadius: 2, p: 3, mt: 6, mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mt: 0 }}>
              6. IMPORTANT DISCLAIMER
            </Typography>

            <Typography variant="h3" component="h3">
              6.1 Not Financial Advice
            </Typography>
            <Box component="ul">
              <li>RxFlow provides <strong>informational and analytical tools only</strong></li>
              <li>Alerts and data are <strong>NOT investment recommendations or financial advice</strong></li>
              <li>We are NOT a registered investment advisor, broker, or financial institution</li>
              <li>You should consult with a qualified financial advisor before making trading decisions</li>
            </Box>

            <Typography variant="h3" component="h3">
              6.2 Trading Risks
            </Typography>
            <Typography paragraph>
              <strong>Options trading involves substantial risk of loss and is not suitable for all investors.</strong> You acknowledge that:
            </Typography>
            <Box component="ul">
              <li>You can lose your entire investment or more</li>
              <li>Past performance is not indicative of future results</li>
              <li>Market conditions can change rapidly and unpredictably</li>
              <li>Our alerts may be delayed, inaccurate, or incomplete</li>
              <li>You are solely responsible for your trading decisions and outcomes</li>
            </Box>

            <Typography variant="h3" component="h3">
              6.3 Alert Accuracy
            </Typography>
            <Box component="ul">
              <li>We make no guarantees about alert accuracy or success rates</li>
              <li>Performance tracking shows historical volatility-based outcomes (10%+ move in any direction)</li>
              <li>Success rates are statistical and do not predict future performance</li>
              <li>Market data may be delayed or subject to errors from third-party providers</li>
            </Box>

            <Typography variant="h3" component="h3">
              6.4 Regulatory Compliance
            </Typography>
            <Box component="ul">
              <li>You are responsible for complying with SEBI regulations and Indian securities laws</li>
              <li>RxFlow is an analytical platform, not a trading platform or brokerage</li>
              <li>We do not execute trades or hold customer funds</li>
            </Box>
          </Box>

          {/* Intellectual Property */}
          <Typography variant="h2" component="h2">
            7. Intellectual Property Rights
          </Typography>

          <Typography variant="h3" component="h3">
            7.1 Our Rights
          </Typography>
          <Typography paragraph>
            All content, features, functionality, trademarks, logos, and technology on RxFlow are owned by RxSynapse and protected by copyright, trademark, and other intellectual property laws. This includes:
          </Typography>
          <Box component="ul">
            <li>Detection algorithms and proprietary analysis methods</li>
            <li>Smart money correlation engine</li>
            <li>Alert generation logic and severity classification</li>
            <li>Platform design, UI/UX, and branding</li>
            <li>Documentation, guides, and educational content</li>
          </Box>

          <Typography variant="h3" component="h3">
            7.2 Limited License
          </Typography>
          <Typography paragraph>
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use RxFlow for personal, non-commercial purposes in accordance with these Terms.
          </Typography>

          <Typography variant="h3" component="h3">
            7.3 Feedback
          </Typography>
          <Typography paragraph>
            Any feedback, suggestions, or ideas you provide to us become our property and may be used without compensation or attribution.
          </Typography>

          {/* Data and Privacy */}
          <Typography variant="h2" component="h2">
            8. Data and Privacy
          </Typography>
          <Typography paragraph>
            Your use of RxFlow is also governed by our <Link href="/privacy" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Privacy Policy</Link>, which describes how we collect, use, and protect your personal data. By using our Services, you consent to our data practices as described in the Privacy Policy.
          </Typography>

          {/* Limitation of Liability */}
          <Typography variant="h2" component="h2">
            9. Limitation of Liability
          </Typography>

          <Typography variant="h3" component="h3">
            9.1 Service Provided &quot;AS IS&quot;
          </Typography>
          <Typography paragraph>
            RxFlow is provided on an <strong>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </Typography>

          <Typography variant="h3" component="h3">
            9.2 No Liability for Trading Losses
          </Typography>
          <Typography paragraph>
            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, RXSYNAPSE SHALL NOT BE LIABLE FOR:</strong>
          </Typography>
          <Box component="ul">
            <li>Any trading losses, missed opportunities, or financial damages</li>
            <li>Errors, delays, or inaccuracies in alerts or market data</li>
            <li>Service interruptions, downtime, or technical failures</li>
            <li>Third-party service failures (Telegram, Firebase, Razorpay, Angel One)</li>
            <li>Indirect, incidental, consequential, or punitive damages</li>
          </Box>

          <Typography variant="h3" component="h3">
            9.3 Maximum Liability Cap
          </Typography>
          <Typography paragraph>
            In any case, our total liability to you for all claims arising from or related to RxFlow shall not exceed the amount you paid us in subscription fees during the 12 months preceding the claim.
          </Typography>

          {/* Indemnification */}
          <Typography variant="h2" component="h2">
            10. Indemnification
          </Typography>
          <Typography paragraph>
            You agree to indemnify, defend, and hold harmless RxSynapse, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising from:
          </Typography>
          <Box component="ul">
            <li>Your use or misuse of RxFlow</li>
            <li>Your violation of these Terms of Service</li>
            <li>Your trading activities or financial decisions</li>
            <li>Your violation of any third-party rights or applicable laws</li>
          </Box>

          {/* Third-Party Services */}
          <Typography variant="h2" component="h2">
            11. Third-Party Services and Links
          </Typography>
          <Box component="ul">
            <li>RxFlow integrates with third-party services (Firebase, Razorpay, Telegram, Angel One, Google Analytics)</li>
            <li>We are not responsible for the availability, accuracy, or content of third-party services</li>
            <li>Your use of third-party services is subject to their respective terms and policies</li>
            <li>We may display links to external websites; we do not endorse or control these sites</li>
          </Box>

          {/* Service Availability */}
          <Typography variant="h2" component="h2">
            12. Service Availability and Modifications
          </Typography>

          <Typography variant="h3" component="h3">
            12.1 Availability
          </Typography>
          <Box component="ul">
            <li>We strive for 99% uptime but do not guarantee uninterrupted service</li>
            <li>Maintenance windows may be scheduled with advance notice</li>
            <li>Market data streaming depends on Angel One API availability</li>
            <li>Telegram alert delivery depends on Telegram&apos;s infrastructure</li>
          </Box>

          <Typography variant="h3" component="h3">
            12.2 Modifications
          </Typography>
          <Typography paragraph>
            We reserve the right to:
          </Typography>
          <Box component="ul">
            <li>Modify, suspend, or discontinue any feature or service at any time</li>
            <li>Change pricing plans and subscription tiers with 30 days notice</li>
            <li>Update detection algorithms and alert logic to improve accuracy</li>
            <li>Add or remove supported symbols and strikes</li>
          </Box>

          {/* Termination */}
          <Typography variant="h2" component="h2">
            13. Termination
          </Typography>

          <Typography variant="h3" component="h3">
            13.1 Termination by You
          </Typography>
          <Box component="ul">
            <li>You may delete your account at any time through profile settings</li>
            <li>Account deletion is permanent and irreversible</li>
            <li>No refunds will be provided for unused subscription periods</li>
          </Box>

          <Typography variant="h3" component="h3">
            13.2 Termination by Us
          </Typography>
          <Typography paragraph>
            We may suspend or terminate your account immediately without notice if:
          </Typography>
          <Box component="ul">
            <li>You violate these Terms of Service</li>
            <li>You engage in fraudulent or illegal activity</li>
            <li>You abuse or misuse the platform</li>
            <li>Required by law or regulatory authority</li>
          </Box>

          <Typography variant="h3" component="h3">
            13.3 Effect of Termination
          </Typography>
          <Box component="ul">
            <li>Your right to use RxFlow immediately ceases</li>
            <li>All subscriptions and services are cancelled without refund</li>
            <li>User data is deleted per our data retention policy (except payment records for compliance)</li>
          </Box>

          {/* Governing Law */}
          <Typography variant="h2" component="h2">
            14. Governing Law and Dispute Resolution
          </Typography>

          <Typography variant="h3" component="h3">
            14.1 Governing Law
          </Typography>
          <Typography paragraph>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
          </Typography>

          <Typography variant="h3" component="h3">
            14.2 Dispute Resolution
          </Typography>
          <Typography paragraph>
            Before filing any legal claim, you agree to:
          </Typography>
          <Box component="ul">
            <li>Contact us at support@rxsynapse.com to attempt informal resolution</li>
            <li>Provide a detailed description of the dispute and proposed resolution</li>
            <li>Allow 30 days for good-faith negotiation</li>
          </Box>

          <Typography variant="h3" component="h3">
            14.3 Arbitration
          </Typography>
          <Typography paragraph>
            If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with arbitration conducted in India.
          </Typography>

          {/* Severability */}
          <Typography variant="h2" component="h2">
            15. Severability and Waiver
          </Typography>

          <Typography variant="h3" component="h3">
            15.1 Severability
          </Typography>
          <Typography paragraph>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.
          </Typography>

          <Typography variant="h3" component="h3">
            15.2 Waiver
          </Typography>
          <Typography paragraph>
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by our authorized representative.
          </Typography>

          {/* Changes to Terms */}
          <Typography variant="h2" component="h2">
            16. Changes to These Terms
          </Typography>
          <Typography paragraph>
            We may update these Terms from time to time. Material changes will be notified via:
          </Typography>
          <Box component="ul">
            <li>Email notification (if email is provided)</li>
            <li>Telegram bot notification</li>
            <li>Prominent notice on our website</li>
          </Box>
          <Typography paragraph>
            The &quot;Last Updated&quot; date at the top indicates when the Terms were last revised. Your continued use of RxFlow after changes are posted constitutes acceptance of the updated Terms.
          </Typography>

          {/* Entire Agreement */}
          <Typography variant="h2" component="h2">
            17. Entire Agreement
          </Typography>
          <Typography paragraph>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and RxSynapse regarding RxFlow and supersede all prior agreements, representations, and understandings.
          </Typography>

          {/* Contact */}
          <Typography variant="h2" component="h2">
            18. Contact Information
          </Typography>
          <Typography paragraph>
            For questions, concerns, or notices regarding these Terms of Service, please contact us:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
            <li><strong>Company Name:</strong> RxSynapse</li>
            <li><strong>Email:</strong> support@rxsynapse.com</li>
            <li><strong>Telegram:</strong> <MuiLink href="https://t.me/rxflow_alerts_bot" target="_blank" rel="noopener noreferrer">@rxflow_alerts_bot</MuiLink></li>
            <li><strong>Website:</strong> <MuiLink href="https://flow.rxsynapse.com" target="_blank" rel="noopener noreferrer">https://flow.rxsynapse.com</MuiLink></li>
          </Box>

          {/* Acknowledgment */}
          <Box sx={{ bgcolor: '#1e3a8a20', border: '1px solid #1e3a8a', borderRadius: 2, p: 3, mt: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mt: 0 }}>
              Acknowledgment
            </Typography>
            <Typography paragraph>
              <strong>By using RxFlow, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong> You further acknowledge that options trading involves substantial risk and that RxFlow provides informational tools only, not financial advice.
            </Typography>
            <Typography paragraph sx={{ mb: 0 }}>
              If you do not agree with these Terms, you must discontinue use of our Services immediately.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
