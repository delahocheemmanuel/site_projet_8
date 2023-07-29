import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider,Route} from "react-router-dom";

import Main from './pages/Main';
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import Booki from './pages/Booki/Booki'
import Kasa from './pages/Kasa/Kasa'
import SophieBluel from './pages/SophieBluel/SophieBluel';
import NinaCarducci from './pages/NinaCarducci/NinaCarducci'
import Grimoire from './pages/Grimoire/Grimoire'


import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element= { <Main /> } >
        <Route path="/home" element={ <Home/> } />
        
        <Route path="/booki" element={ <Booki/> } />
        
        
        <Route path="/kasa" element={ <Kasa/> } />
        <Route path="/Grimoire" element={ <Grimoire/> } />
        <Route path="/contact" element={ <Contact/> } />
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
