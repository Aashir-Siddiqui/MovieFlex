import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Clapperboard } from '../../assets/Clapperboard';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for nav links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
  };

  return (
    <nav className="bg-yellow-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto max-w-7xl px-6 md:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl sm:text-3xl font-bold flex items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Clapperboard />
          MovieFlex
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-3 text-lg font-semibold rounded-md transition duration-300 border-dashed border-white border-x-[0.1px] ${
                isActive ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`
            }
          >
            <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
              Home
            </motion.span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-6 py-3 text-lg font-semibold rounded-md transition duration-300 border-dashed border-white border-x-[0.1px] ${
                isActive ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`
            }
          >
            <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
              About
            </motion.span>
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              `px-6 py-3 text-lg font-semibold rounded-md transition duration-300 border-dashed border-white border-x-[0.1px] ${
                isActive ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`
            }
          >
            <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
              Movies
            </motion.span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-yellow-500"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg font-semibold transition duration-300 ${
                    isActive ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`
                }
                onClick={toggleMenu}
              >
                <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                  Home
                </motion.span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg font-semibold transition duration-300 ${
                    isActive ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`
                }
                onClick={toggleMenu}
              >
                <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                  About
                </motion.span>
              </NavLink>
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg font-semibold transition duration-300 ${
                    isActive ? 'bg-gray-800 text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`
                }
                onClick={toggleMenu}
              >
                <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                  Movies
                </motion.span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}