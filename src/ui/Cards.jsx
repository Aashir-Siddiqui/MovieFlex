import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ currMovie }) {
  const { Poster, Title, Year, Genre, Type, imdbID } = currMovie;

  return (
    <div className="max-w-xs mx-auto mb-8 group">
      {/* Image + Overlay Card */}
      <motion.div
        className="relative rounded-lg overflow-hidden shadow-xl"
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
          className="absolute inset-0 bg-black/70 text-white p-4 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100"
        >
          <p className="text-sm mb-1"><span className="font-semibold">Type:</span> {Type}</p>
          <p className="text-sm mb-1"><span className="font-semibold">Year:</span> {Year}</p>
          <p className="text-sm mb-1"><span className="font-semibold">Genre:</span> {Genre}</p>
          <a
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-300 underline text-sm"
          >
            View on IMDb →
          </a>
        </motion.div>
      </motion.div>

      {/* Title always visible */}
      <h2 className="mt-3 text-center text-lg font-bold text-gray-800">{Title}</h2>
    </div>
  );
}
