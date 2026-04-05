import React from "react";
import "./balancechart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { transactions } from "../../data/transactions";
import { generateBalanceData } from "../../utils/finance";

export default function BalanceChart() {
    const data = generateBalanceData(transactions);
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <div className="balchart-container">
                <h3>Balance Trend</h3>

                <ResponsiveContainer width="100%" height={isMobile ? 220 : 300}>
                    <LineChart
                        data={data}
                        margin={
                            isMobile
                                ? { top: 10, right: 10, left: -10, bottom: 5 }
                                : { top: 10, right: 20, left: 0, bottom: 10 }
                        }
                    >
                        <XAxis
                            dataKey="date"
                            interval={0}

                            tickFormatter={(date, index) => {
                                if (isMobile && index % 2 !== 0) {
                                    return "";
                                }
                                return new Date(date).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "short",
                                });
                            }}
                            tick={{ fontSize: isMobile ? 10 : 12 }}
                        />
                        <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="balance"
                            stroke="#2f6fed"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}