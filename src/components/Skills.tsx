const skillGroups = [
  {
    label: "Linguagens",
    items: ["Java", "Python"],
  },
  {
    label: "Back-end",
    items: [
      "Spring Boot",
      "Django",
      "APIs REST",
      "JPA",
      "Arquitetura em camadas",
    ],
  },
  {
    label: "Dados & Redes",
    items: ["Modelagem de banco de dados", "Redes de computadores"],
  },
  {
    label: "Ferramentas",
    items: ["Git", "IntelliJ IDEA", "VS Code"],
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
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-mono text-sm text-muted">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
