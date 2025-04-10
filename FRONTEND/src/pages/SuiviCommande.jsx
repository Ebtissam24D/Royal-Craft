"use client"

import { useState, useEffect } from "react"
import { MapPin, Package, Truck, CheckCircle, Clock, ShoppingBag, Calendar, Eye, TruckIcon } from "lucide-react"
import "./suivi-commande.css"

function SuiviCommande() {
  // État pour les données de la commande
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  // Simuler le chargement des données de commande
  useEffect(() => {
    // Dans un cas réel, vous feriez un appel API avec l'ID de commande
    setTimeout(() => {
      setOrder({
        id: "12345",
        status: "en-livraison", // commande-validee, en-preparation, expedie, en-livraison, livree
        statusLabel: "En cours de livraison",
        estimatedDelivery: "Aujourd'hui 14:30 - 15:30",
        items: [
          {
            id: 1,
            name: "Luminaire artisanal avec cuivre",
            price: 899.99,
            image: "/placeholder.svg?height=60&width=60",
          },
          {
            id: 2,
            name: "Chaise avec tissu berbère",
            price: 199.99,
            image: "/placeholder.svg?height=60&width=60",
          },
        ],
        summary: {
          subtotal: 1099.99,
          shipping: 9.99,
          tax: 221.99,
          total: 1331.96,
        },
        shippingAddress: {
          name: "KARIM LOUKI",
          address: "12 Rue Ibn Khaldoun",
          postalCode: "75001",
          city: "Paris",
          country: "France",
        },
        orderHistory: [
          {
            id: "12345",
            date: "15/03/2024",
            total: 1331.96,
            status: "En cours",
          },
          {
            id: "12344",
            date: "10/03/2024",
            total: 435.99,
            status: "Livré",
          },
        ],
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <div className="loading">Chargement des informations de commande...</div>
  }

  // Déterminer l'étape actuelle pour la barre de progression
  const getStepProgress = (status) => {
    const steps = {
      "commande-validee": 1,
      "en-preparation": 2,
      expedie: 3,
      "en-livraison": 4,
      livree: 5,
    }
    return (steps[status] / 5) * 100
  }
  
    
  return (
    <div className="order-tracking-page">
      <div className="order-tracking-container">
        <div className="order-header">
          <h1>Suivi de Commande #{order.id}</h1>
          <div className="order-status">{order.statusLabel}</div>
        </div>

        {/* Barre de progression */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${getStepProgress(order.status)}%` }}
              aria-valuenow={getStepProgress(order.status)}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div className="progress-steps">
            <div
              className={`progress-step ${order.status === "commande-validee" || getStepProgress(order.status) >= 20 ? "completed" : ""}`}
            >
              <div className="step-icon">
                <CheckCircle size={20} />
              </div>
              <div className="step-label">Commande validée</div>
            </div>

            <div
              className={`progress-step ${order.status === "en-preparation" || getStepProgress(order.status) >= 40 ? "completed" : ""}`}
            >
              <div className="step-icon">
                <Package size={20} />
              </div>
              <div className="step-label">En préparation</div>
            </div>

            <div
              className={`progress-step ${order.status === "expedie" || getStepProgress(order.status) >= 60 ? "completed" : ""}`}
            >
              <div className="step-icon">
                <ShoppingBag size={20} />
              </div>
              <div className="step-label">Expédié</div>
            </div>

            <div
              className={`progress-step ${order.status === "en-livraison" || getStepProgress(order.status) >= 80 ? "completed" : ""} ${order.status === "en-livraison" ? "current" : ""}`}
            >
              <div className="step-icon">
                <Truck  size={20} />
              </div>
              <div className="step-label">En livraison</div>
            </div>

            <div
              className={`progress-step ${order.status === "livree" || getStepProgress(order.status) >= 100 ? "completed" : ""}`}
            >
              <div className="step-icon">
                <MapPin size={20} />
              </div>
              <div className="step-label">Livré</div>
            </div>
          </div>
        </div>

        <div className="order-content">
          <div className="order-main">
            {/* Détails de la livraison */}
            <section className="order-section">
                <h2>
                    <MapPin size={18} className="section-icon" />
                    Détails de la livraison
                </h2>
                <div className="delivery-details">
                    <div className="delivery-map">
                        {/* Carte interactive avec localisation */}
                        <input
                            type="text"
                            placeholder="Entrez une adresse ou un lieu"
                            className="location-input"
                            onChange={(e) => {
                                const address = e.target.value;
                                // Mettre à jour la carte en fonction de l'adresse saisie
                                updateMap(address);
                            }}
                        />
                        <div id="map" className="map-container"></div>
                    </div>
                    <div className="delivery-time">
                        <div className="time-label">
                            <Clock size={16} />
                            <span>Temps estimé d'arrivée:</span>
                        </div>
                        <div className="time-value">{order.estimatedDelivery}</div>
                    </div>
                </div>
            </section>
            <section className="order-section">
              <h2>
                <ShoppingBag size={18} className="section-icon" />
                Articles commandés
              </h2>
              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">{item.price.toFixed(2)} MAD</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Historique des commandes */}
            <section className="order-section">
              <h2>
                <Calendar size={18} className="section-icon" />
                Historique des commandes
              </h2>
              <div className="order-history">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>N° Commande</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Statut</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orderHistory.map((historyItem) => (
                      <tr key={historyItem.id}>
                        <td>#{historyItem.id}</td>
                        <td>{historyItem.date}</td>
                        <td>{historyItem.total.toFixed(2)} MAD</td>
                        <td>
                          <span className={`status-badge ${historyItem.status.toLowerCase().replace(" ", "-")}`}>
                            {historyItem.status}
                          </span>
                        </td>
                        <td>
                          <button className="view-details-btn">
                            <Eye size={14} />
                            Voir les détails
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="order-sidebar">
            {/* Résumé de la commande */}
            <section className="order-section summary-section">
              <h2>Résumé de la commande</h2>
              <div className="order-summary">
                <div className="summary-row">
                  <span>Sous-total</span>
                  <span>{order.summary.subtotal.toFixed(2)} MAD</span>
                </div>
                <div className="summary-row">
                  <span>Livraison</span>
                  <span>{order.summary.shipping.toFixed(2)} MAD</span>
                </div>
                <div className="summary-row">
                  <span>TVA</span>
                  <span>{order.summary.tax.toFixed(2)} MAD</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{order.summary.total.toFixed(2)} MAD</span>
                </div>
              </div>
            </section>

            {/* Adresse de livraison */}
            <section className="order-section address-section">
              <h2>Adresse de livraison</h2>
              <div className="delivery-address">
                <p className="address-name">{order.shippingAddress.name}</p>
                <p className="address-line">{order.shippingAddress.address}</p>
                <p className="address-line">
                  {order.shippingAddress.postalCode} {order.shippingAddress.city}
                </p>
                <p className="address-line">{order.shippingAddress.country}</p>
              </div>
              <button className="modify-address-btn">Modifier adresse</button>
            </section>

            {/* Assistance */}
            <section className="order-section help-section">
              <h2>Besoin d'aide ?</h2>
              <p>Si vous avez des questions concernant votre commande, n'hésitez pas à nous contacter.</p>
              <button className="contact-support-btn">Contacter le support</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )


}

export default SuiviCommande
