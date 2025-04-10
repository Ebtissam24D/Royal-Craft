"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import {Shapes,Sofa,FlaskConical,Sparkles,Lamp,Grid,Hammer,Briefcase,Gem} from "lucide-react"
import "./productpage.css"

function ProductsPage() {
  // État pour les produits et les filtres
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState(1000)
  const [sortBy, setSortBy] = useState("popularity")
  const [composition, setComposition] = useState({
    coton: false,
    soie: false,
    cuir: false,
    laine: false,
    cedre: false,
  })
  const [rating, setRating] = useState(0)

  // Catégories disponibles
  const categories = [
    { id: "all", name: "Tous les produits ", icon: <Shapes size={18} /> },
    { id: "decore", name: "Decoration & Ameublement", icon: <Sofa size={18} /> },
    { id: "poterie", name: "Poterie & Céramique", icon: <FlaskConical size={18} /> },
    { id: "cosmetiques", name: "Cosmétique Artisanale", icon: <Sparkles size={18} /> },
    { id: "lanterne", name: "Lanterne & Ferronnerie", icon: <Lamp size={18} /> },
    { id: "tapis", name: "Tapis Berberes & Modernes", icon: <Grid size={18} /> },
    { id: "bois", name: "Bois Sculpte & Maqueterie", icon: <Hammer size={18} /> },
    { id: "cuir", name: "Cuir & Maroquinerie", icon: <Briefcase size={18} /> },
    { id: "bijoux", name: "Bijoux & Accessoires", icon: <Gem size={18} />},

  ]

  // Données de produits (simulées)
  useEffect(() => {
    // Dans un cas réel, ceci serait un appel API
    const mockProducts = [
      {
        id: 1,
        name: "Tajine Premium",
        category: "poterie",
        price: 299.99,
        rating: 4.5,
        image: "/placeholder.svg?height=200&width=200",
        composition: "céramique",
      },
      {
        id: 2,
        name: "Miroir Artisanal",
        category: "bois",
        price: 149.99,
        rating: 4.2,
        image: "/placeholder.svg?height=200&width=200",
        composition: "bois",
      },
      {
        id: 3,
        name: "Pouffe de Rangement Artisanal",
        category: "tapis",
        price: 199.99,
        rating: 4.7,
        image: "/placeholder.svg?height=200&width=200",
        composition: "cuir",
      },
      {
        id: 4,
        name: "Panier de Rangement Artisanal",
        category: "accessoires",
        price: 199.99,
        rating: 4.8,
        image: "/placeholder.svg?height=200&width=200",
        composition: "osier",
      },
      {
        id: 5,
        name: "Tajine Premium Terre Cuite",
        category: "poterie",
        price: 299.99,
        rating: 4.6,
        image: "/placeholder.svg?height=200&width=200",
        composition: "céramique",
      },
      {
        id: 6,
        name: "Tajine Premium Décoré",
        category: "poterie",
        price: 299.99,
        rating: 4.4,
        image: "/placeholder.svg?height=200&width=200",
        composition: "céramique",
      },
      {
        id: 7,
        name: "Tajine Premium Bleu",
        category: "poterie",
        price: 299.99,
        rating: 4.3,
        image: "/placeholder.svg?height=200&width=200",
        composition: "céramique",
      },
      {
        id: 8,
        name: "Tajine Premium Noir",
        category: "poterie",
        price: 299.99,
        rating: 4.9,
        image: "/placeholder.svg?height=200&width=200",
        composition: "céramique",
      },
      // Ajoutez plus de produits selon vos besoins
    ]

    setProducts(mockProducts)
    setFilteredProducts(mockProducts)
  }, [])

  // Filtrer les produits lorsque les filtres changent
  useEffect(() => {
    let result = [...products]

    // Filtre par catégorie
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Filtre par prix
    result = result.filter((product) => product.price <= priceRange)

    // Filtre par composition
    const activeCompositions = Object.entries(composition)
      .filter(([_, isActive]) => isActive)
      .map(([name]) => name)

    if (activeCompositions.length > 0) {
      result = result.filter((product) => activeCompositions.some((comp) => product.composition.includes(comp)))
    }

    // Filtre par évaluation
    if (rating > 0) {
      result = result.filter((product) => product.rating >= rating)
    }

    // Tri
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }
    // Pour "popularity", on garde l'ordre par défaut

    setFilteredProducts(result)
  }, [products, selectedCategory, priceRange, composition, rating, sortBy])

  // Gestionnaire pour le changement de catégorie
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
  }

  // Gestionnaire pour le changement de prix
  const handlePriceChange = (e) => {
    setPriceRange(Number.parseInt(e.target.value))
  }

  // Gestionnaire pour le changement de composition
  const handleCompositionChange = (e) => {
    setComposition({
      ...composition,
      [e.target.name]: e.target.checked,
    })
  }

  // Gestionnaire pour le changement d'évaluation
  const handleRatingChange = (value) => {
    setRating(value)
  }

  // Gestionnaire pour le changement de tri
  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  return (
    <div className="products-page">
      {/* Fil d'Ariane */}
      <div className="breadcrumb">
        <a href="/">Accueil</a> &gt; <a href="/catalogue">Catalogue</a> &gt; <span>Tous les produits</span>
      </div>

      <div className="products-container">
        {/* Sidebar des filtres */}
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Catégories</h3>
            <ul className="categories-list">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={selectedCategory === category.id ? "active" : ""}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h3>Prix</h3>
            <div className="price-slider">
              <input type="range" min="0" max="1000" value={priceRange} onChange={handlePriceChange} />
              <div className="price-range">
                <span>0</span>
                <span>{priceRange} MAD</span>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h3>Composition</h3>
            <div className="composition-checkboxes">
              <label>
                <input type="checkbox" name="coton" checked={composition.coton} onChange={handleCompositionChange} />
                Coton
              </label>
              <label>
                <input type="checkbox" name="soie" checked={composition.soie} onChange={handleCompositionChange} />
                Soie
              </label>
              <label>
                <input type="checkbox" name="cuir" checked={composition.cuir} onChange={handleCompositionChange} />
                Cuir
              </label>
              <label>
                <input type="checkbox" name="laine" checked={composition.laine} onChange={handleCompositionChange} />
                Laine
              </label>
              <label>
                <input type="checkbox" name="cedre" checked={composition.cedre} onChange={handleCompositionChange} />
                Cèdre
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h3>Évaluation</h3>
            <div className="rating-filter">
              {[5, 4, 3, 2, 1].map((value) => (
                <div
                  key={value}
                  className={`rating-option ${rating === value ? "active" : ""}`}
                  onClick={() => handleRatingChange(value)}
                >
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < value ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">{value === 5 ? "(5.0)" : `(${value}.0+)`}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Contenu principal */}
        <main className="products-main">
          <div className="products-header">
            <div className="sort-options">
              <label htmlFor="sort">Trier par:</label>
              <select id="sort" value={sortBy} onChange={handleSortChange}>
                <option value="popularity">Popularité</option>
                <option value="price-low">Prix: croissant</option>
                <option value="price-high">Prix: décroissant</option>
                <option value="rating">Évaluation</option>
              </select>
            </div>
            <div className="products-count">
              Affichage de 1-{filteredProducts.length} sur {products.length} produits
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-prev" disabled>
              &lt; Précédent
            </button>
            <div className="pagination-numbers">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>8</button>
            </div>
            <button className="pagination-next">Suivant &gt;</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductsPage

