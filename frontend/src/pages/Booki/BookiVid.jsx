import React from 'react';
import { useNavigate } from 'react-router-dom'; // Utilisez 'useNavigate' depuis 'react-router-dom'
import ReactPlayer from 'react-player';
import bookiVideo720 from '../../assets/videos/booki720.webm';
import bookiVideo1080 from '../../assets/videos/booki1080.webm';
import '../../index.css';

function BookiVid() {
  const videoRef = React.useRef(null);
  const navigate = useNavigate(); // Initialisez le navigateur avec 'useNavigate' depuis 'react-router-dom'

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

  const handleVideoEnd = () => {
    // Redirection vers la page d'accueil lorsque la vidéo est terminée
    navigate('/home'); //  page d'accueil
  };

  return (
    <main>
      <div className='video__container'>
        <h1>Titre de votre page</h1>
        <ReactPlayer
          ref={videoRef}
          url={videoSrc}
          controls
          width="100%"
          height="auto"
          playing
          muted
          onEnded={handleVideoEnd} // Appeler handleVideoEnd lorsquela vidéo est terminée
        />
      </div>
    </main>
  );
}

export default BookiVid;
