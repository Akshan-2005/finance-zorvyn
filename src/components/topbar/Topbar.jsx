import React from "react";
import "./topbar.css";

export default function Topbar({ role, setRole, setIsOpen }) {
    return (
        <>
            <div className="topbar-container">
                <button
                    className="menu-btn"
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button>
                <h1 className="title">Finance Dashboard</h1>

                <select
                    className="role-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="viewer">Viewer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </>
    )
}