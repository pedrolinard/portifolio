import Image from "next/image";
import { CodeIcon, DatabaseIcon, ServerIcon, WrenchIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type Skill = {
  name: string;
  icon?: string;
  hoverColor?: string;
  glowColor?: string;
};

type SkillGroup = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Linguagens",
    icon: CodeIcon,
    items: [
      { name: "Java", icon: "java", hoverColor: "#ED8B00", glowColor: "rgba(237, 139, 0, 0.25)" },
      { name: "Python", icon: "python", hoverColor: "#3776AB", glowColor: "rgba(55, 118, 171, 0.25)" },
      { name: "TypeScript", icon: "ts", hoverColor: "#3178C6", glowColor: "rgba(49, 120, 198, 0.25)" },
      { name: "JavaScript", icon: "js", hoverColor: "#F7DF1E", glowColor: "rgba(247, 223, 30, 0.25)" },
    ],
  },
  {
    label: "Back-end",
    icon: ServerIcon,
    items: [
      { name: "Spring Boot", icon: "spring", hoverColor: "#6DB33F", glowColor: "rgba(109, 179, 63, 0.25)" },
      { name: "Django", icon: "django", hoverColor: "#44B78B", glowColor: "rgba(68, 183, 139, 0.25)" },
      { name: "APIs REST" },
      { name: "JPA" },
    ],
  },
  {
    label: "Dados & redes",
    icon: DatabaseIcon,
    items: [
      { name: "PostgreSQL", icon: "postgres", hoverColor: "#4169E1", glowColor: "rgba(65, 105, 225, 0.25)" },
      { name: "Modelagem de BD" },
      { name: "Redes de computadores" },
    ],
  },
  {
    label: "Ferramentas",
    icon: WrenchIcon,
    items: [
      { name: "Git", icon: "git", hoverColor: "#F05032", glowColor: "rgba(240, 80, 50, 0.25)" },
      { name: "IntelliJ IDEA", icon: "idea", hoverColor: "#FE315D", glowColor: "rgba(254, 49, 93, 0.25)" },
      { name: "VS Code", icon: "vscode", hoverColor: "#007ACC", glowColor: "rgba(0, 122, 204, 0.25)" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="03" label="skills" title="Stack & ferramentas" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const CategoryIcon = group.icon;
          return (
            <div
              key={group.label}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="flex items-center gap-2.5 font-heading text-sm font-bold text-foreground">
                <span
                  className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-full text-accent"
                  style={{ background: "var(--surface-2)" }}
                >
                  <CategoryIcon className="h-4.5 w-4.5" />
                </span>
                {group.label}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="skill-chip flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border border-border p-3 text-center text-xs font-semibold text-foreground"
                    style={
                      {
                        background: "var(--surface-2)",
                        "--chip-hover": item.hoverColor,
                        "--chip-glow": item.glowColor,
                      } as React.CSSProperties
                    }
                  >
                    {item.icon ? (
                      <Image
                        src={`https://skillicons.dev/icons?i=${item.icon}`}
                        alt=""
                        className="skill-chip-icon h-11 w-11"
                        width={44}
                        height={44}
                        unoptimized
                      />
                    ) : (
                      <span
                        className="grid h-11 w-11 place-items-center rounded-lg text-accent"
                        style={{ background: "var(--surface)" }}
                      >
                        <CategoryIcon className="h-5 w-5" />
                      </span>
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
