import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <>
      <PageMeta
        title="Privacy Policy - Al Safir Chauffeurs"
        description="Privacy policy for Al Safir Chauffeurs. How we collect, use, and protect your personal information."
      />
      <div className="min-h-screen bg-black pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-white">Privacy </span>
              <span className="text-amber-500">Policy</span>
            </h1>
            <p className="text-white/70 text-sm">Last updated: February 2025</p>
          </div>
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 md:p-10 space-y-6 text-white/90 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">1. Introduction</h2>
              <p>
                Al Safir Chauffeurs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
                This policy explains how we collect, use, and safeguard your personal information when you use our
                website or services.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">2. Information We Collect</h2>
              <p>
                We may collect your name, email address, phone number, pickup and drop-off addresses, and other
                details you provide when making a booking or contacting us. We also collect technical data such as
                IP address and browser type when you visit our website.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">3. How We Use Your Information</h2>
              <p>
                We use your information to process bookings, communicate with you about your journey, improve our
                services, and comply with legal obligations. We do not sell your personal data to third parties.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">4. Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information from unauthorised access, loss, or
                misuse. Data is stored securely and retained only for as long as necessary.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or request deletion of your personal data. To exercise these
                rights or ask questions about this policy, please contact us at info@alsafirchauffeurs.co.uk.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">6. Changes</h2>
              <p>
                We may update this privacy policy from time to time. The latest version will always be available on
                this page.
              </p>
            </section>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-amber-500 hover:text-amber-400 text-sm uppercase tracking-logo transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
