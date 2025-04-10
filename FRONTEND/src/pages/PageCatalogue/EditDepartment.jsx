import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar'; // Importer le composant Sidebar
import './Department.css';

const EditDepartment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', slug: '', active: false });

    useEffect(() => {
        const mockDepartments = JSON.parse(localStorage.getItem('departments')) || [];
        const departmentToEdit = mockDepartments[id];
        if (departmentToEdit) {
            setFormData(departmentToEdit);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleUpdateDepartment = () => {
        if (formData.name && formData.slug) {
            const mockDepartments = JSON.parse(localStorage.getItem('departments')) || [];
            mockDepartments[id] = formData; // Mettre à jour le département modifié
            localStorage.setItem('departments', JSON.stringify(mockDepartments));
            navigate('/departments'); // Redirection vers la liste des départements
        }
    };

    return (
        <div className="edit-department-container">
            {/* Barre latérale */}
            <Sidebar activeLink="Departments" />

            {/* Contenu principal */}
            <div className="main-content">
                {/* En-tête de la page */}
                <div className="page-header">
                    <h2>Modifier le département</h2>
                </div>

                {/* Formulaire d'édition */}
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
                            className="save-button"
                            onClick={handleUpdateDepartment}
                        >
                            Modifier
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

export default EditDepartment;