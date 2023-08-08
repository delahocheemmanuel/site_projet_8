import React from 'react';

import { Link } from 'react-router-dom';

import logoGh from '../../assets/images/logo/github-logo.png';
import booki from '../../assets/images/booki_1.jpg';
import kasa from '../../assets/images/kasa_1.jpg';
import grimoire from '../../assets/images/grimoire_1.jpg';


import './Home.css';

const Home = () => {
  return (
    <main>
      <section className='realisations__container'>
        <h1 className='realisations__title'>Mes réalisations</h1>
        <div className="realisations">
          <article className="realisations__project">
            <h2>Booki</h2>
            <Link to="/Booki"><img src={booki} alt="" /></Link>
            <div className='realisations__project--desc'>
            <Link to="/BookiVid"><button className="videobutton">vidéos</button></Link>
            <Link to="https://github.com/delahocheemmanuel/site_projet_2" target="_blank" rel="noopener noreferrer"><img src={logoGh} alt="" ></img> 
            </Link>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive</li>
            </ul>  
            </div>
          </article>
          <article className="realisations__project">
            <h2>Kasa</h2>
            <Link to="/Kasa"><img src={kasa} alt="kasa" /></Link>
            <div className='realisations__project--desc'>
            <Link to="/KasaVid"><button className="videobutton">vidéos</button></Link>
            <Link to="https://github.com/delahocheemmanuel/site_projet_6" target="_blank" rel="noopener noreferrer"><img src={logoGh} alt="" ></img>
            </Link>
            <ul>
              <li>React</li>
            </ul>  
            </div>
          </article>
          <article className="realisations__project">
            <h2>Grimoire</h2>
            <Link to="/Grimoire"><img src={grimoire} alt="" /></Link>
            <div className='realisations__project--desc'>
            <Link to="/GrimoireVid"><button className="videobutton">vidéos</button></Link>
            
            <Link to="https://github.com/delahocheemmanuel/site_projet_7"  ><img src={logoGh} alt="" ></img>
            </Link>
            <ul>
              <li>Mongodb</li>
            </ul>  
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;





