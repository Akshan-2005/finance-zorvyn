import React from "react";
import "./transactionfilters.css";

export default function TransactionFilters({
    search,
    setSearch,
    filter,
    setFilter,
    sort,
    setSort,
}) {
    return (
        <>
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="search by category"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <select value={sort} onChange={(e)=> setSort(e.target.value)}>
                    <option value="date">Sort by Date</option>
                    <option value="amount">Sort by Amount</option>
                </select>
            </div>
        </>
    )

}
