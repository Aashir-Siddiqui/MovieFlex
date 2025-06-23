import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClapperExplore } from '../../../public/ClapperExplore';

export default function Home() {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen">
      <motion.img
        src="/public/hero-img.jpg"
        alt="MovieFlex Hero"
        className="w-full h-screen object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 mb-4"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover Your Next Favorite Movie
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-[400] text-gray-200 mb-8 max-w-2xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore a world of cinematic adventures with MovieFlex – your ultimate destination for movies and series!
        </motion.p>
        <NavLink to="/movie">
          <motion.button
            className="px-8 py-4 bg-yellow-500 text-white text-lg font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex items-center justify-center gap-1">
              <ClapperExplore />
              Explore Now
            </div>
          </motion.button>
        </NavLink>
      </div>
    </div>
  );
}