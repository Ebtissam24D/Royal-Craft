import React, { useState } from "react";
import "./PlusdedetailleP.css";
import { FaStar, FaHeart } from 'react-icons/fa'; // Import des icônes

// Import des images
import Tapis1Image from "../../assets/images/Tapis1.png";
import tapiss1Image from "../../assets/images/tapiss1.png";
import tapiss2Image from "../../assets/images/tapiss2.png";
import tapiss3Image from "../../assets/images/tapiss3.png";
import tapiss4Image from "../../assets/images/tapiss4.png";
import table_chaiseImage from "../../assets/images/table_chaises.jpg";
import MirrorImage from "../../assets/images/mirror.jpg";
import profileH from "../../assets/images/profileH.png";
import profileF from "../../assets/images/profileF.png";
import Layout from "../../components/Layout";


const PlusdedetailleP = () => {
    const [favori, setFavori] = useState(false); // État pour le bouton principal
    const [mainImage, setMainImage] = useState(Tapis1Image); // Image principale initiale
    const [thumbnails, setThumbnails] = useState([tapiss1Image, tapiss2Image, tapiss3Image, tapiss4Image]); // Miniatures

    // État pour les cœurs des produits recommandés
    const [favorisRecommandes, setFavorisRecommandes] = useState({
        mirror: false,
        tableChaise: false,
    });

    const toggleFavori = () => {
        setFavori(!favori); // Inverse l'état du bouton de favoris principal
    };

    // Gestionnaire de clic pour changer l'image principale
    const handleThumbnailClick = (image) => {
        setThumbnails([mainImage, ...thumbnails.filter(img => img !== mainImage)]); // Déplace l'ancienne image principale parmi les miniatures
        setMainImage(image); // Met à jour l'image principale avec l'image sélectionnée
    };

    // Gestionnaire de clic pour les cœurs des produits recommandés
    const toggleFavoriRecommande = (produit) => {
        setFavorisRecommandes((prevState) => ({
            ...prevState,
            [produit]: !prevState[produit], // Inverse l'état du cœur pour le produit spécifié
        }));
    };

    return (
        <Layout> <div className="product-detail-container">
            {/* Section principale */}
            <div className="product-main">
                <div className="product-images">
                    {/* Image principale */}
                    <img src={mainImage} alt="Tapis Berbère" className="main-image" />
                    <div className="thumbnail-container">
                        {/* Miniatures */}
                        {thumbnails.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Motif ${i + 1}`}
                                className="thumbnail"
                                onClick={() => handleThumbnailClick(img)} // Changer l'image principale sur clic
                            />
                        ))}
                    </div>
                </div>

                <div className="product-info">
                    <h1>Tapis Berbère Atlas - Édition Spéciale</h1>
                    <div className="rating flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                color={i < 4.5 ? "#fbbf24" : "#d1d5db"} // Jaune pour actif, gris pour inactif
                                size={20} // Taille de l'icône
                            />
                        ))}
                        <span className="ml-2">(5/5 - 128 avis)</span>
                    </div>
                    <div className="price">899,89 MAD</div>

                    <p className="description">
                        Tapis berbère authentique tissé à la main par nos maîtres artisans dans
                        l'Atlas marocain. Chaque pièce est unique et raconte une histoire à travers
                        ses motifs traditionnels.
                    </p>

                    <div className="caracteristiques">
                        <h3>Caractéristiques :</h3>
                        <ul>
                            <li>Dimensions : 200 x 300 cm</li>
                            <li>Matériaux : 100% laine naturelle</li>
                            <li>Tissage : Double nœud traditionnel</li>
                            <li>Artisan : Mohammed Alami</li>
                        </ul>
                    </div>

                    <div className="taille-selection">
                        <label htmlFor="taille">Taille :</label>
                        <select id="taille">
                            <option value="200x300">200 x 300 cm</option>
                        </select>
                    </div>

                    {/* Boutons d'action */}
                    <div className="actions">
                        <button className="btn-ajouter">🛒 Ajouter au panier</button>

                        <button
                            className={`btn-favoris ${favori ? "active" : ""}`}
                            onClick={toggleFavori}
                            title="Ajouter aux favoris"
                        >
                            <FaHeart
                                className="heart-icon"
                                color={favori ? "#e74c3c" : "#d1d5db"} // Rouge foncé pour actif, gris pour inactif
                                size={24} // Taille de l'icône
                            />
                        </button>

                    </div>
                </div>
            </div>

            {/* Section des recommandations */}
            <div className="client-recommendations">
                <h2>Avis Clients et Recommandations</h2>

                <div className="avis-recommendations">
                    <div className="avis-recent">
                        <h4>Avis Récents</h4>

                        {/* Avis de Pierre Dubois */}
                        <div className="avis">
                            <div className="user-info">
                                <img src={profileH} alt="Pierre Dubois" className="profile-icon" />
                                <p>
                                    <strong>Pierre Dubois</strong>{" "}
                                    <span className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                color={i < 4 ? "#fbbf24" : "#d1d5db"} // 4 étoiles actives pour Pierre Dubois
                                                size={20} // Taille de l'icône
                                            />
                                        ))}
                                    </span>
                                </p>
                            </div>
                            <p>Très satisfait de ma poterie, elle est encore plus belle en vrai que sur les photos.</p>
                        </div>

                        {/* Avis de Sophie Martin */}
                        <div className="avis">
                            <div className="user-info">
                                <img src={profileF} alt="Sophie Martin" className="profile-icon" />
                                <p>
                                    <strong>Sophie Martin</strong>{" "}
                                    <span className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                color={i < 5 ? "#fbbf24" : "#d1d5db"} // 5 étoiles actives pour Sophie Martin
                                                size={20} // Taille de l'icône
                                            />
                                        ))}
                                    </span>
                                </p>
                            </div>
                            <p>Magnifique tapis berbère! La qualité est exceptionnelle et les motifs sont authentiques.</p>
                        </div>

                        {/* Ajout d'un avis */}
                        <div className="ajout-avis">
                            <h5>Ajouter votre commentaire</h5>
                            <textarea
                                className="avis-input"
                                placeholder="Écrivez votre avis ici..."
                                rows="4"
                            ></textarea>
                            <button className="btn-primary">Publier</button>
                        </div>
                    </div>

                    {/* Recommandations */}
                    <div className="recommandations">
                        <h4>Recommandations Pour Vous</h4>

                        {/* Produit recommandé : Mirror */}
                        <div className="produit-recommande">
                            <img src={MirrorImage} alt="Mirror" />

                            <div className="info-recommande">
                                <p className="titre-produit"><strong>Mirror</strong></p>
                                <p className="prix"><strong>1 499 MAD</strong></p>
                            </div>

                            <div className="recommande-actions">
                                <button className="btn-panier">🛒</button>
                                <button
                                    className={`btn-favoris ${favorisRecommandes.mirror ? "active" : ""}`}
                                    onClick={() => toggleFavoriRecommande("mirror")}
                                    title="Ajouter aux favoris"
                                >
                                    <FaHeart
                                        className="heart-icon"
                                        color={favorisRecommandes.mirror ? "#e74c3c" : "#d1d5db"}
                                        size={24}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Produit recommandé : Table & Chaise */}
                        <div className="produit-recommande">
                            <img src={table_chaiseImage} alt="Table & Chaise" />

                            <div className="info-recommande">
                                <p className="titre-produit"><strong>Table & Chaise</strong></p>
                                <p className="prix"><strong>2 199 MAD</strong></p>
                            </div>

                            <div className="recommande-actions">
                                <button className="btn-panier">🛒</button>
                                <button
                                    className={`btn-favoris ${favorisRecommandes.tableChaise ? "active" : ""}`}
                                    onClick={() => toggleFavoriRecommande("tableChaise")}
                                    title="Ajouter aux favoris"
                                >
                                    <FaHeart
                                        className="heart-icon"
                                        color={favorisRecommandes.tableChaise ? "#e74c3c" : "#d1d5db"}
                                        size={24}
                                    />
                                </button>
                            </div>
                        </div>

                        <button className="btn-secondary">Voir plus de recommandations →</button>
                    </div>
                </div>
            </div>
        </div></Layout>
    );
};

export default PlusdedetailleP;