import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultMetadata = {
  title: "Ganga Aarti Seva | Varanasi Ganga Aarti & Kashi Visits",
  description:
    "Plan Ganga Aarti darshan, Kashi Bhraman, puja ceremonies, and astrology services in Varanasi with Ganga Aarti Seva.",
};

const pageMetadata = {
  "/": defaultMetadata,
  "/services": {
    title: "Varanasi Services | Ganga Aarti Seva",
    description:
      "Explore Ganga Aarti darshan, Kashi Bhraman, puja ceremonies, Jyotish, and event planning services in Varanasi.",
  },
  "/about": {
    title: "About Ganga Aarti Seva | Local Varanasi Team",
    description:
      "Meet the Varanasi team helping visitors plan Ganga Aarti, temple visits, puja ceremonies, and spiritual experiences.",
  },
  "/gallery": {
    title: "Varanasi Photo Gallery | Ganga Aarti Seva",
    description:
      "View photos of puja ceremonies, gatherings, and spiritual experiences in Varanasi.",
  },
  "/contact": {
    title: "Contact Ganga Aarti Seva | Varanasi",
    description:
      "Contact Ganga Aarti Seva to ask about Aarti timings, Kashi visits, puja arrangements, and directions in Varanasi.",
  },
  "/book-now": {
    title: "Support Ganga Aarti Seva | Varanasi",
    description:
      "Contact Ganga Aarti Seva for information about supporting our work serving visitors and devotees in Varanasi.",
  },
};

const serviceMetadata = {
  "event-planning": {
    title: "Ganga Aarti Event Planning | Varanasi",
    description:
      "Plan a family celebration, wedding, or religious event with Ganga Aarti in Varanasi.",
  },
  "aarti-darshan": {
    title: "Ganga Aarti Darshan | Varanasi Ghats",
    description:
      "Plan an evening at the Varanasi ghats and experience the prayers, music, and lamps of Ganga Aarti.",
  },
  "kashi-darshan": {
    title: "Kashi Bhraman | Temples and Ghats in Varanasi",
    description:
      "Explore Kashi Vishwanath Temple, Varanasi’s sacred ghats, and other landmarks with help planning your visit.",
  },
  "pandit-puja-services": {
    title: "Pandit and Puja Services | Varanasi",
    description:
      "Arrange traditional puja ceremonies and rituals with a local pandit in Varanasi.",
  },
  "jyotish-astrology": {
    title: "Jyotish and Astrology Services | Varanasi",
    description:
      "Ask about Janam Kundli analysis, Kundli Milan, palm reading, numerology, and traditional astrology guidance.",
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.append(element);
  }

  element.setAttribute("href", url);
}

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const serviceId = pathname.startsWith("/services/")
      ? pathname.slice("/services/".length).replace(/\/$/, "")
      : null;
    const metadata = serviceId
      ? serviceMetadata[serviceId]
      : pageMetadata[pathname.replace(/\/$/, "") || "/"];
    const isMissingPage = !metadata;
    const page = metadata || {
      title: "Page not found | Ganga Aarti Seva",
      description: "The requested page could not be found on Ganga Aarti Seva.",
    };

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", `${window.location.origin}${pathname}`);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setCanonical(`${window.location.origin}${pathname}`);

    if (isMissingPage) {
      setMeta("name", "robots", "noindex,follow");
    } else {
      setMeta("name", "robots", "index,follow,max-image-preview:large");
    }
  }, [pathname]);

  return null;
}
