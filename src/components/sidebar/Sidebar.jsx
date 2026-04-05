import "./sidebar.css";

export default function ({ active, setActive, isOpen, setIsOpen }) {


    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={() => setIsOpen(false)} />
            )}
            <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
                <button
                    className={active === "overview" ? "active" : ""}
                    onClick={() => setActive("overview")}
                >
                    Overview
                </button>
                <button
                    className={active === "transactions" ? "active" : ""}
                    onClick={() => setActive("transactions")}
                >
                    transactions
                </button>
                <button
                    className={active === "insights" ? "active" : ""}
                    onClick={() => setActive("insights")}
                >
                    insights
                </button>
            </div>
        </>
    )
}