"use client"

import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
import { Heart, ShoppingCart, Trash2, AlertCircle } from "lucide-react"
import "./favoris.css"
import Layout from "../components/Layout"

export default function FavorisPage() {
//   const router = useRouter()
  const [favoriteItems, setFavoriteItems] = useState([])
  const [loading, setLoading] = useState(true)

  // Simuler le chargement des favoris depuis un stockage
  useEffect(() => {
    // Dans un cas réel, vous récupéreriez les favoris depuis localStorage ou une API
    setTimeout(() => {
      setFavoriteItems([
        {
          id: 1,
          name: "Tajine Premium Terre Cuite",
          price: 299.99,
          originalPrice: 399.99,
          discount: 25,
          rating: 4.8,
          reviews: 124,
          image: "/placeholder.svg?height=200&width=200",
          category: "Poterie",
        },
        {
          id: 2,
          name: "Tapis Berbère Traditionnel",
          price: 599.99,
          originalPrice: 699.99,
          discount: 14,
          rating: 4.9,
          reviews: 87,
          image: "/placeholder.svg?height=200&width=200",
          category: "Tapis",
        },
        {
          id: 3,
          name: "Lampe Marocaine en Cuivre",
          price: 249.99,
          originalPrice: 299.99,
          discount: 17,
          rating: 4.7,
          reviews: 56,
          image: "/placeholder.svg?height=200&width=200",
          category: "Décoration",
        },
        {
            id: 1,
            name: "Tajine Premium Terre Cuite",
            price: 299.99,
            originalPrice: 399.99,
            discount: 25,
            rating: 4.8,
            reviews: 124,
            image: "/placeholder.svg?height=200&width=200",
            category: "Poterie",
          },
          {
            id: 2,
            name: "Tapis Berbère Traditionnel",
            price: 599.99,
            originalPrice: 699.99,
            rating: 4.9,
            reviews: 87,
            image: "/placeholder.svg?height=200&width=200",
            category: "Tapis",
          },
          {
            id: 3,
            name: "Lampe Marocaine en Cuivre",
            price: 249.99,
            originalPrice: 299.99,
            discount: 17,
            rating: 4.7,
            reviews: 56,
            image: "/placeholder.svg?height=200&width=200",
            category: "Décoration",
          },
      ])
      setLoading(false)
    }, 800)
  }, [])

  // Fonction pour supprimer un article des favoris
  const removeFromFavorites = (id) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== id))
  }

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    // Dans un cas réel, vous ajouteriez l'article au panier via un contexte ou une API
    console.log("Article ajouté au panier:", item)
    alert(`${item.name} a été ajouté au panier`)
  }

  // Fonction pour naviguer vers la page de détails du produit
  const goToProductDetails = (id) => {
    router.push(`/produits/${id}`)
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
    return <div className="loading">Chargement de vos favoris...</div>
  }

  return (
 <Layout>
       <div className="favorites-page">
      <div className="favorites-container">
        <div className="favorites-header">
          <h1>
            <Heart size={24} className="header-icon" />
            Mes Favoris
          </h1>
          <p className="favorites-count">{favoriteItems.length} articles</p>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="empty-favorites">
            <div className="empty-icon">
              <AlertCircle size={48} />
            </div>
            <h2>Votre liste de favoris est vide</h2>
            <p>Parcourez notre catalogue et ajoutez des articles à vos favoris pour les retrouver ici.</p>
            <button className="browse-products-btn" onClick={() => router.push("/produits")}>
              Découvrir nos produits
            </button>
          </div>
        ) : (
          <>
            <div className="favorites-grid">
              {favoriteItems.map((item) => (
                <div key={item.id} className="favorite-item">
                  <div className="item-image-container">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="item-image"
                      onClick={() => goToProductDetails(item.id)}
                    />
                    {item.discount > 0 && <div className="discount-badge">-{item.discount}%</div>}
                    <button
                      className="remove-favorite-btn"
                      onClick={() => removeFromFavorites(item.id)}
                      aria-label="Retirer des favoris"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="item-details">
                    <div className="item-category">{item.category}</div>
                    <h3 className="item-name" onClick={() => goToProductDetails(item.id)}>
                      {item.name}
                    </h3>

                    <div className="item-rating">
                      <div className="stars">{renderStars(item.rating)}</div>
                      <span className="reviews-count">({item.reviews})</span>
                    </div>

                    <div className="item-price">
                      {item.originalPrice > item.price && (
                        <span className="original-price">{item.originalPrice.toFixed(2)} MAD</span>
                      )}
                      <span className="current-price">{item.price.toFixed(2)} MAD</span>
                    </div>

                    <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                      <ShoppingCart size={16} />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="favorites-actions">
              <button className="continue-shopping-btn" onClick={() => router.push("/produits")}>
                Continuer mes achats
              </button>
              <button className="view-cart-btn" onClick={() => router.push("/panier")}>
                <ShoppingCart size={16} />
                Voir mon panier
              </button>
            </div>
          </>
        )}
      </div>
    </div>
 </Layout>
  )
}
