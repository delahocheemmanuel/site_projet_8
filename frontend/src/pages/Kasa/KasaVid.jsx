import React from 'react';
import Footer from '../../components/Footer/Footer';
import kasaVideo720 from '../../assets/videos/kasa720.mp4';
import kasaVideo1080 from '../../assets/videos/kasa1080.mp4';
import '../../index.css';

function KasaVid() {
  const videoRef = React.useRef(null);
  const [videoSrc, setVideoSrc] = React.useState(kasaVideo720);

  React.useEffect(() => {
    // Vérifier la largeur d'écran ici et choisir la source vidéo en conséquence
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1080) {
      setVideoSrc(kasaVideo1080);
    } else {
      setVideoSrc(kasaVideo720);
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

export default KasaVid;
