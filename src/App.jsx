import { LinkCard } from './components/LinkCard.jsx';
import { links } from './data/links.js';

export default function App() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true" />

      <main className="shell">
        <header className="header">
          <div className="avatar" aria-hidden="true">
            <img
              src="/assets/logo/logo.png"
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="titleBlock">
            <h1 className="title">DryZex</h1>
            <p className="subtitle">סטרימר ויוצר תוכן</p>
          </div>
        </header>

        <section className="cards" aria-label="קישורים">
          {links.map((item) => (
            <LinkCard key={item.id} item={item} />
          ))}
        </section>

        <footer className="footer">
          <span>© 2026 DryZex. All Rights Reserved.</span>
        </footer>
      </main>
    </div>
  );
}
