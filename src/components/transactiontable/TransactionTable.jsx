import React, { useState } from "react";
import "./transactiontable.css";

export default function TransactionTable({ data, role, onEdit }) {

    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({});

    if (!data.length) {
        return <p>No transaction found</p>
    }

    const handleEditClick = (tx) => {
        setEditId(tx.id);
        setEditForm(tx);
    }

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSave = () => {
        onEdit(editForm);
        setEditId(null);
    };

    return (
        <>
            <div className="table-wrapper">
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Amount</th>
                            {role === "admin" && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((tx) => (
                            <tr key={tx.id}>
                                <td>
                                    {editId === tx.id ? (
                                        <input
                                            type="date"
                                            name="date"
                                            value={editForm.date}
                                            onChange={handleChange}
                                            className="changeInput"
                                        />
                                    ) : (
                                        new Date(tx.date).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "short"
                                        })
                                    )}
                                </td>

                                <td>
                                    {editId === tx.id ? (
                                        <input
                                            name="category"
                                            value={editForm.category}
                                            onChange={handleChange}
                                            className="changeInput"
                                        />
                                    ) : (
                                        tx.category
                                    )}
                                </td>
                                <td className="income">
                                    {editId === tx.id ? (
                                        <select
                                            name="type"
                                            value={editForm.type}
                                            onChange={handleChange}
                                            className="changeInputSec"
                                        >
                                            <option className="changeInput" value="income">Income</option>
                                            <option className="changeInput" value="expense">Expense</option>
                                        </select>
                                    ) : (
                                        tx.type
                                    )}
                                </td>
                                <td>
                                    {editId === tx.id ? (
                                        <input
                                            type="number"
                                            name="amount"
                                            value={editForm.amount}
                                            onChange={handleChange}
                                            className="changeInput"
                                        />
                                    ) : (
                                        `$${tx.amount}`
                                    )}
                                </td>
                                {role === "admin" && (
                                    <td>
                                        {editId === tx.id ? (
                                            <>
                                                <div className="btn-save">
                                                    <button className="edit-btn" onClick={handleSave}>Save</button>
                                                    <button className="edit-btn" onClick={() => setEditId(null)}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEditClick(tx)}
                                            >
                                                Edit
                                            </button>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}