import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from '../public/Pages/Home';
import About from '../public/Pages/About';
import Contact from '../public/Pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);



const App = () => {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
