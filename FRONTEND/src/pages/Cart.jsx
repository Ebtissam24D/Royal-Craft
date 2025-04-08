import React, { useState } from 'react';
import { FaArrowLeft, FaTrash, FaCreditCard, FaPaypal, FaApplePay } from 'react-icons/fa';
import './Cart.css';
// CartItem component defined inline to avoid import issues
const CartItem = ({ item, updateQuantity, removeItem }) => {
return (
<div className="cart-item">
<div className="item-image">
<img src={item.image} alt={item.name} />
</div>
<div className="item-details">
<h3>{item.name}</h3>
<p className="item-variant">{item.variant}</p>
</div>
<div className="quantity-controls">
<button
className="quantity-btn"
onClick={() => updateQuantity(item.id, item.quantity - 1)}
disabled={item.quantity <= 1}
>
-
</button>
<span className="quantity">{item.quantity}</span>
<button
className="quantity-btn"
onClick={() => updateQuantity(item.id, item.quantity + 1)}
>
+
</button>
</div>
<div className="item-price">
{item.price.toFixed(2)} MAD
</div>
<button className="remove-btn" onClick={() => removeItem(item.id)}>
<FaTrash />
</button>
</div>
);
};
const Cart = () => {
const [cartItems, setCartItems] = useState([
{
id: 1,
name: 'Sac en Cuire',
variant: 'Marron, 44mm',
quantity: 1,
price: 399.00,
image: 'https://via.placeholder.com/80x80'
},
{
id: 2,
name: 'Luminaire murale',
variant: 'Marron, 44mm',
quantity: 4,
price: 399.00,
image: 'https://via.placeholder.com/80x80'
},
{
id: 3,
name: 'Chaise en tissu',
variant: 'Blanc',
quantity: 2,
price: 199.00,
image: 'https://via.placeholder.com/80x80'
}
]);
const [selectedDelivery, setSelectedDelivery] = useState('standard');
const [selectedPayment, setSelectedPayment] = useState('card');
const [promoCode, setPromoCode] = useState('');
// Function to update item quantity
const updateQuantity = (id, newQuantity) => {
if (newQuantity < 1) return;
CopysetCartItems(cartItems.map(item => 
  item.id === id ? { ...item, quantity: newQuantity } : item
));
};
// Function to remove item from cart
const removeItem = (id) => {
setCartItems(cartItems.filter(item => item.id !== id));
};
// Calculate subtotal
const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
// Delivery cost based on selected option
const getDeliveryCost = () => {
switch(selectedDelivery) {
case 'express': return 9.99;
case 'point': return 4.99;
default: return 4.99; // Standard delivery
}
};
const deliveryCost = getDeliveryCost();
// VAT calculation (20%)
const vat = subtotal * 0.2;
// Total order cost
const total = subtotal + deliveryCost + vat;
return (
<div className="cart-container">
<h1 className="cart-title">Votre Panier ({cartItems.length} articles)</h1>
Copy  <div className="cart-content">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          updateQuantity={updateQuantity} 
          removeItem={removeItem} 
        />
      ))}
      
      <div className="delivery-options">
        <h3>Options de livraison</h3>
        
        <div 
          className={`delivery-option ${selectedDelivery === 'standard' ? 'selected' : ''}`}
          onClick={() => setSelectedDelivery('standard')}
        >
          <input 
            type="radio" 
            name="delivery" 
            className="delivery-radio" 
            checked={selectedDelivery === 'standard'}
            onChange={() => setSelectedDelivery('standard')}
          />
          <div className="delivery-details">
            <div className="delivery-name">Livraison Standard</div>
            <div className="delivery-time">3-5 jours ouvrés · Gratuit</div>
          </div>
        </div>
        
        <div 
          className={`delivery-option ${selectedDelivery === 'express' ? 'selected' : ''}`}
          onClick={() => setSelectedDelivery('express')}
        >
          <input 
            type="radio" 
            name="delivery" 
            className="delivery-radio" 
            checked={selectedDelivery === 'express'}
            onChange={() => setSelectedDelivery('express')}
          />
          <div className="delivery-details">
            <div className="delivery-name">Livraison Express</div>
            <div className="delivery-time">24-48h</div>
          </div>
          <div className="delivery-price">9,99 MAD</div>
        </div>
        
        <div 
          className={`delivery-option ${selectedDelivery === 'point' ? 'selected' : ''}`}
          onClick={() => setSelectedDelivery('point')}
        >
          <input 
            type="radio" 
            name="delivery" 
            className="delivery-radio" 
            checked={selectedDelivery === 'point'}
            onChange={() => setSelectedDelivery('point')}
          />
          <div className="delivery-details">
            <div className="delivery-name">Point Relais</div>
            <div className="delivery-time">3-4 jours ouvrés</div>
          </div>
          <div className="delivery-price">4,99 MAD</div>
        </div>
      </div>
      
      <a href="#" className="continue-shopping">
        <FaArrowLeft /> Continuer mes achats
      </a>
    </div>
    
    <div className="cart-summary">
      <h3 className="summary-title">Récapitulatif</h3>
      
      <div className="summary-line">
        <span>Sous-total</span>
        <span>{subtotal.toFixed(2)} MAD</span>
      </div>
      
      <div className="summary-line">
        <span>Livraison</span>
        <span>{deliveryCost.toFixed(2)} MAD</span>
      </div>
      
      <div className="summary-line">
        <span>TVA (20%)</span>
        <span>{vat.toFixed(2)} MAD</span>
      </div>
      
      <div className="summary-line total">
        <span>Total</span>
        <span>{total.toFixed(2)} MAD</span>
      </div>
      
      <div className="payment-options">
        <div className="payment-title">Mode de paiement</div>
        <div className="payment-methods">
          <div 
            className={`payment-method ${selectedPayment === 'card' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('card')}
          >
            <div className="payment-method-icon">
              <FaCreditCard className="payment-icon" />
            </div>
            <div className="payment-method-name">Carte bancaire</div>
          </div>
          <div 
            className={`payment-method ${selectedPayment === 'paypal' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('paypal')}
          >
            <div className="payment-method-icon">
              <FaPaypal className="payment-icon" />
            </div>
            <div className="payment-method-name">PayPal</div>
          </div>
          <div 
            className={`payment-method ${selectedPayment === 'apple' ? 'active' : ''}`}
            onClick={() => setSelectedPayment('apple')}
          >
            <div >
              <FaApplePay className="payment-icon-apple" />
            </div>
            <div className="payment-method-name">Apple Pay</div>
          </div>
        </div>
      </div>
      
      <div className="promo-container">
        <input 
          type="text" 
          className="promo-input" 
          placeholder="Code promo" 
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button className="promo-button">Appliquer</button>
      </div>
      
      <button className="checkout-button">
        Passer la commande
      </button>
      
      <a href="#" className="continue-shopping">
        <FaArrowLeft /> Continuer mes achats
      </a>
    </div>
  </div>
</div>
);
};
export default Cart;