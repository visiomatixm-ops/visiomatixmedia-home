/**
 * Advanced SEO Configuration for Visiomatix Media
 * Comprehensive schema markup, meta tags, and SEO optimization for all pages
 * Last Updated: May 8, 2026
 */

// ============================================================================
// CORE BUSINESS DATA
// ============================================================================

export const businessData = {
  name: "Visiomatix Media",
  legalName: "Visiomatix Media Pvt Ltd",
  alternateNames: ["Visiomatix Media Pvt Ltd", "Visiomatix"],
  description: "Award-winning digital agency offering web development, SEO, branding, graphic design, and creative solutions",
  url: "https://visiomatix.in/",
  logo: "https://visiomatix.in/Logo.png",
  logoAlt: "Visiomatix Media - Digital Marketing Agency Logo",
  address: {
    streetAddress: "Om Sai Apartment, Road, Manmad - Chandwad Rd",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    postalCode: "423101",
    addressCountry: "IN",
  },
  phone: "+91-89991-01916",
  email: "info@visiomatix.in",
  foundingDate: "2020-01-01",
  areaServed: ["IN", "Global"],
  sameAs: [
    "https://in.linkedin.com/company/visiomatix-media",
    "https://www.facebook.com/visiomatixmedia",
    "https://www.instagram.com/visiomatixmedia",
  ],
};

// ============================================================================
// SCHEMA GENERATORS
// ============================================================================

/**
 * Generate Organization Schema
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: businessData.name,
  legalName: businessData.legalName,
  alternateName: businessData.alternateNames,
  description: businessData.description,
  url: businessData.url,
  logo: businessData.logo,
  address: {
    "@type": "PostalAddress",
    ...businessData.address,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: businessData.phone,
    areaServed: businessData.areaServed,
    availableLanguage: ["en", "hi"],
  },
  foundingDate: businessData.foundingDate,
  areaServed: businessData.areaServed,
  sameAs: businessData.sameAs,
});

/**
 * Generate LocalBusiness Schema
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessData.name,
  description: businessData.description,
  url: businessData.url,
  logo: businessData.logo,
  address: {
    "@type": "PostalAddress",
    ...businessData.address,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: businessData.phone,
  },
  areaServed: businessData.areaServed,
  sameAs: businessData.sameAs,
  priceRange: "INR",
});

/**
 * Generate BreadcrumbList Schema
 */
export const getBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${businessData.url}${item.path}`,
  })),
});

/**
 * Generate Service Schema
 */
export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  image: service.image,
  url: service.url,
  provider: {
    "@type": "Organization",
    name: businessData.name,
    url: businessData.url,
    logo: businessData.logo,
  },
  areaServed: businessData.areaServed,
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "Contact",
  },
});

/**
 * Generate ImageObject Schema - CRITICAL FOR IMAGE INDEXING
 */
export const getImageSchema = (image, pageTitle) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: image.url,
  name: image.alt || pageTitle,
  description: image.description || image.alt,
  contentUrl: image.url,
  width: image.width || "1200",
  height: image.height || "630",
  creator: {
    "@type": "Organization",
    name: businessData.name,
  },
  datePublished: image.datePublished || new Date().toISOString(),
  uploadDate: image.uploadDate || new Date().toISOString(),
  inLanguage: "en",
});

/**
 * Generate WebPage Schema
 */
export const getWebPageSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: page.url,
  name: page.title,
  description: page.description,
  image: page.image,
  datePublished: page.datePublished,
  dateModified: page.dateModified || new Date().toISOString(),
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    url: businessData.url,
    name: businessData.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${businessData.url}?search={search_term_string}`,
    },
    query_input: "required name=search_term_string",
  },
});

/**
 * Generate BlogPosting Schema
 */
