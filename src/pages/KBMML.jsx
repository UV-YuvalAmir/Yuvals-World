import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createPageUrl } from '../utils';
import { useEffect } from "react";

export default function KBMML() {

 useEffect(() => {
    document.title = "KBMML Spring Internship, Hawaii 1993 – Yuval Amir";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-cyan-950 text-cyan-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4"
        >
          KBMML Spring Internship, Hawaii 1993
        </motion.h1>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p>
            In spring 1993 I was an intern in Kewalo Basin Marine Mammal Laboratory (KBMML), 
            Department of Psychology at the University of Hawaii at Manoa.
          </p>

          <p>
            For over thirty years, KBMML pioneered studies of the sensory, cognitive, and 
            communicative capacities of its resident dolphins. These studies revealed how dolphins 
            perceive their world through hearing, vision, and echolocation, the depth, and breadth 
            of their intellectual potential, and the mechanisms and processes that contribute to 
            their social life and social world.
          </p>

          <p>
            Between 1970 and 2004, KBMML was home to some of the world's most educated dolphins. 
            Groundbreaking discoveries with these dolphins include abilities for language comprehension, 
            vocal and behavioral imitation, "imaging" of objects through echolocation, interpretation 
            of television displays and scenes, understanding of human pointing and gaze cues, and 
            evidence of self-awareness.
          </p>

          <p className="italic text-cyan-200">
            This internship was an amazing experience for me in many aspects, Hawaii, the dolphins 
            and the amazing people I met.
          </p>

          <div className="border-t border-cyan-800 my-8 pt-8">
            <p>
              The pictures and videos below are an attempt to capture some of the lab magical moments, 
              trying to give a taste of the experience. The interaction with the dolphins, the people, 
              the ocean, the lab…
            </p>

            <p className="mt-6 italic text-cyan-200">
              For the people who were there, I hope the movie will bring back some great memories… 
              For those who haven't been there, I hope this can give you a clue of how much fun we had :-)
            </p>
          </div>

          {/* Media content */}
          <div className="mt-12 space-y-6">
            <motion.a
              href="https://yuvalamir.smugmug.com/Traveling/USA-Hawaii/Hawaii-KBMML-Dolphin-Research"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="block rounded-lg border border-cyan-800/50 hover:border-cyan-600 transition-all overflow-hidden group"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/190a9bedd_image.png"
                  alt="Dolphins at KBMML"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-2">📸 Photo Album</h3>
                  <p className="text-cyan-100">View the complete photo collection from KBMML</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.youtube.com/playlist?list=PL5497AE8DE1ED761B"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="block rounded-lg border border-cyan-800/50 hover:border-cyan-600 transition-all overflow-hidden group"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/3f5eaad38_image.png"
                  alt="Swimming with dolphins at KBMML"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-2">🎥 Video Playlist</h3>
                  <p className="text-cyan-100">Watch videos from the KBMML experience</p>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}