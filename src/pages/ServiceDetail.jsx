import { Link, useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import PageHero from "../components/shared/PageHero";
import "./service-detail.css";

const serviceDetails = {
  "event-planning": {
    title: "Ganga Aarti Event",
    description: "Plan a meaningful celebration in Varanasi with help coordinating the venue, ceremony, and details for your guests.",
    note: "Custom events · Advance planning",
    details: [
      "Bring your family and friends together for a thoughtfully planned occasion in the spiritual heart of Varanasi.",
      "Share your preferred date, gathering size, and the kind of ceremony you have in mind. We’ll help you discuss suitable arrangements and plan the details ahead of your visit.",
    ],
    offerings: [
      {
        eyebrow: "Devotional experience",
        title: "Ganga Aarti",
        image: "/aarti-images/ganga-aarti1.jpg",
        alt: "Priests performing the evening Ganga Aarti at the Varanasi ghats",
        description: "Experience the evening prayers, music, and glowing lamps on the banks of the Ganga. Share your visit date and group size so we can help you plan your Aarti experience.",
      },
      {
        eyebrow: "Wedding celebration",
        title: "Ganga Aarti Wedding Event",
        image: "/aarti-images/gangaartiweddignevent.png",
        alt: "Ganga Aarti ceremony arranged for a wedding celebration in Varanasi",
        description: "Add the devotional atmosphere of Ganga Aarti to your wedding celebration in Varanasi. Tell us your date, guest count, and plans, and we’ll help coordinate the event arrangements.",
      },
    ],
  },
  "kashi-darshan": {
    title: "Kashi Bhraman",
    description: "Explore the temples, ghats, and sacred landmarks of Kashi with assistance planning your city visit.",
    note: "Local guidance · Flexible visits",
    places: [
      {
        title: "Kashi Vishwanath Temple and Corridor",
        description: "Dedicated to Lord Shiva, Kashi Vishwanath is one of the city’s most important places of worship. The corridor opens up the approach to the temple and connects the shrine with the riverfront, making it easier to experience both as part of your visit.",
        image: "/aarti-images/Kashi-Vishwanath-Temple.jpg",
        alt: "Kashi Vishwanath Temple and corridor entrance in Varanasi, one of the most sacred Lord Shiva temples",
      },
      {
        title: "Shri Vishwanath Temple (New Vishwanath), BHU Varanasi",
        description: "Located within the Banaras Hindu University campus, this tall white temple is also known as the New Vishwanath Temple or Birla Temple. Its peaceful grounds and detailed architecture make it a memorable stop for visitors exploring another side of Varanasi’s spiritual heritage.",
        image: "/aarti-images/shri-vishwanath-temple-bhu-varanasi.jpg",
        alt: "White marble Shri Vishwanath Temple inside Banaras Hindu University campus in Varanasi",
      },
      {
        title: "Dashashwamedh Ghat Ganga Aarti, Varanasi",
        description: "Dashashwamedh is one of Varanasi’s best-known ghats, close to Kashi Vishwanath Temple. In the evening, visitors gather by the river to watch priests offer lamps during Ganga Aarti, accompanied by prayers and devotional music.",
        image: "/aarti-images/dashashwamedh-ghat-ganga-aarti-varanasi.jpg",
        alt: "Evening Ganga Aarti at Dashashwamedh Ghat in Varanasi with lamps and devotees by the river",
      },
      {
        title: "Sankat Mochan Hanuman Temple, Varanasi",
        description: "This revered temple is dedicated to Lord Hanuman and is an important stop for devotees visiting Varanasi. Take time for darshan and prayer, and experience the temple’s deeply devotional atmosphere.",
        image: "/aarti-images/sankat-mochan-hanuman-temple-varanasi.jpg",
        alt: "Sankat Mochan Hanuman Temple in Varanasi, a revered temple dedicated to Lord Hanuman",
      },
      {
        title: "Durga Kund Temple, Varanasi",
        description: "The striking red Durga Temple is dedicated to Goddess Durga and stands beside Durga Kund, the water tank that gives the area its name. The temple and kund together make this a memorable spiritual stop in the city.",
        image: "/aarti-images/durga-kund-temple-varanasi.jpg",
        alt: "Red Durga Kund Temple beside the sacred water tank in Varanasi, dedicated to Goddess Durga",
      },
      {
        title: "Kal Bhairav Temple, Varanasi - Guardian of Kashi",
        description: "Kaal Bhairav is a revered form of Lord Shiva worshipped at this historic Varanasi shrine. In local tradition, he is regarded as the guardian of Kashi, making the temple an important part of the city’s spiritual circuit.",
        image: "/aarti-images/kal%20bhairav%20temple-varanasi.jpg",
        alt: "Lit diya at Kal Bhairav Temple in Varanasi, the guardian deity of Kashi",
      },
      {
        title: "Ramnagar Fort, Varanasi",
        description: "Set beside the Ganga, Ramnagar Fort offers a glimpse into the history of the former Maharaja of Banaras. Explore its old halls and museum collections, then take in the broad river views from the fort’s riverside setting.",
        image: "/aarti-images/Ramnagar%20Fort.jpg",
        alt: "Historic Ramnagar Fort on the banks of the Ganga river, former residence of the Maharaja of Banaras",
      },
      {
        title: "Sarnath Dhamek Stupa, Varanasi Buddhist Pilgrimage Site",
        description: "Just outside central Varanasi, Sarnath is one of Buddhism’s most significant pilgrimage sites. Visit the Dhamek Stupa and surrounding archaeological remains, where the Buddha is traditionally believed to have delivered his first sermon.",
        image: "/aarti-images/sarnath%20temple.jpg",
        alt: "Dhamek Stupa at Sarnath near Varanasi, where Buddha delivered his first sermon",
      },
    ],
    details: [
      "Discover the sacred places and riverside life that make Kashi unique, at a pace that works for you and your group.",
      "Tell us how long you have in the city and which places you hope to see. We can help you plan a flexible visit around your interests.",
    ],
  },
  "aarti-darshan": {
    title: "Ganga Aarti Darshan",
    description: "Arrange a memorable evening at the ghats and experience the prayers, music, and glowing lamps of Ganga Aarti.",
    note: "Evening ceremony · Varanasi ghats",
    highlights: [
      {
        title: "Dashashwamedh Ghat",
        description: "See Varanasi’s best-known Ganga Aarti, performed here every evening.",
        image: "/aarti-images/dashashwamedh-ghat-ganga-aarti-varanasi.jpg",
        alt: "Ganga Aarti performed at Dashashwamedh Ghat, Varanasi",
        imageTitle: "Dashashwamedh Ghat Ganga Aarti Varanasi",
      },
      {
        title: "Assi Ghat",
        description: "Choose a calmer riverside experience and the morning Subah-e-Banaras programme.",
        image: "/aarti-images/assi-ghat-boats-varanasi.jpg",
        alt: "Boats at Assi Ghat, Varanasi at sunrise",
        imageTitle: "Assi Ghat Subah-e-Banaras Varanasi",
      },
      {
        title: "Namo Ghat",
        description: "A newer, modern ghat that can offer a less-crowded setting for your visit.",
        image: "/aarti-images/namo-ghat-varanasi.jpg",
        alt: "Namo Ghat riverside steps in Varanasi",
        imageTitle: "Namo Ghat Varanasi",
      },
      {
        title: "Boat Planning for Aarti",
        description: "Ask us to plan a boat view of the Aarti. Boat availability, boarding point, and timing depend on the date and river conditions, so please enquire in advance.",
        image: "/aarti-images/ganga-aarti-boat-ride-varanasi.jpg",
        alt: "Tourists on a boat on the Ganges for Ganga Aarti view, Varanasi",
        imageTitle: "Boat Ride for Ganga Aarti Varanasi",
      },
    ],
    details: [
      "Experience the evening Ganga Aarti on the banks of the Ganga, where devotional prayers, music, and lamps create a memorable atmosphere.",
      "Get in touch with your preferred date and group size so we can help you plan your visit to the ghats.",
    ],
  },
  "pandit-puja-services": {
    title: "Pandit & Puja Services",
    description: "Arrange traditional puja and ritual services with a pandit for your personal or family occasion.",
    note: "Personal ceremonies · By arrangement",
    rituals: [
      {
        title: "Rudrabhishek",
        description: "A Vedic puja for Lord Shiva. The Shivling is bathed with milk, water, curd, honey, ghee, and bel leaves while Vedic mantras are chanted. It can be arranged at Kashi Vishwanath Temple or another Shiva temple, depending on the temple’s rules and availability.",
      },
      {
        title: "Mahamrityunjay Jaap",
        description: "We chant the Mahamrityunjay mantra, for example 1,25,000 times, or the number you choose in your sankalp. People traditionally do it to pray for good health, a long life, and relief from problems.",
      },
      {
        title: "Navchandi Yagya",
        description: "A havan for Maa Durga with the recitation of Durga Saptashati. It is a big ritual, so it may need several pandits. It can take one day or more, depending on the plan.",
      },
      {
        title: "Katha Pravachan",
        description: "We arrange a katha and talk for your family or group. You can choose Satyanarayan Katha, Shiv Puran Katha, Bhagwat Katha, or Ramcharitmanas.",
      },
    ],
    details: [
      "Arrange a traditional puja or ceremony in Varanasi with support for your family’s occasion and requirements.",
      "When enquiring, let us know the ceremony you have in mind, your preferred date, and any customs you would like us to consider.",
    ],
  },
  "jyotish-astrology": {
    title: "Jyotish & Astrology",
    description: "Request a Jyotish consultation for astrological guidance and insights rooted in traditional practice.",
    note: "Consultations · By appointment",
    astrologyServices: [
      {
        title: "Janam Kundli Analysis",
        description: "We prepare your birth chart and explain what each planet means for your life.\nYou get clear and simple guidance based on traditional astrology.",
      },
      {
        title: "Kundli Milan",
        description: "We compare the birth charts of two people who plan to marry.\nWe check the gun milan score and give helpful advice for a happy relationship.",
      },
      {
        title: "Palm Reading (Hast Rekha)",
        description: "We study the lines and shapes on your hand in the traditional way.\nLearn what your palm may say about your character and future.",
      },
      {
        title: "Numerology (Ank Jyotish)",
        description: "We explain the meaning of your important numbers, like your birth date and name.\nSee what these numbers may say about your personality and path.",
      },
      {
        title: "Marriage Delay Solutions",
        description: "Talk to an experienced astrologer if your marriage is late or facing problems.\nWe look at your chart to find possible reasons and suggest simple remedies.",
      },
      {
        title: "Mangal Dosh Check and Remedies",
        description: "We check if your chart has Mangal Dosh and explain what it means.\nWe also share the common remedies and shanti practices people follow.",
      },
      {
        title: "Child Planning Guidance",
        description: "Get traditional astrology advice about family and having children.\nWe look at your chart and guide you on the right time and possible remedies.",
      },
    ],
    details: [
      "Request a personal Jyotish consultation for guidance rooted in traditional astrological practice.",
      "Consultations are arranged by appointment. Share your preferred time and what you would like to discuss when you contact us.",
    ],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <main className="service-detail-page">
        <PageHero title="Service not found" description="This service may have moved or is no longer available." />
        <div className="service-detail-content"><Link to="/services">Browse all services</Link></div>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <PageHero title={service.title} description={service.description} />
      <section className="service-detail-content">
        {service.offerings && (
          <section className="service-offerings" aria-label="Ganga Aarti event options">
            <h2>Choose your Ganga Aarti experience</h2>
            <p className="service-offerings__intro">From an evening of devotion to a memorable wedding celebration, plan the experience that fits your occasion.</p>
            <div className="service-offerings__grid service-offerings__grid--editorial">
              {service.offerings.map((offering) => (
                <article className="service-offering service-offering--editorial" key={offering.title}>
                  <img src={offering.image} alt={offering.alt} loading="lazy" />
                  <div className="service-offering__body">
                    <p className="service-offering__eyebrow">{offering.eyebrow}</p>
                    <h3>{offering.title}</h3>
                    <p>{offering.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        {service.places && (
          <section className="service-destinations" aria-labelledby="service-places-title">
            <div className="service-destinations__list">
              {service.places.map((place) => (
                <article className="service-destination" key={place.title}>
                  <img className="service-destination__image" src={place.image} alt={place.alt} loading="lazy" />
                  <div className="service-destination__body">
                    <h3>{place.title}</h3>
                    <p>{place.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        {service.highlights && (
          <section className="service-highlights" aria-labelledby="service-highlights-title">
            <h2 id="service-highlights-title">Choose your Ganga Aarti experience</h2>
            <div className="service-highlights__grid">
              {service.highlights.map((highlight) => (
                <article className="service-highlight" key={highlight.title}>
                  {highlight.image && (
                    <img
                      className={`service-highlight__image${highlight.title === "Dashashwamedh Ghat" ? " service-highlight__image--full" : ""}`}
                      src={highlight.image}
                      alt={highlight.alt}
                      title={highlight.imageTitle}
                      loading="lazy"
                    />
                  )}
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        {service.rituals && (
          <section className="service-puja-rituals" aria-label="Puja and ceremony options">
            <div className="service-puja-rituals__list">
              {service.rituals.map((ritual) => (
                <article className="service-puja-ritual" key={ritual.title}>
                  <div>
                    <h3>{ritual.title}</h3>
                    <p>{ritual.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        {serviceId === "jyotish-astrology" && (
          <section className="service-astrology-intro" aria-labelledby="service-astrology-title">
            <h2 id="service-astrology-title">Astrology services</h2>
            <p>{service.details[0]}</p>
          </section>
        )}
        {service.astrologyServices && (
          <section className="service-puja-rituals" aria-label="Available astrology services">
            <div className="service-puja-rituals__list">
              {service.astrologyServices.map((astrologyService) => (
                <article className="service-puja-ritual" key={astrologyService.title}>
                  <div>
                    <h3>{astrologyService.title}</h3>
                    <p>{astrologyService.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        <section className="service-contact" aria-labelledby="service-contact-title">
          <header className="service-contact__heading">
            <p>We’re here to help</p>
            <h2 id="service-contact-title">Let’s plan your {service.title}</h2>
            <span>Choose the easiest way to get in touch with our Varanasi team.</span>
          </header>
          <div className="service-contact__grid">
            <a className="service-contact__option" href="tel:+919794640037">
              <span className="service-contact__icon"><MdPhone aria-hidden="true" /></span>
              <span className="service-contact__content">
                <span className="service-contact__label">Call us</span>
                <strong>+91 97946 40037</strong>
                <span className="service-contact__hint">Tap to call our team</span>
              </span>
            </a>
            <a
              className="service-contact__option service-contact__option--whatsapp"
              href={`https://wa.me/919794640037?text=${encodeURIComponent(`Hello Ganga Aarti Seva, I want to enquire about ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="service-contact__icon">
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span className="service-contact__content">
                <span className="service-contact__label">WhatsApp</span>
                <strong>Message Ganga Aarti Seva</strong>
                <span className="service-contact__hint">Usually the fastest way</span>
              </span>
            </a>
            <a className="service-contact__option" href="mailto:mahaartikashiganga@gmail.com">
              <span className="service-contact__icon"><MdEmail aria-hidden="true" /></span>
              <span className="service-contact__content">
                <span className="service-contact__label">Email us</span>
                <strong className="service-contact__email">mahaartikashiganga@gmail.com</strong>
                <span className="service-contact__hint">We usually reply within one working day</span>
              </span>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
