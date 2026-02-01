import { useInView } from '../hooks/useInView';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
};

export default function FadeInSection({ children, className = '', as: Tag = 'div' }: FadeInSectionProps) {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  const transitionClass = `transition-all duration-700 ease-out ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  } ${className}`;

  // Ref is used for IntersectionObserver; both div and section extend HTMLElement
  const refCasted = ref as React.RefObject<HTMLDivElement>;

  return Tag === 'section' ? (
    <section ref={refCasted} className={transitionClass}>
      {children}
    </section>
  ) : (
    <div ref={refCasted} className={transitionClass}>
      {children}
    </div>
  );
}
