import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./book-now.css";

export default function BookNow() {
  return (
    <main className="book-page">
      <PageHero
        title="Donate Now"
        description="Support our seva and help us continue serving visitors and devotees in Varanasi."
        showEyebrow={false}
      />
      <section className="donate-content" aria-labelledby="donate-title">
        <div className="donate-panel">
          <p className="donate-panel__eyebrow">Your support matters</p>
          <h2 id="donate-title">Speak with our team about supporting Ganga Aarti Seva</h2>
          <p>Contact us directly for donation information. Our team can guide you through the available ways to contribute.</p>
          <div className="donate-panel__actions">
            <a href="https://wa.me/919794640037?text=Hello%20Ganga%20Aarti%20Seva%2C%20I%20would%20like%20to%20know%20about%20supporting%20your%20seva." target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /> Message us on WhatsApp</a>
            <Link to="/contact">Contact details</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
