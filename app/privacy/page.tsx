import type { Metadata } from 'next';
import { Container, Typography, Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | RxSynapse',
  description: 'Privacy Policy for RxSynapse - Learn how we collect, use, and protect your data across our BFSI solutions',
};

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: { xs: 4, md: 8 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
          <Typography variant="h2" component="h1" sx={{ mt: 3, mb: 2, color: 'white', fontWeight: 'bold', fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ color: '#9ca3af', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Last Updated: May 10, 2026
          </Typography>
        </Box>

        {/* Content */}
        <Box sx={{ color: '#d1d5db', '& h2': { color: 'white', mt: { xs: 4, md: 6 }, mb: { xs: 2, md: 3 }, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '1.875rem' }, fontWeight: 'bold' }, '& h3': { color: 'white', mt: { xs: 3, md: 4 }, mb: 2, fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' }, fontWeight: 'semibold' }, '& p': { mb: 2, lineHeight: 1.7, fontSize: { xs: '0.875rem', sm: '1rem' } }, '& ul': { mb: 3, pl: { xs: 3, sm: 4 } }, '& li': { mb: 1.5, fontSize: { xs: '0.875rem', sm: '1rem' } }, '& a': { color: '#60a5fa', '&:hover': { color: '#93c5fd' } }, '& strong': { color: 'white' } }}>

          {/* Introduction */}
          <Typography paragraph>
            RxSynapse (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides AI-powered solutions for the BFSI sector, including RxFlow (real-time trading intelligence) and RxCommunication (conversational AI platform). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </Typography>
          <Typography paragraph>
            By using any RxSynapse service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
          </Typography>

          {/* Information We Collect */}
          <Typography variant="h2" component="h2">
            1. Information We Collect
          </Typography>

          <Typography variant="h3" component="h3">
            1.1 Account Information
          </Typography>
          <Box component="ul">
            <li><strong>Contact Information:</strong> Name, email address, phone number</li>
            <li><strong>Account Credentials:</strong> Username, password (encrypted), authentication tokens</li>
            <li><strong>Profile Information:</strong> User preferences, settings, and customization options</li>
            <li><strong>Company Information:</strong> For business accounts, company name, role, and organizational details</li>
          </Box>

          <Typography variant="h3" component="h3">
            1.2 Usage Data
          </Typography>
          <Box component="ul">
            <li><strong>Service Usage:</strong> Features accessed, frequency of use, session duration</li>
            <li><strong>Interaction Data:</strong> Queries, searches, filters, and preferences within our platforms</li>
            <li><strong>Performance Metrics:</strong> Response times, error logs, and system diagnostics</li>
            <li><strong>Communication Data:</strong> Messages sent through our platforms (for RxCommunication users)</li>
          </Box>

          <Typography variant="h3" component="h3">
            1.3 Technical Information
          </Typography>
          <Box component="ul">
            <li><strong>Device Information:</strong> Device type, operating system, browser type and version</li>
            <li><strong>IP Address:</strong> For security, fraud prevention, and service delivery</li>
            <li><strong>Log Data:</strong> Access times, pages viewed, actions taken</li>
            <li><strong>Cookies and Tracking:</strong> Session cookies, analytics cookies, preference cookies</li>
          </Box>

          <Typography variant="h3" component="h3">
            1.4 Payment Information
          </Typography>
          <Box component="ul">
            <li><strong>Billing Details:</strong> Payment method, billing address, transaction history</li>
            <li><strong>Payment Processor Data:</strong> Processed securely through third-party payment gateway (Razorpay)</li>
            <li><strong>Tax Information:</strong> GST numbers and tax compliance data for Indian regulations</li>
            <li><strong>Invoice Data:</strong> Purchase history, subscription details, payment receipts</li>
          </Box>

          <Typography variant="h3" component="h3">
            1.5 Integration Data
          </Typography>
          <Box component="ul">
            <li><strong>Third-Party Integrations:</strong> Data from integrated services (Telegram, communication platforms)</li>
            <li><strong>API Usage:</strong> API calls, integration logs, and third-party service interactions</li>
            <li><strong>Notification Preferences:</strong> Delivery channels (email, SMS, push, Telegram)</li>
          </Box>

          {/* How We Use Information */}
          <Typography variant="h2" component="h2">
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the collected information for the following purposes:
          </Typography>
          <Box component="ul">
            <li><strong>Service Delivery:</strong> Provide, operate, and maintain our AI-powered BFSI solutions</li>
            <li><strong>Authentication & Security:</strong> Verify user identity, prevent fraud, and protect accounts</li>
            <li><strong>Personalization:</strong> Customize user experience based on preferences and usage patterns</li>
            <li><strong>Communication:</strong> Send service updates, notifications, alerts, and support messages</li>
            <li><strong>Analytics & Improvement:</strong> Analyze usage patterns to improve features and performance</li>
            <li><strong>Payment Processing:</strong> Handle subscriptions, billing, and financial transactions</li>
            <li><strong>Compliance:</strong> Meet legal obligations including GST, tax reporting, and regulatory requirements</li>
            <li><strong>Customer Support:</strong> Respond to inquiries, troubleshoot issues, and provide assistance</li>
            <li><strong>Research & Development:</strong> Develop new features and enhance existing services</li>
          </Box>

          {/* Third-Party Services */}
          <Typography variant="h2" component="h2">
            3. Third-Party Services
          </Typography>
          <Typography paragraph>
            We integrate with the following third-party services to provide our platforms:
          </Typography>

          <Typography variant="h3" component="h3">
            3.1 Authentication Services
          </Typography>
          <Box component="ul">
            <li><strong>Firebase Authentication (Google):</strong> User authentication and identity management</li>
            <li><strong>Data Shared:</strong> Email, phone number, authentication tokens</li>
            <li><strong>Privacy Policy:</strong> <MuiLink href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</MuiLink></li>
          </Box>

          <Typography variant="h3" component="h3">
            3.2 Payment Processing
          </Typography>
          <Box component="ul">
            <li><strong>Razorpay:</strong> Payment gateway for credit/debit cards, UPI, net banking, and wallets</li>
            <li><strong>Data Shared:</strong> Payment amount, billing information, transaction details</li>
            <li><strong>Note:</strong> Payment processor handles sensitive financial data securely; we do not store complete card numbers</li>
            <li><strong>Privacy Policy:</strong> <MuiLink href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer">Razorpay Privacy Policy</MuiLink></li>
          </Box>

          <Typography variant="h3" component="h3">
            3.3 Communication Platforms
          </Typography>
          <Box component="ul">
            <li><strong>Telegram Bot API:</strong> Real-time notifications and bot interactions</li>
            <li><strong>Email Services:</strong> Transactional emails and notifications</li>
            <li><strong>SMS Providers:</strong> SMS notifications and alerts (when applicable)</li>
            <li><strong>Data Shared:</strong> User identifiers, message content, delivery preferences</li>
          </Box>

          <Typography variant="h3" component="h3">
            3.4 Analytics & Monitoring
          </Typography>
          <Box component="ul">
            <li><strong>Google Analytics 4:</strong> Website and application analytics</li>
            <li><strong>Data Shared:</strong> Page views, user interactions, general location, device information</li>
            <li><strong>Opt-Out:</strong> Use browser settings or <MuiLink href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Add-on</MuiLink></li>
            <li><strong>Privacy Policy:</strong> <MuiLink href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</MuiLink></li>
          </Box>

          <Typography variant="h3" component="h3">
            3.5 Cloud Infrastructure
          </Typography>
          <Box component="ul">
            <li><strong>Hosting Providers:</strong> Secure cloud infrastructure for data storage and processing</li>
            <li><strong>Database Services:</strong> PostgreSQL with SSL/TLS encryption</li>
            <li><strong>CDN Services:</strong> Content delivery for improved performance</li>
          </Box>

          {/* Data Storage and Security */}
          <Typography variant="h2" component="h2">
            4. Data Storage and Security
          </Typography>

          <Typography variant="h3" component="h3">
            4.1 Data Storage
          </Typography>
          <Box component="ul">
            <li><strong>Primary Storage:</strong> Secure cloud-based databases with encryption at rest</li>
            <li><strong>Backup Systems:</strong> Regular automated backups with encryption</li>
            <li><strong>Geographic Location:</strong> Data stored in secure, compliant data centers</li>
            <li><strong>Redundancy:</strong> Multiple copies to ensure availability and disaster recovery</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.2 Security Measures
          </Typography>
          <Box component="ul">
            <li><strong>Encryption:</strong> All data transmitted over HTTPS/TLS; sensitive data encrypted at rest</li>
            <li><strong>Authentication:</strong> Secure JWT tokens, password hashing (bcrypt), multi-factor authentication options</li>
            <li><strong>Access Control:</strong> Role-based access control (RBAC), principle of least privilege</li>
            <li><strong>Monitoring:</strong> 24/7 security monitoring, intrusion detection, audit logging</li>
            <li><strong>API Security:</strong> Rate limiting, CORS protection, input validation</li>
            <li><strong>Regular Updates:</strong> Security patches, vulnerability assessments, penetration testing</li>
          </Box>

          <Typography variant="h3" component="h3">
            4.3 Data Retention
          </Typography>
          <Box component="ul">
            <li><strong>Account Data:</strong> Retained while account is active and for 90 days after deletion request</li>
            <li><strong>Payment Records:</strong> Retained for 7 years to comply with Indian tax and accounting laws</li>
            <li><strong>Usage Logs:</strong> Retained for 12-24 months for analytics and security purposes</li>
            <li><strong>Communication Data:</strong> Retained per service-specific requirements and user preferences</li>
            <li><strong>Analytics Data:</strong> Retained per Google Analytics settings (default: 14 months)</li>
          </Box>

          {/* Your Rights */}
          <Typography variant="h2" component="h2">
            5. Your Rights and Choices
          </Typography>

          <Typography variant="h3" component="h3">
            5.1 Access and Portability
          </Typography>
          <Box component="ul">
            <li>Request access to your personal data</li>
            <li>Obtain a copy of your data in portable format (JSON, CSV)</li>
            <li>View and download your account information, usage history, and preferences</li>
          </Box>

          <Typography variant="h3" component="h3">
            5.2 Correction and Updates
          </Typography>
          <Box component="ul">
            <li>Update your account information at any time through profile settings</li>
            <li>Correct inaccurate or incomplete personal data</li>
            <li>Modify communication preferences and notification settings</li>
          </Box>

          <Typography variant="h3" component="h3">
            5.3 Deletion and Account Closure
          </Typography>
          <Box component="ul">
            <li>Request deletion of your account and personal data</li>
            <li>Deletion is processed within 30 days (payment records retained for legal compliance)</li>
            <li>Some anonymized data may be retained for analytics and improvement purposes</li>
            <li>Deletion is permanent and cannot be reversed</li>
          </Box>

          <Typography variant="h3" component="h3">
            5.4 Marketing Communications
          </Typography>
          <Box component="ul">
            <li>Opt out of marketing emails via unsubscribe links</li>
            <li>Manage notification preferences in account settings</li>
            <li>Transactional messages (receipts, security alerts) cannot be disabled</li>
          </Box>

          <Typography variant="h3" component="h3">
            5.5 Analytics Opt-Out
          </Typography>
          <Box component="ul">
            <li>Use browser Do Not Track (DNT) settings</li>
            <li>Install Google Analytics Opt-out Browser Add-on</li>
            <li>Use privacy-focused browsers or extensions</li>
            <li>Disable cookies in browser settings (may affect functionality)</li>
          </Box>

          {/* Data Sharing */}
          <Typography variant="h2" component="h2">
            6. Data Sharing and Disclosure
          </Typography>
          <Typography paragraph>
            <strong>We do not sell your personal information.</strong> We may share data only in the following circumstances:
          </Typography>
          <Box component="ul">
            <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our services (as listed in Section 3)</li>
            <li><strong>Legal Compliance:</strong> When required by law, court order, subpoena, or government regulation</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets</li>
            <li><strong>Protection of Rights:</strong> To protect rights, property, safety of RxSynapse, our users, or the public</li>
            <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            <li><strong>Aggregated Data:</strong> Non-identifying aggregated or anonymized data for analytics and reporting</li>
          </Box>

          {/* Children's Privacy */}
          <Typography variant="h2" component="h2">
            7. Children&apos;s Privacy
          </Typography>
          <Typography paragraph>
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information promptly. If you believe a child has provided us with personal information, please contact us immediately.
          </Typography>

          {/* International Users */}
          <Typography variant="h2" component="h2">
            8. International Users
          </Typography>
          <Typography paragraph>
            RxSynapse primarily serves the Indian market and operates in compliance with Indian data protection laws. If you access our services from outside India, you acknowledge that your data may be transferred to, stored, and processed in India. We ensure appropriate safeguards are in place for international data transfers.
          </Typography>

          {/* Cookies and Tracking */}
          <Typography variant="h2" component="h2">
            9. Cookies and Tracking Technologies
          </Typography>
          <Typography paragraph>
            We use cookies and similar tracking technologies to enhance your experience:
          </Typography>
          <Box component="ul">
            <li><strong>Essential Cookies:</strong> Required for authentication, security, and core functionality</li>
            <li><strong>Preference Cookies:</strong> Remember your settings, language, and customization choices</li>
            <li><strong>Analytics Cookies:</strong> Understand how you use our services to improve performance</li>
            <li><strong>Session Tokens:</strong> JWT tokens for authenticated API requests</li>
            <li><strong>Local Storage:</strong> Store preferences and authentication data in your browser</li>
          </Box>
          <Typography paragraph>
            You can control cookies through your browser settings. Disabling certain cookies may limit functionality.
          </Typography>

          {/* Changes to Privacy Policy */}
          <Typography variant="h2" component="h2">
            10. Changes to This Privacy Policy
          </Typography>
          <Typography paragraph>
            We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or business operations. The &quot;Last Updated&quot; date at the top indicates when the policy was last revised.
          </Typography>
          <Typography paragraph>
            For material changes, we will notify you via:
          </Typography>
          <Box component="ul">
            <li>Email notification to your registered email address</li>
            <li>In-app notification or alert</li>
            <li>Prominent notice on our website or services</li>
            <li>Telegram notification (if applicable)</li>
          </Box>
          <Typography paragraph>
            Your continued use of RxSynapse services after changes are posted constitutes acceptance of the updated policy.
          </Typography>

          {/* Contact */}
          <Typography variant="h2" component="h2">
            11. Contact Us
          </Typography>
          <Typography paragraph>
            If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
            <li><strong>Company:</strong> RxSynapse</li>
            <li><strong>Email:</strong> contact@rxsynapse.com</li>
            <li><strong>Website:</strong> <MuiLink href="https://rxsynapse.com" target="_blank" rel="noopener noreferrer">https://rxsynapse.com</MuiLink></li>
          </Box>

          {/* Legal Framework */}
          <Typography variant="h2" component="h2">
            12. Legal Framework and Compliance
          </Typography>
          <Typography paragraph>
            This Privacy Policy is governed by the laws of India. We comply with:
          </Typography>
          <Box component="ul">
            <li><strong>Information Technology Act, 2000</strong> and its amendments</li>
            <li><strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong></li>
            <li><strong>Digital Personal Data Protection Act, 2023</strong> (when fully implemented)</li>
            <li><strong>GST Regulations</strong> for payment processing and tax compliance</li>
            <li><strong>SEBI Regulations</strong> (applicable to financial services)</li>
            <li><strong>RBI Guidelines</strong> (applicable to BFSI operations)</li>
          </Box>

          {/* Consent */}
          <Box sx={{ bgcolor: '#1e3a8a20', border: '1px solid #1e3a8a', borderRadius: 2, p: 3, mt: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mt: 0 }}>
              Your Consent
            </Typography>
            <Typography paragraph sx={{ mb: 0 }}>
              By using any RxSynapse service, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please discontinue use of our services immediately. You may withdraw consent at any time by deleting your account or contacting us directly.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
