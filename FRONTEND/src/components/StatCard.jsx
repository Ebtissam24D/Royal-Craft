import React from "react";

const StatCard = ({ title, value, change, icon }) => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="text-gray-500">{title}</span>
                <span>{icon}</span>
            </div>
            <div className="text-xl font-semibold">{value}</div>
            {change && <div className="text-green-500 text-sm">{change}</div>}
        </div>
    );
};

export default StatCard;
