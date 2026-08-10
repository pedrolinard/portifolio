type Skill = {
  name: string;
  hoverColor?: string;
  glowColor?: string;
};

type SkillGroup = {
  label: string;
  items: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Linguagens",
    items: [
      { name: "Java", hoverColor: "#ED8B00", glowColor: "rgba(237, 139, 0, 0.25)" },
      { name: "Python", hoverColor: "#3776AB", glowColor: "rgba(55, 118, 171, 0.25)" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { name: "Spring Boot", hoverColor: "#6DB33F", glowColor: "rgba(109, 179, 63, 0.25)" },
      { name: "Django", hoverColor: "#44B78B", glowColor: "rgba(68, 183, 139, 0.25)" },
      { name: "APIs REST" },
      { name: "JPA" },
    ],
  },
  {
    label: "Dados & redes",
    items: [{ name: "Modelagem de BD" }, { name: "Redes de computadores" }],
  },
  {
    label: "Ferramentas",
    items: [
      { name: "Git", hoverColor: "#F05032", glowColor: "rgba(240, 80, 50, 0.25)" },
      { name: "IntelliJ IDEA", hoverColor: "#FE315D", glowColor: "rgba(254, 49, 93, 0.25)" },
      { name: "VS Code", hoverColor: "#007ACC", glowColor: "rgba(0, 122, 204, 0.25)" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-sm text-accent">02. skills</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        Stack &amp; ferramentas
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-heading text-sm font-bold text-foreground">
              {group.label}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="skill-chip flex items-center justify-center rounded-[10px] border border-border px-3 py-4 text-center text-xs font-semibold text-foreground"
                  style={
                    {
                      background: "var(--surface-2)",
                      "--chip-hover": item.hoverColor,
                      "--chip-glow": item.glowColor,
                    } as React.CSSProperties
                  }
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
