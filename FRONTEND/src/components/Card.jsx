import React from 'react'

const Card = ({image,badge_title,P_title,rating,vote,price}) => {
  return (
    <div className="product-card">
      <div className="product-image ">
        <img src={image} alt="Product" />
        <div className={rating?"bestseller-badge":"new-badge"}>{badge_title}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{P_title}</h3>
      { rating && <div className="product-rating">
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`star ${index < Math.floor(rating) ? 'filled' : index < rating ? 'half-filled' : ''}`}
              >
                {index < Math.floor(rating) ? '★' : index < rating ? '☆' : '☆'}
              </span>
            ))}
          </div>
          <span className="reviews-count">{`${vote} votes`}</span>
        </div>}
        <div className="product-price">
          <span className="current-price">{`${price} MAD`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card