// ArtisanNotificationPage.jsx
import { useState, useEffect } from 'react';
import { Bell, Check, Clock } from 'lucide-react';
import'./NotifPage.css'
import Layout from '../components/Layout';

export default function ArtisanNotificationPage() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'unread', 'read'

  // Simulation chargement des notifications
  useEffect(() => {
    // Simuler des données pour la démo
    const mockNotifications = [
      {
        id: 1,
        title: 'Maintenance planifiée',
        message: 'Une maintenance est prévue ce weekend. La plateforme sera indisponible de 22h à 2h.',
        priority: 'high',
        receivedAt: new Date(2025, 3, 8, 10, 30),
        read: false
      },
      {
        id: 2,
        title: 'Nouveau formulaire disponible',
        message: 'Un nouveau formulaire pour les devis est disponible dans votre espace.',
        priority: 'normal',
        receivedAt: new Date(2025, 3, 7, 14, 15),
        read: false
      },
      {
        id: 3,
        title: 'Mise à jour des conditions',
        message: 'Les conditions générales d\'utilisation ont été mises à jour. Veuillez en prendre connaissance.',
        priority: 'normal',
        receivedAt: new Date(2025, 3, 6, 11, 45),
        read: true
      },
      {
        id: 4,
        title: 'Nouveau client potentiel',
        message: 'Un nouveau client a consulté votre profil et pourrait vous contacter prochainement.',
        priority: 'low',
        receivedAt: new Date(2025, 3, 5, 16, 20),
        read: true
      },
      {
        id: 5,
        title: 'Votre facture de mars est disponible',
        message: 'Votre facture du mois de mars est maintenant disponible dans votre espace de facturation.',
        priority: 'normal',
        receivedAt: new Date(2025, 3, 2, 9, 0),
        read: true
      }
    ];
    
    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const filterNotifications = () => {
    if (filter === 'all') return notifications;
    if (filter === 'unread') return notifications.filter(n => !n.read);
    if (filter === 'read') return notifications.filter(n => n.read);
    return notifications;
  };

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const dayInMs = 24 * 60 * 60 * 1000;
    
    if (diff < dayInMs) {
      // Aujourd'hui, afficher l'heure
      return `Aujourd'hui à ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else if (diff < 2 * dayInMs) {
      // Hier
      return `Hier à ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else {
      // Date complète
      return new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
   <Layout>
       <div className="artisan-notification-container">
      <header className="notification-header">
        <h1>Mes Notifications</h1>
        <div className="notification-counter">
          <Bell size={18} />
          <span className="count">{unreadCount}</span>
        </div>
      </header>
      
      <div className="filters-container">
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Toutes
          </button>
          <button 
            className={filter === 'unread' ? 'active' : ''} 
            onClick={() => setFilter('unread')}
          >
            Non lues ({unreadCount})
          </button>
          <button 
            className={filter === 'read' ? 'active' : ''} 
            onClick={() => setFilter('read')}
          >
            Lues
          </button>
        </div>
        
        {unreadCount > 0 && (
          <button className="mark-all-btn" onClick={markAllAsRead}>
            <Check size={16} />
            Marquer tout comme lu
          </button>
        )}
      </div>
      
      <div className="notifications-list">
        {filterNotifications().length === 0 ? (
          <div className="no-notifications">
            <p>Aucune notification dans cette catégorie.</p>
          </div>
        ) : (
          filterNotifications().map(notification => (
            <div 
              key={notification.id} 
              className={`notification-card ${!notification.read ? 'unread' : ''} ${notification.priority === 'high' ? 'high-priority' : ''}`}
              onClick={() => !notification.read && markAsRead(notification.id)}
            >
              <div className="notification-header">
                <h3>{notification.title}</h3>
                <div className="notification-meta">
                  <span className={`priority-badge ${notification.priority}`}>
                    {notification.priority === 'low' ? 'Faible' : 
                     notification.priority === 'normal' ? 'Normale' : 'Haute'}
                  </span>
                  <span className="time">
                    <Clock size={14} />
                    {formatDate(notification.receivedAt)}
                  </span>
                </div>
              </div>
              
              <div className="notification-body">
                <p>{notification.message}</p>
              </div>
              
              {!notification.read && (
                <div className="notification-actions">
                  <button className="mark-read-btn" onClick={(e) => {
                    e.stopPropagation();
                    markAsRead(notification.id);
                  }}>
                    <Check size={16} />
                    Marquer comme lu
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
   </Layout>
  );
}