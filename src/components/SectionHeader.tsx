import { ScrambleText } from "@/components/ScrambleText";

const SectionHeader = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="relative mb-6">
    <div className="flex items-center gap-2 mb-1">
      <div className="p-1 bg-primary/10 rounded-none">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-lg font-mono font-semibold text-foreground">
        <ScrambleText text={title} delay={100} />
      </h2>
    </div>
    <div className="ml-6 w-16 h-px bg-primary" />
  </div>
);

export default SectionHeader;
