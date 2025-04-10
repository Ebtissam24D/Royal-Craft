import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assurez-vous d'importer le composant Sidebar
import './Department.css';

const EditCategory = () => {
    const { id } = useParams(); // Récupérer l'ID depuis l'URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', parent: '', active: false });
    const [departments, setDepartments] = useState([]); // Liste des départements

    // Charger les données de la catégorie depuis le localStorage
    useEffect(() => {
        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        const categoryToEdit = storedCategories[id];
        if (categoryToEdit) {
            setFormData(categoryToEdit);
        }

        // Charger les départements depuis le localStorage
        const storedDepartments = JSON.parse(localStorage.getItem('departments')) || [];
        setDepartments(storedDepartments);
    }, [id]);

    // Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Mettre à jour la catégorie
    const handleUpdateCategory = () => {
        if (!formData.name) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        storedCategories[id] = formData; // Mettre à jour la catégorie modifiée
        localStorage.setItem('categories', JSON.stringify(storedCategories));
        navigate('/categories'); // Redirection vers la liste des catégories
    };

    return (
        <div className="edit-department-container">
            {/* Barre latérale */}
            <Sidebar activeLink="Categories" />

            {/* Contenu principal */}
            <div className="main-content">
                <h2>Modifier la catégorie</h2>

                {/* Formulaire d'édition */}
                <form className="create-form">
                    {/* Champ Nom */}
                    <div className="form-group">
                        <label htmlFor="name">Nom :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Entrez le nom de la catégorie"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Champ Parent (liste déroulante) */}
                    <div className="form-group">
                        <label htmlFor="parent">Parent :</label>
                        <select
                            id="parent"
                            name="parent"
                            value={formData.parent}
                            onChange={handleChange}
                        >
                            <option value="">Sélectionnez un département</option>
                            {departments.map((department, index) => (
                                <option key={index} value={department.name}>
                                    {department.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Champ Activer */}
                    <div className="form-group checkbox-group">
                        <label htmlFor="active">
                            <span>Activer :</span>
                            <input
                                type="checkbox"
                                id="active"
                                name="active"
                                checked={formData.active}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    {/* Boutons d'action */}
                    <div className="action-buttons">
                        <button
                            type="button"
                            className="save-button"
                            onClick={handleUpdateCategory}
                        >
                            Modifier
                        </button>
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate('/categories')}
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCategory;