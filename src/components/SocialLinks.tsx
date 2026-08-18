import { InstagramIcon, MailIcon } from "./icons";
import { EMAIL_HREF, INSTAGRAM_HREF } from "@/lib/site";

const links = [
  { href: INSTAGRAM_HREF, label: "Instagram", icon: InstagramIcon, external: true },
  { href: EMAIL_HREF, label: "Email", icon: MailIcon, external: false },
];

export function SocialLinks({
  variant = "button",
  className = "",
}: {
  variant?: "button" | "plain";
  className?: string;
}) {
  const itemClassName =
    variant === "button"
      ? "grid h-11 w-11 place-items-center rounded-[10px] border border-border bg-surface text-foreground transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent"
      : "transition-colors hover:text-accent";

  const iconSize = variant === "button" ? "h-[19px] w-[19px]" : "h-5 w-5";

  return (
    <>
      {links.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          aria-label={label}
          className={`${itemClassName} ${className}`}
        >
          <Icon className={iconSize} />
        </a>
      ))}
    </>
  );
}
