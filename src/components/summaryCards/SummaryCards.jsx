import React from "react";
import { transactions } from "../../data/transactions";
import { calculateFinSummary } from "../../utils/finance";
import "./summarycards.css";

export default function SummaryCards(){
    const {income, expense, balance} = calculateFinSummary(transactions);

    return (
        <>
            <div className="sumcards-container">
                <div className="card">
                    <h3>Total balance</h3>
                    <p className="balance"> ${balance}</p>
                </div>

                <div className="card">
                    <h3>Total Income</h3>
                    <p className="balance"> ${income}</p>
                </div>

                <div className="card">
                    <h3>Total Expense</h3>
                    <p className="balance"> ${expense}</p>
                </div>
            </div>
        </>
    )
}