import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import './Department.css';

const CreateDepartment = () => {
    const [formData, setFormData] = useState({ name: '', slug: '', active: false });
    const [message, setMessage] = useState(''); // Pour afficher des messages (confirmation ou erreur)
    const navigate = useNavigate();

    // Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Fonction générique pour créer un département
    const createDepartment = () => {
        if (!formData.name || !formData.slug) {
            setMessage('Veuillez remplir tous les champs.');
            return;
        }

        // Récupérer les départements existants depuis le localStorage
        const existingDepartments = JSON.parse(localStorage.getItem('departments')) || [];

        // Vérifier si un département avec le même nom ou slug existe déjà
        const isDuplicate = existingDepartments.some(
            (department) =>
                department.name.toLowerCase() === formData.name.toLowerCase() ||
                department.slug.toLowerCase() === formData.slug.toLowerCase()
        );

        if (isDuplicate) {
            setMessage('Ce département existe déjà.');
            return;
        }

        // Ajouter le nouveau département
        const newDepartment = { ...formData };
        existingDepartments.push(newDepartment);

        // Enregistrer les départements mis à jour dans le localStorage
        localStorage.setItem('departments', JSON.stringify(existingDepartments));

        // Réinitialiser le message et le formulaire
        setMessage('Département créé avec succès.');
        setFormData({ name: '', slug: '', active: false });
    };

    // Action pour "Créer" (redirection vers la liste des départements)
    const handleCreateAndRedirect = () => {
        createDepartment();
        setTimeout(() => {
            navigate('/departments');
        }, 1500);
    };

    // Action pour "Créer et ajouter un autre" (rester sur la page de création)
    const handleCreateAndStay = () => {
        createDepartment();
    };

    return (
        <div className="create-department-container">
            {/* Barre latérale */}
            <Sidebar activeLink="Departments" />

            {/* Contenu principal */}
            <div className="main-content">
                <h2>Créer un département</h2>

                {/* Message de confirmation ou d'erreur */}
                {message && (
                    <p
                        className={`message ${message.includes('succès') ? 'success-message' : 'error-message'
                            }`}
                    >
                        {message}
                    </p>
                )}

                <form className="create-form">
                    {/* Champ Nom */}
                    <div className="form-group">
                        <label htmlFor="name">Nom :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Entrez le nom du département"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Champ Slug */}
                    <div className="form-group">
                        <label htmlFor="slug">Slug :</label>
                        <input
                            type="text"
                            id="slug"
                            name="slug"
                            placeholder="Entrez le slug du département"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                        />
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
                            onClick={handleCreateAndRedirect}
                        >
                            Créer
                        </button>
                        <button
                            type="button"
                            className="create-another-button"
                            onClick={handleCreateAndStay}
                        >
                            Créer et ajouter un autre
                        </button>
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate('/departments')}
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDepartment;