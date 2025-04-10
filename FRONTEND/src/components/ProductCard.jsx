import "./product-card.css"

function ProductCard({ product }) {
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

  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
        {/* Bouton de favoris */}
        <button className="favorite-button" aria-label="Ajouter aux favoris">
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>

        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-value">({product.rating})</span>
        </div>

        <div className="product-price">
          <span className="price-value">{product.price.toFixed(2)} MAD</span>
        </div>

        <button className="add-to-cart-button">Ajouter au panier</button>
      </div>
    </div>
  )
}

export default ProductCard

