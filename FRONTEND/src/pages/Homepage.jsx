"use client";

import { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import image1 from "../assets/images/nosBonnesAffairres.png";
import slide1 from "../assets/images/slideshow1.png";
import slide2 from "../assets/images/slideshow2.png";
import slide3 from "../assets/images/slideshow3.png";
import slide4 from "../assets/images/slideshow4.jpg";
import slide5 from "../assets/images/slideshow5.png";
import slide6 from "../assets/images/slideshow6.jpg";
import chaise from "../assets/images/chaise.jpg";
import table from "../assets/images/table_chaises.jpg";
import pouf1 from "../assets/images/poufe.jpg";
import orreiller from "../assets/images/oreiller.jpg";
import poterie from "../assets/images/poterie2.png";
import tapis from "../assets/images/tapis1.jpg";
import B_Card from "../components/B_Card";
import Card from "../components/Card";



function HomePage() {
   // État pour le compte à rebours
   const [countdown, setCountdown] = useState({
    hours: 23,
    minutes: 11,
    seconds: 5,
  }); 

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAdSlide, setCurrentAdSlide] = useState(0);

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
    {
      image: slide4,
      title: "L'Art Marocain Authentique",
      subtitle:
        "Découvrez notre collection unique d'artisanat marocain traditionnel",
    },
    {
      image: slide5,
      title: "Artisanat Traditionnel",
      subtitle: "Des pièces uniques fabriquées à la main par nos artisans",
    },
    {
      image: slide6,
      title: "Héritage Culturel",
      subtitle: "Préserver et promouvoir le patrimoine artisanal marocain",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Ref pour la section des catégories
  const categoriesRef = useRef(null);

  const scrollLeft = () => {
    categoriesRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    categoriesRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // Compte à rebours
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Réinitialiser le compte à rebours une fois terminé
          return { hours: 23, minutes: 11, seconds: 5 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Formater le compte à rebours
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }
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
            <div className="hero-overlay">
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

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Nos Catégories</h2>

        <div className="categories-container">
          <button
            className="nav-arrow nav-prev"
            aria-label="Catégorie précédente"
            onClick={scrollLeft}
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

          <div className="categories-grid" ref={categoriesRef}>
            <div className="category-card">
              <div className="category-image tous-produits"></div>
              <h3>Tous les produits</h3>
            </div>

            <div className="category-card">
              <div className="category-image poterie"></div>
              <h3>Poterie & Céramique</h3>
            </div>

            <div className="category-card">
              <div className="category-image tapis"></div>
              <h3>Tapis Berberes & Traditionel</h3>
            </div>

            <div className="category-card">
              <div className="category-image decoration"></div>
              <h3>Decoration & Ameublement </h3>
            </div>

            <div className="category-card">
              <div className="category-image ferronerie"></div>
              <h3>Lanterne & Ferronnerie</h3>
            </div>

            <div className="category-card">
              <div className="category-image bois"></div>
              <h3>Bois Sculpte & Maqueterie </h3>
            </div>

            <div className="category-card">
              <div className="category-image cuir"></div>
              <h3>Cuir & Maroquinerie</h3>
            </div>

            <div className="category-card">
              <div className="category-image bijoux"></div>
              <h3>Bijoux & Accessoires</h3>
            </div>

            <div className="category-card">
              <div className="category-image cosmetique"></div>
              <h3>Cosmétique Artisanale</h3>
            </div>

          </div>

          <button
            className="nav-arrow nav-next"
            aria-label="Catégorie suivante"
            onClick={scrollRight}
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
          <div className="promo-flowers left-flowers"></div>
          <div className="promo-flowers right-flowers"></div>

          <div className="promo-content">
            <div className="promo-text">
              <h3 className="promo-title">OFFRE LIMITE</h3>
              <p className="promo-subtitle">
                LIMITED TIME OFFER <span className="promo-highlight">30 %</span> OFF
              </p>
              <p className="promo-action">... SHOP NOW ...</p>
            </div>

            <div className="promo-timer">
              <div className="timer-value">
              <div className="timer-label">JUSQU'À</div>
                {formatTime(countdown.hours)}:{formatTime(countdown.minutes)}:{formatTime(countdown.seconds)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="section-header">
          <img className="section-title1" src={image1} alt="" />
          <button className="btn-view-more">Voir plus</button>
        </div>

        <div className="products-grid">
          <B_Card img={chaise} title="Chaise Artisanal" discount={30} price={299.99}/>
          <B_Card img={table} title="Table avec des chaises artisanal" discount={30} price={199.99}/>
          <B_Card img={pouf1} title="poufe berbere" discount={30} price={299.99}/>
          <B_Card img={orreiller} title="oreiller berbere" discount={30} price={299.99}/>
          <B_Card img={poterie} title="ensemble de poterie" discount={30} price={299.99}/>
        
        </div>
      </section>
            {/* Nouveautés Section */}
            <section className="nouveautes-section">
        <div className="section-header">
          <h2 className="section-title">nouveautés</h2>
          <a href="/nouveautes" className="link-view-more">
            Voir plus 
          </a>
        </div>

        <div className="products-carousel-container">

          <div className="products-carousel">
            <Card image={chaise} badge_title={"NOUVEAU"} P_title={"Chaise Artisanale en Bois"} price={159.99} />
            <Card image={table} badge_title={"NOUVEAU"} P_title={"Table Artisanale en Bois"} price={159.99} />
            <Card image={orreiller} badge_title={"NOUVEAU"} P_title={"Oreiller Berbère"} price={159.99} />
            <Card image={poterie} badge_title={"NOUVEAU"} P_title={"Poterie Artisanale"}  price={159.99} />
            <Card image={tapis} badge_title={"NOUVEAU"} P_title={"Textile Décoratif Traditionnel"} price={159.99} />
          

          </div>

        </div>
      </section>
      {/* Best Sellers Section */}
     
      <section className="bestsellers-section">
        <div className="section-header">
          <h2 className="section-title">Best sellers</h2>
        </div>

        <div className="products-grid bestsellers-grid">
          <Card image={tapis} badge_title={"BEST-SELLER"} P_title={"Textile Décoratif Traditionnel"} rating={4.5} vote={1250} price={159.99} />
          <Card image={poterie} badge_title={"BEST-SELLER"} P_title={"Poterie Artisanale"} rating={4} vote={1250} price={159.99} />
          <Card image={chaise} badge_title={"BEST-SELLER"} P_title={"Chaise Artisanale en Bois"} rating={5} vote={1250} price={159.99} />
          <Card image={orreiller} badge_title={"BEST-SELLER"} P_title={"Oreiller Berbère"} rating={5} vote={1250} price={159.99} />
          <Card image={table} badge_title={"BEST-SELLER"} P_title={"Table Artisanale en Bois"} rating={3} vote={1250} price={159.99} />
        </div>

        <div className="pagination">
          <button className="pagination-arrow prev" aria-label="Page précédente">
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

          <div className="pagination-numbers">
            <button className="pagination-number active">1</button>
            <button className="pagination-number">2</button>
            <button className="pagination-number">3</button>
            <button className="pagination-number">...</button>
          </div>

          <button className="pagination-arrow next" aria-label="Page suivante">
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
            {/* Contact Section */}
            <section className="contact-section">
        <h2 className="section-title">Contactez-nous</h2>

        <div className="contact-container">
          <div className="contact-form-container">
            <h3 className="contact-subtitle">Contact & Support</h3>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Nom complet</label>
                <input type="text" id="fullName" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-textarea"></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <h3 className="contact-subtitle">Informations</h3>

            <div className="info-item">
              <div className="info-icon">
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
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="info-text">
                123 Rue de l'Artisanat, Médina
                <br />
                Marrakech, Maroc
              </p>
            </div>

            <div className="info-item">
              <div className="info-icon">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <p className="info-text">+212 5XX-XXXXXX</p>
            </div>

            <div className="info-item">
              <div className="info-icon">
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
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <p className="info-text">contact@artisanat-maroc.com</p>
            </div>

            <div className="contact-map">
              <iframe
                title="Carte de localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.310664123456!2d-7.981084684796123!3d31.629472981324123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe1234567890!2sMarrakech%2C%20Maroc!5e0!3m2!1sen!2sus!4v1234567890123"
                width="552"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
