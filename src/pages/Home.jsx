import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { galleryPhotos, homeSlides } from "../data/photo-data";
import reasonsToChooseUs from "../data/why-choose-us";
import "./home.css";

const homeServices = [
  {
    title: "Ganga Aarti Darshan",
    description:
      "Experience the evening prayers, glowing lamps, and music along the sacred Ganga.",
    id: "aarti-darshan",
  },
  {
    title: "Kashi Bhraman",
    description:
      "Explore the temples and ghats of Varanasi with help from people who know the city.",
    id: "kashi-darshan",
  },
  {
    title: "Pandit & Puja Services",
    description:
      "Arrange traditional puja and ceremonies with an experienced local pandit.",
    id: "pandit-puja-services",
  },
  {
    title: "Jyotish & Astrology",
    description:
      "Get personal guidance on your kundli, auspicious dates, and traditional remedies.",
    id: "jyotish-astrology",
  },
  {
    title: "Ganga Aarti Event",
    description:
      "Plan a family gathering or religious event with local coordination from start to finish.",
    id: "event-planning",
  },
];

const faqs = [
  ["What is Ganga Aarti Seva?", "A local Varanasi team that arranges your Ganga Aarti, Kashi Bhraman, puja, astrology, and events."],
  ["How can I book your services?", "Click Book Aarti, or message us on WhatsApp or call us. We share the plan and cost first."],
  ["What time does the Ganga Aarti start?", "The evening Ganga Aarti at Dashashwamedh Ghat starts around sunset. The exact time changes with the season and special events, so contact us to confirm your visit date."],
  ["Will I know the cost before I pay?", "Yes. We share the full cost first, and there are no hidden charges."],
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeGalleryPhoto, setActiveGalleryPhoto] = useState(0);
  const slide = homeSlides[activeSlide];
  const visibleGalleryPhotos = [0, 1, 2].map(
    (offset) => galleryPhotos[(activeGalleryPhoto + offset) % galleryPhotos.length],
  );

  function moveGalleryPhoto(offset) {
    setActiveGalleryPhoto((current) =>
      (current + offset + galleryPhotos.length) % galleryPhotos.length,
    );
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homeSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="home-page" id="home">
      <section className={`hero-slider${slide.layout === "split" ? " hero-slider--team" : ""}${activeSlide < 2 ? " hero-slider--compact" : ""}`} aria-label="Ganga Aarti introduction">
        <img
          key={slide.src}
          className="hero-slider__image"
          src={slide.src}
          alt={slide.alt}
        />
        <div className="hero-slider__content" aria-live="polite">
          <p className="hero-slider__eyebrow">Ganga Aarti • Varanasi</p>
          <h1>{slide.title}</h1>
          <p className="hero-slider__description">{slide.description}</p>
          <Link className="hero-slider__cta" to={slide.link}>
            Book Now
          </Link>
        </div>
        <div className="hero-slider__pagination" aria-label="Choose a photo">
          {homeSlides.map((item, index) => (
            <button
              key={item.id}
              className={`hero-slider__dot${index === activeSlide ? " is-active" : ""}`}
              type="button"
              aria-label={`Show photo ${index + 1}: ${item.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <header className="home-about__heading">
          <h2 id="home-about-title">Welcome to Ganga Aarti Seva</h2>
          <p className="home-about__highlight">Discover the timeless devotion of Varanasi’s Ganga Aarti.</p>
        </header>
        <div className="home-about__body">
          <img
            className="home-about__image"
            src={homeSlides[1].src}
            alt={homeSlides[1].alt}
          />
          <div className="home-about__copy">
            <p>
              Ganga Aarti Seva is a local team based in Varanasi. We help you
              experience the city, its ghats, and its traditions with care. From
              Ganga Aarti Darshan and Kashi visits to puja services, our team
              takes care of the details so you can focus on your faith and
              family.
            </p>
            <Link className="home-about__more" to="/about">
              More about us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <header className="home-services__heading">
          <p className="home-about__eyebrow">Our Services</p>
          <h2 id="home-services-title">Plan Your Sacred Visit to Kashi</h2>
          <p>Plan your Ganga Aarti or Kashi visit with us.</p>
        </header>
        <div className="home-services__grid">
          {homeServices.map((service) => (
            <Link
              className="home-service-card"
              key={service.id}
              to={`/services/${service.id}`}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-reasons" aria-labelledby="home-reasons-title">
        <div className="home-reasons__top">
          <header className="home-reasons__intro">
            <h2 id="home-reasons-title">Why Choose Us?</h2>
            <p>We help make your visit to Kashi easy and meaningful with local guidance, trusted people, and thoughtful planning rooted in respect for tradition.</p>
            <h3>How We Help You</h3>
          </header>
          <div className="home-reasons__brand">
            <img className="home-reasons__logo" src="/faviconbr.png" alt="Ganga Aarti Seva logo" loading="lazy" />
          </div>
        </div>
        <div className="home-reasons__grid">
          {reasonsToChooseUs.map(([title, description]) => (
            <article className="home-reason" key={title}>
              <span className="home-reason__check" aria-hidden="true">✓</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-gallery" aria-labelledby="home-gallery-title">
        <header className="home-gallery__heading">
          <h2 id="home-gallery-title">Gallery</h2>
          <p>Explore sacred rituals, joyful gatherings, and memorable moments from Varanasi.</p>
        </header>
        <div className="home-gallery__slider">
          <div className="home-gallery__cards" aria-live="polite">
            {visibleGalleryPhotos.map((photo) => (
              <figure className="home-gallery__card" key={photo.id}>
                <img src={photo.src} alt={photo.alt} title={photo.title} loading="lazy" />
              </figure>
            ))}
          </div>
          <button
            className="home-gallery__arrow home-gallery__arrow--previous"
            type="button"
            aria-label="Previous gallery photo"
            onClick={() => moveGalleryPhoto(-1)}
          >
            ‹
          </button>
          <button
            className="home-gallery__arrow home-gallery__arrow--next"
            type="button"
            aria-label="Next gallery photo"
            onClick={() => moveGalleryPhoto(1)}
          >
            ›
          </button>
        </div>
        <div className="home-gallery__controls" aria-label="Choose gallery photo">
          <div className="home-gallery__dots">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.id}
                className={index === activeGalleryPhoto ? "is-active" : ""}
                type="button"
                aria-label={`Show gallery photo ${index + 1}`}
                aria-current={index === activeGalleryPhoto ? "true" : undefined}
                onClick={() => setActiveGalleryPhoto(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="home-faq-title">
        <header className="home-faq__heading">
          <h2 id="home-faq-title">Ganga Aarti Seva FAQ's</h2>
        </header>
        <div className="home-faq__list">
          {faqs.map(([question, answer]) => (
            <details className="home-faq__item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
