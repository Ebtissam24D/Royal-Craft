"use client"

import { useState, useEffect } from "react"
import "./nos-artisans.css"
import Layout from "../components/Layout"

function NosArtisans() {
  // État pour les artisans et les filtres
  const [artisans, setArtisans] = useState([])
  const [filteredArtisans, setFilteredArtisans] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [specialty, setSpecialty] = useState("all")
  const [sortBy, setSortBy] = useState("popularity")
  const [currentPage, setCurrentPage] = useState(1)
  const artisansPerPage = 8

  // Liste des spécialités disponibles
  const specialties = [
    { id: "all", name: "Toutes les spécialités" },
    { id: "menuisier", name: "Menuisier" },
    { id: "potier", name: "Potier/Potière" },
    { id: "bijoutier", name: "Bijoutier/Bijoutière" },
    { id: "ebeniste", name: "Ébéniste" },
    { id: "tapis", name: "Artisan de tapis" },
    { id: "cuir", name: "Artisan du cuir" },
  ]

  // Données des artisans (simulées)
  useEffect(() => {
    // Dans un cas réel, ceci serait un appel API
    const mockArtisans = [
      {
        id: 1,
        name: "Ahmed Karimi",
        specialty: "menuisier",
        specialtyLabel: "Menuisier",
        rating: 4.5,
        reviews: 138,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 2,
        name: "Asmae Talbi",
        specialty: "potier",
        specialtyLabel: "Potière",
        rating: 5.0,
        reviews: 93,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 3,
        name: "Rachid Rachimi",
        specialty: "bijoutier",
        specialtyLabel: "Bijoutière",
        rating: 4.8,
        reviews: 76,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 4,
        name: "Ali benla",
        specialty: "ebeniste",
        specialtyLabel: "Ébéniste",
        rating: 4.7,
        reviews: 142,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 5,
        name: "Ahmed Karimi",
        specialty: "menuisier",
        specialtyLabel: "Menuisier",
        rating: 4.5,
        reviews: 138,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 6,
        name: "Asmae Talbi",
        specialty: "potier",
        specialtyLabel: "Potière",
        rating: 5.0,
        reviews: 93,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 7,
        name: "Rachid Rachimi",
        specialty: "bijoutier",
        specialtyLabel: "Bijoutière",
        rating: 4.8,
        reviews: 76,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 8,
        name: "Ali benla",
        specialty: "ebeniste",
        specialtyLabel: "Ébéniste",
        rating: 4.7,
        reviews: 142,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 9,
        name: "Ahmed Karimi",
        specialty: "menuisier",
        specialtyLabel: "Menuisier",
        rating: 4.5,
        reviews: 138,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "../assets/pages/images/bois.png",
          "../assets/pages/",
          "../assets/pages/",
        ],
      },
      {
        id: 10,
        name: "Asmae Talbi",
        specialty: "potier",
        specialtyLabel: "Potière",
        rating: 5.0,
        reviews: 93,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 11,
        name: "Rachid Rachimi",
        specialty: "bijoutier",
        specialtyLabel: "Bijoutière",
        rating: 4.8,
        reviews: 76,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
      {
        id: 12,
        name: "Ali benla",
        specialty: "ebeniste",
        specialtyLabel: "Ébéniste",
        rating: 4.7,
        reviews: 142,
        profileImage: "/placeholder.svg?height=80&width=80",
        workImages: [
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
          "/placeholder.svg?height=100&width=100",
        ],
      },
    ]

    setArtisans(mockArtisans)
    setFilteredArtisans(mockArtisans)
  }, [])

  // Filtrer les artisans lorsque les filtres changent
  useEffect(() => {
    let result = [...artisans]

    // Filtre par terme de recherche
    if (searchTerm) {
      result = result.filter(
        (artisan) =>
          artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.specialtyLabel.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtre par spécialité
    if (specialty !== "all") {
      result = result.filter((artisan) => artisan.specialty === specialty)
    }

    // Tri
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews)
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }
    // Pour "popularity", on garde l'ordre par défaut

    setFilteredArtisans(result)
    setCurrentPage(1) // Réinitialiser à la première page après filtrage
  }, [artisans, searchTerm, specialty, sortBy])

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

  // Gestionnaire pour le changement de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Gestionnaire pour le changement de spécialité
  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value)
  }

  // Gestionnaire pour le changement de tri
  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  // Pagination
  const indexOfLastArtisan = currentPage * artisansPerPage
  const indexOfFirstArtisan = indexOfLastArtisan - artisansPerPage
  const currentArtisans = filteredArtisans.slice(indexOfFirstArtisan, indexOfLastArtisan)
  const totalPages = Math.ceil(filteredArtisans.length / artisansPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Layout>
    <div className="artisans-page">
      <div className="artisans-container">
        <h1 className="page-title">Nos Artisans</h1>

        <div className="artisans-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher un artisan..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className="filter-dropdowns">
            <select className="specialty-select" value={specialty} onChange={handleSpecialtyChange}>
              {specialties.map((spec) => (
                <option key={spec.id} value={spec.id}>
                  {spec.name}
                </option>
              ))}
            </select>

            <select className="sort-select" value={sortBy} onChange={handleSortChange}>
              <option value="popularity">Trier par</option>
              <option value="rating">Évaluation</option>
              <option value="reviews">Nombre d'avis</option>
              <option value="name">Nom</option>
            </select>
          </div>
        </div>

        {/* Grille d'artisans */}
        <div className="artisans-grid">
          {currentArtisans.map((artisan) => (
            <div key={artisan.id} className="artisan-card">
              <div className="artisan-header">
                <div className="artisan-profile">
                  <img src={artisan.profileImage || "/placeholder.svg"} alt={artisan.name} className="profile-image" />
                  <div className="artisan-info">
                    <h3 className="artisan-name">{artisan.name}</h3>
                    <p className="artisan-specialty">{artisan.specialtyLabel}</p>
                  </div>
                </div>

                <div className="artisan-rating">
                  <div className="stars">{renderStars(artisan.rating)}</div>
                  <span className="reviews-count">
                    {artisan.rating} ({artisan.reviews} avis)
                  </span>
                </div>
              </div>

              <div className="artisan-work">
                {artisan.workImages.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`Travail de ${artisan.name} ${index + 1}`}
                    className="work-image"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-prev" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1
            // Afficher seulement quelques pages pour éviter une longue liste
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  className={`pagination-number ${currentPage === pageNumber ? "active" : ""}`}
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            } else if (
              (pageNumber === currentPage - 2 && currentPage > 3) ||
              (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return (
                <span key={pageNumber} className="pagination-dots">
                  ...
                </span>
              )
            }
            return null
          })}

          <button
            className="pagination-next"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default NosArtisans