export const getBlogPostingSchema = (blog) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.headline,
  description: blog.description,
  image: blog.image,
  datePublished: blog.datePublished,
  dateModified: blog.dateModified || blog.datePublished,
  author: {
    "@type": "Organization",
    name: businessData.name,
    url: businessData.url,
  },
  publisher: {
    "@type": "Organization",
    name: businessData.name,
    logo: {
      "@type": "ImageObject",
      url: businessData.logo,
    },
  },
  inLanguage: "en",
  articleBody: blog.articleBody,
});

/**
 * Generate AggregateRating Schema
 */
export const getAggregateRatingSchema = (rating) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  ratingValue: rating.ratingValue || "4.8",
  bestRating: "5",
  worstRating: "1",
  ratingCount: rating.ratingCount || "150",
  reviewCount: rating.reviewCount || "45",
});

/**
 * Generate FAQPage Schema
 */
export const getFAQPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * Generate Event Schema
 */
export const getEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  image: event.image,
  startDate: event.startDate,
  endDate: event.endDate,
  url: event.url,
  location: {
    "@type": "Place",
    name: event.location,
    address: {
      "@type": "PostalAddress",
      ...businessData.address,
    },
  },
  organizer: {
    "@type": "Organization",
    name: businessData.name,
    url: businessData.url,
  },
});

/**
 * Generate Person Schema (for team members)
 */
export const getPersonSchema = (person) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.jobTitle,
  image: person.image,
  url: person.url,
  affiliation: {
    "@type": "Organization",
    name: businessData.name,
  },
  sameAs: person.sameAs || [],
});

/**
 * Generate Product Schema
 */
export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  url: product.url,
  brand: {
    "@type": "Brand",
    name: businessData.name,
  },
  offers: {
    "@type": "Offer",
    url: product.url,
    priceCurrency: "INR",
    price: product.price || "Contact",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: product.rating ? getAggregateRatingSchema(product.rating) : undefined,
});

// ============================================================================
// PAGE CONFIGURATIONS - ALL PAGES WITH COMPLETE SEO
// ============================================================================

