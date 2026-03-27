import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  // Load Google Analytics once and set up SEO meta tags
  useEffect(() => {
    // Set default meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Yuval Amir - Product Manager, Entrepreneur, and Technology Enthusiast. Explore my projects including BlueDrop Academy, IncrediArts, Tikva International, and more.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Yuval Amir - Product Manager, Entrepreneur, and Technology Enthusiast. Explore my projects including BlueDrop Academy, IncrediArts, Tikva International, and more.';
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Yuval Amir - Portfolio' },
      { property: 'og:description', content: 'Product Manager, Entrepreneur, and Technology Enthusiast. Explore my innovative projects and creative work.' },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/0264009a9_IMG_8815-Transparent.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Yuval Amir - Portfolio' },
      { name: 'twitter:description', content: 'Product Manager, Entrepreneur, and Technology Enthusiast. Explore my innovative projects and creative work.' },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/0264009a9_IMG_8815-Transparent.png' }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-ZXJQ3FQEGH";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZXJQ3FQEGH');
    `;
    document.head.appendChild(script2);

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-ZXJQ3FQEGH", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return <>{children}</>;
}
