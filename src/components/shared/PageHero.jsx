import "./page-hero.css";

export default function PageHero({ title, description, showEyebrow = true }) {
  return (
    <header className="page-hero">
      {showEyebrow && <p className="page-hero__eyebrow">Ganga Aarti Seva · Varanasi</p>}
      <h1>{title}</h1>
      {description && <p className="page-hero__description">{description}</p>}
    </header>
  );
}
