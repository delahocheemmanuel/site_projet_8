import React from 'react';
import { useNavigate } from 'react-router-dom'; // Utilisez 'useNavigate' depuis 'react-router-dom'
import ReactPlayer from 'react-player';
import grimoireVideo720 from '../../assets/videos/grimoire720.webm';
import grimoireVideo1080 from '../../assets/videos/grimoire1080.webm';
import '../../index.css';

function GrimoireVid() {
    const videoRef = React.useRef(null);
    const navigate = useNavigate(); // Initialisez le navigateur avec 'useNavigate' depuis 'react-router-dom'

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

    const handleVideoEnd = () => {
        // Redirection vers la page d'accueil lorsque la vidéo est terminée
        navigate('/home'); //  page d'accueil
    };

    return (
        <main>
            <div className="video__container">
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

export default GrimoireVid;
