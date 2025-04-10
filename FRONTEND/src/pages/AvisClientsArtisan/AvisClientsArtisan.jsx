import React, { useState } from "react";
import './AvisClientsArtisan.css';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import LayoutArtisan from "../../components/layoutArtisan";

const avisClients = [
    {
        id: 1,
        nom: 'Fatima Zahra',
        genre: 'femme',
        note: 5,
        commentaire: 'Excellent produit, très bonne qualité !',
        likes: 12,
        dislikes: 0
    },
    {
        id: 2,
        nom: 'Mohamed',
        genre: 'homme',
        note: 4,
        commentaire: 'Très beau mais livraison un peu lente.',
        likes: 8,
        dislikes: 2
    },
    {
        id: 3,
        nom: 'Salma',
        genre: 'femme',
        note: 3,
        commentaire: 'Produit correct mais pas aussi solide que je pensais.',
        likes: 4,
        dislikes: 3
    },
    {
        id: 4,
        nom: 'Youssef',
        genre: 'homme',
        note: 5,
        commentaire: 'Parfait ! Artisan très professionnel.',
        likes: 15,
        dislikes: 1
    },
    {
        id: 5,
        nom: 'Amina',
        genre: 'femme',
        note: 4,
        commentaire: 'Belle pièce, je recommande.',
        likes: 10,
        dislikes: 0
    },
    {
        id: 6,
        nom: 'Rachid',
        genre: 'homme',
        note: 2,
        commentaire: 'Pas satisfait de la finition.',
        likes: 2,
        dislikes: 5
    },
    {
        id: 7,
        nom: 'Samira',
        genre: 'femme',
        note: 5,
        commentaire: 'C’est exactement ce que je cherchais, bravo à l’artisan !',
        likes: 14,
        dislikes: 0
    },
    {
        id: 8,
        nom: 'Khalid',
        genre: 'homme',
        note: 3,
        commentaire: 'Moyen. La qualité est correcte mais le prix est un peu élevé.',
        likes: 5,
        dislikes: 2
    },
    {
        id: 9,
        nom: 'Nadia',
        genre: 'femme',
        note: 4,
        commentaire: 'Bon travail, mais j’aurais aimé un emballage plus soigné.',
        likes: 7,
        dislikes: 1
    },
    {
        id: 10,
        nom: 'Omar',
        genre: 'homme',
        note: 1,
        commentaire: 'Très déçu, le produit ne ressemble pas à la photo.',
        likes: 1,
        dislikes: 8
    },
    {
        id: 11,
        nom: 'Imane',
        genre: 'femme',
        note: 5,
        commentaire: 'Magnifique travail artisanal, je suis ravie !',
        likes: 13,
        dislikes: 0
    },
    {
        id: 12,
        nom: 'Hicham',
        genre: 'homme',
        note: 2,
        commentaire: 'J’ai reçu un article endommagé, dommage.',
        likes: 3,
        dislikes: 6
    },
    {
        id: 13,
        nom: 'Layla',
        genre: 'femme',
        note: 4,
        commentaire: 'Très jolie création, fidèle à la description.',
        likes: 9,
        dislikes: 1
    },
    {
        id: 14,
        nom: 'Soufiane',
        genre: 'homme',
        note: 3,
        commentaire: 'Le produit est bon mais le service client pas très réactif.',
        likes: 4,
        dislikes: 3
    },
    {
        id: 15,
        nom: 'Karima',
        genre: 'femme',
        note: 5,
        commentaire: 'Travail raffiné, livraison rapide, je recommande !',
        likes: 11,
        dislikes: 0
    },
    {
        id: 16,
        nom: 'Adil',
        genre: 'homme',
        note: 4,
        commentaire: 'Bonne qualité, conforme aux attentes.',
        likes: 6,
        dislikes: 1
    }
];

const AvisClientsArtisan = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const afficherPlus = () => {
        setVisibleCount((prev) => prev + 4);
    };

    return (
        <LayoutArtisan>  <div className="avis-container">
            <h2 className="avis-title">Avis des Clients</h2>
            <div className="avis-grid">
                {avisClients.slice(0, visibleCount).map((avis, index) => (
                    <div key={index} className="avis-card">
                        <h3 className="avis-nom">{avis.nom}</h3>
                        <div className="avis-stars">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < avis.note ? "star filled" : "star"}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="avis-commentaire">{avis.commentaire}</p>
                        <div className="avis-reactions">
                            <span className="avis-like">
                                <FaThumbsUp /> {avis.likes}
                            </span>
                            <span className="avis-dislike">
                                <FaThumbsDown /> {avis.dislikes}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < avisClients.length && (
                <div className="avis-btn-container">
                    <button onClick={afficherPlus} className="avis-btn">
                        Voir plus
                    </button>
                </div>
            )}
        </div>
        </LayoutArtisan>
    );
};

export default AvisClientsArtisan;
