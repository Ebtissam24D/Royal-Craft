import React, { useState } from 'react';
import './GestionDesArtisans.css';
import { ArrowRight, CheckCircle, XCircle, Clock, User, Mail, Phone, MapPin } from 'lucide-react';
import LayoutAdmin from '../../components/layoutAdmin';

export default function GestionDesArtisans() {
    const [vendeurs, setVendeurs] = useState([
        { id: 1, nom: 'Nabila Sabari', email: 'Sabari@example.com', telephone: '0123456789', date: '2023-10-01', statut: 'en attente', adresse: 'Paris' },
        { id: 2, nom: 'Hala ElBouh', email: 'Elbouh@example.com', telephone: '0987654321', date: '2023-10-02', statut: 'en attente', adresse: 'Lyon' },
        { id: 3, nom: 'Meryam ElBenani', email: 'Elbenani@example.com', telephone: '0612345678', date: '2023-09-25', statut: 'en attente', adresse: 'Marseille' },
        { id: 4, nom: 'Fatima Zahra Khedir', email: 'Khedir@example.com', telephone: '0712345678', date: '2023-09-30', statut: 'en attente', adresse: 'Toulouse' },
        { id: 5, nom: 'Amina Bouzid', email: 'Bouzid@example.com', telephone: '0698765432', date: '2023-10-03', statut: 'en attente', adresse: 'Nice' },
        { id: 6, nom: 'Yasmine Chakir', email: 'Chakir@example.com', telephone: '0667890123', date: '2023-10-05', statut: 'en attente', adresse: 'Strasbourg' },
        { id: 7, nom: 'Soukaina ElAmrani', email: 'ElAmrani@example.com', telephone: '0654321987', date: '2023-09-28', statut: 'en attente', adresse: 'Bordeaux' },
        { id: 8, nom: 'Imane ElMansouri', email: 'ElMansouri@example.com', telephone: '0612398765', date: '2023-10-04', statut: 'en attente', adresse: 'Lille' },
        { id: 9, nom: 'Khadija BenAli', email: 'BenAli@example.com', telephone: '0678901234', date: '2023-09-29', statut: 'en attente', adresse: 'Nantes' },
        { id: 10, nom: 'Sara ElOuazzani', email: 'ElOuazzani@example.com', telephone: '0789012345', date: '2023-10-06', statut: 'en attente', adresse: 'Montpellier' },
    ]);

    const [vendeurSelectionné, setVendeurSelectionné] = useState(null);

    const accepterVendeur = (id) => {
        setVendeurs((prev) =>
            prev.map((v) =>
                v.id === id ? { ...v, statut: 'accepté' } : v
            )
        );
        setVendeurSelectionné(null);
    };

    const refuserVendeur = (id) => {
        setVendeurs((prev) =>
            prev.map((v) =>
                v.id === id ? { ...v, statut: 'refusé' } : v
            )
        );
        setVendeurSelectionné(null);
    };

    const fermerModal = () => {
        setVendeurSelectionné(null);
    };

    return (
        <LayoutAdmin> <div className="gestion-artisans">
            <h1>Gestion des Artisans</h1>

            <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Date</th>
                        <th>Statut</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {vendeurs.length > 0 ? (
                        vendeurs.map((vendeur) => (
                            <tr key={vendeur.id} onClick={() => setVendeurSelectionné(vendeur)}>
                                <td>{vendeur.nom}</td>
                                <td>{vendeur.email}</td>
                                <td>{vendeur.telephone}</td>
                                <td>{vendeur.date}</td>
                                <td>
                                    <span className={`status-badge ${vendeur.statut === 'en attente'
                                        ? 'pending'
                                        : vendeur.statut === 'accepté'
                                            ? 'accepted'
                                            : 'rejected'
                                        }`}>
                                        {vendeur.statut}
                                    </span>
                                    {vendeur.statut === 'accepté' && <CheckCircle className="icon text-green-600" />}
                                    {vendeur.statut === 'refusé' && <XCircle className="icon text-red-600" />}
                                    {vendeur.statut === 'en attente' && <Clock className="icon text-yellow-600" />}
                                </td>
                                <td className="text-right">
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4">
                                Aucun artisan disponible.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {vendeurSelectionné && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" onClick={fermerModal}>
                            &times;
                        </button>
                        <h2>Détails du vendeur</h2>

                        <div className="vendor-details">
                            <div className="vendor-detail">
                                <User className="icon" />
                                <span>{vendeurSelectionné.nom}</span>
                            </div>
                            <div className="vendor-detail">
                                <Mail className="icon" />
                                <span>{vendeurSelectionné.email}</span>
                            </div>
                            <div className="vendor-detail">
                                <Phone className="icon" />
                                <span>{vendeurSelectionné.telephone}</span>
                            </div>
                            <div className="vendor-detail">
                                <MapPin className="icon" />
                                <span>{vendeurSelectionné.adresse}</span>
                            </div>
                        </div>

                        <div className="actions">
                            <button onClick={() => accepterVendeur(vendeurSelectionné.id)} className="accept">
                                <CheckCircle className="icon" />
                                Accepter
                            </button>
                            <button onClick={() => refuserVendeur(vendeurSelectionné.id)} className="reject">
                                <XCircle className="icon" />
                                Refuser
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div></LayoutAdmin>
    );
}
