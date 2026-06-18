// SEO Configuration and utilities for Visiomatix Media

export const updateMetaTags = (
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
) => {
  // Update title
  document.title =
    title || "Visiomatix Media - Digital Marketing & Creative Services";

  // Update or create meta tags
  const metaTags = {
    'meta[name="description"]':
      description ||
      "Comprehensive digital marketing, web development, branding, graphic design, and creative services in Nashik.",
    'meta[name="keywords"]':
      keywords ||
      "digital marketing, web development, graphic design, SEO, branding, Nashik",
    'meta[property="og:title"]': title || "Visiomatix Media",
    'meta[property="og:description"]':
      description || "Comprehensive digital services",
    'meta[property="og:url"]':
      canonicalUrl || "https://visiomatix.onrender.com/",
    'meta[property="og:image"]':
      ogImage || "https://visiomatix.onrender.com/Logo PNG.png",
  };

  Object.entries(metaTags).forEach(([selector, content]) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      const [tagType, attrValue] =
        selector.split("[name=")[1] || selector.split("[property=")[1];
      const attr = selector.includes("property") ? "property" : "name";
      element.setAttribute(attr, attrValue.replace('"]', ""));
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  });

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl || "https://visiomatix.onrender.com/";
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Visiomatix Media",
    description: "Digital Marketing & Creative Services Agency",
    url: "https://visiomatix.onrender.com",
    logo: "https://visiomatix.onrender.com/Logo PNG.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Om Sai Apartment, Road, Manmad - Chandwad Rd",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "423101",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-89991-01916",
      areaServed: "IN",
    },
    areaServed: ["IN", "Global"],
    sameAs: [
      "https://www.facebook.com/visiomatixmedia",
      "https://www.instagram.com/visiomatixmedia",
      "https://www.linkedin.com/company/visiomatixmedia",
      "https://twitter.com/visiomatixmedia",
    ],
  },

  service: (title, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "Visiomatix Media",
      url: "https://visiomatix.onrender.com",
    },
  }),

  article: (title, description, image, datePublished) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: "Visiomatix Media",
    },
  }),
};

export const pageConfigs = {
  home: {
    title: "Visiomatix Media - Digital Marketing & Creative Services in Nashik",
    description:
      "Award-winning digital agency offering web development, SEO, branding, graphic design, and creative solutions.",
    keywords:
      "digital marketing, web design, SEO, branding, graphic design, web development, Nashik",
    canonicalUrl: "https://visiomatix.onrender.com/",
  },
  about: {
    title: "About Us - Visiomatix Media | Digital Agency Nashik",
    description:
      "Learn about Visiomatix Media's mission, team, and approach to delivering innovative digital solutions.",
    keywords:
      "about visiomatix, digital agency, web design company, creative team, Nashik",
    canonicalUrl: "https://visiomatix.onrender.com/about",
  },
  contact: {
    title: "Contact Us - Visiomatix Media | Get Your Digital Solution",
    description:
      "Contact Visiomatix Media for digital marketing, web development, and creative services.",
    keywords:
      "contact us, visiomatix media, web design agency, branding services",
    canonicalUrl: "https://visiomatix.onrender.com/contact",
  },
  blog: {
    title: "Blog - Visiomatix Media | Digital Marketing Tips & Insights",
    description:
      "Read latest blog posts on digital marketing, web design, SEO, and creative strategies.",
    keywords:
      "blog, digital marketing tips, web design, SEO guide, marketing strategy",
    canonicalUrl: "https://visiomatix.onrender.com/blog",
  },
  career: {
    title: "Careers - Visiomatix Media | Join Our Team",
    description:
      "Join our dynamic team at Visiomatix Media. We're hiring talented professionals in web development, design, and marketing.",
    keywords: "careers, jobs, hiring, web developer, designer, marketer",
    canonicalUrl: "https://visiomatix.onrender.com/career",
  },
  plans: {
    title: "Pricing Plans - Visiomatix Media | Choose Your Growth Plan",
    description:
      "Explore Visiomatix Media's pricing plans for digital marketing, Meta & Google Ads, CGI, 3D visuals, and lead generation.",
    keywords: "pricing plans, growth plans, digital marketing cost, ads management pricing",
    canonicalUrl: "https://visiomatix.onrender.com/plans",
  },
};

export const addSchemaMarkup = (schemaData) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
};
