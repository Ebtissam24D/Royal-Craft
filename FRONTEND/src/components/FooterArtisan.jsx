import "./Footer.css";
import logo from "../assets/images/logo1.png";

function FooterArtisan() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section brand-section">
                    <div className="logo-container1">
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
                        <p className="brand-tagline">
                            Votre destination pour l'artisanat
                            <br />
                            marocain authentique
                        </p>
                    </div>
                </div>

                <div className="footer-section links-section">
                    <h3 className="footer-heading">Liens Rapides</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="/Tableau de board">Tableau de board</a>
                        </li>
                        <li>
                            <a href="/Categories">Categories</a>
                        </li>
                        <li>
                            <a href="/Commandes">Commandes</a>
                        </li>
                        <li>
                            <a href="/Avis Clients">Avis Clients</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section social-section">
                    <div className="social-icons">
                        <a
                            href="https://facebook.com"
                            aria-label="Facebook"
                            className="social-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            aria-label="Instagram"
                            className="social-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a
                            href="https://x.com"
                            aria-label="X"
                            className="social-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-section newsletter-section">
                    <h3 className="footer-heading">Contactez-nous</h3>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="newsletter-input"
                            aria-label="Adresse email pour la newsletter"
                        />
                        <button
                            type="submit"
                            className="newsletter-button"
                            aria-label="S'abonner à la newsletter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">
                    © 2025 Royal Craft - Artisanat Marocain. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}

export default FooterArtisan;
