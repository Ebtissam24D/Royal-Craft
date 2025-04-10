import React, { useState } from "react";
import "./editProduit.css"; // Import du fichier CSS
import LayoutArtisan from "../../components/layoutArtisan";

export default function EditProduct() {
    // États pour les champs du formulaire
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [department, setDepartment] = useState("Electronics");
    const [category, setCategory] = useState("Computers");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("Draft");

    return (
        <LayoutArtisan>  <div className="edit-product-container">
            {/* En-tête */}
            <header className="page-header">
                <h1>Créer Un Produit</h1>
                <button className="delete-button">Supprimer</button>
            </header>

            {/* Content Container */}
            <div className="content-container">
                {/* Form Fields */}
                <form className="edit-form">
                    {/* Section 1 : Title et Slug */}
                    <div className="form-group side-by-side">
                        <div className="field-half">
                            <label htmlFor="title">Titre</label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Entrez le titre du produit"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="field-half">
                            <label htmlFor="slug">Slug</label>
                            <input
                                type="text"
                                id="slug"
                                placeholder="Entrez le slug du produit"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Section 2 : Département et Catégorie */}
                    <div className="form-group side-by-side">
                        <div className="field-half">
                            <label htmlFor="department">Département</label>
                            <select
                                id="department"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value="Electronics">Électronique</option>
                                <option value="Clothing">Vêtements</option>
                                <option value="Books">Livres</option>
                            </select>
                        </div>
                        <div className="field-half">
                            <label htmlFor="category">Catégorie</label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Computers">Ordinateurs</option>
                                <option value="Accessories">Accessoires</option>
                                <option value="Smartphones">Téléphones Intelligents</option>
                            </select>
                        </div>
                    </div>

                    {/* Section 3 : Description */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            rows="5"
                            placeholder="Entrez la description du produit"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Section 4 : Prix et Quantité */}
                    <div className="form-group side-by-side">
                        <div className="field-half">
                            <label htmlFor="price">Prix</label>
                            <input
                                type="number"
                                id="price"
                                placeholder="Entrez le prix"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="field-half">
                            <label htmlFor="quantity">Quantité</label>
                            <input
                                type="number"
                                id="quantity"
                                placeholder="Entrez la quantité"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Section 5 : Statut */}
                    <div className="form-group">
                        <label htmlFor="status">Statut</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Draft">Brouillon</option>
                            <option value="Published">Publié</option>
                        </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button className="save-button" type="submit">Enregistrer</button>
                        <button className="cancel-button" type="button">Annuler</button>
                    </div>
                </form>

                {/* Sidebar */}
                <aside className="sidebar-right">
                    <nav>
                        <ul>
                            <li>
                                <a href="#edit-product" className="active">Créer Un Produit</a>
                            </li>
                            <li>
                                <a href="#product-images">Images Du Produit</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div> </LayoutArtisan>
    );
}