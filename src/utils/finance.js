export function calculateFinSummary(transactions) {
    let income = 0;
    let expense = 0;

    transactions.forEach((tx) => {
        if (tx.type === "income") {
            income += tx.amount;
        } else {
            expense += tx.amount;
        }
    });

    return {
        income,
        expense,
        balance: income - expense
    };
}

export function generateBalanceData(transactions) {
    const sorted = [...transactions].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    let balance = 0;

    return sorted.map((tx) => {
        if (tx.type === "income") {
            balance += tx.amount;
        } else {
            balance -= tx.amount;
        }

        return {
            date: tx.date,
            balance,
        };
    });
}


const colors = ["#2f6fed", "#28a745", "#dc3545", "#ffc107", "#6f42c1", "#20c997"];

export function generateCatData(transactions) {
    const categoryMap = {};

    transactions.forEach((tx) => {
        if (tx.type === "expense") {
            if (!categoryMap[tx.category]) {
                categoryMap[tx.category] = 0;
            }
            categoryMap[tx.category] += tx.amount;
        }
    });

    return Object.keys(categoryMap).map((category, index) => ({
        name: category,
        value: categoryMap[category],
        fill: colors[index % colors.length]
    }));
}