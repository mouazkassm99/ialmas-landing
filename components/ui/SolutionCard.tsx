import { IconName, getIcon } from "@/components/ui/Icons";

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-surface hover:border-primary/30 hover:bg-surface-alt transition-all duration-200">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
        {getIcon(icon as IconName)}
      </div>
      <div>
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
        <p className="text-muted text-xs mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
