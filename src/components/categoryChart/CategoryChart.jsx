import React from "react";
import "./categorychart.css";
import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer
} from "recharts"

import { transactions } from "../../data/transactions";
import { generateCatData } from "../../utils/finance";


export default function CategoryChart() {
    const data = generateCatData(transactions);

    return (
        <>
            <div className="categorychart-container">
                <h3>Category Chart</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                            label
                        />
                        <Tooltip formatter={(value) => `$${value}`} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}