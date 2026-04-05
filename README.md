# 📊 Finance Dashboard

A modern finance dashboard built using React that helps users track transactions, analyze spending, and gain insights through interactive UI components.

---

## 🚀 Features

- 📋 View and manage transactions
- 🔍 Search, filter, and sort transactions
- 📊 Automated insights generation
- 📅 Monthly comparison analytics
- 🏷️ Category-wise spending breakdown
- 👤 Role-based UI (Admin/User support)
- ⚡ Fast and responsive UI

---

## 🧠 Approach

The application is built using a **component-based architecture** in React with a focus on separation of concerns and scalability.

### Key Design Decisions:

- **Reusable Components**
  - Components like `generateCatData`, `TransactionFilters`, and `Insights` are modular and reusable.

- **Data Processing Layer**
  - Utility functions (e.g. `getHighestCategory`, `getMonthlyComparison`, `genInsights`) handle all business logic.
  - Keeps UI components clean and focused on rendering.

- **State Management**
  - Local state (`useState`) is used for managing filters, sorting, and search.
  - No heavy state libraries used to keep it simple and efficient.

- **Separation of Concerns**
  - UI → Components
  - Logic → `utils/`
  - Data → `data/`

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** CSS
- **Data Handling:** JavaScript (custom utility functions)

---

## 📂 Project Structure
src/
│
├── components/
│ ├── balanceChart/
│ ├── categoryChart/
│ ├── insights/
│ ├── sidebar/
│ ├── summaryCards/
│ ├── topbar/
│ ├── transactionFilters/
│ ├── transactions/
│ ├── transactionTable/
│
├── data/
│ └── transactions.js
│
├── utils/
│ └── insight.js
│ └── finance.js
│
├── pages/
| └── dashboard/
│
└── App.js