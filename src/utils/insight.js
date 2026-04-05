export function getHighestCategory(transactions) {
    const categoryMap = {};

    transactions
        .filter(tx => tx.type === "expense")
        .forEach(tx => {
            categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
        });

    let maxCat = null;
    let maxAmount = 0;

    for (let category in categoryMap) {
        if (categoryMap[category] > maxAmount) {
            maxAmount = categoryMap[category];
            maxCat = category;
        }
    }

    return {
        maxCat,
        maxAmount
    };
};

export function getMonthlyComparison(transactions) {
    const now = new Date();
    const curMonth = now.getMonth();
    const curYear = now.getFullYear();

    let curTotal = 0;
    let preTotal = 0;

    transactions.forEach(tx => {
        if (tx.type !== "expense") return;

        const date = new Date(tx.date);

        if (date.getMonth() === curMonth && date.getFullYear() === curYear) {
            curTotal += tx.amount;
        }

        if (date.getMonth() === curMonth - 1 && date.getFullYear() === curYear) {
            preTotal += tx.amount;
        }
    });

    const change = preTotal ? ((curTotal - preTotal) / preTotal) * 100 : 0;

    return {
        curTotal,
        preTotal,
        change: change.toFixed(1)
    }
};

export function genInsights(transactions) {
    const insights = [];

    const { maxCat, maxAmount } = getHighestCategory(transactions);

    if (maxCat) {
        insights.push(`You spend the most on ${maxCat} ($${maxAmount})`)
    };

    const comparison = getMonthlyComparison(transactions);
    const change = comparison.change;

    if (change > 0) {
        insights.push(`Your spending increased by ${change}% this month`);
    } else if (change < 0) {
        insights.push(`Good job! Spending decreased by ${Math.abs(change)}%`);
    }

    return insights;
}