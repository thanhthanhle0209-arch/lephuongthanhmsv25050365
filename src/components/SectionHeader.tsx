interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
        {title}
      </h2>
      <div className={`divider-gold ${centered ? 'mx-auto' : ''} mb-4`} />
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
