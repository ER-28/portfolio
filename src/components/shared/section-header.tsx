interface SectionHeaderProps {
  title: string
}

const SectionHeader = ({title}: SectionHeaderProps) => (
  <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
    <div className="flex items-center gap-4">
      <span className="w-1 h-6 bg-accent rounded-full" />
      <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase font-medium">
        {title}
      </p>
    </div>
  </div>
);

export default SectionHeader;
