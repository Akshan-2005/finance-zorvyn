import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import SummaryCards from "../../components/summaryCards/SummaryCards";
import BalanceChart from "../../components/balanceChart/BalanceChart";
import CategoryChart from "../../components/categoryChart/CategoryChart";
import Transactions from "../../components/transactions/Transactions";
import Insights from "../../components/insights/Insights";

export default function Dashboard() {
    const [role, setRole] = useState("viewer");
    const [active, setActive] = useState("overview");

    const [isSideOpen, setIsSideOpen] = useState(false);

    return (
        <>
            <div className="dashboard-container">
                <Topbar
                    role={role}
                    setRole={setRole}
                    setIsOpen={setIsSideOpen}
                />

                <div className="dashboard-body">
                    <Sidebar
                        active={active}
                        setActive={setActive}
                        isOpen={isSideOpen}
                        setIsOpen={setIsSideOpen}
                    />

                    <div className="content">
                        {active === "overview" && (
                            <>
                                <div className="overview-container">
                                    <SummaryCards />
                                    <BalanceChart />
                                    <CategoryChart />
                                </div>
                            </>
                        )}
                        {active === "transactions" && <Transactions role={role} />}
                        {active === "insights" && <Insights />}
                    </div>
                </div>
            </div>
        </>
    )
}