import ScrollReveal from './ScrollReveal';

export default function SectionTitle({ tag = '', children }) {
  return (
    <ScrollReveal>
      <div className="mb-8 md:mb-12">
        {tag && <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">{tag}</p>}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary-900">{children}</h2>
        <div className="mt-3 w-12 h-1 bg-primary-600 rounded-full"></div>
      </div>
    </ScrollReveal>
  );
}
