import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";

export default function Card({ currMovie }) {
  console.log(currMovie)
  const { Poster, Title, Year, Type, imdbID } = currMovie;

  return (
    <motion.div
      className="max-w-xs mx-auto mb-8 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink to={`/movie/${imdbID}`}>
        <motion.div
          className="relative overflow-hidden shadow-lg rounded-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400x600"}
            alt={Title}
            className="w-full h-60 sm:h-[400px] object-cover rounded-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 text-white p-6 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="font-semibold text-sm uppercase text-gray-300">Released</span>
              <p className="text-xl font-bold text-yellow-500">{Year}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-sm uppercase text-gray-300">Type</span>
              <p className="text-xl font-bold text-yellow-500">{Type}</p>
            </div>
            <motion.button
              className="mt-6 px-4 py-2 bg-yellow-500 text-white text-[12px] rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center justify-center gap-1">
                <BiSolidCameraMovie className='text-xl text-black'/>
                View Details
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        <h2 className="mt-4 text-center text-lg font-bold text-black line-clamp-2">{Title}</h2>
      </NavLink>
    </motion.div>
  );
}