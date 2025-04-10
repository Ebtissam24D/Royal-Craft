import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importez Link ici
import Sidebar from './Sidebar'; // Assurez-vous d'importer le composant Sidebar
import './Department.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(50); // Nombre d'éléments par page
    const [currentPage, setCurrentPage] = useState(1); // Numéro de page actuel

    // Charger les catégories depuis le localStorage ou une source de données
    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        setCategories(storedCategories);
    }, []);

    // Supprimer une catégorie
    const handleDeleteCategory = (index) => {
        const updatedCategories = categories.filter((_, i) => i !== index);
        setCategories(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
    };

    // Gérer la saisie dans le champ de recherche
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filtrer les catégories en fonction du terme de recherche
    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm)
    );

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

    return (
        <div className="edit-product-container">
            {/* Barre latérale gauche */}
            <Sidebar activeLink="Categories" />

            {/* Contenu principal */}
            <div className="main-content">
                {/* En-tête de la page */}
                <div className="header-section">
                    <h1>Catégories</h1>
                    <Link to="/category/create" className="new-department-button">
                        Nouvelle catégorie
                    </Link>
                </div>

                {/* Panneau de recherche */}
                <div className="search-panel">
                    <div className="search-input-container">
                        {searchTerm.length === 0 && <span className="search-icon">🔍</span>}
                        <input
                            type="text"
                            placeholder="Rechercher par nom"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                {/* Liste des catégories filtrées */}
                {currentCategories.length > 0 ? (
                    <div className="department-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Parent</th>
                                    <th></th> {/* Colonne pour les actions */}
                                </tr>
                            </thead>
                            <tbody>
                                {currentCategories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{category.name}</td>
                                        <td>{category.parent || '-'}</td>
                                        <td>
                                            <Link
                                                to={`/categories/edit/${index}`}
                                                className="edit-button"
                                            >
                                                Modifier
                                            </Link>
                                            <button
                                                type="button"
                                                className="delete-button"
                                                onClick={() => handleDeleteCategory(index)}
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-departments">
                        Aucune catégorie trouvée
                    </div>
                )}

                {/* Pagination */}
                {filteredCategories.length > 0 && (
                    <div className="pagination">
                        <span>
                            Affichage de {indexOfFirstItem + 1} à{' '}
                            {Math.min(indexOfLastItem, filteredCategories.length)} sur{' '}
                            {filteredCategories.length} résultats
                        </span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            className="pagination-select"
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Categories;