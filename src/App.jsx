import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Movie from './components/pages/Movie';
import AppLayout from './components/layout/AppLayout';
import Error from './components/pages/Error';
import { GetMoviesData } from './api/GetMoviesData';
import MovieDetails from './ui/MovieDetails';
import getMovieDetails from './api/GetMovieDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: GetMoviesData,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMovieDetails,
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App