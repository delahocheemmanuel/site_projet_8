import React from 'react';
import Footer from '../../components/Footer/Footer';
import grimoireVideo720 from '../../assets/videos/grimoire720.mp4';
import grimoireVideo1080 from '../../assets/videos/grimoire1080.mp4';
import '../../index.css';

function GrimoireVid() {
  const videoRef = React.useRef(null);
  const [videoSrc, setVideoSrc] = React.useState(grimoireVideo720);

  React.useEffect(() => {
    // Vérifier la largeur d'écran ici et choisir la source vidéo en conséquence
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1080) {
      setVideoSrc(grimoireVideo1080);
    } else {
      setVideoSrc(grimoireVideo720);
    }
  }, []);

  return (
    <main>
      <div className='video__container'>
        <h1>Titre de votre page</h1>
        <video ref={videoRef} controls width="100%" height="auto">
          <source src={videoSrc} type="video/mp4" />
          {/* Ajoutez d'autres sources ici pour une meilleure compatibilité entre les navigateurs */}
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
      </div>
      <Footer />
    </main>
  );
}

export default GrimoireVid;


