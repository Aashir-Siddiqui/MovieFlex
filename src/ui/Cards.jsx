import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Card({ currMovie }) {
  console.log(currMovie)
  const { Poster, Title, Year, Type, imdbID } = currMovie;

  return (
    <div className="max-w-xs mx-auto mb-8 group">
      <NavLink to={`${imdbID}`}>
        {/* Image + Overlay Card */}
        <motion.div
          className="relative overflow-hidden shadow-xl"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400x600"}
            alt={Title}
            className="w-full h-[360px] object-cover"
          />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100"
          >
            <div className="flex flex-col items-center justify-center gap-1 mb-5">
              <span className="font-semibold text-lg">Released Date</span>
              <p className="text-2xl mb-1 font-semibold text-yellow-500"> {Year}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-semibold text-lg">Type</span>
              <p className="text-2xl mb-1 font-semibold text-yellow-500">{Type}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Title always visible */}
        <h2 className="mt-3 text-center text-lg font-bold text-gray-800">{Title}</h2>
      </NavLink>
    </div>
  );
}
