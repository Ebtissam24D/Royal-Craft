import React, { useState } from "react";
import { AiFillStar, AiOutlineTag } from "react-icons/ai"; // Ajout de AiOutlineTag ici
import {
    FaGem,
    FaVial,
    FaPaintBrush,
    FaTshirt,
    FaTree,
} from "react-icons/fa"; // Icônes de catégories
import "./Sidebar.css";

const Sidebar = () => {
    const [price, setPrice] = useState(500);
    const [selectedRating, setSelectedRating] = useState(null); // État pour suivre la note sélectionnée

    // Gestion du clic sur une étoile
    const handleStarClick = (rating) => {
        setSelectedRating(rating); // Met à jour la note sélectionnée
    };

    return (
        <aside className="sidebar">
            {/* Section Catégories */}
            <h3>Catégories</h3>
            <ul className="category-list">
                <li>
                    <input type="checkbox" id="bijoux" />
                    <label htmlFor="bijoux">
                        <FaGem /> Bijoux
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="poterie" />
                    <label htmlFor="poterie">
                        <FaPaintBrush /> Poterie et Céramique
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="decoration" />
                    <label htmlFor="decoration">
                        <AiOutlineTag /> Décoration
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="cuir" />
                    <label htmlFor="cuir">
                        <FaTshirt /> Cuir et Maroquinerie
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="bois" />
                    <label htmlFor="bois">
                        <FaTree /> Travail du Bois
                    </label>
                </li>
                <li>
                    <input type="checkbox" id="cosmetique" />
                    <label htmlFor="cosmetique">
                        <FaVial /> Cosmétique Artisanale
                    </label>
                </li>
            </ul>

            {/* Section Prix */}
            <h3>Prix</h3>
            <div className="price-filter">
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))} // Conversion en nombre
                />
                <p>{price}€</p>
            </div>

            {/* Section Composition */}
            <h3>Composition</h3>
            <ul className="composition-list">
                <li>
                    <input type="checkbox" id="coton" />
                    <label htmlFor="coton">Coton</label>
                </li>
                <li>
                    <input type="checkbox" id="sable" />
                    <label htmlFor="sable">Sable</label>
                </li>
                <li>
                    <input type="checkbox" id="cuir-composition" />
                    <label htmlFor="cuir-composition">Cuir</label>
                </li>
                <li>
                    <input type="checkbox" id="cuivre" />
                    <label htmlFor="cuivre">Cuivre</label>
                </li>
                <li>
                    <input type="checkbox" id="cedre" />
                    <label htmlFor="cedre">Cèdre</label>
                </li>
            </ul>

            {/* Section Évaluation */}
            <h3>Évaluation</h3>
            <div className="star-filter" style={{ cursor: "pointer" }}>
                {[...Array(5)].map((_, index) => (
                    <AiFillStar
                        key={index}
                        onClick={() => handleStarClick(index + 1)} // Gestion du clic
                        color={index < selectedRating ? "gold" : "#ddd"} // Couleur dorée si sélectionnée
                        style={{ fontSize: "24px" }}
                    />
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;