import React from "react";

const B_Card = ({img,discount,title,price}) => {
  return (
    <div className="product-card">
      <div className="product-image ">
        <img src={img} alt="" />
        <div className="discount-badge">{`-${discount}%`}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">
          <span className="original-price">{`${price} MAD`}</span>
          <span className="current-price">{`${Math.floor(price*discount)/100} MAD`}</span>
        </div>
      </div>
    </div>
  );
};

export default B_Card;
