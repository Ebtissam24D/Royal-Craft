// AdminNotificationPage.jsx
import { useState, useEffect } from 'react';
import { Bell, Send, Trash, Filter, Eye, EyeOff, Search, RefreshCw } from 'lucide-react';
import './NotifPage.css'; // Assurez-vous d'avoir ce fichier CSS pour le style
export default function AdminNotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    recipientType: 'all', // 'all', 'artisans', 'clients'
    priority: 'normal', // 'low', 'normal', 'high'
  });
  const [filter, setFilter] = useState('all'); // 'all', 'artisans', 'clients'
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Simulation chargement des notifications
  useEffect(() => {
    // Simuler des données pour la démo
    const mockNotifications = [
      {
        id: 1,
        title: 'Maintenance planifiée',
        message: 'Une maintenance est prévue ce weekend. La plateforme sera indisponible de 22h à 2h.',
        recipientType: 'all',
        priority: 'high',
        sent: true,
        sentAt: new Date(2025, 3, 8, 10, 30),
        read: 45,
        total: 68
      },
      {
        id: 2,
        title: 'Nouveau formulaire disponible',
        message: 'Un nouveau formulaire pour les devis est disponible dans votre espace.',
        recipientType: 'artisans',
        priority: 'normal',
        sent: true,
        sentAt: new Date(2025, 3, 7, 14, 15),
        read: 12,
        total: 32
      },
      {
        id: 3,
        title: 'Promotion printemps',
        message: 'Découvrez nos offres spéciales printemps avec -15% sur tous les services de rénovation.',
        recipientType: 'clients',
        priority: 'normal',
        sent: true,
        sentAt: new Date(2025, 3, 5, 9, 0),
        read: 87,
        total: 120
      },
      {
        id: 4,
        title: 'Brouillon - Rappel factures',
        message: 'Pensez à mettre à jour vos informations de facturation avant la fin du mois.',
        recipientType: 'artisans',
        priority: 'low',
        sent: false,
        sentAt: null,
        read: 0,
        total: 0
      }
    ];
    
    setNotifications(mockNotifications);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newNotif = {
      id: Date.now(),
      ...newNotification,
      sent: false,
      sentAt: null,
      read: 0,
      total: 0
    };
    
    setNotifications(prev => [newNotif, ...prev]);
    setNewNotification({
      title: '',
      message: '',
      recipientType: 'all',
      priority: 'normal',
    });
    setShowForm(false);
  };

  const sendNotification = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id 
          ? { 
              ...notif, 
              sent: true, 
              sentAt: new Date(),
              total: notif.recipientType === 'all' ? 150 : notif.recipientType === 'artisans' ? 32 : 118,
              read: 0
            } 
          : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const filterNotifications = () => {
    let filtered = notifications;
    
    if (filter !== 'all') {
      filtered = filtered.filter(n => n.recipientType === filter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        n.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const formatDate = (date) => {
    if (!date) return '-';
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="admin-notification-container">
      <header className="notification-header">
        <h1>Gestion des Notifications</h1>
        <div className="action-buttons">
          <button className="refresh-btn" onClick={() => console.log('Rafraîchir')}>
            <RefreshCw size={16} />
            Rafraîchir
          </button>
          <button className="create-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Annuler' : 'Nouvelle notification'}
          </button>
        </div>
      </header>
      
      {showForm && (
        <div className="notification-form-container">
          <h2>Créer une nouvelle notification</h2>
          <form onSubmit={handleSubmit} className="notification-form">
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={newNotification.title} 
                onChange={handleInputChange} 
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={newNotification.message} 
                onChange={handleInputChange} 
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="recipientType">Destinataires</label>
                <select 
                  id="recipientType" 
                  name="recipientType" 
                  value={newNotification.recipientType} 
                  onChange={handleInputChange}
                >
                  <option value="all">Tous</option>
                  <option value="artisans">Artisans seulement</option>
                  <option value="clients">Clients seulement</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="priority">Priorité</label>
                <select 
                  id="priority" 
                  name="priority" 
                  value={newNotification.priority} 
                  onChange={handleInputChange}
                >
                  <option value="low">Faible</option>
                  <option value="normal">Normale</option>
                  <option value="high">Haute</option>
                </select>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Annuler</button>
              <button type="submit" className="submit-btn">Enregistrer</button>
            </div>
          </form>
        </div>
      )}
      
      <div className="filters-container">
        <div className="search-container">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-options">
          <label>Filtrer par:</label>
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              Tous
            </button>
            <button 
              className={filter === 'artisans' ? 'active' : ''} 
              onClick={() => setFilter('artisans')}
            >
              Artisans
            </button>
            <button 
              className={filter === 'clients' ? 'active' : ''} 
              onClick={() => setFilter('clients')}
            >
              Clients
            </button>
          </div>
        </div>
      </div>
      
      <div className="notifications-list">
        <div className="notification-list-header">
          <span className="col-title">Titre</span>
          <span className="col-recipients">Destinataires</span>
          <span className="col-priority">Priorité</span>
          <span className="col-status">Statut</span>
          <span className="col-date">Date d'envoi</span>
          <span className="col-stats">Stats</span>
          <span className="col-actions">Actions</span>
        </div>
        
        {filterNotifications().length === 0 ? (
          <div className="no-notifications">
            <p>Aucune notification ne correspond à vos critères.</p>
          </div>
        ) : (
          filterNotifications().map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.priority === 'high' ? 'high-priority' : ''}`}
            >
              <div className="col-title">
                {notification.sent && notification.priority === 'high' && <Bell size={16} className="icon-high" />}
                {notification.title}
              </div>
              <div className="col-recipients">
                {notification.recipientType === 'all' ? 'Tous' : 
                 notification.recipientType === 'artisans' ? 'Artisans' : 'Clients'}
              </div>
              <div className="col-priority">
                <span className={`priority-badge ${notification.priority}`}>
                  {notification.priority === 'low' ? 'Faible' : 
                   notification.priority === 'normal' ? 'Normale' : 'Haute'}
                </span>
              </div>
              <div className="col-status">
                <span className={`status-badge ${notification.sent ? 'sent' : 'draft'}`}>
                  {notification.sent ? 'Envoyé' : 'Brouillon'}
                </span>
              </div>
              <div className="col-date">
                {formatDate(notification.sentAt)}
              </div>
              <div className="col-stats">
                {notification.sent ? (
                  <span>{notification.read} / {notification.total} lus</span>
                ) : (
                  <span>-</span>
                )}
              </div>
              <div className="col-actions">
                {!notification.sent && (
                  <button 
                    className="send-btn" 
                    onClick={() => sendNotification(notification.id)} 
                    title="Envoyer"
                  >
                    <Send size={16} />
                  </button>
                )}
                <button 
                  className="delete-btn" 
                  onClick={() => deleteNotification(notification.id)} 
                  title="Supprimer"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
