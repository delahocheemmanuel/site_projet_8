import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import booki from '../../assets/images/booki_1.jpg'
import kasa from '../../assets/images/kasa_1.jpg'
import grimoire from '../../assets/images/grimoire_1.jpg'

import './Home.css'


const Home = () => {
  return (
    <main>
      <section className='realisations__container' >
        <h1 className='realisations__title'>Mes réalisations</h1>
        <div className="realisations">
          <article className="realisations__project">
            <h2>Booki</h2>
          <Link to="/Booki"><img src={booki} alt="" /></Link>
          <Link to="/BookiVid"><button className="videobutton">vidéos</button></Link>
          </article>
          <article className="realisations__project">
            <h2>Kasa</h2>
          <Link to="/Kasa"><img src={kasa} alt="kasa" /></Link>
          <Link to="/KasaVid"><button className="videobutton">vidéos</button></Link>
          </article>
          <article className="realisations__project">
            <h2>Grimoire</h2>
          <Link to="/Grimoire"><img src={grimoire} alt="" /></Link>
          <Link to="/GrimoireVid"><button className="videobutton">vidéos</button></Link>
          </article>
        </div>  
        
      </section>
      <Footer /> {/* Affiche le composant Footer */}
    </main>
  )
}

export default Home





