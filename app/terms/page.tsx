import type { Metadata } from 'next';
import { Container, Typography, Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | RxSynapse',
  description: 'Terms of Service for RxSynapse - Read our terms and conditions before using our BFSI solutions',
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
            Welcome to RxSynapse (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our AI-powered solutions for the BFSI sector, including RxFlow (trading intelligence), RxCommunication (conversational AI), and related services (collectively, the &quot;Services&quot;).
          </Typography>
          <Typography paragraph>
            By accessing or using any RxSynapse service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our Services.
          </Typography>

          {/* Acceptance */}
          <Typography variant="h2" component="h2">
            1. Acceptance of Terms
          </Typography>
          <Box component="ul">
            <li>You must be at least 18 years old to use RxSynapse services</li>
            <li>You must have the legal capacity to enter into binding contracts</li>
            <li>You represent that all information you provide is accurate, current, and complete</li>
            <li>You agree to comply with all applicable laws and regulations</li>
            <li>If you are using our services on behalf of a company, you represent that you have authority to bind that company</li>
          </Box>

          {/* Account Registration */}
          <Typography variant="h2" component="h2">
            2. Account Registration and Security
          </Typography>

          <Typography variant="h3" component="h3">
            2.1 Account Creation
          </Typography>
          <Box component="ul">
            <li>You must register with valid contact information (email and/or phone number)</li>
            <li>Choose a strong password and keep your account credentials confidential</li>
            <li>You are responsible for all activity that occurs under your account</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>You may not share your account with others or create multiple accounts without authorization</li>
            <li>Business accounts may have additional setup requirements</li>
          </Box>

          <Typography variant="h3" component="h3">
            2.2 Account Suspension and Termination
          </Typography>
          <Typography paragraph>
            We reserve the right to suspend or terminate your account if you:
          </Typography>
          <Box component="ul">
            <li>Violate these Terms of Service or any applicable laws</li>
            <li>Engage in fraudulent, abusive, or illegal activities</li>
            <li>Misuse or abuse the platform or services</li>
            <li>Harass other users, our staff, or partners</li>
            <li>Attempt to access unauthorized areas or data</li>
            <li>Use the service for purposes that compete with or harm RxSynapse</li>
          </Box>

          {/* Service Description */}
          <Typography variant="h2" component="h2">
            3. Services Overview
          </Typography>
          <Typography paragraph>
            RxSynapse provides AI-powered solutions for the BFSI sector:
          </Typography>

          <Typography variant="h3" component="h3">
            3.1 RxFlow - Trading Intelligence
          </Typography>
          <Box component="ul">
            <li>Real-time market data analysis and unusual activity detection</li>
            <li>Smart money flow tracking and institutional trade monitoring</li>
            <li>Customizable alerts and notifications via multiple channels</li>
            <li>Performance tracking and analytics dashboards</li>
            <li>Integration with communication platforms (Telegram, etc.)</li>
          </Box>

          <Typography variant="h3" component="h3">
            3.2 RxCommunication - Conversational AI
          </Typography>
          <Box component="ul">
            <li>IVR-less customer support and communication automation</li>
            <li>Natural language processing for customer interactions</li>
            <li>Multi-channel communication management</li>
            <li>Analytics and insights on customer engagement</li>
            <li>Integration with existing business systems</li>
          </Box>

          <Typography variant="h3" component="h3">
            3.3 Subscription Models
          </Typography>
          <Typography paragraph>
            Our services operate on subscription-based models with various tiers:
          </Typography>
          <Box component="ul">
            <li><strong>Free Tier:</strong> Limited access to core features with usage quotas</li>
            <li><strong>Premium Tiers:</strong> Enhanced features, higher limits, and priority support</li>
            <li><strong>Enterprise Plans:</strong> Custom solutions with dedicated support and SLAs</li>
            <li><strong>Trial Periods:</strong> Some services offer trial periods for evaluation</li>
          </Box>
          <Typography paragraph>
            Specific pricing, features, and terms for each service are available on the respective product pages.
          </Typography>

          {/* Payment Terms */}
          <Typography variant="h2" component="h2">
            4. Payment Terms and Billing
          </Typography>

          <Typography variant="h3" component="h3">
            4.1 Payment Methods
          </Typography>
          <Box component="ul">
            <li><strong>Credit/Debit Cards:</strong> Processed securely through Razorpay</li>
            <li><strong>UPI & Net Banking:</strong> Indian payment methods via Razorpay</li>
            <li><strong>Telegram Stars:</strong> In-app purchases for certain services</li>
            <li><strong>Wire Transfer:</strong> Available for enterprise accounts</li>
            <li><strong>Purchase Orders:</strong> Available for qualifying business customers</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.2 Taxes and Compliance
          </Typography>
          <Box component="ul">
            <li>All prices are inclusive of applicable GST (18%) as per Indian tax regulations</li>
            <li>GST breakdown: 9% CGST + 9% SGST (intra-state) or 18% IGST (inter-state)</li>
            <li>Tax invoices are generated automatically and available in your account</li>
            <li>GSTIN and other tax details are stored for compliance purposes</li>
            <li>International customers may be subject to additional taxes in their jurisdiction</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.3 Billing and Renewal
          </Typography>
          <Box component="ul">
            <li>Subscriptions are billed in advance for the selected period (monthly, quarterly, annually)</li>
            <li>Auto-renewal is enabled by default unless you opt out or cancel</li>
            <li>You will receive renewal reminders before your subscription expires</li>
            <li>Upon expiry without renewal, accounts may downgrade to free tier or be suspended</li>
            <li>Enterprise contracts have custom billing terms as specified in agreements</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.4 Refund Policy
          </Typography>
          <Typography paragraph>
            <strong>General Policy:</strong> Due to the digital nature of our services and instant access upon purchase, subscriptions are generally non-refundable.
          </Typography>
          <Typography paragraph>
            <strong>Exceptions may be granted at our sole discretion for:</strong>
          </Typography>
          <Box component="ul">
            <li>Technical failures preventing service access for extended periods (48+ hours)</li>
            <li>Duplicate or erroneous charges due to processing errors</li>
            <li>Billing mistakes or unauthorized charges</li>
            <li>Service outages exceeding our SLA commitments (enterprise customers)</li>
          </Box>
          <Typography paragraph>
            <strong>Trial Periods:</strong> If a trial period is offered, you may cancel before it ends to avoid charges. No refunds are provided for trial conversions unless there was a billing error.
          </Typography>
          <Typography paragraph>
            <strong>Cancellations:</strong> You may cancel your subscription at any time. Access continues until the end of the current billing period, but no prorated refunds are provided for unused time.
          </Typography>

          <Typography variant="h3" component="h3">
            4.5 Plan Changes
          </Typography>
          <Box component="ul">
            <li><strong>Upgrades:</strong> Take effect immediately; you are charged the prorated difference</li>
            <li><strong>Downgrades:</strong> Take effect at the end of the current billing period</li>
            <li><strong>Feature Changes:</strong> We reserve the right to modify features, limits, and pricing with 30 days notice</li>
          </Box>

          {/* Acceptable Use */}
          <Typography variant="h2" component="h2">
            5. Acceptable Use Policy
          </Typography>

          <Typography variant="h3" component="h3">
            5.1 Permitted Use
          </Typography>
          <Typography paragraph>
            You may use RxSynapse services for:
          </Typography>
          <Box component="ul">
            <li>Lawful business and personal purposes as intended by the service</li>
            <li>Market research, analysis, and decision support</li>
            <li>Customer communication and engagement (RxCommunication)</li>
            <li>Integrating with your existing systems and workflows</li>
            <li>Training your team and authorized users</li>
          </Box>

          <Typography variant="h3" component="h3">
            5.2 Prohibited Activities
          </Typography>
          <Typography paragraph>
            You may NOT:
          </Typography>
          <Box component="ul">
            <li>Use automated bots, scrapers, or tools to access services without authorization</li>
            <li>Reverse engineer, decompile, or attempt to extract source code or algorithms</li>
            <li>Resell, redistribute, or sublicense our services without written permission</li>
            <li>Share account credentials or allow unauthorized access</li>
            <li>Interfere with or disrupt service operation, servers, or networks</li>
            <li>Attempt to bypass security measures, rate limits, or access controls</li>
            <li>Use services for illegal activities, fraud, or market manipulation</li>
            <li>Transmit viruses, malware, or harmful code</li>
            <li>Harass, threaten, or abuse other users or our staff</li>
            <li>Violate intellectual property rights or third-party rights</li>
            <li>Use services to compete with or harm RxSynapse</li>
          </Box>

          {/* Disclaimer */}
          <Box sx={{ bgcolor: '#7f1d1d20', border: '1px solid #7f1d1d', borderRadius: 2, p: 3, mt: 6, mb: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mt: 0 }}>
              6. IMPORTANT DISCLAIMERS
            </Typography>

            <Typography variant="h3" component="h3">
              6.1 Informational Services Only
            </Typography>
            <Box component="ul">
              <li>RxSynapse services provide <strong>informational, analytical, and communication tools only</strong></li>
              <li>Our services are <strong>NOT investment advice, financial advice, or trading recommendations</strong></li>
              <li>We are NOT a registered investment advisor, broker, dealer, or financial institution</li>
              <li>You should consult qualified professionals (financial advisors, lawyers, accountants) before making decisions</li>
              <li>Any insights, alerts, or data provided are for informational purposes and should not be solely relied upon</li>
            </Box>

            <Typography variant="h3" component="h3">
              6.2 No Guarantees of Accuracy or Results
            </Typography>
            <Box component="ul">
              <li><strong>Data Accuracy:</strong> We strive for accuracy but do not guarantee that all data is error-free, complete, or current</li>
              <li><strong>Third-Party Data:</strong> Some data comes from third parties; we are not responsible for their errors or delays</li>
              <li><strong>Service Availability:</strong> While we aim for high uptime, we do not guarantee uninterrupted access</li>
              <li><strong>Performance:</strong> Past performance or historical data does not predict future results</li>
            </Box>

            <Typography variant="h3" component="h3">
              6.3 Trading and Financial Risks
            </Typography>
            <Typography paragraph>
              <strong>If using RxFlow or similar trading-related services:</strong>
            </Typography>
            <Box component="ul">
              <li>Trading and investing involve substantial risk of financial loss</li>
              <li>You may lose your entire investment or more</li>
              <li>Market conditions are unpredictable and can change rapidly</li>
              <li>You are solely responsible for your trading decisions and outcomes</li>
              <li>RxSynapse is not liable for any trading losses, missed opportunities, or damages</li>
            </Box>

            <Typography variant="h3" component="h3">
              6.4 Regulatory Compliance
            </Typography>
            <Box component="ul">
              <li>You are responsible for complying with all applicable laws and regulations</li>
              <li>This includes SEBI regulations, RBI guidelines, tax laws, and data protection laws</li>
              <li>RxSynapse provides tools; you are responsible for how you use them</li>
              <li>We do not execute trades, hold funds, or act as a broker</li>
            </Box>
          </Box>

          {/* Intellectual Property */}
          <Typography variant="h2" component="h2">
            7. Intellectual Property Rights
          </Typography>

          <Typography variant="h3" component="h3">
            7.1 RxSynapse's Rights
          </Typography>
          <Typography paragraph>
            All content, features, functionality, trademarks, logos, technology, algorithms, and designs on RxSynapse platforms are owned by RxSynapse or its licensors and protected by intellectual property laws. This includes:
          </Typography>
          <Box component="ul">
            <li>Proprietary algorithms, AI models, and analysis methods</li>
            <li>Platform design, user interface, and user experience</li>
            <li>Software code, architecture, and technical implementation</li>
            <li>Trademarks, logos, and brand assets (RxSynapse, RxFlow, RxCommunication)</li>
            <li>Documentation, guides, training materials, and content</li>
            <li>Data aggregation, processing, and presentation methods</li>
          </Box>

          <Typography variant="h3" component="h3">
            7.2 Limited License
          </Typography>
          <Typography paragraph>
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use RxSynapse services for their intended purposes in accordance with these Terms. This license does not grant you any ownership rights.
          </Typography>

          <Typography variant="h3" component="h3">
            7.3 Your Content and Feedback
          </Typography>
          <Box component="ul">
            <li><strong>Your Data:</strong> You retain ownership of data you input into our services</li>
            <li><strong>License to Us:</strong> You grant us a license to use your data to provide and improve services</li>
            <li><strong>Feedback:</strong> Any suggestions, ideas, or feedback you provide become our property and may be used without compensation</li>
            <li><strong>Confidentiality:</strong> We treat your data as confidential per our Privacy Policy</li>
          </Box>

          {/* Limitation of Liability */}
          <Typography variant="h2" component="h2">
            8. Limitation of Liability
          </Typography>

          <Typography variant="h3" component="h3">
            8.1 Service Provided &quot;AS IS&quot;
          </Typography>
          <Typography paragraph>
            RxSynapse services are provided on an <strong>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, either express or implied, including but not limited to:
          </Typography>
          <Box component="ul">
            <li>Warranties of merchantability or fitness for a particular purpose</li>
            <li>Warranties of non-infringement or title</li>
            <li>Warranties that services will be uninterrupted, error-free, or secure</li>
            <li>Warranties regarding accuracy, completeness, or reliability of data</li>
          </Box>

          <Typography variant="h3" component="h3">
            8.2 No Liability for Losses or Damages
          </Typography>
          <Typography paragraph>
            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, RXSYNAPSE SHALL NOT BE LIABLE FOR:</strong>
          </Typography>
          <Box component="ul">
            <li>Any financial losses, trading losses, lost profits, or missed opportunities</li>
            <li>Errors, inaccuracies, delays, or omissions in data or services</li>
            <li>Service interruptions, downtime, outages, or performance issues</li>
            <li>Third-party service failures or data provider issues</li>
            <li>Unauthorized access, data breaches, or security incidents beyond our control</li>
            <li>Indirect, incidental, consequential, special, exemplary, or punitive damages</li>
            <li>Loss of data, revenue, goodwill, or business opportunities</li>
          </Box>

          <Typography variant="h3" component="h3">
            8.3 Liability Cap
          </Typography>
          <Typography paragraph>
            In any case, RxSynapse&apos;s total liability to you for all claims arising from or related to our services shall not exceed the amount you paid to RxSynapse in the 12 months preceding the claim, or ₹10,000, whichever is greater.
          </Typography>

          {/* Indemnification */}
          <Typography variant="h2" component="h2">
            9. Indemnification
          </Typography>
          <Typography paragraph>
            You agree to indemnify, defend, and hold harmless RxSynapse, its affiliates, officers, directors, employees, contractors, agents, and partners from any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from:
          </Typography>
          <Box component="ul">
            <li>Your use or misuse of RxSynapse services</li>
            <li>Your violation of these Terms of Service</li>
            <li>Your violation of any applicable laws or regulations</li>
            <li>Your violation of third-party rights (intellectual property, privacy, etc.)</li>
            <li>Your trading activities, financial decisions, or business operations</li>
            <li>Your content, data, or communications through our services</li>
          </Box>

          {/* Service Availability */}
          <Typography variant="h2" component="h2">
            10. Service Availability and Modifications
          </Typography>

          <Typography variant="h3" component="h3">
            10.1 Availability
          </Typography>
          <Box component="ul">
            <li>We strive for high availability (target: 99.5%+ uptime) but do not guarantee uninterrupted service</li>
            <li>Scheduled maintenance windows will be announced in advance when possible</li>
            <li>Emergency maintenance may occur without prior notice</li>
            <li>Service availability depends on third-party providers (hosting, data, APIs)</li>
          </Box>

          <Typography variant="h3" component="h3">
            10.2 Service Modifications
          </Typography>
          <Typography paragraph>
            We reserve the right to:
          </Typography>
          <Box component="ul">
            <li>Modify, update, or discontinue features or services at any time</li>
            <li>Change pricing, plans, and subscription tiers with 30 days notice to existing customers</li>
            <li>Improve algorithms, models, and data processing methods</li>
            <li>Add or remove third-party integrations</li>
            <li>Update user interfaces and workflows</li>
          </Box>

          {/* Termination */}
          <Typography variant="h2" component="h2">
            11. Termination
          </Typography>

          <Typography variant="h3" component="h3">
            11.1 Termination by You
          </Typography>
          <Box component="ul">
            <li>You may cancel your account or subscription at any time through account settings</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>No refunds for unused time unless specified in Section 4.4</li>
            <li>You may request account deletion; processed within 30 days</li>
          </Box>

          <Typography variant="h3" component="h3">
            11.2 Termination by Us
          </Typography>
          <Typography paragraph>
            We may suspend or terminate your account immediately without notice if:
          </Typography>
          <Box component="ul">
            <li>You materially breach these Terms of Service</li>
            <li>You engage in fraudulent, illegal, or abusive activities</li>
            <li>Your account poses a security risk</li>
            <li>Required by law, court order, or regulatory authority</li>
            <li>Your payment method fails and is not updated</li>
          </Box>

          <Typography variant="h3" component="h3">
            11.3 Effect of Termination
          </Typography>
          <Box component="ul">
            <li>Your right to use RxSynapse services immediately ceases</li>
            <li>Subscriptions are cancelled without refund (unless specified otherwise)</li>
            <li>Data is deleted per our data retention policy (payment records retained for compliance)</li>
            <li>Provisions that by their nature should survive (indemnification, liability, disputes) continue</li>
          </Box>

          {/* Third-Party Services */}
          <Typography variant="h2" component="h2">
            12. Third-Party Services and Links
          </Typography>
          <Box component="ul">
            <li>Our services integrate with third-party platforms (payment gateways, communication APIs, data providers)</li>
            <li>We are not responsible for third-party service availability, accuracy, or content</li>
            <li>Your use of third-party services is subject to their respective terms and policies</li>
            <li>We may display links to external websites; we do not endorse or control these sites</li>
            <li>Third-party terms may impose additional restrictions or obligations on you</li>
          </Box>

          {/* Governing Law */}
          <Typography variant="h2" component="h2">
            13. Governing Law and Dispute Resolution
          </Typography>

          <Typography variant="h3" component="h3">
            13.1 Governing Law
          </Typography>
          <Typography paragraph>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India (specific location to be determined based on company registration).
          </Typography>

          <Typography variant="h3" component="h3">
            13.2 Informal Resolution
          </Typography>
          <Typography paragraph>
            Before filing any legal claim, you agree to:
          </Typography>
          <Box component="ul">
            <li>Contact us at legal@rxsynapse.com to attempt informal resolution</li>
            <li>Provide a detailed description of the dispute and your desired resolution</li>
            <li>Allow 30 days for good-faith negotiation and resolution attempts</li>
          </Box>

          <Typography variant="h3" component="h3">
            13.3 Arbitration
          </Typography>
          <Typography paragraph>
            If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. Arbitration shall be conducted in India by a single arbitrator mutually agreed upon or appointed per the Act.
          </Typography>
          <Typography paragraph>
            <strong>Exceptions:</strong> Either party may seek injunctive or equitable relief in court for intellectual property disputes or urgent matters.
          </Typography>

          {/* General Provisions */}
          <Typography variant="h2" component="h2">
            14. General Provisions
          </Typography>

          <Typography variant="h3" component="h3">
            14.1 Severability
          </Typography>
          <Typography paragraph>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.
          </Typography>

          <Typography variant="h3" component="h3">
            14.2 Waiver
          </Typography>
          <Typography paragraph>
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of RxSynapse.
          </Typography>

          <Typography variant="h3" component="h3">
            14.3 Assignment
          </Typography>
          <Typography paragraph>
            You may not assign or transfer these Terms or your account without our written consent. We may assign or transfer these Terms in connection with a merger, acquisition, or sale of assets.
          </Typography>

          <Typography variant="h3" component="h3">
            14.4 Force Majeure
          </Typography>
          <Typography paragraph>
            RxSynapse shall not be liable for any failure to perform due to causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, pandemics, labor disputes, internet failures, or government actions.
          </Typography>

          {/* Changes to Terms */}
          <Typography variant="h2" component="h2">
            15. Changes to These Terms
          </Typography>
          <Typography paragraph>
            We may update these Terms from time to time. Material changes will be notified via:
          </Typography>
          <Box component="ul">
            <li>Email notification to your registered email address</li>
            <li>In-app notification or prominent notice</li>
            <li>Website announcement</li>
          </Box>
          <Typography paragraph>
            The &quot;Last Updated&quot; date at the top indicates when the Terms were last revised. Your continued use of RxSynapse services after changes are posted constitutes acceptance of the updated Terms. If you do not agree with the changes, you must stop using our services and may cancel your account.
          </Typography>

          {/* Entire Agreement */}
          <Typography variant="h2" component="h2">
            16. Entire Agreement
          </Typography>
          <Typography paragraph>
            These Terms, together with our Privacy Policy and any service-specific terms, constitute the entire agreement between you and RxSynapse regarding our services and supersede all prior agreements, representations, and understandings.
          </Typography>

          {/* Contact */}
          <Typography variant="h2" component="h2">
            17. Contact Information
          </Typography>
          <Typography paragraph>
            For questions, concerns, or notices regarding these Terms of Service, please contact us:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
            <li><strong>Company Name:</strong> RxSynapse</li>
            <li><strong>Email:</strong> legal@rxsynapse.com</li>
            <li><strong>Support:</strong> support@rxsynapse.com</li>
            <li><strong>Website:</strong> <MuiLink href="https://rxsynapse.com" target="_blank" rel="noopener noreferrer">https://rxsynapse.com</MuiLink></li>
          </Box>

          {/* Acknowledgment */}
          <Box sx={{ bgcolor: '#1e3a8a20', border: '1px solid #1e3a8a', borderRadius: 2, p: 3, mt: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mt: 0 }}>
              Acknowledgment
            </Typography>
            <Typography paragraph>
              <strong>By using any RxSynapse service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong> You further acknowledge that our services are informational tools and not financial advice, and that you are solely responsible for your decisions and their outcomes.
            </Typography>
            <Typography paragraph sx={{ mb: 0 }}>
              If you do not agree with these Terms, you must discontinue use of our services immediately.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
