/**
 * Example SEO Component Implementation
 * Shows how to implement advanced SEO on any page
 * Copy this pattern to your pages
 */

import React from 'react';
import { usePageSEO, useStructuredData, useMultipleSchemas } from '../hooks/useSEO';
import { 
  completePageConfigs,
  getServiceSchema,
  getImageSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '../utils/advancedSeoConfig';
import { optimizeImageForSEO, generateDescriptiveAltText } from '../utils/imageOptimization';

/**
 * PATTERN 1: Simple Page with usePageSEO Hook
 * Best for standard pages (home, about, contact, etc.)
 */
export const SimplePageExample = () => {
  // Use page key from completePageConfigs
  usePageSEO({ pageKey: 'about' });

  return (
    <div>
      <h1>About Us</h1>
      <p>Content here...</p>
    </div>
  );
};

/**
 * PATTERN 2: Service Page with Custom Schema
 * Best for service pages with detailed schema
 */
export const ServicePageExample = () => {
  // Define service details
  const serviceData = {
    name: 'Professional SEO Services',
    description: 'Improve your website rankings on Google with our professional SEO services. Keyword research, on-page optimization, link building, and more.',
    url: 'https://visiomatix.in/services/seo',
    image: '/assets/services/seo-banner.jpg',
  };

  // Generate schemas
  const serviceSchema = getServiceSchema(serviceData);
  const imageSchema = getImageSchema({
    url: serviceData.image,
    alt: 'Professional SEO services - Visiomatix Media',
    description: 'Website optimization and Google ranking improvement services',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'SEO Services', path: '/services/seo' },
  ]);

  // Setup page SEO
  usePageSEO({
    pageKey: 'seo-content-writing', // Use existing config
  });

  // Add all schemas
  useMultipleSchemas([
    serviceSchema,
    imageSchema,
    breadcrumbSchema,
    getOrganizationSchema(),
  ]);

  // Optimize image
  const heroImage = optimizeImageForSEO(
    serviceData.image,
    'Professional SEO services - keyword research, on-page optimization, link building',
    { width: 1200, height: 630 }
  );

  return (
    <div>
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        title={heroImage.title}
        width={heroImage.width}
        height={heroImage.height}
        loading="lazy"
        srcSet={heroImage.srcSet}
        sizes={heroImage.sizes}
      />
      <h1>Professional SEO Services</h1>
      <p>{serviceData.description}</p>

      <section>
        <h2>What We Offer</h2>
        <div>
          <h3>Keyword Research</h3>
          <p>Find profitable keywords for your business</p>
          <img
            src="/assets/seo/keyword-research.jpg"
            alt={generateDescriptiveAltText('service_hero', {
              service: 'Keyword Research',
              detail: 'competitive analysis and search volume data',
            })}
            loading="lazy"
          />
        </div>

        <div>
          <h3>On-Page Optimization</h3>
          <p>Optimize your website for search engines</p>
          <img
            src="/assets/seo/on-page-seo.jpg"
            alt={generateDescriptiveAltText('service_hero', {
              service: 'On-Page SEO',
              detail: 'title tags, meta descriptions, content optimization',
            })}
            loading="lazy"
          />
        </div>

        <div>
          <h3>Link Building</h3>
          <p>Build high-quality backlinks</p>
          <img
            src="/assets/seo/link-building.jpg"
            alt={generateDescriptiveAltText('service_hero', {
              service: 'Link Building',
              detail: 'quality backlinks from authoritative websites',
            })}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

/**
 * PATTERN 3: Blog Post with Full Schema
 * Best for blog articles
 */
export const BlogPostExample = ({ post }) => {
  // Optimize featured image
  const featuredImage = optimizeImageForSEO(
    post.featuredImage,
    post.title + ' - Visiomatix Media Blog Article',
    { width: 1200, height: 630 }
  );

  // Setup page SEO
  usePageSEO({
    title: post.title + ' - Visiomatix Media Blog',
    description: post.excerpt,
    keywords: post.keywords,
    canonicalUrl: `https://visiomatix.in/blog/${post.slug}`,
    ogImage: post.featuredImage,
    ogImageAlt: post.title,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ],
  });

  // Add blog schema
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.lastModified || post.publishDate,
    author: {
      '@type': 'Organization',
      name: 'Visiomatix Media',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Visiomatix Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://visiomatix.in/logo.png',
      },
    },
  });

  return (
    <article>
      <img
        src={featuredImage.src}
        alt={featuredImage.alt}
        title={featuredImage.title}
        width={featuredImage.width}
        height={featuredImage.height}
        loading="lazy"
      />
      <h1>{post.title}</h1>
      <div className="meta">
        <span>Published: {new Date(post.publishDate).toLocaleDateString()}</span>
        <span>Reading time: {post.readingTime} min</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

/**
 * PATTERN 4: Product/Case Study Page
 * Best for showcasing work and results
 */
export const CaseStudyPageExample = ({ caseStudy }) => {
  // Optimize images
  const beforeImage = optimizeImageForSEO(
    caseStudy.beforeImage,
    `Before: ${caseStudy.projectName} - Case study by Visiomatix Media`,
    { width: 800, height: 600 }
  );

  const afterImage = optimizeImageForSEO(
    caseStudy.afterImage,
    `After: ${caseStudy.projectName} - Results achieved by Visiomatix Media`,
    { width: 800, height: 600 }
  );

  usePageSEO({
    title: `${caseStudy.projectName} - Case Study | Visiomatix Media`,
    description: `See how Visiomatix Media helped ${caseStudy.clientName} achieve ${caseStudy.results}. Read our case study.`,
    keywords: `case study, ${caseStudy.service}, results, ${caseStudy.clientName}`,
    canonicalUrl: `https://visiomatix.in/case-studies/${caseStudy.slug}`,
    ogImage: caseStudy.heroImage,
  });

  // Schema with rating
  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: caseStudy.projectName,
    description: caseStudy.description,
    image: [
      beforeImage.src,
      afterImage.src,
      caseStudy.heroImage,
    ],
    author: {
      '@type': 'Organization',
      name: 'Visiomatix Media',
    },
    datePublished: caseStudy.publishDate,
  });

  return (
    <div>
      <h1>{caseStudy.projectName}</h1>
      <p>{caseStudy.description}</p>

      <section>
        <h2>Client: {caseStudy.clientName}</h2>
        <p>{caseStudy.clientInfo}</p>
      </section>

      <section>
        <h2>Challenge</h2>
        <p>{caseStudy.challenge}</p>
      </section>

      <section>
        <h2>Solution</h2>
        <p>{caseStudy.solution}</p>
      </section>

      <section>
        <h2>Results</h2>
        <div className="comparison">
          <div className="before">
            <img
              src={beforeImage.src}
              alt={beforeImage.alt}
              loading="lazy"
            />
            <h3>Before</h3>
            <p>{caseStudy.beforeMetrics}</p>
          </div>
          <div className="arrow">→</div>
          <div className="after">
            <img
              src={afterImage.src}
              alt={afterImage.alt}
              loading="lazy"
            />
            <h3>After</h3>
            <p>{caseStudy.afterMetrics}</p>
          </div>
        </div>
        <p><strong>Improvement: {caseStudy.results}</strong></p>
      </section>
    </div>
  );
};

