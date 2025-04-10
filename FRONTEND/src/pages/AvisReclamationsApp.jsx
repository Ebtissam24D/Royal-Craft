import React, { useState, useEffect } from 'react';
import { Search, Filter, MessageCircle, Check, X, AlertTriangle, Star } from 'lucide-react';
import './Avies.css'; // Importer le fichier CSS pour le style
import Layout from '../components/Layout';
export default function AvisReclamationsApp() {
  // État pour stocker les avis/réclamations
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [replyText, setReplyText] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showReplyModal, setShowReplyModal] = useState(false);

  // Simuler le chargement des données
  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { 
          id: 1, 
          type: 'avis', 
          nom: 'Martin Dupont', 
          email: 'martin@example.com', 
          date: '2025-04-05', 
          contenu: 'Très satisfait du service client, réactif et efficace !',
          note: 5,
          status: 'published',
          replied: false
        },
        { 
          id: 2, 
          type: 'reclamation', 
          nom: 'Sophie Leroy', 
          email: 'sophie@example.com', 
          date: '2025-04-03', 
          contenu: 'Commande non reçue après 15 jours. Je demande un remboursement.',
          status: 'pending',
          urgent: true,
          replied: false
        },
        { 
          id: 3, 
          type: 'avis', 
          nom: 'Jean Michel', 
          email: 'jean@example.com', 
          date: '2025-04-06', 
          contenu: 'Produit de qualité moyenne, ne correspond pas tout à fait à la description.',
          note: 2,
          status: 'published',
          replied: true
        },
        { 
          id: 4, 
          type: 'reclamation', 
          nom: 'Marie Durand', 
          email: 'marie@example.com', 
          date: '2025-04-01', 
          contenu: 'Article défectueux reçu. Besoin d\'un remplacement rapidement.',
          status: 'resolved',
          urgent: false,
          replied: true
        },
        { 
          id: 5, 
          type: 'avis', 
          nom: 'Philippe Lambert', 
          email: 'philippe@example.com', 
          date: '2025-04-08', 
          contenu: 'Livraison rapide et emballage soigné. Je recommande !',
          note: 4,
          status: 'published',
          replied: false
        },
      ];
      
      setFeedbacks(mockData);
      setFilteredFeedbacks(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  // Filtrer les avis/réclamations
  useEffect(() => {
    let result = [...feedbacks];
    
    // Filtrer par onglet
    if (activeTab === 'avis') {
      result = result.filter(item => item.type === 'avis');
    } else if (activeTab === 'reclamations') {
      result = result.filter(item => item.type === 'reclamation');
    } else if (activeTab === 'pending') {
      result = result.filter(item => item.status === 'pending');
    } else if (activeTab === 'urgent') {
      result = result.filter(item => item.urgent === true);
    }
    
    // Filtrer par recherche
    if (searchTerm) {
      result = result.filter(
        item => 
          item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.contenu.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredFeedbacks(result);
  }, [feedbacks, activeTab, searchTerm]);

  // Gérer le statut d'un avis/réclamation
  const handleStatusChange = (id, newStatus) => {
    const updatedFeedbacks = feedbacks.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    );
    setFeedbacks(updatedFeedbacks);
  };

  // Ouvrir la modal de réponse
  const openReplyModal = (feedback) => {
    setSelectedFeedback(feedback);
    setShowReplyModal(true);
  };

  // Envoyer une réponse
  const handleSendReply = () => {
    if (!replyText.trim()) return;
    
    const updatedFeedbacks = feedbacks.map(item => 
      item.id === selectedFeedback.id ? { ...item, replied: true } : item
    );
    
    setFeedbacks(updatedFeedbacks);
    setReplyText('');
    setShowReplyModal(false);
    setSelectedFeedback(null);
    
    // Simuler l'envoi de la réponse (ici on afficherait un toast de succès dans une vraie application)
    alert('Réponse envoyée avec succès !');
  };

  // Afficher les étoiles pour la note
  const renderStars = (note) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index}
        size={16} 
        className={index < note ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
      />
    ));
  };

  // Rendu conditionnel pendant le chargement
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold">Chargement des données...</div>
      </div>
    );
  }

  return (
    
   <Layout> <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Avis & Réclamations</h1>
      <p className="text-gray-600 mb-8">
        Consultez, modérez et répondez aux commentaires et réclamations de vos clients.
      </p>
      
      {/* Onglets et Recherche */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('all')}
          >
            Tous
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'avis' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('avis')}
          >
            Avis
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'reclamations' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('reclamations')}
          >
            Réclamations
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'pending' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('pending')}
          >
            En attente
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'urgent' ? 'bg-white shadow text-red-600' : 'hover:bg-gray-200'}`}
            onClick={() => setActiveTab('urgent')}
          >
            Urgents
          </button>
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="text-blue-700 text-lg font-semibold">Total</div>
          <div className="text-2xl font-bold">{feedbacks.length}</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <div className="text-indigo-700 text-lg font-semibold">Avis</div>
          <div className="text-2xl font-bold">{feedbacks.filter(item => item.type === 'avis').length}</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <div className="text-orange-700 text-lg font-semibold">Réclamations</div>
          <div className="text-2xl font-bold">{feedbacks.filter(item => item.type === 'reclamation').length}</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="text-red-700 text-lg font-semibold">Urgents</div>
          <div className="text-2xl font-bold">{feedbacks.filter(item => item.urgent).length}</div>
        </div>
      </div>
      
      {/* Liste des avis et réclamations */}
      {filteredFeedbacks.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Aucun élément correspondant à vos critères.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFeedbacks.map((feedback) => (
            <div 
              key={feedback.id} 
              className={`border rounded-lg p-4 ${
                feedback.status === 'pending' ? 'border-l-4 border-l-yellow-500' : 
                feedback.status === 'resolved' ? 'border-l-4 border-l-green-500' : 
                'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-semibold text-lg">{feedback.nom}</h3>
                    {feedback.urgent && (
                      <span className="badge badge-urgent ml-2">
                        <AlertTriangle size={12} className="mr-1" />
                        Urgent
                      </span>
                    )}
                    {feedback.type === 'avis' && (
                      <span className="ml-2 flex items-center">
                        {renderStars(feedback.note)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{feedback.email} • {feedback.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`badge ${
                    feedback.status === 'published' ? 'badge-publié' :
                    feedback.status === 'pending' ? 'badge-en-attente' : 
                    'badge-résolu'
                  }`}>
                    {feedback.status === 'published' ? 'Publié' : 
                     feedback.status === 'pending' ? 'En attente' : 'Résolu'}
                  </span>
                  <span className={`badge ${
                    feedback.type === 'avis' ? 'badge-avis' : 'badge-réclamation'
                  }`}>
                    {feedback.type === 'avis' ? 'Avis' : 'Réclamation'}
                  </span>
                </div>
              </div>
              
              <p className="mb-4">{feedback.contenu}</p>
              
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex flex-wrap gap-2">
                  <button 
                    className={`button ${
                      feedback.status === 'published' ? 'button-masquer' : 'button-publier'
                    }`}
                    onClick={() => handleStatusChange(feedback.id, feedback.status === 'published' ? 'pending' : 'published')}
                  >
                    {feedback.status === 'published' ? (
                      <>
                        <X size={16} className="mr-1" />
                        Masquer
                      </>
                    ) : (
                      <>
                        <Check size={16} className="mr-1" />
                        Publier
                      </>
                    )}
                  </button>
                  
                  {feedback.type === 'reclamation' && feedback.status !== 'resolved' && (
                    <button 
                      className="button button-résolu"
                      onClick={() => handleStatusChange(feedback.id, 'resolved')}
                    >
                      <Check size={16} className="mr-1" />
                      Marquer résolu
                    </button>
                  )}
                </div>
                
                <button 
                  className={`button ${
                    feedback.replied ? 'button-déjà-répondu' : 'button-répondre'
                  }`}
                  onClick={() => openReplyModal(feedback)}
                  disabled={feedback.replied}
                >
                  <MessageCircle size={16} className="mr-1" />
                  {feedback.replied ? 'Déjà répondu' : 'Répondre'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Modal de réponse */}
      {showReplyModal && selectedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">Répondre à {selectedFeedback.nom}</h3>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Message original :</p>
              <p>{selectedFeedback.contenu}</p>
            </div>
            
            <textarea
              className="w-full p-3 border rounded-lg min-h-32 mb-4"
              placeholder="Votre réponse..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            ></textarea>
            
            <div className="flex justify-end space-x-2">
              <button 
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
                onClick={() => setShowReplyModal(false)}
              >
                Annuler
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                onClick={handleSendReply}
                disabled={!replyText.trim()}
              >
                Envoyer la réponse
              </button>
            </div>
          </div>
        </div>
      )}
    </div> </Layout>
  );
}