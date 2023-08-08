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
import BookiVid from './pages/Booki/BookiVid'
import Kasa from './pages/Kasa/Kasa'
import KasaVid from './pages/Kasa/KasaVid'
import Grimoire from './pages/Grimoire/Grimoire'
import GrimoireVid from './pages/Grimoire/GrimoireVid'


import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element= { <Main /> } >
        <Route path="/Home" element={ <Home/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Booki" element={ <Booki/> } />
        <Route path="/BookiVid" element={ <BookiVid/> } />
        
        
        <Route path="/Kasa" element={ <Kasa/> } />
        <Route path="/KasaVid" element={ <KasaVid/> } />
        <Route path="/Grimoire" element={ <Grimoire/> } />
        <Route path="/GrimoireVid" element={ <GrimoireVid/> } />
        
        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
