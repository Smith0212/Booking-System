import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout';
import HomePage from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Reservation from './components/Reservation';
import Cancellation from './components/Cancellation';
import UserReservations from './components/UserReservations';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/reservation",
          element: <Reservation />,
        },
        {
          path: "/cancellation",
          element: <Cancellation />,
        },
        {
          path: "/my-reservations",
          element: <UserReservations />,
        },
      ],
    }
  ]);
    return <RouterProvider router={router} />;
}

export default App;
