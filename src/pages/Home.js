import Navigation from "../components/Navigation";
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [zoomImage, setZoomImage] = useState(null);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
       setZoomImage(document.querySelector("#zoom"));
       setLightbox(document.querySelector(".lightbox"));
    }, []);

    console.log(zoomImage);
    console.log(lightbox);

    const appear = () => {
        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.classList.add("appear");
        const img = document.createElement("img");
        img.src = zoomImage.src;
        lightbox.appendChild(img);
        const mediaQueryTablets = window.matchMedia('(max-width: 960px)');
        const mediaQueryIphones = window.matchMedia('(max-width: 700px)');
        const mediaQuerySmartphones = window.matchMedia('(max-width: 550px)');
        if (mediaQuerySmartphones.matches) {
            img.style.width = "95%";
            img.style.margin = "5.6rem 2%";
            return;
        }
        if (mediaQueryIphones.matches) {
            img.style.width = "80%";
            img.style.margin = "5.6rem 10%";
            return;
        }
        if (mediaQueryTablets.matches) {
            img.style.width = "70%";
            img.style.margin = "4.8rem 15%";
            return;
        }
        img.style.width = "50%";
        img.style.backgroundRepeat = "no-repeat";
        img.style.margin = "4.8rem 25%";
    }

    const disappear = (e) => {
        if (e.target != e.currentTarget) return;
        lightbox.classList.remove("appear");
    }
    
    return (
        <div className="home container">
            <Navigation />
            <div className="home-content page-content">
                <div>
                    <h1>Thibault Bardinet-Langlois</h1>
                    <h2>Développeur Full-stack</h2>
                    <a href="./media/Bardinet-Langlois-Thibault-Curriculum-Vitae.pdf" target="_blank">
                        Télécharger CV
                    </a>
                    <div className="cv-png-container">
                        <img id="zoom" src="./media/CV-DESIGN.png" alt="cv-png" onClick={appear}/>
                    </div>
                </div>
            </div>
            <div className="lightbox" onClick={disappear}>
        
            </div>
        </div>
    )
}

export default Home;