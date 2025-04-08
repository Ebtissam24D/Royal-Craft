import React, { useState } from "react";
import "./PlusdedetailleP.css";

// Import des images
import Tapis1Image from "../../assets/images/Tapis1.png";
import tapiss1Image from "../../assets/images/tapiss1.png";
import tapiss2Image from "../../assets/images/tapiss2.png";
import tapiss3Image from "../../assets/images/tapiss3.png";
import tapiss4Image from "../../assets/images/tapiss4.png";
import table_chaiseImage from "../../assets/images/table_chaises.jpg";
import MirrorImage from "../../assets/images/mirror.jpg";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";

const PlusdedetailleP = () => {
    const [favori, setFavori] = useState(false);
    const [mainImage, setMainImage] = useState(Tapis1Image); // Image principale initiale
    const [thumbnails, setThumbnails] = useState([tapiss1Image, tapiss2Image, tapiss3Image, tapiss4Image]); // Miniatures

    const toggleFavori = () => {
        setFavori(!favori);
    };

    // Gestionnaire de clic pour changer l'image principale et déplacer l'ancienne image dans la section des miniatures
    const handleThumbnailClick = (image) => {
        setThumbnails([mainImage, ...thumbnails.filter(img => img !== mainImage)]); // Déplacer l'ancienne image principale parmi les miniatures
        setMainImage(image); // Met à jour l'image principale avec l'image sélectionnée
    };

    return (
        <div className="product-detail-container">
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
                    <div className="rating">⭐⭐⭐⭐⭐ (4.5/5 - 128 avis)</div>
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
                            className="btn-favoris"
                            onClick={toggleFavori}
                            title="Ajouter aux favoris"
                        >
                            <span className={favori ? "heart filled" : "heart"}>♥</span>
                        </button>

                        <button className="btn-chat">💬</button>
                    </div>
                </div>
            </div>

            <div className="client-recommendations">
                <h2>Avis Clients et Recommandations</h2>

                <div className="avis-recommendations">
                    <div className="avis-recent">
                        <h4>Avis Récents</h4>
                        <div className="avis">
                            <div className="user-info">
                                <img src={profile1} alt="Pierre Dubois" className="profile-icon" />
                                <p><strong>Pierre Dubois</strong> ⭐⭐⭐⭐☆</p>
                            </div>
                            <p>Très satisfait de ma poterie, elle est encore plus belle en vrai que sur les photos.</p>
                        </div>
                        <div className="avis">
                            <div className="user-info">
                                <img src={profile2} alt="Sophie Martin" className="profile-icon" />
                                <p><strong>Sophie Martin</strong> ⭐⭐⭐⭐⭐</p>
                            </div>
                            <p>Magnifique tapis berbère! La qualité est exceptionnelle et les motifs sont authentiques.</p>
                        </div>
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

                    <div className="recommandations">
                        <h4>Recommandations Pour Vous</h4>

                        <div className="produit-recommande">
                            <img src={MirrorImage} alt="Mirror" />

                            <div className="info-recommande">
                                <p className="titre-produit"><strong>Mirror</strong></p>
                                <p className="prix"><strong>1 499 MAD</strong></p>
                            </div>

                            <div className="recommande-actions">
                                <button className="btn-panier">🛒</button>
                                <button className="btn-favoris"> ♥ </button>
                            </div>
                        </div>

                        <div className="produit-recommande">
                            <img src={table_chaiseImage} alt="Table & Chaise" />

                            <div className="info-recommande">
                                <p className="titre-produit"><strong>Table & Chaise</strong></p>
                                <p className="prix"><strong>2 199 MAD</strong></p>
                            </div>
                            <div className="recommande-actions">
                                <button className="btn-panier">🛒</button>
                                <button className="btn-favoris"> ♥ </button>
                            </div>
                        </div>

                        <button className="btn-secondary">Voir plus de recommandations →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlusdedetailleP;
