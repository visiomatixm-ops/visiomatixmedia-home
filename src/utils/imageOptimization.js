/**
 * SEO Image Optimization Utilities
 * Handles image optimization, lazy loading, responsive images, and alt text
 * Last Updated: May 8, 2026
 */

import {
  getOptimizedImageMetadata,
  generateResponsiveImageMarkup,
  generateWebPSource,
} from "./advancedSeoConfig";

/**
 * Optimize image for SEO and performance
 */
export const optimizeImageForSEO = (imagePath, altText, context = {}) => {
  if (!imagePath) return null;

  const {
    width = 1200,
    height = 630,
    title = altText,
    quality = "85",
    format = "webp",
  } = context;

  return {
    src: imagePath,
    alt: altText || "Visiomatix Media Digital Services",
    title: title,
    width,
    height,
    loading: "lazy",
    decoding: "async",
    srcSet: `
      ${imagePath}?w=400 400w,
      ${imagePath}?w=800 800w,
      ${imagePath}?w=1200 1200w,
      ${imagePath}?w=1600 1600w
    `,
    sizes: `
      (max-width: 480px) 100vw,
      (max-width: 768px) 90vw,
      (max-width: 1024px) 80vw,
      (max-width: 1440px) 70vw,
      1200px
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      url: imagePath,
      name: altText,
      description: altText,
      width: width,
      height: height,
    },
  };
};

/**
 * Generate picture element with multiple sources
 */
export const generatePictureElement = (imagePath, altText, context = {}) => {
  const optimized = optimizeImageForSEO(imagePath, altText, context);

  return {
    sources: [
      {
        srcSet: generateWebPSource(imagePath),
        type: "image/webp",
        sizes: optimized.sizes,
      },
      {
        srcSet: imagePath,
        type: "image/jpeg",
        sizes: optimized.sizes,
      },
    ],
    img: {
      src: optimized.src,
      alt: optimized.alt,
      title: optimized.title,
      width: optimized.width,
      height: optimized.height,
      loading: optimized.loading,
      decoding: optimized.decoding,
    },
  };
};

/**
 * Get image SEO schema for page
 */
export const getImageSEOSchema = (imageUrl, altText, width = 1200, height = 630) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: imageUrl,
    name: altText || "Image from Visiomatix Media",
    description: altText,
    contentUrl: imageUrl,
    width: width,
    height: height,
    uploadDate: new Date().toISOString(),
    creator: {
      "@type": "Organization",
      name: "Visiomatix Media",
    },
  };
};

/**
 * Image alt text best practices guidelines
 */
export const imageAltTextGuidelines = {
  service_hero:
    "Professional {service} services - {detail} - Visiomatix Media",
  product_image: "High-quality {product} - Visiomatix Media",
  team_member: "{name} - {role} at Visiomatix Media",
  blog_feature: "{title} - Visiomatix Media Blog",
  icon: "{icon_name} icon - Visiomatix Media",
  logo: "Visiomatix Media Logo - Digital Marketing Agency",
  screenshot: "{software} screenshot - Visiomatix Media",
  before_after: "Before and After - {project} by Visiomatix Media",
  testimonial: "{client_name} - Client testimonial - Visiomatix Media",
  portfolio: "{project_name} - Portfolio - Visiomatix Media",
};

/**
 * Generate descriptive alt text
 */
export const generateDescriptiveAltText = (type, context = {}) => {
  const template = imageAltTextGuidelines[type];
  if (!template) return "Visiomatix Media Image";

  let alt = template;
  Object.entries(context).forEach(([key, value]) => {
    alt = alt.replace(`{${key}}`, value);
  });

  return alt;
};

/**
 * Compress image URL (for CDN optimization)
 */
export const getCompressedImageUrl = (imagePath, width, quality = "85") => {
  if (!imagePath) return "";
  // Using common CDN parameter patterns
  return `${imagePath}?w=${width}&q=${quality}&auto=webp`;
};

/**
 * Validate image SEO compliance
 */
export const validateImageSEO = (image) => {
  const issues = [];

  if (!image.alt || image.alt.length === 0) {
    issues.push("Missing alt text");
  } else if (image.alt.length > 125) {
    issues.push("Alt text too long (max 125 characters)");
  }

  if (!image.src || image.src.length === 0) {
    issues.push("Missing image source");
  }

  if (image.alt && image.alt.toLowerCase().includes("image")) {
    issues.push("Alt text contains 'image' - be more descriptive");
  }

  if (image.src && !image.src.match(/\.(webp|jpg|jpeg|png|gif|svg)$/i)) {
    issues.push("Unsupported image format");
  }

  return {
    isCompliant: issues.length === 0,
    issues,
  };
};

/**
 * Get image loading strategy
 */
export const getImageLoadingStrategy = (position = "above-fold") => {
  return {
    "above-fold": {
      loading: "eager",
      decoding: "sync",
      fetchPriority: "high",
    },
    "below-fold": {
      loading: "lazy",
      decoding: "async",
      fetchPriority: "low",
    },
    "background": {
      loading: "lazy",
      decoding: "async",
      fetchPriority: "low",
      backgroundImage: true,
    },
    "thumbnail": {
      loading: "lazy",
      decoding: "async",
      fetchPriority: "low",
    },
  }[position];
};

/**
 * Generate responsive image variants
 */
export const generateResponsiveVariants = (basePath) => {
  return {
    mobile: `${basePath}?w=480`,
    tablet: `${basePath}?w=768`,
    desktop: `${basePath}?w=1200`,
    hd: `${basePath}?w=1600`,
    mobile_webp: `${basePath.replace(/\.[^/.]+$/, ".webp")}?w=480`,
    tablet_webp: `${basePath.replace(/\.[^/.]+$/, ".webp")}?w=768`,
    desktop_webp: `${basePath.replace(/\.[^/.]+$/, ".webp")}?w=1200`,
    hd_webp: `${basePath.replace(/\.[^/.]+$/, ".webp")}?w=1600`,
  };
};

/**
 * Check image file size
 */
export const getImageFileSize = (file) => {
  if (!file) return 0;
  return (file.size / (1024 * 1024)).toFixed(2); // in MB
};

/**
 * Validate image dimensions for SEO
 */
export const validateImageDimensions = (width, height) => {
  const aspectRatios = {
    "16:9": { min: 1.7, max: 1.9 },
    "4:3": { min: 1.2, max: 1.4 },
    "1:1": { min: 0.9, max: 1.1 },
    "3:2": { min: 1.4, max: 1.6 },
  };

  const ratio = width / height;

  return {
    isValid: width >= 1200 && height >= 630,
    ratio,
    recommendedRatios: Object.keys(aspectRatios).filter((key) => {
      const range = aspectRatios[key];
      return ratio >= range.min && ratio <= range.max;
    }),
    recommendation:
      width < 1200 || height < 630
        ? "Image dimensions are smaller than recommended (1200x630). Consider using larger images for better quality."
        : "Image dimensions are optimal",
  };
};

export default {
  optimizeImageForSEO,
  generatePictureElement,
  getImageSEOSchema,
  generateDescriptiveAltText,
  getCompressedImageUrl,
  validateImageSEO,
  getImageLoadingStrategy,
  generateResponsiveVariants,
  getImageFileSize,
  validateImageDimensions,
};
