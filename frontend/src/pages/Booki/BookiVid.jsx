import React from 'react';
import Footer from '../../components/Footer/Footer';
import bookiVideo720 from '../../assets/videos/booki720.mp4';
import bookiVideo1080 from '../../assets/videos/booki1080.mp4';
import '../../index.css';

function BookiVid() {
  const videoRef = React.useRef(null);
  const [videoSrc, setVideoSrc] = React.useState(bookiVideo720);

  React.useEffect(() => {
    // Vérifier la largeur d'écran ici et choisir la source vidéo en conséquence
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1080) {
      setVideoSrc(bookiVideo1080);
    } else {
      setVideoSrc(bookiVideo720);
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

export default BookiVid;
