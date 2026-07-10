import { FOOTER_CONTENT, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/[0.06] px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-ink-900">{FOOTER_CONTENT.brandName}</p>
          <p className="mt-0.5 text-sm text-ink-500">{FOOTER_CONTENT.tagline}</p>
        </div>

        <nav aria-label="Sosyal medya bağlantıları" className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition-colors duration-200 hover:bg-ink-900/5 hover:text-ink-900"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </a>
            );
          })}
        </nav>

        <p className="text-sm text-ink-400">
          © {year} {FOOTER_CONTENT.brandName}
        </p>
      </div>
    </footer>
  );
}
