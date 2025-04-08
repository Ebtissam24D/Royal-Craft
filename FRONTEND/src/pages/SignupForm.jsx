import React, { useState } from 'react';
import './SignupForm.css'; // Assurez-vous d'importer le fichier CSS pour le style
import logo from '../assets/images/logo1.png';
import potrerie from '../assets/images/pottery-vases.png';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation du formulaire
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas!");
      return;
    }
    console.log('Formulaire soumis:', formData);
    // Ici vous pouvez ajouter votre logique d'API
  };

  return (
    <div className="signup-container">
      <div className="content-wrapper">
        {/* Section gauche avec l'image */}
        <div className="image-section">
          <div className="pottery-image">
            <img src={potrerie} alt=""
            style={{width: '100%',height: '100%'}} />
          </div>
        </div>

        {/* Section droite avec le formulaire */}
        <div className="form-section">
          {/* Cercles décoratifs */}
          <div className="circle-top"></div>
          <div className="circle-bottom"></div>

          {/* Formulaire de signup */}
          <div className="signup-form">
            <div className="form-title">
              <img
                src={logo}
                alt="Logo"
                style={{ width: '50px', height: 'auto' }}
              />
              <h1 className="title">ROYAL CRAFT</h1>
              <p className="subtitle">
                Votre touche royale, notre savoir-faire artisanal!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-inputs">
                <div className="input-field">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email / Phone"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-field">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="signup-button">
                Signup
              </button>

              <div className="divider">
                <div className="line"></div>
                <span className="text">or</span>
                <div className="line"></div>
              </div>

              <div className="social-logins">
                <button className="social-button" type="button">
                  <FaFacebookF size={20} color="#3b5998" />
                </button>
                <button className="social-button" type="button">
                  <FaGoogle size={20} color="#db4a39" />
                </button>
              </div>

              <div className="login-redirect">
                Already Registered? <a href="#">Login</a>
              </div>

              <div className="footer-links">
                <a href="#">Terms & Conditions</a>
                <a href="#">Support</a>
                <a href="#">Customer Care</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
