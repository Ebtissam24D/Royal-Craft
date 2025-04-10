import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import './Department.css';

const Departments = () => {
    const [departments, setDepartments] = useState([]); // Liste des départements
    const [searchTerm, setSearchTerm] = useState(''); // Champ de recherche

    // Charger les départements depuis le localStorage au chargement du composant
    useEffect(() => {
        const storedDepartments = JSON.parse(localStorage.getItem('departments')) || [];
        setDepartments(storedDepartments);
    }, []);

    // Supprimer un département
    const handleDeleteDepartment = (index) => {
        const updatedDepartments = departments.filter((_, i) => i !== index);
        setDepartments(updatedDepartments);
        localStorage.setItem('departments', JSON.stringify(updatedDepartments));
    };

    // Gérer la saisie dans le champ de recherche
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filtrer les départements en fonction du terme de recherche
    const filteredDepartments = departments.filter((department) =>
        department.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="edit-product-container">
            {/* Barre latérale gauche */}
            <Sidebar activeLink="Departments" />

            {/* Contenu principal */}
            <div className="main-content">
                {/* En-tête de la page */}
                <div className="header-section">
                    <h1>Departments</h1>
                    <Link to="/department/create" className="new-department-button">
                        Nouveau département
                    </Link>
                </div>

                {/* Panneau de recherche */}
                <div className="search-panel">
                    <div className="search-input-container">
                        {/* Afficher l'icône seulement si le champ est vide */}
                        {searchTerm.length === 0 && <span className="search-icon">🔍</span>}
                        <input
                            type="text"
                            placeholder="Rechercher par titre"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                {/* Liste des départements filtrés */}
                {filteredDepartments.length > 0 ? (
                    <div className="department-list">
                        {filteredDepartments.map((department, index) => (
                            <div key={index} className="department-item">
                                <div className="department-details">
                                    <p><strong>{department.name}</strong></p>
                                    <p>{department.slug}</p>
                                    <p>
                                        Active:{' '}
                                        <span
                                            className={`status-icon ${department.active ? 'success-icon' : 'error-icon'
                                                }`}
                                        >
                                            {department.active ? '✓' : '✗'}
                                        </span>
                                    </p>
                                </div>
                                <div className="department-actions">
                                    <Link
                                        to={`/department/edit/${index}`}
                                        className="edit-button"
                                    >
                                        Editer
                                    </Link>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDeleteDepartment(index)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-departments">
                        Aucun département trouvé
                    </div>
                )}
            </div>
        </div>
    );
};

export default Departments;