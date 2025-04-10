import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { Star, Users, ShoppingCart, Euro } from "lucide-react";
import "./dashboardArtisan.css"; // Import du fichier CSS
import LayoutArtisan from "../../components/layoutArtisan";

const lineData = [
    { name: "Jan", ventes: 800 },
    { name: "Fév", ventes: 900 },
    { name: "Mar", ventes: 950 },
    { name: "Avr", ventes: 1200 },
    { name: "Mai", ventes: 1300 },
    { name: "Juin", ventes: 1350 },
    { name: "Juil", ventes: 1300 },
];

const pieData = [
    { name: "Bijoux", value: 50 },
    { name: "Poterie", value: 25 },
    { name: "Textile", value: 15 },
    { name: "Autres", value: 10 },
];

const COLORS = ["#8884d8", "#8dd1e1", "#a4de6c", "#ffc658"];

export default function DashboardArtisan() {
    return (
        <LayoutArtisan> <div>
            <main className="main-content">
                {/* Statistiques principales */}
                <div className="card-container mb-6">
                    <div className="statistic-card">
                        <h3>Chiffre d'affaires</h3>
                        <div className="value">24,567 € <span className="percentage">↑ 12%</span></div>
                    </div>
                    <div className="statistic-card">
                        <h3>Commandes en cours</h3>
                        <div className="value">12</div>
                    </div>
                    <div className="statistic-card">
                        <h3>Note moyenne</h3>
                        <div className="value">4.8/5</div>
                    </div>
                    <div className="statistic-card">
                        <h3>Clients actifs</h3>
                        <div className="value">243 <span className="percentage">↑ 8%</span></div>
                    </div>
                </div>

                {/* Graphiques */}
                <div className="chart-grid">
                    <div className="chart-container chart-evolution" style={{ gridColumn: "span 2" }}>
                        <h2>Évolution des ventes</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="ventes" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-container chart-distribution" style={{ gridColumn: "span 2" }}>
                        <h2>Répartition des produits</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    innerRadius={40}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Dernières commandes */}
                <div className="chart-container">
                    <h2>Dernières commandes</h2>
                    <table className="table-commandes">
                        <thead>
                            <tr>
                                <th>Commande</th>
                                <th>Client</th>
                                <th>Montant</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#CMD-001</td>
                                <td>Marie Martin</td>
                                <td>245 €</td>
                                <td>
                                    <span className="status-badge en-cours">en cours</span>
                                </td>
                                <td className="text-blue-500 cursor-pointer">Voir détails</td>
                            </tr>
                            <tr>
                                <td>#CMD-002</td>
                                <td>Pierre Dubois</td>
                                <td>180 €</td>
                                <td>
                                    <span className="status-badge en-attente">en attente</span>
                                </td>
                                <td className="text-blue-500 cursor-pointer">Voir détails</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Derniers avis clients */}
                <div className="chart-container">
                    <h2>Derniers avis clients</h2>
                    <div>
                        {/* Avis client 1 */}
                        <div className="review-item">
                            <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold"><strong>Sophie Bernard</strong></p>
                                {/* Nouvelle structure pour les étoiles */}
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`star ${i < 4.8 ? "filled" : ""}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    Excellent travail ! Le produit est magnifique et la livraison était rapide.
                                </p>
                            </div>
                        </div>

                        {/* Avis client 2 */}
                        <div className="review-item">
                            <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold"><strong>Lucas Petit</strong></p>
                                {/* Nouvelle structure pour les étoiles */}
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`star ${i < 4.5 ? "filled" : ""}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    Très satisfait de mon achat. Je recommande vivement cet artisan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div></LayoutArtisan>
    );
}