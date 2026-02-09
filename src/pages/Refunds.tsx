import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';

const Refunds = () => {
  return (
    <>
      <PageMeta
        title="Refund Policy - Al Safir Chauffeurs"
        description="Refund and cancellation policy for Al Safir Chauffeurs luxury chauffeur services."
      />
      <div className="min-h-screen bg-black pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              <span className="text-white">Refund </span>
              <span className="text-amber-500">Policy</span>
            </h1>
            <p className="text-white/70 text-sm">Last updated: February 2025</p>
          </div>
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 md:p-10 space-y-6 text-white/90 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">1. Overview</h2>
              <p>
                Al Safir Chauffeurs aims to provide a seamless and reliable service. This policy outlines when and
                how refunds may be applied, and how we handle cancellations and changes to your booking.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">2. Cancellation by You</h2>
              <p>
                If you need to cancel a confirmed booking, please contact us as soon as possible. Refunds or
                partial refunds may be available depending on how far in advance you cancel and the terms agreed
                at the time of booking. Cancellation with less than 24 hours&apos; notice may incur charges; full
                details will be set out in your booking confirmation.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">3. Cancellation by Us</h2>
              <p>
                If we have to cancel your booking due to circumstances beyond our control (e.g. vehicle
                unavailability, severe weather, or safety reasons), we will offer a full refund of any amount
                paid, or the option to rebook at a mutually convenient time at no extra cost.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">4. No-Show and Delays</h2>
              <p>
                If you do not show up at the agreed pickup time and we have been unable to reach you, the booking
                may be treated as completed and no refund will be due. We are not responsible for delays caused
                by traffic, road closures, or other factors outside our control; no refund is given for late
                arrival where we have used reasonable efforts to reach you on time.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">5. How to Request a Refund</h2>
              <p>
                To request a refund, please contact us at info@alsafirchauffeurs.co.uk with your booking
                reference and reason. We will respond within a few working days and process any approved
                refund via the original payment method where possible.
              </p>
            </section>
            <section>
              <h2 className="font-serif font-bold text-amber-500 text-lg mb-2">6. Contact</h2>
              <p>
                For any questions about this refund policy or your booking, please email
                info@alsafirchauffeurs.co.uk.
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

export default Refunds;
