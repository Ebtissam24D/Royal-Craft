import React from "react";
import Sidebar from "./Sidebar"; // ⚠️ adapte le chemin si besoin
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import tagineImage from "../../assets/images/tagines.png";
import mirrorImage from "../../assets/images/mirror.jpg";
import orieller1Image from "../../assets/images/oreiller1.jpg";
import PaniersImage from "../../assets/images/Paniers.jpg";
import TapisMarocaineImage from "../../assets/images/TapisMarocaine.png";
import CandlesImage from "../../assets/images/Candles.jpg";
import "./products.css";

const products = [
    {
        id: 1,
        image: tagineImage,
        title: "T-shirt Premium",
        category: "Coton bio",
        price: "29,99€",
        rating: 4.5,
    },
    {
        id: 2,
        image: mirrorImage,
        title: "Miroire Artisanal",
        category: "Fibre Naturelles",
        price: "149,99€",
        rating: 4.0,
    },
    {
        id: 3,
        image: orieller1Image,
        title: "Panier De Rangement Artisanal ",
        category: "Fibre Naturelles",
        price: "199,99€",
        rating: 5.0,
    },
    {
        id: 4,
        image: mirrorImage,
        title: "Miroire Artisanal",
        category: "Fibre Naturelles",
        price: "149,99€",
        rating: 4.0,
    },
    {
        id: 5,
        image: PaniersImage,
        title: "T-shirt Premium",
        category: "Coton bio",
        price: "29,99€",
        rating: 4.5,
    },
    {
        id: 6,
        image: TapisMarocaineImage,
        title: "Tapis Marocain",
        category: "Fait main",
        price: "249,99€",
        rating: 4.7,
    },
    {
        id: 7,
        image: CandlesImage,
        title: "Bougies Artisanales",
        category: "Cire naturelle",
        price: "39,99€",
        rating: 4.2,
    },
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
        <div className="card-reviews">
            {[...Array(fullStars)].map((_, index) => (
                <AiFillStar key={index} color="gold" />
            ))}
            {halfStar && <AiOutlineStar color="gold" />}
            <span> ({rating.toFixed(1)})</span>
        </div>
    );
};

function Products() {
    return (
        <div className="products-page">
            <section className="card-container">
                {products.map((product) => (
                    <div className="card product-card" key={product.id}>
                        <div className="product-image">
                            <img src={product.image} alt={product.title} />
                            {/* <div className="discount-badge">-50%</div> // à activer si tu veux l’afficher */}
                        </div>
                        <div className="card-details">
                            <h3 className="card-title">{product.title}</h3>
                            <p className="card-category">{product.category}</p>
                            <StarRating rating={product.rating} />
                            <div className="price">{product.price}</div>
                            <div className="card-price">
                                <button className="add-to-cart">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Products;
