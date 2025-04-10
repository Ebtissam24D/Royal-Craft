"use client"

import { useState, useEffect } from "react"
import "./profil-artisan.css"

function ProfilArtisan() {
  // État pour le formulaire de contact
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    telephone: "",
    projectType: "",
    message: "",
  })

  // État pour l'artisan
  const [artisan, setArtisan] = useState(null)
  const [loading, setLoading] = useState(true)

  // Charger les données de l'artisan
  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      setArtisan({
        id: 1,
        name: "Ahmed ALAMI",
        profession: "Artisan Menuisier",
        profileImage: "/placeholder.svg?height=100&width=100",
        bannerImage: "/placeholder.svg?height=300&width=1000",
        experience: "10 ans",
        area: "Jadida et Ifni",
        status: "Artisan Indépendant",
        about:
          "Passionné par le travail du bois depuis mon plus jeune âge, j'ai développé mon expertise en menuiserie traditionnelle et contemporaine au fil des années. Mon atelier, situé au cœur de Fès, me permet de réaliser vos créations sur mesure avec précision et savoir-faire traditionnel et techniques modernes.",
        realizations: [
          {
            id: 1,
            image: "/placeholder.svg?height=200&width=300",
            title: "Table en bois massif",
          },
          {
            id: 2,
            image: "/placeholder.svg?height=200&width=300",
            title: "Armoire en cèdre",
          },
          {
            id: 3,
            image: "/placeholder.svg?height=200&width=300",
            title: "Cuisine intégrée",
          },
          {
            id: 4,
            image: "/placeholder.svg?height=200&width=300",
            title: "Bibliothèque sur mesure",
          },
        ],
        rating: 4.8,
        reviewsCount: 147,
        reviews: [
          {
            id: 1,
            author: "Nabil L.",
            rating: 5,
            comment:
              "Excellent travail sur notre bibliothèque sur mesure. Ahmed est très professionnel et à l'écoute. Je recommande vivement!",
            date: "il y a 2 semaines",
          },
          {
            id: 2,
            author: "Ahmed B.",
            rating: 4,
            comment: "Très beau travail, finitions soignées. Travail soigné et dans les délais.",
            date: "il y a 1 mois",
          },
        ],
        contact: {
          phone: "06 12 34 56 78",
          email: "AHMEDALAMI@gmail.com",
          address: "28011, MARRAKECH",
          hours: "Lun-Ven: 9h-19h",
        },
      })
      setLoading(false)
    }, 500)
  }, [])

  // Gestionnaire pour le changement des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm({
      ...contactForm,
      [name]: value,
    })
  }

  // Gestionnaire pour l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pourriez envoyer les données du formulaire à votre API
    console.log("Formulaire soumis:", contactForm)
    // Réinitialiser le formulaire après l'envoi
    setContactForm({
      name: "",
      email: "",
      telephone: "",
      projectType: "",
      message: "",
    })
    alert("Votre message a été envoyé avec succès!")
  }

  // Fonction pour générer les étoiles d'évaluation
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    // Étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star filled">
          ★
        </span>,
      )
    }

    // Demi-étoile si nécessaire
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half-filled">
          ★
        </span>,
      )
    }

    // Étoiles vides
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star">
          ★
        </span>,
      )
    }

    return stars
  }

  if (loading) {
    return <div className="loading">Chargement...</div>
  }

  return (
    <div className="artisan-profile-page">
      {/* Bannière et informations de base */}
      <div className="profile-banner" style={{ backgroundImage: `url(${artisan.bannerImage})` }}>
        <div className="profile-header">
          <div className="profile-image-container">
            <img src={artisan.profileImage || "/placeholder.svg"} alt={artisan.name} className="profile-image" />
          </div>
          <div className="profile-title">
            <h1>{artisan.name}</h1>
            <p>{artisan.profession}</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-main">
          {/* Informations professionnelles */}
          <section className="profile-section">
            <h2>Informations Professionnelles</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>Expérience</h3>
                <p>{artisan.experience}</p>
              </div>
              <div className="info-item">
                <h3>Zone d'intervention</h3>
                <p>{artisan.area}</p>
              </div>
              <div className="info-item">
                <h3>Statut</h3>
                <p>{artisan.status}</p>
              </div>
            </div>
          </section>

          {/* À propos */}
          <section className="profile-section">
            <h2>À Propos</h2>
            <p className="about-text">{artisan.about}</p>
          </section>

          {/* Réalisations */}
          <section className="profile-section">
            <h2>Réalisations</h2>
            <div className="realizations-grid">
              {artisan.realizations.map((item) => (
                <div key={item.id} className="realization-item">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} />
                  <div className="realization-overlay">
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Évaluations */}
          <section className="profile-section">
            <h2>Évaluations</h2>
            <div className="overall-rating">
              <div className="stars">{renderStars(artisan.rating)}</div>
              <span className="rating-text">
                {artisan.rating} ({artisan.reviewsCount} avis)
              </span>
            </div>

            <div className="reviews-list">
              {artisan.reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-header">
                    <div className="review-author">{review.author}</div>
                    <div className="review-stars">{renderStars(review.rating)}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="profile-sidebar">
          {/* Formulaire de contact */}
          <div className="contact-form-container">
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={contactForm.telephone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Type de projet</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={contactForm.projectType}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionner...</option>
                  <option value="meuble">Meuble sur mesure</option>
                  <option value="cuisine">Cuisine intégrée</option>
                  <option value="renovation">Rénovation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Envoyer
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="contact-info">
            <h3>Informations de contact</h3>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{artisan.contact.phone}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{artisan.contact.email}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{artisan.contact.address}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{artisan.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Publicité */}
          <div className="advertisement">
            <img src="/placeholder.svg?height=200&width=300" alt="Publicité" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilArtisan

