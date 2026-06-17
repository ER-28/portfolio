interface SectionHeaderProps {
  title: string
}

const SectionHeader = ({title}: SectionHeaderProps) => (
  <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
    <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
      <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
        {title}
      </p>
    </div>
  </div>
);

export default SectionHeader;
