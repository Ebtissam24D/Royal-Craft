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
import { FaShoppingCart, FaUsers, FaMoneyBillWave, FaUserTie } from "react-icons/fa";
import "./dashboardAdmin.css";
import LayoutAdmin from "../../components/layoutAdmin";

const lineData = [
    { name: "Jan", commandes: 120 },
    { name: "Fév", commandes: 160 },
    { name: "Mar", commandes: 200 },
    { name: "Avr", commandes: 250 },
    { name: "Mai", commandes: 280 },
    { name: "Juin", commandes: 320 },
];

const pieData = [
    { name: "Artisans", value: 40 },
    { name: "Clients", value: 60 },
];

const COLORS = ["#8884d8", "#82ca9d"];

export default function DashboardAdmin() {
    return (
        <LayoutAdmin>  <div>
            <main className="main-content">
                {/* Statistiques principales */}
                <div className="card-container mb-6">
                    <div className="statistic-card">
                        <FaShoppingCart className="icon" />
                        <h3>Commandes totales</h3>
                        <div className="value">1,253</div>
                    </div>
                    <div className="statistic-card">
                        <FaUsers className="icon" />
                        <h3>Artisans inscrits</h3>
                        <div className="value">324</div>
                    </div>
                    <div className="statistic-card">
                        <FaMoneyBillWave className="icon" />
                        <h3>Revenus totaux</h3>
                        <div className="value">58,900 €</div>
                    </div>
                    <div className="statistic-card">
                        <FaUserTie className="icon" />
                        <h3>Clients enregistrés</h3>
                        <div className="value">842</div>
                    </div>
                </div>

                {/* Graphiques */}
                <div className="chart-grid">
                    <div className="chart-container" style={{ gridColumn: "span 2" }}>
                        <h2>Évolution des commandes</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="commandes" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="chart-container" style={{ gridColumn: "span 2" }}>
                        <h2>Répartition des utilisateurs</h2>
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

                {/* Derniers artisans */}
                <div className="chart-container">
                    <h2>Derniers artisans inscrits</h2>
                    <table className="table-commandes">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Spécialité</th>
                                <th>Email</th>
                                <th>Date d’inscription</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fatima El Hadi</td>
                                <td>Bijoux</td>
                                <td>fatima@example.com</td>
                                <td>05/04/2025</td>
                            </tr>
                            <tr>
                                <td>Youssef Najib</td>
                                <td>Poterie</td>
                                <td>youssef@example.com</td>
                                <td>04/04/2025</td>
                            </tr>
                        </tbody>
                    </table>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#CMD-235</td>
                                <td>Amina Boulahya</td>
                                <td>150 €</td>
                                <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs badge badge-green">Livrée</span></td>
                            </tr>
                            <tr>
                                <td>#CMD-236</td>
                                <td>Karim Bouzid</td>
                                <td>300 €</td>
                                <td><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs badge badge-yellow">En cours</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Derniers avis */}
                <div className="chart-container">
                    <h2>Derniers avis</h2>
                    <div className="review-item">
                        <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold"><strong>Salma Idrissi</strong></p>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < 5 ? "star filled" : "star"}>
                                        ★
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600">Très belle expérience, j’adore cette plateforme.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div></LayoutAdmin>
    );
}
