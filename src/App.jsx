import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import "./App.css"
import Cart from './Components/Cart';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App