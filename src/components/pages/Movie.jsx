import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../ui/Cards';

export default function Movie() {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 container mx-auto">
      {moviesData.Search.map((currMovie) => (
        <Cards key={currMovie.imdbID} currMovie={currMovie} />
      ))}
    </div>
  );
}