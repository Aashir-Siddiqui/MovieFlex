import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Clapperboard } from '../../../public/Clapperboard';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
  };

  return (
    <nav className="bg-yellow-500 text-white sticky top-0 z-50 shadow-lg py-3 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <motion.div
          className="text-xl sm:text-3xl font-bold flex items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink to="/" className="flex items-center gap-1">
            <Clapperboard className="w-8 h-8 sm:w-10 sm:h-10" />
            MovieFlex
          </NavLink>
        </motion.div>

        <div className="hidden sm:flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-3 text-lg font-semibold rounded-md transition duration-300 border-dashed border-white border-x-[0.1px] ${isActive ? 'bg-black text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`
            }
          >
            <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
              Home
            </motion.span>
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              `px-6 py-3 text-lg font-semibold rounded-md transition duration-300 border-dashed border-white border-x-[0.1px] ${isActive ? 'bg-black text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
              }`
            }
          >
            <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
              Movies
            </motion.span>
          </NavLink>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden bg-yellow-500"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-md font-semibold transition duration-300 ${isActive ? 'bg-black text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`
                }
                onClick={toggleMenu}
              >
                <motion.span variants={linkVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                  Home
                </motion.span>
              </NavLink>
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  `w-full text-center py-3 text-lg rounded-md font-semibold transition duration-300 ${isActive ? 'bg-black text-yellow-400' : 'bg-yellow-500 text-white hover:bg-yellow-600'
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