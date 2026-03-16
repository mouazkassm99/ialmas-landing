import { IconName, getIcon } from "@/components/ui/Icons";

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <div className="solution-card group flex flex-col gap-5 p-7 rounded-2xl border border-border bg-surface hover:border-primary/40 hover:bg-surface-alt transition-all duration-250">
      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-200">
        {getIcon(icon as IconName, "w-7 h-7")}
      </div>
      <div>
        <h3 className="font-semibold text-foreground text-base leading-snug">{title}</h3>
        <p className="text-muted text-sm mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
