import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createPageUrl } from '../utils';
import { useEffect } from "react";


export default function Projects() {
  useEffect(() => {
    document.title = "Yuval Amir – Projects";
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-purple-950 text-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-purple-300 mb-8"
        >
          Projects
        </motion.h1>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-12"
        >
          {/* BlueDrop Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-purple-900/20 rounded-lg border border-purple-800/50 overflow-hidden hover:border-purple-600 transition-all group"
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/3b72031b6_image.png"
                alt="BlueDrop Academy - Educational platform for Israeli children with video lessons and AI-powered learning tools"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">BlueDrop Academy</h2>
              <p className="text-purple-100 leading-relaxed">
                BlueDrop Academy is a project I built together with my son, a well-known Israeli YouTuber. He creates 
                all the educational content, while I am responsible for developing the website, shaping the learning 
                experience, and building the AI-based features behind it. Working on this project together has become 
                something we both truly enjoy.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                BlueDrop Academy is designed specifically for school-age children in Israel, offering fun, accessible, 
                and engaging lessons in Hebrew. The goal is to help kids understand and connect with school subjects — 
                starting with history — through a style that feels natural, visual, and enjoyable. My son brings his 
                talent for storytelling, humor, and kid-friendly explanation, while I focus on the technological side: 
                designing the platform, creating interactive learning tools, and integrating AI to support a smoother 
                and more personalized learning experience.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                The site includes a growing library of video lessons, helpful learning tools, and Bluepedia — an 
                interactive, child-friendly Hebrew encyclopedia we created to encourage curiosity and independent exploration.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                Through BlueDrop Academy, we combine education, creativity, and technology — and most importantly, we 
                get to work side by side as father and son, building something meaningful that helps Israeli children 
                learn in a way that is modern, engaging, and fun.
              </p>
              <a
                href="https://www.bluedropacademy.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* IncrediArts Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-purple-900/20 rounded-lg border border-purple-800/50 overflow-hidden hover:border-purple-600 transition-all group"
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/26a13a080_image.png"
                alt="IncrediArts - AI-powered digital art creation platform turning ideas into custom illustrations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">IncrediArts</h2>
              <p className="text-purple-100 leading-relaxed">
                IncrediArts is a personal project I created in 2022, inspired by the emergence of early AI 
                image-generation tools such as Midjourney. I built the platform as a way to make digital art 
                accessible to anyone: users can send me their idea or concept — completely free — and I transform 
                it into a unique illustration using advanced AI-based graphic tools.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                Beyond generating the artwork itself, I also manage the entire process end-to-end: creating the 
                visuals, preparing high-resolution files, and offering printed versions as wall art, posters, or 
                on products like mugs, tote bags, and more. I also developed a dedicated Kids Art service, which 
                allows children to express their imagination while I turn their ideas or drawings into polished, 
                stylized illustrations.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                With IncrediArts, my goal has been to blend creativity with emerging technology, and to demonstrate 
                how generative AI can empower anyone — regardless of artistic skill — to bring their ideas to life. 
                This project reflects my passion for visual storytelling, design, and exploring the new creative 
                possibilities opened by AI.
              </p>
              <a
                href="https://www.incrediarts.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* Tikva International Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-purple-900/20 rounded-lg border border-purple-800/50 overflow-hidden hover:border-purple-600 transition-all group"
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/8035e6171_image.png"
                alt="Tikva International - Information resource combating hate propaganda and providing factual information about the Israeli-Palestinian conflict"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">Tikva International</h2>
              <p className="text-purple-100 leading-relaxed">
                Tikva International is an initiative I volunteered to build and maintain after the events of October 7th. 
                I created the website, collected and curated content, and shaped the platform's structure — all on a 
                voluntary basis.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                Tikva International's mission is to combat hate propaganda directed against Israelis and Jews, to present 
                factual information, and to foster a deeper, more nuanced understanding of the Israeli–Palestinian conflict.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                The site offers a clear, structured informational resource: a detailed overview of the events of October 7th, 
                a searchable video and article database, blog posts analyzing media narratives and extremist propaganda, and 
                a unique "mind-map" tool that helps visitors explore complex historical, political, and social layers in an 
                intuitive, interactive way.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                By creating Tikva International, I aimed to contribute — through technology and information — to combating 
                misinformation and supporting truth-based discourse. I see it as a personal commitment to help others 
                understand the real events and contexts, and to offer a reliable resource during a time of widespread distortion.
              </p>
              <a
                href="https://www.tikvainternational.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>

          {/* IncrediLand Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-purple-900/20 rounded-lg border border-purple-800/50 overflow-hidden hover:border-purple-600 transition-all group"
          >
            {/* Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/25d986361_image.png"
                alt="IncrediLand - Social virtual world game featuring genetic creature breeding and collection mechanics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">IncrediLand</h2>
              <p className="text-purple-100 leading-relaxed">
                IncrediLand was a social and virtual world game I created in 2010, during the early era of Facebook games. 
                It combined life-simulation mechanics with a rich, colorful visual style, centered on collecting, raising, 
                and breeding unique virtual creatures inspired by real-world genetics. Players could hatch eggs, care for 
                their creatures, train them, trade with friends, and breed new subspecies based on colors, markings, and 
                genetic traits—making social interaction a core part of progression.
              </p>
              <p className="text-purple-100 leading-relaxed mt-4">
                Beyond the innovative breeding system, the game featured virtual trading, daily activities, an expanding 
                world, and a robust collection interface. During its year of activity, IncrediLand reached around 60,000 
                monthly active users and received positive reviews highlighting its originality, depth, and production quality.
              </p>
              <Link
                to={createPageUrl('IncrediLand')}
                className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
              >
                View Project
              </Link>
            </div>
          </motion.div>

          {/* Personal & Family Web Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-purple-900/20 rounded-lg border border-purple-800/50 overflow-hidden hover:border-purple-600 transition-all group"
          >
            {/* Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold text-purple-300 mb-4">Personal & Family Web Projects</h2>
              <p className="text-purple-100 leading-relaxed mb-8">
                Alongside my larger initiatives, I also build websites for friends and family, creating custom solutions 
                tailored to their needs. These sites allow me to experiment with new technologies, refine my UI/UX approach, 
                and help the people close to me establish a strong, modern online presence.
              </p>

              {/* Two websites grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Havi Liran Website */}
                <a
                  href="https://www.haviliran.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/site"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-3">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/721480f13_image.png"
                      alt="Havi Liran Website - Professional services website showcasing expertise and client approach"
                      className="w-full h-full object-cover group-hover/site:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 group-hover/site:text-purple-200 transition-colors">
                    Havi Liran — Professional Services Website
                  </h3>
                  <p className="text-purple-100/80 text-sm mt-1">
                    A custom website I created for my wife's business, designed to highlight her expertise, services, and personal approach. I developed the site end-to-end, focusing on clarity, visual appeal, and user experience to provide clients with a warm and accessible introduction to her work.
                  </p>
                </a>

                {/* Adi Bamaim Website */}
                <a
                  href="https://www.adibamaim.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/site"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-3">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/c3f7d6f01_image.png"
                      alt="Adibamaim Website - Business website showcasing services and brand identity"
                      className="w-full h-full object-cover group-hover/site:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 group-hover/site:text-purple-200 transition-colors">
                    Adibamaim — Business Website
                  </h3>
                  <p className="text-purple-100/80 text-sm mt-1">
                    A professional website I built for a friend's business, showcasing her services, brand identity, and client offerings. I handled the full design and development, creating a clean, modern, and easy-to-navigate online presence that supports her work and helps attract new clients.
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}