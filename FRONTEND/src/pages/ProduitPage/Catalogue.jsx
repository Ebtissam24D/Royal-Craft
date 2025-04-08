import React from "react";
import Sidebar from "./Sidebar.jsx";
import Products from "./Products.jsx"; // ton composant de produits

const Catalogue = () => {
    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Products />
            </div>
        </div>
    );
};

export default Catalogue;
