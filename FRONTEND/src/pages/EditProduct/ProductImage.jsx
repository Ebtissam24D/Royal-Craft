import React, { useState } from "react";
import "./ProductImage.css"; // Import du fichier CSS
import LayoutArtisan from '../../components/layoutArtisan';

export default function ProductImage() {
    // State to store uploaded images
    const [uploadedImages, setUploadedImages] = useState([]);

    // Handle file upload
    const handleFileUpload = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImages([...uploadedImages, ...newImages]);
    };

    // Remove an image by its index
    const removeImage = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    return (
        <LayoutArtisan>   <div className="edit-product-container">
            {/* Main Content */}
            <main className="main-content">
                <header className="page-header">
                    <h1>Images Du Produit</h1>
                    <button className="delete-button">Supprimer</button>
                </header>

                {/* Image Upload Section */}
                <section className="image-section">
                    <h2>Images</h2>
                    <div className="image-uploader">
                        {/* File Input */}
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileUpload}
                            style={{ display: "none" }}
                            id="fileInput"
                        />
                        {/* Browse Button */}
                        <label htmlFor="fileInput" className="browse-link">
                            Drag & Drop your files or Browse
                        </label>

                        {/* Image Preview */}
                        <div className="image-preview">
                            {uploadedImages.map((imageUrl, index) => (
                                <div key={index} className="image-item">
                                    <img src={imageUrl} alt={`Uploaded Image ${index + 1}`} />
                                    {/* Remove Button */}
                                    <button
                                        className="remove-image"
                                        onClick={() => removeImage(index)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Action Buttons */}
                <footer className="action-buttons">
                    <button className="save-button">Enregistrer</button>
                    <button className="cancel-button">Annuler</button>
                </footer>
            </main>

            {/* Sidebar Droite */}
            <aside className="sidebar-right">
                <nav>
                    <ul>
                        <li>
                            <a href="#edit-product">Créé Un Produit</a>
                        </li>
                        <li>
                            <a href="#product-images" className="active">Images Du Produit</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div> </LayoutArtisan>
    );
}