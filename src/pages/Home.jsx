import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Youtube, Linkedin, Instagram, Facebook, Camera, Briefcase, Fish } from 'lucide-react';
import { createPageUrl } from '../utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
  document.title = "Yuval Amir – Home";
}, []);

  const [hoveredDolphin, setHoveredDolphin] = React.useState(false);

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvalamir/', label: 'LinkedIn', color: 'hover:text-blue-400', borderColor: 'hover:border-blue-400', radius: 280, angle: 0 },
    { icon: Facebook, href: 'https://www.facebook.com/yuval.amir.family/', label: 'Facebook', color: 'hover:text-blue-500', borderColor: 'hover:border-blue-500', radius: 280, angle: 45 },
    { icon: Instagram, href: 'https://www.instagram.com/amiryuval', label: 'Instagram', color: 'hover:text-pink-500', borderColor: 'hover:border-pink-500', radius: 280, angle: 90 },
    { icon: Youtube, href: 'https://www.youtube.com/playlist?list=PLTO0GYLUZ2hk2yumhgBjgNalL0uBMEvBm', label: 'YouTube', color: 'hover:text-red-500', borderColor: 'hover:border-red-500', radius: 280, angle: 135 },
    { icon: Camera, href: 'https://yuvalamir.smugmug.com/Traveling', label: 'Photos', color: 'hover:text-[#6eb800]', borderColor: 'hover:border-[#6eb800]', radius: 280, angle: 180 },
    { icon: Briefcase, href: createPageUrl('Projects'), label: 'Projects', color: 'hover:text-purple-400', borderColor: 'hover:border-purple-400', radius: 280, angle: 225 },
    { 
      icon: Fish,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/f24d96049_Untitled-2.jpg',
      hoverImage: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/8401093ff_Untitled-3.jpg',
      href: createPageUrl('KBMML'), 
      label: 'Dolphins Research',
      color: 'hover:text-purple-400',
      borderColor: 'hover:border-purple-400',
      radius: 280,
      angle: 270
    },
    { icon: Mail, href: 'mailto:yuvalamir@gmail.com', label: 'Email', color: 'hover:text-white', borderColor: 'hover:border-white', radius: 280, angle: 315 },
  ];

  return (
    <div className="min-h-screen bg-[#242727] flex flex-col items-center justify-between py-8 px-4">
      
      {/* JSON-LD Schema for Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yuval Amir",
          "jobTitle": "Product Manager & Entrepreneur",
          "description": "Product Manager, Entrepreneur, and Technology Enthusiast with expertise in web development, AI, and educational technology",
          "url": window.location.origin,
          "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/0264009a9_IMG_8815-Transparent.png",
          "sameAs": [
            "https://www.linkedin.com/in/yuvalamir/",
            "https://www.facebook.com/yuval.amir.family/",
            "https://www.instagram.com/amiryuval",
            "https://www.youtube.com/playlist?list=PLTO0GYLUZ2hk2yumhgBjgNalL0uBMEvBm",
            "https://yuvalamir.smugmug.com/Traveling"
          ]
        })}
      </script>
      
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Philosopher:ital@0;1&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        `}
      </style>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            textShadow: [
              '0 0 20px rgba(0, 206, 209, 0.5), 0 0 40px rgba(0, 206, 209, 0.3)',
              '0 0 30px rgba(0, 206, 209, 0.8), 0 0 60px rgba(0, 206, 209, 0.5)',
              '0 0 20px rgba(0, 206, 209, 0.5), 0 0 40px rgba(0, 206, 209, 0.3)',
            ]
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            textShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="text-4xl md:text-6xl lg:text-7xl text-cyan-300 mb-16 md:mb-24 text-center tracking-wider"
          style={{ 
            fontFamily: "'Luckiest Guy', cursive",
          }}
        >
          Yuval's world
        </motion.h1>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.05,
            filter: 'drop-shadow(0 0 30px rgba(0, 206, 209, 0.6))',
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-16 md:mb-24 cursor-pointer"
        >
          {/* Central Profile Image with border */}
          <div className="relative z-10 mx-auto w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50" style={{ zIndex: 1 }} />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/ba58565f2_Yuval2025.png"
              alt="Yuval Amir - Product Manager, Entrepreneur, and Technology Enthusiast"
              className="w-full h-full object-cover rounded-full"
              style={{ zIndex: 2, position: 'relative' }}
            />
          </div>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <TooltipProvider>
            {socialLinks.map((social, index) => (
              <Tooltip key={social.label}>
                <TooltipTrigger asChild>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => social.hoverImage && setHoveredDolphin(true)}
                    onMouseLeave={() => social.hoverImage && setHoveredDolphin(false)}
                    className={`flex items-center justify-center w-14 h-14 bg-[#242727] rounded-full border-2 border-cyan-400 text-cyan-400 ${social.color || ''} ${social.borderColor || ''} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.image ? (
                      <img 
                        src={social.hoverImage && hoveredDolphin ? social.hoverImage : social.image} 
                        alt={social.label} 
                        className="h-7 w-auto" 
                      />
                    ) : (
                      <social.icon className="w-7 h-7" strokeWidth={1.5} />
                    )}
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </motion.div>
      </div>
    </div>
  );
}