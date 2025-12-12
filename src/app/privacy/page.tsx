import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Kevin D. Franklin",
  description: "Privacy Policy for kevindfranklin.com",
};

export default function PrivacyPolicy() {
  const lastUpdated = "December 11, 2024";
  
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-foreground/60 mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose prose-invert prose-gold max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Kevin D. Franklin (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) operates kevindfranklin.com (the &quot;Site&quot;). 
                This Privacy Policy explains how I collect, use, and protect your personal information when you 
                visit the Site, subscribe to my newsletter, or interact with my AI assistant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Information I Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Email address and name</strong> when you subscribe to my newsletter</li>
                <li><strong>Messages</strong> you send through the contact form or AI assistant</li>
                <li><strong>Any other information</strong> you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Usage data</strong> via Vercel Analytics (page views, visitor counts - anonymized, no personal identifiers)</li>
                <li><strong>Device information</strong> such as browser type and operating system</li>
                <li><strong>IP address</strong> (stored with newsletter signups for fraud prevention)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">How I Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>To send you newsletters and updates you&apos;ve subscribed to</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve the Site and understand how visitors use it</li>
                <li>To protect against fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">AI Assistant (FRANK)</h2>
              <p className="text-foreground/80 leading-relaxed">
                The Site features an AI assistant named FRANK, powered by Claude (Anthropic). When you interact 
                with FRANK:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>Your messages are processed by Anthropic&apos;s API to generate responses</li>
                <li>Conversations are not stored permanently on my servers</li>
                <li>FRANK is an AI and may occasionally provide inaccurate information</li>
                <li>Do not share sensitive personal information (SSN, passwords, financial details) with the AI</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-3">
                For more information about how Anthropic handles data, see their{" "}
                <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Third-Party Services</h2>
              <p className="text-foreground/80 leading-relaxed">I use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li><strong>Vercel</strong> - Website hosting and analytics</li>
                <li><strong>Neon</strong> - Database hosting for subscriber list</li>
                <li><strong>Anthropic (Claude)</strong> - AI assistant functionality</li>
                <li><strong>Amazon</strong> - Affiliate links to my books</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Each of these services has their own privacy policies governing their use of data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Affiliate Disclosure</h2>
              <p className="text-foreground/80 leading-relaxed">
                This Site contains affiliate links to Amazon and other retailers. As an Amazon Associate, 
                I earn from qualifying purchases. This means if you click on a link and make a purchase, 
                I may receive a small commission at no additional cost to you. I only recommend products 
                I genuinely believe in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Cookies and Tracking</h2>
              <p className="text-foreground/80 leading-relaxed">
                This Site uses minimal tracking. Vercel Analytics is privacy-focused and does not use 
                third-party cookies or collect personal identifiers. Essential cookies may be used for 
                site functionality (such as remembering your preferences).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li><strong>Access</strong> the personal information I hold about you</li>
                <li><strong>Correct</strong> inaccurate information</li>
                <li><strong>Delete</strong> your information (unsubscribe from newsletter)</li>
                <li><strong>Opt-out</strong> of marketing communications at any time</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-3">
                To exercise these rights, contact me at{" "}
                <a href="mailto:kevin@kevindfranklin.com" className="text-primary hover:underline">
                  kevin@kevindfranklin.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Email Communications</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you subscribe to my newsletter, I will send you periodic emails about AI, entrepreneurship, 
                book updates, and related topics. Every email includes an unsubscribe link. I honor all 
                unsubscribe requests within 10 business days as required by the CAN-SPAM Act.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                <strong>Physical address for CAN-SPAM compliance:</strong><br />
                Kevin D. Franklin<br />
                Alexandria, LA 71301
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                I take reasonable measures to protect your personal information. However, no method of 
                transmission over the Internet is 100% secure. While I strive to protect your data, 
                I cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Children&apos;s Privacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                This Site is not intended for children under 13. I do not knowingly collect personal 
                information from children under 13. If you believe I have collected such information, 
                please contact me immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                I may update this Privacy Policy from time to time. Changes will be posted on this page 
                with an updated revision date. Continued use of the Site after changes constitutes 
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Contact Me</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about this Privacy Policy, please contact me at:{" "}
                <a href="mailto:kevin@kevindfranklin.com" className="text-primary hover:underline">
                  kevin@kevindfranklin.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">California Residents</h2>
              <p className="text-foreground/80 leading-relaxed">
                Under the California Consumer Privacy Act (CCPA), California residents have specific rights 
                regarding their personal information. As a small business, I may be exempt from certain CCPA 
                requirements, but I honor requests to access, delete, or opt-out of the sale of personal 
                information (note: I do not sell personal information). Contact me to exercise these rights.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <a 
              href="/" 
              className="text-primary hover:underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