export const completePageConfigs = {
  // HOME PAGES
  home: {
    title:
      "Visiomatix Media - Digital Marketing & Creative Services in Nashik",
    description:
      "Award-winning digital agency offering web development, SEO, branding, graphic design, and creative solutions. Digital marketing services in Nashik, Maharashtra.",
    keywords:
      "digital marketing, web design, SEO, branding, graphic design, web development, Nashik, digital agency",
    canonicalUrl: "https://visiomatix.in/",
    ogImage: "https://visiomatix.in/og-home.jpg",
    ogImageAlt: "Visiomatix Media - Digital Marketing Agency",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    alternateUrls: [
      { hrefLang: "hi", href: "https://visiomatix.in/hi/" },
    ],
    schema: "WebSite",
    breadcrumbs: [],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
    author: "Visiomatix Media",
  },

  about: {
    title: "About Us - Visiomatix Media | Digital Agency Nashik",
    description:
      "Learn about Visiomatix Media's mission, team, and approach to delivering innovative digital solutions. We're a creative agency in Nashik, Maharashtra.",
    keywords:
      "about visiomatix, digital agency, web design company, creative team, Nashik, team, mission",
    canonicalUrl: "https://visiomatix.in/about",
    ogImage: "https://visiomatix.in/og-about.jpg",
    ogImageAlt: "About Visiomatix Media Team",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "AboutPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  contact: {
    title: "Contact Us - Visiomatix Media | Get Your Digital Solution",
    description:
      "Contact Visiomatix Media for digital marketing, web development, and creative services. Call +91-89991-01916 or visit us in Nashik.",
    keywords:
      "contact us, visiomatix media, web design agency, branding services, phone, email, Nashik",
    canonicalUrl: "https://visiomatix.in/contact",
    ogImage: "https://visiomatix.in/og-contact.jpg",
    ogImageAlt: "Contact Visiomatix Media",
    ogType: "website",
    twitterCard: "summary",
    locale: "en_IN",
    schema: "ContactPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  blog: {
    title: "Blog - Visiomatix Media | Digital Marketing Tips & Insights",
    description:
      "Read latest blog posts on digital marketing, web design, SEO, and creative strategies. Expert insights from Visiomatix Media.",
    keywords:
      "blog, digital marketing tips, web design, SEO guide, marketing strategy, insights",
    canonicalUrl: "https://visiomatix.in/blog",
    ogImage: "https://visiomatix.in/og-blog.jpg",
    ogImageAlt: "Visiomatix Media Blog",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "CollectionPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  career: {
    title: "Careers - Visiomatix Media | Join Our Team in Nashik",
    description:
      "Join our dynamic team at Visiomatix Media. We're hiring talented professionals in web development, design, and marketing.",
    keywords:
      "careers, jobs, hiring, web developer, designer, marketer, Nashik, job opportunity",
    canonicalUrl: "https://visiomatix.in/careers",
    ogImage: "https://visiomatix.in/og-career.jpg",
    ogImageAlt: "Careers at Visiomatix Media",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "JobPosting",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  // DIGITAL MARKETING SERVICES
  "digital-marketing": {
    title:
      "Digital Marketing Services - Visiomatix Media | Complete Online Solutions",
    description:
      "Comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and email marketing in Nashik.",
    keywords:
      "digital marketing, online marketing, internet marketing, marketing agency, Nashik, SEO services, PPC",
    canonicalUrl: "https://visiomatix.in/services/digital-marketing",
    ogImage: "https://visiomatix.in/og-digital-marketing.jpg",
    ogImageAlt: "Digital Marketing Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "seo-content-writing": {
    title: "SEO & Content Writing Services - Visiomatix Media | Rank on Google",
    description:
      "Professional SEO and content writing services to improve your website rankings on Google. Organic traffic growth strategies in Nashik.",
    keywords:
      "SEO services, content writing, search engine optimization, keyword research, on-page SEO, link building, Nashik",
    canonicalUrl: "https://visiomatix.in/services/seo-content-writing",
    ogImage: "https://visiomatix.in/og-seo.jpg",
    ogImageAlt: "SEO and Content Writing Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "SEO & Content Writing", path: "/services/seo-content-writing" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "pay-per-click": {
    title: "PPC Services - Google Ads & Facebook Ads | Visiomatix Media",
    description:
      "Effective PPC advertising campaigns on Google Ads, Facebook Ads, and more. Maximum ROI on your ad spend in Nashik.",
    keywords:
      "PPC, Google Ads, Facebook Ads, paid advertising, SEM, PPC management, ad campaigns, Nashik",
    canonicalUrl: "https://visiomatix.in/services/pay-per-click",
    ogImage: "https://visiomatix.in/og-ppc.jpg",
    ogImageAlt: "PPC Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Pay Per Click", path: "/services/pay-per-click" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "email-influencer-marketing": {
    title: "Email & Influencer Marketing Services | Visiomatix Media",
    description:
      "Email marketing campaigns and influencer partnerships to grow your brand. Reach your audience effectively with our services.",
    keywords:
      "email marketing, influencer marketing, email campaigns, social media marketing, brand promotion, Nashik",
    canonicalUrl: "https://visiomatix.in/services/email-influencer-marketing",
    ogImage: "https://visiomatix.in/og-email-influencer.jpg",
    ogImageAlt: "Email and Influencer Marketing Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Email & Influencer Marketing", path: "/services/email-influencer-marketing" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "content-video-marketing": {
    title: "Content & Video Marketing Services - Visiomatix Media",
    description:
      "Professional video marketing and content creation services to engage your audience. YouTube marketing, video production in Nashik.",
    keywords:
      "content marketing, video marketing, YouTube marketing, video production, creative content, Nashik",
    canonicalUrl: "https://visiomatix.in/services/content-video-marketing",
    ogImage: "https://visiomatix.in/og-content-video.jpg",
    ogImageAlt: "Content and Video Marketing Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Content & Video Marketing", path: "/services/content-video-marketing" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "analytics-roi": {
    title: "Analytics & ROI Services - Visiomatix Media | Measure Success",
    description:
      "Data analytics and ROI tracking services to measure your digital marketing success. Performance optimization in Nashik.",
    keywords:
      "analytics, ROI, tracking, data analysis, performance metrics, conversion optimization, Nashik",
    canonicalUrl: "https://visiomatix.in/services/analytics-roi",
    ogImage: "https://visiomatix.in/og-analytics.jpg",
    ogImageAlt: "Analytics and ROI Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Analytics & ROI", path: "/services/analytics-roi" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "online-reputation-management": {
    title: "Online Reputation Management - Visiomatix Media",
    description:
      "Protect and enhance your online reputation with our reputation management services. Monitor reviews and manage your brand image.",
    keywords:
      "reputation management, online reputation, review management, brand reputation, crisis management, Nashik",
    canonicalUrl: "https://visiomatix.in/services/online-reputation-management",
    ogImage: "https://visiomatix.in/og-reputation.jpg",
    ogImageAlt: "Online Reputation Management Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Online Reputation Management", path: "/services/online-reputation-management" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "ecommerce-marketing": {
    title: "E-commerce Marketing Services | Increase Online Sales",
    description:
      "Specialized e-commerce marketing services to boost your online store sales. Product marketing, conversion optimization in Nashik.",
    keywords:
      "ecommerce marketing, online sales, product marketing, conversion optimization, e-commerce SEO, Nashik",
    canonicalUrl: "https://visiomatix.in/services/ecommerce-marketing",
    ogImage: "https://visiomatix.in/og-ecommerce-marketing.jpg",
    ogImageAlt: "E-commerce Marketing Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "E-commerce Marketing", path: "/services/ecommerce-marketing" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  // WEB & APP DEVELOPMENT SERVICES
  "web-app-development": {
    title: "Web & App Development Services - Visiomatix Media",
    description:
      "Custom web development, responsive design, and web application development. Modern web solutions in Nashik.",
    keywords:
      "web development, app development, web design, responsive website, custom development, Nashik",
    canonicalUrl: "https://visiomatix.in/services/web-app-development",
    ogImage: "https://visiomatix.in/og-web-app.jpg",
    ogImageAlt: "Web and App Development Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Web & App Development", path: "/services/web-app-development" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "mobile-app-development": {
    title: "Mobile App Development - iOS & Android Apps | Visiomatix Media",
    description:
      "Professional mobile app development for iOS and Android. Native and cross-platform mobile solutions in Nashik.",
    keywords:
      "mobile app development, iOS app, Android app, app development, mobile solutions, Nashik",
    canonicalUrl: "https://visiomatix.in/services/mobile-app-development",
    ogImage: "https://visiomatix.in/og-mobile-app.jpg",
    ogImageAlt: "Mobile App Development Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Web & App Development", path: "/services/web-app-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "ecommerce-solutions": {
    title: "E-commerce Solutions - Shopify, WooCommerce | Visiomatix Media",
    description:
      "Complete e-commerce solutions with Shopify, WooCommerce, and custom platforms. Online store development in Nashik.",
    keywords:
      "ecommerce solutions, online store, Shopify development, WooCommerce, e-commerce platform, Nashik",
    canonicalUrl: "https://visiomatix.in/services/ecommerce-solutions",
    ogImage: "https://visiomatix.in/og-ecommerce-solutions.jpg",
    ogImageAlt: "E-commerce Solutions",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Web & App Development", path: "/services/web-app-development" },
      { name: "E-commerce Solutions", path: "/services/ecommerce-solutions" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "business-software-solutions": {
    title: "Business Software Solutions - Custom Software | Visiomatix Media",
    description:
      "Custom business software development for enterprise solutions. CRM, ERP, and business management systems.",
    keywords:
      "business software, custom software, CRM, ERP, enterprise solutions, software development, Nashik",
    canonicalUrl: "https://visiomatix.in/services/business-software-solutions",
    ogImage: "https://visiomatix.in/og-business-software.jpg",
    ogImageAlt: "Business Software Solutions",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Web & App Development", path: "/services/web-app-development" },
      { name: "Business Software Solutions", path: "/services/business-software-solutions" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "maintenance-support": {
    title: "Maintenance & Support Services - Keep Your Website Running",
    description:
      "Ongoing website maintenance, support, and updates. Technical support and performance optimization.",
    keywords:
      "maintenance, website support, technical support, website updates, performance optimization, Nashik",
    canonicalUrl: "https://visiomatix.in/services/maintenance-support",
    ogImage: "https://visiomatix.in/og-maintenance.jpg",
    ogImageAlt: "Maintenance and Support Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Web & App Development", path: "/services/web-app-development" },
      { name: "Maintenance & Support", path: "/services/maintenance-support" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  // DESIGN & CREATIVE SERVICES
  "design-creative": {
    title: "Design & Creative Services - Graphic Design, UI/UX | Visiomatix",
    description:
      "Complete design and creative services including graphic design, UI/UX, branding, and visual design.",
    keywords:
      "design services, graphic design, UI/UX design, branding, visual design, creative design, Nashik",
    canonicalUrl: "https://visiomatix.in/services/design-creative",
    ogImage: "https://visiomatix.in/og-design.jpg",
    ogImageAlt: "Design and Creative Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Design & Creative", path: "/services/design-creative" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "graphic-design": {
    title: "Graphic Design Services - Logo, Branding | Visiomatix Media",
    description:
      "Professional graphic design services for logos, branding, marketing materials, and visual design.",
    keywords:
      "graphic design, logo design, branding design, visual design, marketing materials, Nashik",
    canonicalUrl: "https://visiomatix.in/services/graphic-design",
    ogImage: "https://visiomatix.in/og-graphic-design.jpg",
    ogImageAlt: "Graphic Design Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Design & Creative", path: "/services/design-creative" },
      { name: "Graphic Design", path: "/services/graphic-design" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "ui-ux-design": {
    title: "UI/UX Design Services - User Experience Design | Visiomatix",
    description:
      "Professional UI/UX design for web and mobile applications. User-centered design solutions.",
    keywords:
      "UI design, UX design, user experience, interface design, web design, app design, Nashik",
    canonicalUrl: "https://visiomatix.in/services/ui-ux-design",
    ogImage: "https://visiomatix.in/og-ui-ux.jpg",
    ogImageAlt: "UI/UX Design Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Design & Creative", path: "/services/design-creative" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "motion-graphics-animation": {
    title: "Motion Graphics & Animation Services | Visiomatix Media",
    description:
      "Professional motion graphics and animation services. Animated explainers, promotional videos, and visual effects.",
    keywords:
      "motion graphics, animation, animated video, explainer video, visual effects, Nashik",
    canonicalUrl: "https://visiomatix.in/services/motion-graphics-animation",
    ogImage: "https://visiomatix.in/og-motion-graphics.jpg",
    ogImageAlt: "Motion Graphics and Animation Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Design & Creative", path: "/services/design-creative" },
      { name: "Motion Graphics & Animation", path: "/services/motion-graphics-animation" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },

  "branding-strategy": {
    title: "Branding & Strategy Services - Brand Development | Visiomatix",
    description:
      "Complete branding and business strategy services. Brand identity, positioning, and go-to-market strategies.",
    keywords:
      "branding, brand strategy, brand identity, positioning, brand development, business strategy, Nashik",
    canonicalUrl: "https://visiomatix.in/services/branding-strategy",
    ogImage: "https://visiomatix.in/og-branding.jpg",
    ogImageAlt: "Branding and Strategy Services",
    ogType: "website",
    twitterCard: "summary_large_image",
    locale: "en_IN",
    schema: "Service",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Branding & Strategy", path: "/services/branding-strategy" },
    ],
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString(),
  },
};

// ============================================================================
// IMAGE OPTIMIZATION UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate optimized image metadata
 */
export const getOptimizedImageMetadata = (image) => {
  return {
    ...image,
    src: image.src || image.url,
    alt: image.alt || "Visiomatix Media - Digital Services",
    title: image.title || image.alt,
    loading: "lazy",
    srcSet: image.srcSet || `${image.src}?w=400 400w, ${image.src}?w=800 800w, ${image.src}?w=1200 1200w`,
    sizes: image.sizes || "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 1200px",
    width: image.width || "1200",
    height: image.height || "630",
    quality: image.quality || "85",
    format: image.format || "webp",
  };
};

/**
 * Generate WebP image source
 */
export const generateWebPSource = (imagePath) => {
  const pathWithoutExt = imagePath.replace(/\.[^/.]+$/, "");
  return `${pathWithoutExt}.webp`;
};

/**
 * Generate responsive image markup
 */
export const generateResponsiveImageMarkup = (image) => {
  const optimized = getOptimizedImageMetadata(image);
  return {
    img: {
      src: optimized.src,
      alt: optimized.alt,
      title: optimized.title,
      width: optimized.width,
      height: optimized.height,
      loading: optimized.loading,
      srcSet: optimized.srcSet,
      sizes: optimized.sizes,
    },
    sources: [
      {
        srcSet: generateWebPSource(optimized.src),
        type: "image/webp",
      },
      {
        srcSet: optimized.src,
        type: optimized.format,
      },
    ],
  };
};

// ============================================================================
// SEO UTILITY FUNCTIONS
// ============================================================================

/**
 * Update meta tags dynamically
 */
export const updateMetaTagsAdvanced = (config) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogImageAlt,
    ogType = "website",
    twitterCard = "summary_large_image",
    locale = "en_IN",
  } = config;

  // Update title
  document.title = title;

  // Update or create meta tags
  const metaConfigs = {
    description: { name: "description", content: description },
    keywords: { name: "keywords", content: keywords },
    "og:title": { property: "og:title", content: title },
    "og:description": { property: "og:description", content: description },
    "og:image": { property: "og:image", content: ogImage },
    "og:image:alt": { property: "og:image:alt", content: ogImageAlt || title },
    "og:url": { property: "og:url", content: canonicalUrl },
    "og:type": { property: "og:type", content: ogType },
    "og:locale": { property: "og:locale", content: locale },
    "twitter:card": { name: "twitter:card", content: twitterCard },
    "twitter:title": { name: "twitter:title", content: title },
    "twitter:description": { name: "twitter:description", content: description },
    "twitter:image": { name: "twitter:image", content: ogImage },
  };

  Object.entries(metaConfigs).forEach(([key, config]) => {
    const selector = config.property
      ? `meta[property="${config.property}"]`
      : `meta[name="${config.name}"]`;

    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      if (config.property) {
        element.setAttribute("property", config.property);
      } else {
        element.setAttribute("name", config.name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute("content", config.content);
  });

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
};

/**
 * Add structured data to page
 */
export const addStructuredData = (schemaData) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
};

/**
 * Generate complete page schema markup
 */
export const generateCompletePageSchema = (pageConfig) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${businessData.url}#website`,
        url: businessData.url,
        name: businessData.name,
        alternateName: businessData.alternateNames,
        publisher: {
          "@id": `${businessData.url}#organization`,
        },
        inLanguage: "en-IN",
      },
      getWebPageSchema({
        url: pageConfig.canonicalUrl,
        title: pageConfig.title,
        description: pageConfig.description,
        image: pageConfig.ogImage,
        datePublished: pageConfig.datePublished,
        dateModified: pageConfig.dateModified,
      }),
      getOrganizationSchema(),
    ],
  };
};

export default {
  businessData,
  completePageConfigs,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getImageSchema,
  getWebPageSchema,
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getAggregateRatingSchema,
  getFAQPageSchema,
  getEventSchema,
  getPersonSchema,
  getProductSchema,
  getOptimizedImageMetadata,
  generateWebPSource,
  generateResponsiveImageMarkup,
  updateMetaTagsAdvanced,
  addStructuredData,
  generateCompletePageSchema,
};
