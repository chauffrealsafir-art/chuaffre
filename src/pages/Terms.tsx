import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <PageMeta
        title="Terms & Conditions - Al Safir Chauffeurs"
        description="Terms and conditions for using Al Safir Chauffeurs luxury chauffeur services."
      />
      <div className="min-h-screen bg-black pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-white">Terms & </span>
              <span className="text-amber-500">Conditions</span>
            </h1>
            <p className="text-white/70 text-sm">Last updated: February 2025</p>
          </div>
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 md:p-10 space-y-6 text-white/90 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">1. Services</h2>
              <p>
                Al Safir Chauffeurs provides luxury chauffeur and private hire services in and around London. By
                making a booking or using our website, you agree to these terms and conditions.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">2. Bookings</h2>
              <p>
                Bookings are subject to availability and confirmation. A booking request via our website or
                contact channels does not guarantee a confirmed reservation until we have confirmed with you. We
                reserve the right to decline or cancel a booking where necessary.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">3. Payment & Cancellation</h2>
              <p>
                Payment is accepted via bank transfer or card payment. Payment terms will be communicated at the time of booking. Cancellation policies may apply;
                please refer to your booking confirmation or contact us for details. Deposits may be required for
                certain journeys.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">4. Conduct</h2>
              <p>
                Passengers are expected to behave in a respectful manner. We reserve the right to terminate a
                journey if behaviour is unacceptable or poses a risk to the driver or vehicle.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">5. Liability</h2>
              <p>
                We carry appropriate insurance for our services. Our liability is limited to the extent permitted
                by law. We are not liable for delays caused by circumstances beyond our reasonable control (e.g.
                traffic, weather).
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">6. Contact</h2>
              <p>
                For questions about these terms, please contact us at info@alsafirchauffeurs.co.uk.
                Phone: +44 7462 380655
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

export default Terms;
