/**
 * Custom React Hook for SEO Management
 * Provides easy SEO setup for any page component
 * Last Updated: May 8, 2026
 */

import { useEffect } from "react";
import {
  updateMetaTagsAdvanced,
  addStructuredData,
  generateCompletePageSchema,
  getBreadcrumbSchema,
  completePageConfigs,
} from "./advancedSeoConfig";

/**
 * usePageSEO - Custom hook for managing page SEO
 * @param {Object} config - Page configuration object
 * @param {string} config.pageKey - Key from completePageConfigs
 * @param {string} config.title - Page title
 * @param {string} config.description - Page description
 * @param {string} config.keywords - Page keywords
 * @param {string} config.canonicalUrl - Canonical URL
 * @param {string} config.ogImage - OpenGraph image
 * @param {string} config.ogImageAlt - OpenGraph image alt text
 * @param {Array} config.breadcrumbs - Breadcrumb items
 * @param {Object} config.schema - Custom schema data
 * @param {boolean} config.useDefaultSchema - Use default schema from config
 */
export const usePageSEO = (config = {}) => {
  useEffect(() => {
    if (!config) return;

    // Get page config from key or use provided config
    let pageConfig = config.pageKey
      ? completePageConfigs[config.pageKey]
      : config;

    // Merge with any overrides
    const finalConfig = {
      ...pageConfig,
      ...Object.keys(config).reduce((acc, key) => {
        if (key !== "pageKey" && key !== "schema" && config[key]) {
          acc[key] = config[key];
        }
        return acc;
      }, {}),
    };

    // Update meta tags
    updateMetaTagsAdvanced({
      title: finalConfig.title,
      description: finalConfig.description,
      keywords: finalConfig.keywords,
      canonicalUrl: finalConfig.canonicalUrl,
      ogImage: finalConfig.ogImage,
      ogImageAlt: finalConfig.ogImageAlt,
      ogType: finalConfig.ogType,
      twitterCard: finalConfig.twitterCard,
      locale: finalConfig.locale,
    });

    // Add schema markup
    if (config.useDefaultSchema !== false) {
      const schemaData = config.schema || generateCompletePageSchema(finalConfig);
      addStructuredData(schemaData);
    }

    // Add breadcrumbs schema if provided
    if (finalConfig.breadcrumbs && finalConfig.breadcrumbs.length > 0) {
      addStructuredData(getBreadcrumbSchema(finalConfig.breadcrumbs));
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [config]);
};

/**
 * useMultipleSchemas - Add multiple schema markups to a page
 * @param {Array} schemas - Array of schema objects
 */
export const useMultipleSchemas = (schemas = []) => {
  useEffect(() => {
    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `schema-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const element = document.getElementById(`schema-${index}`);
        if (element) element.remove();
      };
    });
  }, [schemas]);
};

/**
 * useDynamicTitle - Dynamically update page title
 * @param {string} title - Page title
 */
export const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = title;
    
    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    // Update Twitter title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute("content", title);
  }, [title]);
};

/**
 * useDynamicDescription - Dynamically update meta description
 * @param {string} description - Page description
 */
export const useDynamicDescription = (description) => {
  useEffect(() => {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update OG description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    // Update Twitter description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute("content", description);
  }, [description]);
};

/**
 * useCanonicalUrl - Set canonical URL for page
 * @param {string} url - Canonical URL
 */
export const useCanonicalUrl = (url) => {
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Also update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", url);
  }, [url]);
};

/**
 * useOGImage - Set OpenGraph image
 * @param {string} imageUrl - Image URL
 * @param {string} imageAlt - Image alt text
 * @param {number} width - Image width
 * @param {number} height - Image height
 */
export const useOGImage = (imageUrl, imageAlt = "", width = 1200, height = 630) => {
  useEffect(() => {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", imageUrl);

    // OG Image Alt
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement("meta");
      ogImageAlt.setAttribute("property", "og:image:alt");
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute("content", imageAlt);

    // OG Image Width
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement("meta");
      ogImageWidth.setAttribute("property", "og:image:width");
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute("content", width.toString());

    // OG Image Height
    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement("meta");
      ogImageHeight.setAttribute("property", "og:image:height");
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute("content", height.toString());

    // Twitter Image
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute("content", imageUrl);
  }, [imageUrl, imageAlt, width, height]);
};

/**
 * useKeywords - Set meta keywords
 * @param {string} keywords - Keywords (comma-separated)
 */
export const useKeywords = (keywords) => {
  useEffect(() => {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);
  }, [keywords]);
};

/**
 * useRobotsMeta - Control robots meta tag
 * @param {string} robots - Robots directive (index, follow, noindex, nofollow)
 */
export const useRobotsMeta = (robots = "index, follow") => {
  useEffect(() => {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", robots);
  }, [robots]);
};

/**
 * useStructuredData - Add JSON-LD structured data
 * @param {Object} schema - Schema object
 * @param {string} id - Unique ID for script tag
 */
export const useStructuredData = (schema, id = "page-schema") => {
  useEffect(() => {
    if (!schema) return;

    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [schema, id]);
};

/**
 * useAnalyticsTracking - Setup Google Analytics tracking
 * @param {string} gaId - Google Analytics ID
 */
export const useAnalyticsTracking = (gaId) => {
  useEffect(() => {
    if (!gaId) return;

    // Check if script already exists
    if (window.gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);
  }, [gaId]);
};

/**
 * useSitemap - Dynamically request sitemap update
 * Helps Google discover new pages faster
 */
export const useSitemap = () => {
  return {
    notifyGoogleSitemap: (sitemapUrl = "https://visiomatix.in/sitemap.xml") => {
      if (typeof fetch !== "undefined") {
        fetch(
          `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
        ).catch(() => {
          // Silently fail - this is just a notification
        });
      }
    },
    notifyBingSitemap: (sitemapUrl = "https://visiomatix.in/sitemap.xml") => {
      if (typeof fetch !== "undefined") {
        fetch(
          `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
        ).catch(() => {
          // Silently fail - this is just a notification
        });
      }
    },
  };
};

/**
 * usePageViews - Track page views for analytics
 */
export const usePageViews = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_ID", {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }, []);
};

export default {
  usePageSEO,
  useMultipleSchemas,
  useDynamicTitle,
  useDynamicDescription,
  useCanonicalUrl,
  useOGImage,
  useKeywords,
  useRobotsMeta,
  useStructuredData,
  useAnalyticsTracking,
  useSitemap,
  usePageViews,
};
