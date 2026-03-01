import { ChevronLeft } from 'lucide-react';

export function LinkCard({ item }) {
  const Icon = item.icon;

  return (
    <a
      className="card"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.ariaLabel ?? item.title}
    >
      <span className="cardIcon" aria-hidden="true">
        <Icon size={22} />
      </span>

      <span className="cardText">
        <span className="cardTitle">{item.title}</span>
        <span className="cardDesc">{item.description}</span>
      </span>

      <span className="cardChevron" aria-hidden="true">
        <ChevronLeft size={18} />
      </span>
    </a>
  );
}
