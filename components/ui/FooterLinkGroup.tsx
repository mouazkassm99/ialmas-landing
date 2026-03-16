interface FooterLinkGroupProps {
  label: string;
  links: readonly { label: string; href: string }[];
}

export default function FooterLinkGroup({ label, links }: FooterLinkGroupProps) {
  return (
    <div>
      <p className="text-foreground font-semibold text-sm mb-4">{label}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-muted text-sm hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
