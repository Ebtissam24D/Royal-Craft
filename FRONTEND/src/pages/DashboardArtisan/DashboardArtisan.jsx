import React from "react";
import StatCard from "../components/StatCard";
import Chart from "../components/Chart";
import PieChart from "../components/PieChart";
import OrderTable from "../components/OrderTable";
import ClientReviews from "../components/ClientReviews";

const DashboardArtisan = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-4 gap-4 mb-6">
                <StatCard title="Chiffre d'affaires" value="24,567 €" change="+12%" icon="€" />
                <StatCard title="Commandes en cours" value="12" icon="🛒" />
                <StatCard title="Note moyenne" value="4.8/5" icon="⭐" />
                <StatCard title="Clients actifs" value="243" change="+7%" icon="👥" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <Chart />
                <PieChart />
            </div>

            <div className="mb-6">
                <OrderTable />
            </div>

            <div>
                <ClientReviews />
            </div>
        </div>
    );
};

export default DashboardArtisan;