/**
 * PATTERN 5: Team Member Page
 * Best for showcasing team and expertise
 */
export const TeamMemberExample = ({ member }) => {
  const profileImage = optimizeImageForSEO(
    member.image,
    `${member.name} - ${member.jobTitle} at Visiomatix Media`,
    { width: 400, height: 400 }
  );

  usePageSEO({
    title: `${member.name} - ${member.jobTitle} | Visiomatix Media`,
    description: `Meet ${member.name}, ${member.jobTitle} at Visiomatix Media. ${member.bio}`,
    keywords: `${member.name}, ${member.jobTitle}, ${member.expertise}`,
    canonicalUrl: `https://visiomatix.in/team/${member.slug}`,
    ogImage: member.image,
  });

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.jobTitle,
    image: profileImage.src,
    url: `https://visiomatix.in/team/${member.slug}`,
    affiliation: {
      '@type': 'Organization',
      name: 'Visiomatix Media',
    },
    sameAs: member.socialLinks || [],
  });

  return (
    <div>
      <img
        src={profileImage.src}
        alt={profileImage.alt}
        width={profileImage.width}
        height={profileImage.height}
      />
      <h1>{member.name}</h1>
      <p className="title">{member.jobTitle}</p>
      <p>{member.bio}</p>
      <section>
        <h2>Expertise</h2>
        <ul>
          {member.expertise.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

/**
 * PATTERN 6: FAQ Page
 * Best for common questions
 */
export const FAQPageExample = ({ faqs }) => {
  usePageSEO({
    title: 'Frequently Asked Questions - Visiomatix Media',
    description: 'Find answers to common questions about our digital marketing and web development services.',
    canonicalUrl: 'https://visiomatix.in/faq',
  });

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default {
  SimplePageExample,
  ServicePageExample,
  BlogPostExample,
  CaseStudyPageExample,
  TeamMemberExample,
  FAQPageExample,
};
