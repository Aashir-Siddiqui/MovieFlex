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
import { GetMoviesData } from './api/GetMoviesdata';

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
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App