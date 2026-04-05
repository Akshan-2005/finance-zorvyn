import react from "react";
import "./insights.css";
import {
    getHighestCategory,
    getMonthlyComparison,
    genInsights
} from "../../utils/insight";
import { transactions } from "../../data/transactions";

export default function Insights() {
    const { maxCat, maxAmount } = getHighestCategory(transactions);

    const { curTotal, preTotal, change } = getMonthlyComparison(transactions);

    const insights = genInsights(transactions);

    return (
        <>
            <div className="insight-container">
                <h2>Insights</h2>

                <div className="insight-card">
                    <div className="max-card">
                        <div className="max-cat">
                            <h3>Max Category</h3>
                            <p>{maxCat || "N/A"}</p>
                        </div>
                        <div className="max-cat">
                            <h3>Max Amount</h3>
                            <p>${maxAmount || "N/A"}</p>
                        </div>
                    </div>
                    <div className="in-card">
                        <h3>Monthly Spend</h3>
                        <p>${curTotal}</p>
                    </div>
                    <div className="in-card">
                        <h3>Change</h3>
                        <p>{change}%</p>
                    </div>
                </div>
                <div className="insight-list">
                    <h3>Observations</h3>
                    {insights.length ? (
                        insights.map((item, index) => (
                            <p key={index}>• {item}</p>
                        ))
                    ) : (
                        <p>No insights available</p>
                    )}
                </div>
            </div>
        </>
    )
}