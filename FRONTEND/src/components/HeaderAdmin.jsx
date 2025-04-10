import React from "react";
import "./Header.css";
import logo from "../assets/images/logo1.png";

function HeaderAdmin() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo + titre */}
                <div className="logo-container">
                    <div>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "34px", height: "auto" }}
                        />
                    </div>
                    <a href="/" className="logo-title">
                        Royal Craft
                    </a>
                </div>

                {/* Menu de navigation */}
                <nav className="nav-menu">
                    <a href="/" className="nav-link">
                        Tableau de bord
                    </a>
                    <a href="/Gestion des artisans" className="nav-link">
                        Gestion des artisans
                    </a>
                    <a href="/ Catalogue" className="nav-link">
                        Catalogue
                    </a>
                    <a href="/Gestion des commandes" className="nav-link">
                        Gestion des commandes
                    </a>
                    <a href="/Avis & Réclamations" className="nav-link">
                        Avis & Réclamations
                    </a>

                </nav>

                {/* Icônes côté droit */}
                <div className="header-icons">
                    {/* Recherche */}
                    <button aria-label="Recherche" className="icon-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>

                    {/* Notification */}
                    <button aria-label="Notifications" className="icon-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </button>

                    {/* Profil */}
                    <button aria-label="Profil" className="icon-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M4 21v-2a4 4 0 0 1 3-3.87"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderAdmin;
