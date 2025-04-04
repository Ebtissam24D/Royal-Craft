"use client";

import { useState, useEffect } from "react";
import "./Homepage.css"; // Assurez-vous d'importer le fichier CSS pour le style
import slide1 from "../assets/images/slideshow1.png"; // Remplacez par le chemin de votre image
import slide2 from "../assets/images/slideshow2.png";
import slide3 from "../assets/images/slideshow3.png"; // Remplacez par le chemin de votre image
function HomePage() {
  // État pour suivre l'index de l'image actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tableau d'images pour le diaporama
  const slides = [
    {
      image: slide1,
      title: "L'Art Marocain Authentique",
      subtitle:
        "Découvrez notre collection unique d'artisanat marocain traditionnel",
    },
    {
      image: slide2,
      title: "Artisanat Traditionnel",
      subtitle: "Des pièces uniques fabriquées à la main par nos artisans",
    },
    {
      image: slide3,
      title: "Héritage Culturel",
      subtitle: "Préserver et promouvoir le patrimoine artisanal marocain",
    },
  ];

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Fonction pour passer à la diapositive précédente
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  // Changement automatique de diapositive toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Banner Slideshow */}
      <section className="hero-slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className="hero-overlay"
              
            >
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="btn-discover">Découvrir</button>
            </div>
          </div>
        ))}

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Aller à la diapositive ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Le reste du contenu de la page reste inchangé */}
      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Nos Catégories</h2>

        <div className="categories-container">
          <button
            className="nav-arrow nav-prev"
            aria-label="Catégorie précédente"
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
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image tous-produits"></div>
              <h3>Tous les produits</h3>
            </div>

            <div className="category-card">
              <div className="category-image bijoux"></div>
              <h3>Bijoux Traditionnels</h3>
            </div>

            <div className="category-card">
              <div className="category-image poterie"></div>
              <h3>Poterie & Céramique</h3>
            </div>

            <div className="category-card">
              <div className="category-image tapis"></div>
              <h3>Tapis Berberes & Modernes</h3>
            </div>

            <div className="category-card">
              <div className="category-image cosmetique"></div>
              <h3>Cosmétique Artisanale</h3>
            </div>
          </div>

          <button
            className="nav-arrow nav-next"
            aria-label="Catégorie suivante"
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
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions-section">
        <h2 className="section-title">Promotions Spéciales</h2>

        <div className="promo-banner">
          <div className="promo-content">
            <div className="promo-text">
              <h3 className="promo-title">OFFRE LIMITE</h3>
              <p className="promo-subtitle">
                LIMITED TIME OFFER <span className="promo-highlight">70%</span>{" "}
                OFF
              </p>
              <p className="promo-action">... SHOP NOW ...</p>
            </div>

            <div className="promo-timer">
              <div className="timer-label">JUSQU'À</div>
              <div className="timer-value">23:11:05</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">

        <div className="section-header">
          <img src="../assets/images/nosBonnesAffairres" alt="" />
          <button className="btn-view-more">Voir plus</button>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="product-image chaise">
              <div className="discount-badge">-30%</div>
            </div>
            <div className="product-info">
              <h3 className="product-title">Chaise Artisanal</h3>
              <div className="product-price">
                <span className="original-price">299,99 MAD</span>
                <span className="current-price">209,99 MAD</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image table">
              <div className="discount-badge">-25%</div>
            </div>
            <div className="product-info">
              <h3 className="product-title">
                Table avec des chaises artisanal
              </h3>
              <div className="product-price">
                <span className="original-price">199,99 MAD</span>
                <span className="current-price">149,99 MAD</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image pouf1">
              <div className="discount-badge">-30%</div>
            </div>
            <div className="product-info">
              <h3 className="product-title">chaussures berbere</h3>
              <div className="product-price">
                <span className="original-price">299,99 MAD</span>
                <span className="current-price">209,99 MAD</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image lanterne">
              <div className="discount-badge">-30%</div>
            </div>
            <div className="product-info">
              <h3 className="product-title">chaussures berbere</h3>
              <div className="product-price">
                <span className="original-price">299,99 MAD</span>
                <span className="current-price">209,99 MAD</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image applique">
              <div className="discount-badge">-30%</div>
            </div>
            <div className="product-info">
              <h3 className="product-title">chaussures berbere</h3>
              <div className="product-price">
                <span className="original-price">299,99 MAD</span>
                <span className="current-price">209,99 MAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
