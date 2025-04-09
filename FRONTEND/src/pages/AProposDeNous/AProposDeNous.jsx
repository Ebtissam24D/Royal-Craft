import React from 'react';
import './AProposDeNous.css';
import imageAProposDeNous from "../../assets/images/imageAProposDeNous.png";
import profileF from "../../assets/images/profileF.png";
import { FaLightbulb, FaUsers, FaCheckCircle } from 'react-icons/fa';

const AProposDeNous = () => {
    return (
        <div className="apropos-container">
            <section className="intro-section">
                <h1>À propos de nous</h1>
                <p>Découvrez notre histoire, notre mission et notre équipe dédiée à votre réussite.</p>
            </section>

            <section className="histoire-section">
                <img src={imageAProposDeNous} alt="Artisanat Marocaine" className="histoire-image" />
                <div className="histoire-texte">
                    <h2>Notre Histoire</h2>
                    <p>Depuis notre création en 2010, nous nous sommes engagés à fournir des solutions innovantes à nos clients. Notre parcours a été marqué par une croissance constante et une adaptation continue aux besoins du marché.</p>
                    <p>Aujourd’hui, nous sommes fiers de compter parmi les leaders de notre secteur, avec une présence internationale et une équipe de plus de 200 experts dévoués.</p>
                </div>
            </section>

            <section className="mission-section">
                <h2>Notre Mission</h2>
                <p>Notre mission est d’accompagner nos clients dans leur transformation digitale en leur fournissant des solutions innovantes et sur mesure.</p>
                <div className="valeurs">
                    <div className="valeur">
                        <FaLightbulb className="valeur-icon" />
                        <h3>Innovation</h3>
                        <p>Nous recherchons constamment de nouvelles solutions pour répondre aux défis de demain.</p>
                    </div>
                    <div className="valeur">
                        <FaUsers className="valeur-icon" />
                        <h3>Collaboration</h3>
                        <p>Le travail d’équipe est au cœur de notre approche pour garantir le succès de nos projets.</p>
                    </div>
                    <div className="valeur">
                        <FaCheckCircle className="valeur-icon" />
                        <h3>Excellence</h3>
                        <p>Nous visons l’excellence dans chaque aspect de notre travail.</p>
                    </div>
                </div>
            </section>

            <section className="equipe-section">
                <h2>Notre Équipe</h2>
                <div className="membres">
                    <div className="membre">
                        <img src={profileF} alt="Nabila Sabari" />
                        <h3>Nabila Sabari</h3>
                        <p>Stagiaire</p>
                        <span>Passionnée par la technologie et déterminée à laisser une empreinte positive dans chaque projet.</span>
                    </div>
                    <div className="membre">
                        <img src={profileF} alt="Ibtissam Bouardame" />
                        <h3>Ibtissam Bouardame</h3>
                        <p>Stagiaire</p>
                        <span>Créative, curieuse et toujours prête à relever de nouveaux défis pour apprendre et progresser.</span>
                    </div>
                    <div className="membre">
                        <img src={profileF} alt="Kaoutar Daif" />
                        <h3>Kaoutar Daif</h3>
                        <p>Stagiaire</p>
                        <span>Animée par l’envie d’innover et de contribuer à des projets qui ont du sens.</span>
                    </div>
                </div>
            </section>

            <section className="chiffres-section">
                <h2>Nos Chiffres Clés</h2>
                <div className="chiffres">
                    <div className="chiffre">
                        <h3>13</h3>
                        <p>Années d’expérience</p>
                    </div>
                    <div className="chiffre">
                        <h3>500+</h3>
                        <p>Clients satisfaits</p>
                    </div>
                    <div className="chiffre">
                        <h3>1000+</h3>
                        <p>Projets réalisés</p>
                    </div>
                    <div className="chiffre">
                        <h3>200+</h3>
                        <p>Employés</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AProposDeNous;
