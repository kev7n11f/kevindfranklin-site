import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Kevin D. Franklin",
  description: "Terms of Service for kevindfranklin.com",
};

export default function TermsOfService() {
  const lastUpdated = "December 11, 2024";
  
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-foreground/60 mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose prose-invert prose-gold max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using kevindfranklin.com (the &quot;Site&quot;), you agree to be bound by these 
                Terms of Service. If you disagree with any part of these terms, you may not access the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Use of the Site</h2>
              <p className="text-foreground/80 leading-relaxed">
                You may use this Site for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>Use the Site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the Site</li>
                <li>Interfere with or disrupt the Site or servers</li>
                <li>Transmit any malware, viruses, or harmful code</li>
                <li>Harvest or collect information about other users</li>
                <li>Use the Site to send spam or unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">AI Assistant (FRANK) Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                The Site includes an AI assistant named FRANK, powered by Claude (Anthropic). By using FRANK, 
                you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>
                  <strong>FRANK is an AI, not a human.</strong> You are interacting with an artificial 
                  intelligence system, not a real person.
                </li>
                <li>
                  <strong>Responses may be inaccurate.</strong> AI systems can &quot;hallucinate&quot; or provide 
                  incorrect, incomplete, or outdated information. Always verify important information 
                  independently.
                </li>
                <li>
                  <strong>Not professional advice.</strong> FRANK&apos;s responses do not constitute legal, 
                  financial, medical, or other professional advice. Consult qualified professionals 
                  for such matters.
                </li>
                <li>
                  <strong>No warranties or commitments.</strong> Statements made by FRANK do not create 
                  warranties, guarantees, or binding commitments on my behalf.
                </li>
                <li>
                  <strong>Do not share sensitive data.</strong> Do not provide passwords, financial 
                  account numbers, social security numbers, or other sensitive personal information.
                </li>
                <li>
                  <strong>Content moderation.</strong> FRANK is programmed to decline inappropriate 
                  requests and may refuse to engage with certain topics.
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Official information on static website pages takes precedence over any statements made 
                by FRANK. The AI cannot modify policies or create binding agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed">
                The Site and its original content, features, and functionality are owned by Kevin D. Franklin 
                and are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>Reproduce, distribute, or create derivative works without permission</li>
                <li>Use any trademarks or branding without authorization</li>
                <li>Remove any copyright or proprietary notices</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-3">
                You may share links to the Site and quote brief excerpts with proper attribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Affiliate Links & Disclaimers</h2>
              <p className="text-foreground/80 leading-relaxed">
                This Site contains affiliate links to products on Amazon and other retailers. As an Amazon 
                Associate, I earn from qualifying purchases. When you click these links and make a purchase, 
                I may receive a commission at no additional cost to you.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-3">
                Product recommendations reflect my genuine opinions. However, I am not responsible for the 
                quality, safety, or performance of third-party products purchased through affiliate links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">User Content</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you submit content through the contact form, newsletter signup, or AI assistant:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>You retain ownership of your content</li>
                <li>You grant me a license to use, store, and process your submissions as needed to 
                    provide the requested services</li>
                <li>You represent that your content does not violate any laws or third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Disclaimer of Warranties</h2>
              <p className="text-foreground/80 leading-relaxed">
                THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EXPRESS OR IMPLIED. I DO NOT WARRANT THAT:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>The Site will be uninterrupted, secure, or error-free</li>
                <li>Results from using the Site will be accurate or reliable</li>
                <li>Any errors will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, KEVIN D. FRANKLIN SHALL NOT BE LIABLE FOR ANY 
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
                LIMITED TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-3">
                <li>Your use or inability to use the Site</li>
                <li>Any content obtained from the Site, including AI-generated responses</li>
                <li>Unauthorized access to your data or transmissions</li>
                <li>Actions taken based on information from the Site or AI assistant</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-3">
                In no event shall my total liability exceed $100 USD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Indemnification</h2>
              <p className="text-foreground/80 leading-relaxed">
                You agree to indemnify and hold harmless Kevin D. Franklin from any claims, damages, 
                or expenses arising from your use of the Site or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Third-Party Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                The Site may contain links to third-party websites. I am not responsible for the content, 
                privacy policies, or practices of these sites. Visiting linked sites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Termination</h2>
              <p className="text-foreground/80 leading-relaxed">
                I reserve the right to terminate or suspend access to the Site, without prior notice, 
                for conduct that I believe violates these Terms or is harmful to other users or the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms shall be governed by the laws of the State of Louisiana, United States, 
                without regard to conflict of law provisions. Any disputes shall be resolved in the 
                courts of Louisiana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Changes to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                I reserve the right to modify these Terms at any time. Changes will be posted on this 
                page with an updated revision date. Continued use of the Site after changes constitutes 
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Severability</h2>
              <p className="text-foreground/80 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions 
                will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-primary mb-4">Contact</h2>
              <p className="text-foreground/80 leading-relaxed">
                Questions about these Terms? Contact me at:{" "}
                <a href="mailto:kevin@kevindfranklin.com" className="text-primary hover:underline">
                  kevin@kevindfranklin.com
                </a>
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
