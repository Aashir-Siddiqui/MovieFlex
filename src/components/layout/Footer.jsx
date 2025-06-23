import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clapperboard } from '../../../public/Clapperboard';
import { FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black text-white py-3 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <motion.div
          className="flex flex-col items-center sm:items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start gap-1">
            <NavLink to="/" className="flex items-center justify-center">
              <Clapperboard className='w-8 h-8' />
              <h1 className="text-2xl font-bold">MovieFlex</h1>
            </NavLink>
            <p className="text-sm text-gray-500 mt-1">© 2025 MovieFlex. All rights reserved.</p>
          </div>
        </motion.div>

        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/Aashir-Siddiqui"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="p-2 bg-yellow-500 rounded-full flex items-center justify-center"
          >
            <FaGithub className="text-black text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aashirsiddiqui_/?next=%2F&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="p-2 bg-yellow-500 rounded-full flex items-center justify-center"
          >
            <FaInstagram className="text-black text-2xl" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/aashir.siddiqui.2025"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="p-2 bg-yellow-500 rounded-full flex items-center justify-center"
          >
            <FaFacebookF className="text-black text-2xl" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}