import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Department.css';

const CreateCategory = () => {
    const [formData, setFormData] = useState({ name: '', parent: '', active: false });
    const [departments, setDepartments] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Charger les départements depuis le localStorage
    useEffect(() => {
        const storedDepartments = JSON.parse(localStorage.getItem('departments')) || [];
        setDepartments(storedDepartments);
    }, []);

    // Effacer automatiquement les messages après 3 secondes
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    // Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Créer une nouvelle catégorie
    const handleCreateCategory = () => {
        if (!formData.name || !formData.parent) {
            setMessage('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        const isDuplicate = storedCategories.some(
            (category) => category.name.toLowerCase() === formData.name.toLowerCase()
        );

        if (isDuplicate) {
            setMessage('Cette catégorie existe déjà.');
            return;
        }

        const newCategory = { ...formData };
        storedCategories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(storedCategories));

        setMessage('Catégorie créée avec succès.');
        setFormData({ name: '', parent: '', active: false });

        setTimeout(() => {
            navigate('/categories');
        }, 1500);
    };

    // Créer une catégorie et rester sur la page
    const handleCreateAndStay = () => {
        if (!formData.name || !formData.parent) {
            setMessage('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
        const isDuplicate = storedCategories.some(
            (category) => category.name.toLowerCase() === formData.name.toLowerCase()
        );

        if (isDuplicate) {
            setMessage('Cette catégorie existe déjà.');
            return;
        }

        const newCategory = { ...formData };
        storedCategories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(storedCategories));

        setMessage('Catégorie créée avec succès.');
        setFormData({ name: '', parent: '', active: false });
    };

    return (
        <div className="create-department-container">
            {/* Barre latérale */}
            <Sidebar activeLink="Categories" />

            {/* Contenu principal */}
            <div className="main-content">
                <h2>Créer une catégorie</h2>

                {/* Message de confirmation ou d'erreur */}
                {message && (
                    <p
                        className={`message ${message.includes('succès') ? 'success-message' : 'error-message'
                            }`}
                    >
                        {message}
                    </p>
                )}

                {/* Formulaire de création */}
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
                            required
                        >
                            <option value="" disabled>
                                Sélectionnez un département
                            </option>
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
                            className="create-button"
                            onClick={handleCreateCategory}
                        >
                            Créer
                        </button>
                        <button
                            type="button"
                            className="create-another-button"
                            onClick={handleCreateAndStay}
                        >
                            Créer et ajouter une autre
                        </button>
                        <Link to="/categories" className="cancel-button">
                            Annuler
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;