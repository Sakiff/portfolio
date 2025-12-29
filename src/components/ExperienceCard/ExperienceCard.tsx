import { ExternalLink } from "lucide-react";

const ExperienceCard = () => {
  return (
    <div className="relative border border-border rounded-xl p-6 bg-input/30">
      <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-1 bg-primary rounded-full" />

      <div className="flex flex-col gap-4 pl-4">
        <span className="text-sm text-muted-foreground">
          March 2024 — Present
        </span>

        <h2 className="text-xl font-semibold">Frontend Developer</h2>

        <a
          href="https://imperiagroups.az/"
          target="_blank"
          className="inline-flex items-center gap-2 text-primary hover:underline w-fit"
        >
          Imperia Groups MMC
          <ExternalLink size={16} />
        </a>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          Building responsive and interactive user interfaces using React,
          Tailwind CSS, and modern frontend practices. Focused on clean code,
          performance, and smooth user experience.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
