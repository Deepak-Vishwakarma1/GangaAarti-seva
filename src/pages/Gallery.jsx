import PageHero from "../components/shared/PageHero";
import { galleryPhotos } from "../data/photo-data";
import "./gallery.css";

export default function Gallery() {
  return (
    <main className="gallery-page">
      <PageHero
        title="Gallery"
        description="Explore moments from our ceremonies and experiences in Varanasi."
      />

      <section className="gallery-content" aria-label="Photo gallery">
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <figure
              className="gallery-photo"
              key={photo.id}
              style={{ "--gallery-photo": `url("${photo.src}")` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
