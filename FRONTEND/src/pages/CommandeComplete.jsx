"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Package, Truck, MapPin, ArrowRight } from "lucide-react"
import "./commande-complete.css"

function CommandeComplete() {
  const [orderNumber, setOrderNumber] = useState("12345")

  // Simuler la génération d'un numéro de commande
  useEffect(() => {
    const randomNum = Math.floor(10000 + Math.random() * 90000)
    setOrderNumber(randomNum.toString())
  }, [])

  // Rediriger vers le suivi de commande
  const goToTracking = () => {
    router.push(`/suivi-commande?id=${orderNumber}`)
  }

  // Rediriger vers la page d'accueil
  const goToHome = () => {
    router.push("/")
  }

  return (
    <div className="order-complete-page">
      <div className="order-complete-container">
        <div className="success-icon">
          <CheckCircle size={60} />
        </div>

        <h1>Commande confirmée !</h1>
        <p className="order-number">
          Commande #{orderNumber} • <span className="order-date">15 Mars 2024</span>
        </p>

        <p className="thank-you-message">
          Merci pour votre commande. Nous vous enverrons un e-mail de confirmation avec les détails de votre commande et
          les informations de suivi.
        </p>

        <div className="order-timeline">
          <div className="timeline-step completed">
            <div className="step-icon">
              <CheckCircle size={24} />
            </div>
            <div className="step-content">
              <h3>Commande confirmée</h3>
              <p>Votre commande a été reçue et est en cours de traitement.</p>
            </div>
          </div>

          <div className="timeline-connector"></div>

          <div className="timeline-step">
            <div className="step-icon">
              <Package size={24} />
            </div>
            <div className="step-content">
              <h3>En préparation</h3>
              <p>Nous préparons votre commande avec soin.</p>
            </div>
          </div>

          <div className="timeline-connector"></div>

          <div className="timeline-step">
            <div className="step-icon">
              <Truck size={24} />
            </div>
            <div className="step-content">
              <h3>En livraison</h3>
              <p>Votre commande est en route vers votre adresse.</p>
            </div>
          </div>

          <div className="timeline-connector"></div>

          <div className="timeline-step">
            <div className="step-icon">
              <MapPin size={24} />
            </div>
            <div className="step-content">
              <h3>Livré</h3>
              <p>Votre commande a été livrée avec succès.</p>
            </div>
          </div>
        </div>

        <div className="delivery-info">
          <div className="info-card">
            <h3>Adresse de livraison</h3>
            <p>KARIM LOUKI</p>
            <p>12 Rue Ibn Khaldoun</p>
            <p>75001 Paris, France</p>
          </div>

          <div className="info-card">
            <h3>Méthode de livraison</h3>
            <p>Livraison standard</p>
            <p>Délai estimé: 3-5 jours ouvrables</p>
          </div>

          <div className="info-card">
            <h3>Méthode de paiement</h3>
            <p>Carte bancaire</p>
            <p>**** **** **** 4242</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="track-order-btn" onClick={goToTracking}>
            Suivre ma commande
            <ArrowRight size={16} />
          </button>
          <button className="continue-shopping-btn" onClick={goToHome}>
            Continuer mes achats
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommandeComplete
