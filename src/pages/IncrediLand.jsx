import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createPageUrl } from '../utils';
import { useEffect } from "react";


export default function IncrediLand() {

    useEffect(() => {
    document.title = "IncrediLand";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-purple-950 text-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link to={createPageUrl('Projects')} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-purple-300 mb-4"
        >
          IncrediLand
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-purple-200 mb-8"
        >
          A Social Virtual World Game (2010)
        </motion.p>

        {/* Brochure Preview */}
        <motion.a
          href="https://docs.google.com/viewer?url=https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/0c413cf98_Incrediland_Brochure.pdf&embedded=true"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="block mb-12 cursor-pointer group"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/7dc31288c_Incrediland_Brochure-page-001.jpg"
              alt="IncrediLand Game Brochure Page 1 - Social virtual world game with genetic breeding mechanics"
              className="w-full rounded-lg border border-purple-800/50 group-hover:border-purple-600 transition-colors"
            />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/de30e0f78_Incrediland_Brochure-page-002.jpg"
              alt="IncrediLand Game Brochure Page 2 - Features and gameplay information"
              className="w-full rounded-lg border border-purple-800/50 group-hover:border-purple-600 transition-colors"
            />
          </div>
          <p className="text-center text-purple-400 mt-4 group-hover:text-purple-300 transition-colors">
            📄 Click to view full brochure
          </p>
        </motion.a>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-800/50">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">The Incredimals</h2>
            <p className="mb-4">
              Unlike typical Facebook applications, IncrediLand is both a unique social game and virtual world in one.
            </p>
            <p className="mb-4">
              In terms of gameplay, IncrediLand's main premise centers around collecting species of virtual pets, which 
              includes trading, displaying, and sharing pets with friends. These 'collectible pets', however, are not 
              simple cards or images, but rather, living virtual animals which the player grows from eggs to adults. 
              From feeding to training to playing tricks, the interaction with one's pets is where the 'life-simulation' 
              factor comes in.
            </p>
            <p>
              Which brings us to the breeding - IncrediLand's truly innovative nod to biology, the magical workings of 
              Mother Nature, and other neat stuff: In order to enrich and complete their collections, users can breed 
              their pets with those in their friends' collections, based on color, markings, and different genetic 
              characteristics. Need more? It's all based inside a beautifully rich virtual environment, with graphics 
              the likes of which you simply won't find in most Facebook games.
            </p>
          </div>

          <div className="border-t border-purple-800 my-8 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Key Features</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">🧬</span>
                <div>
                  <strong className="text-purple-200">Genetic Breeding System:</strong> Players could breed creatures 
                  with unique color patterns and traits, creating rare and valuable subspecies through strategic pairing.
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">🥚</span>
                <div>
                  <strong className="text-purple-200">Creature Collection:</strong> Hatch, raise, and care for a diverse 
                  collection of virtual creatures, each with its own personality and needs.
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">👥</span>
                <div>
                  <strong className="text-purple-200">Social Trading:</strong> A robust trading system allowed players 
                  to exchange creatures with friends, creating a vibrant in-game economy.
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">🎮</span>
                <div>
                  <strong className="text-purple-200">Daily Activities:</strong> Regular events, challenges, and 
                  activities kept players engaged and rewarded consistent participation.
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">🌍</span>
                <div>
                  <strong className="text-purple-200">Expanding World:</strong> New areas, creatures, and features 
                  were regularly added to keep the game fresh and exciting.
                </div>
              </li>
            </ul>
          </div>

          {/* Game Videos */}
          <div className="border-t border-purple-800 my-8 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Game Videos</h2>
            <a
              href="https://www.youtube.com/@IncrediLand/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative rounded-lg overflow-hidden border border-purple-800/50 hover:border-purple-600 transition-all">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693309da58d24500edfd2629/4d8064683_image.png"
                  alt="IncrediLand YouTube Channel - Game trailers, tutorials, and gameplay videos"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-2">🎥 Watch Gameplay Videos</h3>
                  <p className="text-purple-100">View game trailers, tutorials, and gameplay clips on YouTube</p>
                </div>
              </div>
            </a>
          </div>

          <div className="border-t border-purple-800 my-8 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Reviews</h2>
            
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-800/30">
                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  Incrediland Encourages Friends to Breed New Animals, Using Lessons from Real-World Genetics
                </h3>
                <p className="text-sm text-purple-300 mb-3">Inside Social Games — February 11, 2011</p>
                <p className="mb-4">
                  Going by the tag line — "IncrediLand: Breed with your friends" — players might not pick up on the 
                  depth of the real-world genetics rules that underscore the core design of this exceptional game.
                </p>
                <a 
                  href="https://web.archive.org/web/20120615114948/http://www.insidesocialgames.com/2011/02/11/incrediland-encourages-friends-to-breed-new-animals-using-lessons-from-real-world-genetics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm underline"
                >
                  Read full review →
                </a>
              </div>

              {/* Review 2 */}
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-800/30">
                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  Breed With Your Facebook Friends In IncrediLand
                </h3>
                <p className="text-sm text-purple-300 mb-3">Social Times — February 08, 2011</p>
                <p className="mb-4">
                  Poking is so last year. IncrediLand lets you take things to the next level and actually breed with 
                  your Facebook friends. That's right – we said breed with your Facebook friends. Inspired by genetics 
                  and biology, this new Facebook app lets you create and raise different species and varieties of 
                  creatures, called Incredimals, and raise them from eggs to adulthood.
                </p>
                <a 
                  href="https://web.archive.org/web/20120314175633/http://socialtimes.com/facebook-incrediland_b37674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm underline"
                >
                  Read full review →
                </a>
              </div>

              {/* Review 3 */}
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-800/30">
                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  IncrediLand breeds fun
                </h3>
                <p className="text-sm text-purple-300 mb-3">GameZebo — February 16, 2011</p>
                <p className="mb-4">
                  Facebook is no stranger to games that let you raise cute little critters, and in a lot of ways 
                  IncrediLand is very similar to other games that already exist. You can feed, train, and play with 
                  strange colorful creatures, but the difference is the emphasis on breeding. IncrediLand features a 
                  surprisingly complex breeding mechanic that focuses on genetics, and creates a rather addictive 
                  experience as you attempt to collect every animal there is.
                </p>
                <p className="mb-4">
                  It may seem simple, but IncrediLand is actually a very deep, and surprisingly satisfying experience. 
                  Not only is the process of breeding and raising animals rewarding, but the ever elusive goal of 
                  collecting them all is very compelling. There may not be a whole lot you can actually do with your 
                  animals once they grow up, but the process of raising and collecting them is enough to make this a 
                  great game.
                </p>
                <a 
                  href="https://www.gamezebo.com/reviews/incrediland-review/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm underline"
                >
                  Read full review →
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-800 my-8 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Project Status</h2>
            
            <p className="mb-4">
              The game was live for around a year (2011) and reached around 60,000 monthly active users at its peak. 
              The success validated the core concept and demonstrated the appeal of combining collection mechanics with 
              meaningful social interaction. Players formed communities, developed breeding strategies, and created a 
              vibrant ecosystem around the game.
            </p>

            <p className="mb-4">
              Unfortunately, I had to freeze the project due to a lack of funding for additional development. However, 
              I haven't given up on the idea and am planning to bring it back to life in some form at some point in 
              the future.
            </p>

            <p className="text-purple-200 italic">
              Creating IncrediLand was an ambitious undertaking that combined game design, programming, art direction, 
              and community management. The experience taught me valuable lessons about user engagement, community 
              building, and the technical challenges of running a live service game—lessons that continue to inform 
              my work today.
            </p>
          </div>

          <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-800/50">
            <p className="text-purple-200 italic text-center">
              © 2019 Incrediland LTD
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}