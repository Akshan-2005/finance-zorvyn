import React, { useState } from "react";
import "./transactions.css";
import { transactions } from "../../data/transactions";
import TransactionFilters from "../transactionFilters/TransactionFilters";
import TransactionTable from "../transactiontable/TransactionTable";

export default function Transactions({ role }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("date");

    const [txData, setTxData] = useState(transactions);

    const processData = txData
        .filter((tx) =>
            tx.category.toLowerCase().includes(search.toLowerCase())
        )
        .filter((tx) => {
            if (filter === "all") {
                return true;
            }
            return tx.type === filter;
        })
        .sort((a, b) => {
            if (sort === "amount") {
                return b.amount - a.amount;
            }
            return new Date(b.date) - new Date(a.date);
        });

    const handleEdit = (updatedTx) => {
        setTxData((prev) => {
            return prev.map((tx) =>
                tx.id === updatedTx.id ? updatedTx : tx
            );
        });
    };

    return (
        <>
            <div className="transactions-container">
                <h2>Transactions</h2>

                <TransactionFilters
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                    sort={sort}
                    setSort={setSort}
                />

                <TransactionTable
                    data={processData}
                    role={role}
                    onEdit={handleEdit}
                />
            </div>
        </>
    )
}