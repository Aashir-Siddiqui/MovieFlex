import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-black text-white py-6 px-6 md:px-12 sticky top-0 z-50">
      <div className="container flex items-center justify-between mx-auto max-w-7xl">
        <motion.div
          className="flex font-bold text-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          MovieFlex
        </motion.div>
        <div className="flex space-x-6 md:space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400'
                : 'hover:text-yellow-400 transition-colors duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400'
                : 'hover:text-yellow-400 transition-colors duration-300'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400'
                : 'hover:text-yellow-400 transition-colors duration-300'
            }
          >
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}