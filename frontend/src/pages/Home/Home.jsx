import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import booki from '../../assets/images/booki_1.jpg'
import './Home.css'


const Home = () => {
  return (
    <main>
      <section>
        <h1>Mes réalisations</h1>
        <div className="realisations">
          <Link to="/Booki"><img src={booki} alt="" /></Link>
          <Link to="/SophieBluel"><img src="" alt="" /></Link>
          <img src="" alt="" />
          <Link to="/Kasa"><img src="" alt="" /></Link>
          <Link to="/Grimoire"><img src="" alt="" /></Link>
        </div>  
        
      </section>
      <Footer /> {/* Affiche le composant Footer */}
    </main>
  )
}

export default Home





