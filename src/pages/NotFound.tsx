import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const NotFound = () => {
  return (
    <>
      <PageMeta
        title="Page Not Found - Al Safir Chauffeurs"
        description="The page you are looking for could not be found."
      />
      <div className="min-h-screen bg-black pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4">404</h1>
        <p className="text-white/80 text-xl mb-8">Page not found</p>
        <Link
          to="/"
          className="btn-animate inline-flex items-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-full text-sm font-medium uppercase tracking-logo transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
