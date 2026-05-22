// SEO Configuration and utilities for Visiomatix Media

export const siteUrl = "https://visiomatix.in";
export const siteName = "Visiomatix Media";

const buildCanonicalUrl = (path) =>
  `${siteUrl}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;

const titleCaseFromPath = (path) =>
  path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) || "Visiomatix Media";

const createSeoConfig = (path, title, description, keywords, priority = 0.8) => ({
  path,
  title,
  description,
  keywords,
  canonicalUrl: buildCanonicalUrl(path),
  priority,
});

export const publicSeoPages = [
  createSeoConfig(
    "/",
    "Visiomatix Media | Digital Agency in Nashik",
    "Visiomatix Media Pvt Ltd offers digital marketing, web development, branding, SEO, graphic design, and creative services in Nashik.",
    "Visiomatix Media, digital marketing agency Nashik, web development, SEO services, branding, graphic design",
    1.0,
  ),
  createSeoConfig(
    "/about",
    "About Visiomatix Media | Digital Agency Nashik",
    "Learn about Visiomatix Media's team, mission, and approach to building effective digital, branding, and creative solutions.",
    "about Visiomatix Media, digital agency Nashik, creative agency, web design company",
    0.9,
  ),
  createSeoConfig(
    "/contact",
    "Contact Visiomatix Media | Digital Services in Nashik",
    "Contact Visiomatix Media for digital marketing, web development, SEO, branding, design, and creative service enquiries.",
    "contact Visiomatix Media, digital marketing agency Nashik, web development enquiry",
    0.9,
  ),
  createSeoConfig(
    "/blog",
    "Blog | Visiomatix Media Digital Marketing Insights",
    "Read digital marketing, SEO, web design, branding, and creative strategy insights from Visiomatix Media.",
    "digital marketing blog, SEO tips, web design insights, branding strategy",
    0.8,
  ),
  createSeoConfig(
    "/careers",
    "Careers at Visiomatix Media | Join Our Team",
    "Explore career opportunities at Visiomatix Media for web development, design, marketing, and creative professionals.",
    "Visiomatix careers, digital marketing jobs, web developer jobs Nashik, design jobs",
    0.7,
  ),
  createSeoConfig("/services/digital-marketing", "Digital Marketing Services | Visiomatix Media", "Grow online with SEO, PPC, content, video, email, influencer, and reputation marketing services from Visiomatix Media.", "digital marketing services, SEO, PPC, content marketing, Nashik", 0.9),
  createSeoConfig("/services/design-creative-services", "Design & Creative Services | Visiomatix Media", "Creative design services including graphic design, UI/UX, motion graphics, VFX, photography, and post-production.", "design services, creative agency, graphic design, UI UX, VFX", 0.9),
  createSeoConfig("/services/web-and-app-development-services", "Web & App Development Services | Visiomatix Media", "Custom website, mobile app, backend API, UI/UX driven development, performance, security, and maintenance services.", "web development services, app development, backend API, website maintenance", 0.9),
  createSeoConfig("/services/business-software-solutions", "Business Software Solutions | Visiomatix Media", "Custom business software, enterprise systems, automation, reporting, cloud, integration, and scalable architecture services.", "business software solutions, custom software, enterprise systems, automation", 0.9),
  createSeoConfig("/services/ecommerce-solutions", "E-commerce Solutions | Visiomatix Media", "E-commerce development, marketplace solutions, checkout optimization, inventory management, integrations, and cloud commerce services.", "ecommerce solutions, ecommerce development, marketplace, checkout optimization", 0.9),
  createSeoConfig("/services/branding-strategy", "Branding & Strategy Services | Visiomatix Media", "Brand strategy, positioning, identity systems, messaging, research, implementation, governance, and brand support.", "branding strategy, brand identity, brand positioning, brand guidelines", 0.9),
  createSeoConfig("/services/brand-strategy-positioning", "Brand Strategy & Positioning | Visiomatix Media", "Define a clear market position, voice, and brand strategy that helps your business stand apart.", "brand strategy, brand positioning, market positioning", 0.8),
  createSeoConfig("/services/brand-identity-design-system", "Brand Identity Design Systems | Visiomatix Media", "Build cohesive brand identity systems with logos, visual language, typography, colors, and reusable brand assets.", "brand identity design, visual identity, design system", 0.8),
  createSeoConfig("/services/messaging-communication-strategy", "Messaging & Communication Strategy | Visiomatix Media", "Create consistent brand messaging, campaign narratives, and communication strategy for every customer touchpoint.", "brand messaging, communication strategy, content strategy", 0.8),
  createSeoConfig("/services/market-audience-research", "Market & Audience Research | Visiomatix Media", "Use audience, competitor, and market research to make stronger brand and marketing decisions.", "market research, audience research, competitor analysis", 0.8),
  createSeoConfig("/services/brand-integration-implementation", "Brand Integration & Implementation | Visiomatix Media", "Implement your brand consistently across websites, campaigns, social channels, and business collateral.", "brand implementation, brand integration, brand rollout", 0.8),
  createSeoConfig("/services/scalable-brand-architecture", "Scalable Brand Architecture | Visiomatix Media", "Organize products, services, and sub-brands with a scalable brand architecture built for growth.", "brand architecture, scalable branding, sub brand strategy", 0.8),
  createSeoConfig("/services/brand-guidelines-governance", "Brand Guidelines & Governance | Visiomatix Media", "Create brand guidelines and governance systems that keep your identity consistent across teams and channels.", "brand guidelines, brand governance, brand consistency", 0.8),
  createSeoConfig("/services/ongoing-brand-support-optimization", "Ongoing Brand Support & Optimization | Visiomatix Media", "Improve and maintain your brand system with ongoing support, audits, updates, and optimization.", "brand support, brand optimization, brand audit", 0.8),
  createSeoConfig("/services/custom-business-software-development", "Custom Business Software Development | Visiomatix Media", "Develop custom software that fits your operations, workflows, reporting needs, and growth plans.", "custom business software, software development, workflow software", 0.8),
  createSeoConfig("/services/enterprise-internal-system", "Enterprise & Internal Systems | Visiomatix Media", "Build internal portals, enterprise tools, dashboards, and systems that simplify business operations.", "enterprise systems, internal systems, business portals", 0.8),
  createSeoConfig("/services/process-automation-solutions", "Process Automation Solutions | Visiomatix Media", "Automate repetitive workflows, approvals, reporting, and business processes with custom digital systems.", "process automation, workflow automation, business automation", 0.8),
  createSeoConfig("/services/data-management-reporting-system", "Data Management & Reporting Systems | Visiomatix Media", "Centralize business data and create reporting systems that improve visibility and decision-making.", "data management, reporting systems, business dashboards", 0.8),
  createSeoConfig("/services/system-integration-services", "System Integration Services | Visiomatix Media", "Connect apps, APIs, databases, and third-party tools into a smoother business technology stack.", "system integration, API integration, software integration", 0.8),
  createSeoConfig("/services/secure-scalable-arch", "Secure & Scalable Architecture | Visiomatix Media", "Design secure, scalable, and maintainable software architecture for business systems and platforms.", "secure architecture, scalable software architecture, cloud architecture", 0.8),
  createSeoConfig("/services/cloud-based-soft-sol", "Cloud Based Software Solutions | Visiomatix Media", "Create cloud-based software solutions that are accessible, scalable, and easier to maintain.", "cloud software, cloud based solutions, SaaS development", 0.8),
  createSeoConfig("/services/maintenance-support-opt", "Maintenance, Support & Optimization | Visiomatix Media", "Keep business software stable, updated, secure, and optimized with ongoing technical support.", "software maintenance, technical support, software optimization", 0.8),
  createSeoConfig("/services/graphic-design", "Graphic Design Services | Visiomatix Media", "Professional graphic design for brand assets, marketing campaigns, digital creatives, and print collateral.", "graphic design services, marketing design, creative design", 0.8),
  createSeoConfig("/services/youtube-thumbnail-video", "YouTube Thumbnail & Video Design | Visiomatix Media", "Create high-performing YouTube thumbnails, video creatives, and visual assets that improve viewer engagement.", "YouTube thumbnail design, video design, YouTube creatives", 0.8),
  createSeoConfig("/services/ui-ux-design", "UI/UX Design Services | Visiomatix Media", "Design intuitive web and mobile interfaces with user journeys, wireframes, prototypes, and polished UI systems.", "UI UX design, user experience design, interface design", 0.8),
  createSeoConfig("/services/post-production", "Post-Production Services | Visiomatix Media", "Video editing, color correction, sound cleanup, compositing, and post-production support for polished content.", "post production, video editing, color correction", 0.8),
  createSeoConfig("/services/product-visualisation", "3D Product Visualisation | Visiomatix Media", "Showcase products with detailed 3D visualization, renders, animations, and marketing-ready visual content.", "3D product visualisation, product rendering, 3D animation", 0.8),
  createSeoConfig("/services/motion-graphics", "Motion Graphics & Animation | Visiomatix Media", "Create animated explainers, motion graphics, social animations, and branded video assets.", "motion graphics, animation services, explainer video", 0.8),
  createSeoConfig("/services/visual-effects", "Visual Effects (VFX) Services | Visiomatix Media", "Add professional visual effects, compositing, cleanup, and enhancement to video and creative productions.", "visual effects, VFX services, video compositing", 0.8),
  createSeoConfig("/services/photography-videography", "Photography & Videography Services | Visiomatix Media", "Professional photography and videography for brands, products, campaigns, events, and digital content.", "photography services, videography services, brand photography", 0.8),
  createSeoConfig("/services/pay-per-click", "Pay Per Click Advertising | Visiomatix Media", "Plan, launch, and optimize PPC campaigns across Google Ads, Meta Ads, and performance marketing channels.", "PPC services, Google Ads, paid advertising, performance marketing", 0.8),
  createSeoConfig("/web-and-app-development", "Web & App Development for Marketing | Visiomatix Media", "Build campaign-ready websites, landing pages, and digital experiences that support marketing growth.", "web app development, marketing websites, landing page development", 0.7),
  createSeoConfig("/services/seo-and-content-writing", "SEO & Content Writing Services | Visiomatix Media", "Improve organic rankings with technical SEO, on-page SEO, keyword strategy, and search-focused content writing.", "SEO services, content writing, search engine optimization", 0.8),
  createSeoConfig("/services/email-and-influencer-marketing", "Email & Influencer Marketing | Visiomatix Media", "Reach customers with email campaigns, influencer partnerships, audience nurturing, and promotional strategy.", "email marketing, influencer marketing, campaign strategy", 0.8),
  createSeoConfig("/services/ecommerce-and-marketing", "E-commerce Marketing Services | Visiomatix Media", "Increase online store visibility and sales with e-commerce marketing, product campaigns, and conversion strategy.", "ecommerce marketing, online store marketing, product marketing", 0.8),
  createSeoConfig("/services/content-and-video-marketing", "Content & Video Marketing | Visiomatix Media", "Create strategic content and video campaigns for brand awareness, engagement, and lead generation.", "content marketing, video marketing, brand content", 0.8),
  createSeoConfig("/services/analytics-and-roi-tracking", "Analytics & ROI Tracking | Visiomatix Media", "Track campaign performance, conversions, ROI, and customer behavior with analytics setup and reporting.", "analytics tracking, ROI tracking, marketing analytics", 0.8),
  createSeoConfig("/services/online-reputation-management", "Online Reputation Management | Visiomatix Media", "Monitor, improve, and protect your online reputation across reviews, search results, and social platforms.", "online reputation management, review management, brand reputation", 0.8),
  createSeoConfig("/services/custom-e-commerce-development", "Custom E-commerce Development | Visiomatix Media", "Build tailored e-commerce websites, storefront features, checkout flows, and integrations for online selling.", "custom ecommerce development, ecommerce website, online store development", 0.8),
  createSeoConfig("/services/enterprise-marketplace-solutions", "Enterprise & Marketplace Solutions | Visiomatix Media", "Develop scalable e-commerce marketplace and enterprise commerce solutions for complex selling operations.", "marketplace development, enterprise ecommerce, multi vendor marketplace", 0.8),
  createSeoConfig("/services/checkout-conversion-optimization", "Checkout Conversion Optimization | Visiomatix Media", "Improve checkout flows, reduce friction, and increase conversion rates for e-commerce stores.", "checkout optimization, conversion optimization, ecommerce CRO", 0.8),
  createSeoConfig("/services/product-inventory-order-management", "Product, Inventory & Order Management | Visiomatix Media", "Manage product catalogs, inventory, orders, and commerce operations with connected digital systems.", "inventory management, order management, ecommerce operations", 0.8),
  createSeoConfig("/services/system-integration-services-ecom", "E-commerce System Integration Services | Visiomatix Media", "Integrate e-commerce stores with payment gateways, CRMs, ERPs, inventory tools, and logistics platforms.", "ecommerce integration, payment gateway integration, ERP ecommerce", 0.8),
  createSeoConfig("/services/secure-scalable-architecture", "Secure & Scalable E-commerce Architecture | Visiomatix Media", "Build secure, scalable architecture for e-commerce websites, platforms, and marketplace systems.", "secure ecommerce architecture, scalable ecommerce, ecommerce security", 0.8),
  createSeoConfig("/services/cloud-based-e-com-solutions", "Cloud Based E-commerce Solutions | Visiomatix Media", "Launch cloud-based e-commerce platforms with reliable hosting, scalability, and connected commerce workflows.", "cloud ecommerce, cloud based ecommerce, scalable online store", 0.8),
  createSeoConfig("/services/maintenance-support-optimization", "E-commerce Maintenance, Support & Optimization | Visiomatix Media", "Keep e-commerce stores secure, fast, updated, and conversion-ready with ongoing support.", "ecommerce maintenance, ecommerce support, store optimization", 0.8),
  createSeoConfig("/services/mobile-app-development", "Mobile App Development Services | Visiomatix Media", "Design and develop mobile apps for Android, iOS, and cross-platform business use cases.", "mobile app development, Android app development, iOS app development", 0.8),
  createSeoConfig("/services/maintenance-support", "Website Maintenance & Support | Visiomatix Media", "Maintain, update, secure, and optimize websites and applications with ongoing technical support.", "website maintenance, website support, app maintenance", 0.8),
  createSeoConfig("/services/backend-api", "Backend & API Development | Visiomatix Media", "Build secure backend systems, APIs, databases, and integrations for websites, apps, and business platforms.", "backend development, API development, database development", 0.8),
  createSeoConfig("/services/custom-website-development", "Custom Website Development | Visiomatix Media", "Create fast, responsive, SEO-friendly custom websites for brands, businesses, and digital campaigns.", "custom website development, responsive website, SEO friendly website", 0.8),
  createSeoConfig("/services/uiux-driven-development", "UI/UX Driven Development | Visiomatix Media", "Develop websites and apps from a strong UI/UX foundation for better usability, engagement, and conversion.", "UI UX driven development, user centered development, frontend development", 0.8),
  createSeoConfig("/services/performance-security-optimization", "Performance, Security & Optimization | Visiomatix Media", "Improve website speed, security, technical health, and reliability with performance optimization services.", "performance optimization, website security, speed optimization", 0.8),
  createSeoConfig("/services/hrms", "HRMS Software Solutions | Visiomatix Media", "HRMS software solutions for employee management, HR workflows, attendance, reporting, and business operations.", "HRMS software, HR management system, employee management software", 0.8),
];

export const seoConfigByPath = publicSeoPages.reduce((acc, page) => {
  acc[page.path] = page;
  return acc;
}, {});

export const getSeoConfigForPath = (path) => {
  const cleanPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  return (
    seoConfigByPath[cleanPath] ||
    createSeoConfig(
      cleanPath,
      `${titleCaseFromPath(cleanPath)} | Visiomatix Media`,
      "Explore Visiomatix Media's digital marketing, web development, branding, design, and creative services.",
      "Visiomatix Media, digital services, web development, digital marketing, branding",
      0.6,
    )
  );
};

export const updateMetaTags = (
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
) => {
  const defaultUrl = `${siteUrl}/`;
  const defaultImage = `${siteUrl}/Logo.png`;

  // Update title
  document.title =
    title || "Visiomatix Media Pvt Ltd | Official Website";

  // Update or create meta tags
  const metaTags = {
    'meta[name="description"]':
      description ||
      "Comprehensive digital marketing, web development, branding, graphic design, and creative services in Nashik.",
    'meta[name="keywords"]':
      keywords ||
      "digital marketing, web development, graphic design, SEO, branding, Nashik",
    'meta[property="og:title"]': title || "Visiomatix Media Pvt Ltd",
    'meta[property="og:description"]':
      description || "Comprehensive digital services",
    'meta[property="og:url"]':
      canonicalUrl || defaultUrl,
    'meta[property="og:image"]':
      ogImage || defaultImage,
    'meta[property="og:site_name"]':
      siteName,
    'meta[name="robots"]':
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    'meta[name="googlebot"]':
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
  canonical.href = canonicalUrl || defaultUrl;
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://visiomatix.in/#organization",
    name: siteName,
    legalName: "Visiomatix Media Pvt Ltd",
    alternateName: ["Visiomatix Media Pvt Ltd", "Visiomatix"],
    description: "Digital Marketing & Creative Services Agency",
    url: "https://visiomatix.in/",
    logo: "https://visiomatix.in/Logo.png",
    image: "https://visiomatix.in/Logo.png",
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
      telephone: "+91-92702-71916",
      areaServed: "IN",
    },
    areaServed: ["IN", "Global"],
    sameAs: [
      "https://in.linkedin.com/company/visiomatix-media",
      "https://www.facebook.com/visiomatixmedia",
      "https://www.instagram.com/visiomatixmedia",
    ],
  },

  service: (title, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      url: "https://visiomatix.in/",
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
    title: "Visiomatix Media Pvt Ltd | Official Digital Agency in Nashik",
    description:
      "Award-winning digital agency offering web development, SEO, branding, graphic design, and creative solutions.",
    keywords:
      "digital marketing, web design, SEO, branding, graphic design, web development, Nashik",
    canonicalUrl: "https://visiomatix.in/",
  },
  about: {
    title: "About Us - Visiomatix Media | Digital Agency Nashik",
    description:
      "Learn about Visiomatix Media's mission, team, and approach to delivering innovative digital solutions.",
    keywords:
      "about visiomatix, digital agency, web design company, creative team, Nashik",
    canonicalUrl: "https://visiomatix.in/about",
  },
  contact: {
    title: "Contact Us - Visiomatix Media | Get Your Digital Solution",
    description:
      "Contact Visiomatix Media for digital marketing, web development, and creative services.",
    keywords:
      "contact us, visiomatix media, web design agency, branding services",
    canonicalUrl: "https://visiomatix.in/contact",
  },
  blog: {
    title: "Blog - Visiomatix Media | Digital Marketing Tips & Insights",
    description:
      "Read latest blog posts on digital marketing, web design, SEO, and creative strategies.",
    keywords:
      "blog, digital marketing tips, web design, SEO guide, marketing strategy",
    canonicalUrl: "https://visiomatix.in/blog",
  },
  career: {
    title: "Careers - Visiomatix Media | Join Our Team",
    description:
      "Join our dynamic team at Visiomatix Media. We're hiring talented professionals in web development, design, and marketing.",
    keywords: "careers, jobs, hiring, web developer, designer, marketer",
    canonicalUrl: "https://visiomatix.in/careers",
  },
};

export const addSchemaMarkup = (schemaData) => {
  let script = document.getElementById("organization-schema");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "organization-schema";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
};
