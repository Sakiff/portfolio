import { GraduationCap } from "lucide-react";

type EducationCardProps = {
  date: string;
  title: string;
  institution: string;
  type?: "degree" | "bootcamp";
};

const EducationCard = ({
  date,
  title,
  institution,
  type = "degree",
}: EducationCardProps) => {
  return (
    <div className="relative border border-border rounded-xl p-6 bg-input/30">
      <span
        className={`absolute left-0 top-6 h-[calc(100%-3rem)] w-1 rounded-full ${
          type === "bootcamp" ? "bg-emerald-500" : "bg-primary"
        }`}
      />

      <div className="flex flex-col gap-4 pl-4">
        <span className="text-sm text-muted-foreground">{date}</span>

        <h2 className="text-xl font-semibold">{title}</h2>

        <div className="flex items-center gap-2 text-muted-foreground">
          <GraduationCap size={18} />
          <span>{institution}</span>
        </div>

        <span className="text-xs w-fit rounded-full bg-input/70 px-3 py-1">
          {type === "bootcamp" ? "Bootcamp" : "Bachelor Degree"}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
