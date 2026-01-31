const Marquee = () => {
  const text = 'LUXURIOUS SERVICE';
  const Star = () => (
    <span className="inline-block mx-6 text-[0.5em] align-middle text-amber-500" aria-hidden>
      ◆
    </span>
  );

  const segment = (
    <>
      <span className="font-serif font-bold text-amber-500 uppercase tracking-wide whitespace-nowrap text-lg md:text-xl">
        {text}
      </span>
      <Star />
    </>
  );

  const strip = (
    <div className="flex items-center shrink-0">
      <span className="shrink-0 w-12 md:w-16" aria-hidden />
      {segment}
      {segment}
      {segment}
      {segment}
      {segment}
      {segment}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-black border-y border-amber-500/20 py-3 px-6 md:px-8">
      <div className="flex animate-marquee w-max items-center">
        {strip}
        {strip}
      </div>
    </div>
  );
};

export default Marquee;
