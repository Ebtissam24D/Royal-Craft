import React, { useState } from 'react';
import './CommandeArtisan.css';
import profileH from "../../assets/images/profileH.png";
import profileF from "../../assets/images/profileF.png";
import LayoutArtisan from '../../components/layoutArtisan';

const CommandeArtisan = () => {
    const [commandes, setCommandes] = useState([
        {
            id: 1,
            nom: "Zineb B.",
            genre: "femme",
            email: "zineb.b@example.com",
            telephone: "0612 345 678",
            demande: "Je souhaite commander un tapis berbère fait main, typique du Moyen Atlas.",
            statut: "en attente"
        },
        {
            id: 2,
            nom: "Khalid R.",
            genre: "homme",
            email: "khalid.r@example.com",
            telephone: "0678 123 456",
            demande: "Je suis intéressé par une poterie artisanale de Safi.",
            statut: "en attente"
        },
        {
            id: 3,
            nom: "Nadia L.",
            genre: "femme",
            email: "nadia.l@example.com",
            telephone: "0655 987 321",
            demande: "Je cherche une paire de babouches marocaines.",
            statut: "en attente"
        },
        {
            id: 4,
            nom: "Youssef M.",
            genre: "homme",
            email: "youssef.m@example.com",
            telephone: "0699 111 222",
            demande: "Je voudrais une sculpture sur bois amazigh.",
            statut: "en attente"
        },
        {
            id: 6,
            nom: "Ahmed T.",
            genre: "homme",
            email: "ahmed.t@example.com",
            telephone: "0633 112 889",
            demande: "Je cherche une lampe traditionnelle en cuivre de Fès.",
            statut: "en attente"
        },
        {
            id: 7,
            nom: "Salma D.",
            genre: "femme",
            email: "salma.d@example.com",
            telephone: "0644 667 778",
            demande: "Je veux une couverture en laine des montagnes de l'Atlas.",
            statut: "en attente"
        },
        {
            id: 8,
            nom: "Mohamed A.",
            genre: "homme",
            email: "mohamed.a@example.com",
            telephone: "0611 998 776",
            demande: "Je suis intéressé par un service à thé marocain traditionnel.",
            statut: "en attente"
        },
        {
            id: 9,
            nom: "Rania K.",
            genre: "femme",
            email: "rania.k@example.com",
            telephone: "0600 321 654",
            demande: "Je cherche un miroir décoré en zellige.",
            statut: "en attente"
        },
        {
            id: 10,
            nom: "Hassan B.",
            genre: "homme",
            email: "hassan.b@example.com",
            telephone: "0677 888 999",
            demande: "Je veux une boite en bois gravée à la main pour bijoux.",
            statut: "en attente"
        }
    ]);

    const [showAll, setShowAll] = useState(false);

    const updateStatut = (id, newStatut) => {
        const updatedCommandes = commandes.map((commande) =>
            commande.id === id ? { ...commande, statut: newStatut } : commande
        );
        setCommandes(updatedCommandes);
    };

    const commandesAffichees = showAll ? commandes : commandes.slice(0, 3);

    return (
        <LayoutArtisan>   <div className="commande-page">
            <div className="commande-header">
                <h1>Commandes reçues</h1>
            </div>

            <div className="commande-list">
                {commandesAffichees.map((commande) => (
                    <div className={`commande-item ${commande.statut}`} key={commande.id}>
                        <div className="commande-info">
                            <div className="commande-nom">
                                <img
                                    src={commande.genre === "femme" ? profileF : profileH}
                                    alt="profile"
                                    className="profile-icon"
                                />
                                {commande.nom}
                            </div>
                            <div className="commande-contact">
                                📧 <strong>Email :</strong> {commande.email} <br />
                                📞 <strong>Téléphone :</strong> {commande.telephone}
                            </div>
                            <div className="commande-demande">
                                <span className="demande-texte">{commande.demande}</span>
                            </div>

                            <div className="commande-statut">
                                {commande.statut !== "en attente" && (
                                    <span className={`statut-label ${commande.statut}`}>
                                        {commande.statut === "acceptée" ? " Acceptée" : " Rejetée"}
                                    </span>
                                )}
                            </div>
                        </div>
                        {commande.statut === "en attente" && (
                            <div className="commande-actions">
                                <button className="accepter-btn" onClick={() => updateStatut(commande.id, "acceptée")}>
                                    Accepter
                                </button>
                                <button className="rejeter-btn" onClick={() => updateStatut(commande.id, "rejetée")}>
                                    Rejeter
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bouton Voir plus en bas */}
            {!showAll && commandes.length > 3 && (
                <div className="voir-plus-container">
                    <button className="voir-plus-global-btn" onClick={() => setShowAll(true)}>
                        Voir plus
                    </button>
                </div>
            )}
        </div> </LayoutArtisan>
    );
};

export default CommandeArtisan;
