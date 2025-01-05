import { create } from "zustand";

// interface Account {
//   id: string;
//   availableBalance: number;
//   officialName: string;
//   accountName: string;
// }

// interface Transaction {
//   id: string;
//   type: string;
//   amount: number;
//   date: string;
//   receiverName: string;
//   pending: boolean;
//   receiverBank: string;
//   Note: string;
// }

interface AppState {
  accounts: Account[];
  transactions: Transaction[];
  transactionLimit: number;
  isAuthenticated: boolean;
  updateAccountBalance: (id: string, newBalance: number) => void;
  addTransaction: (transaction: Transaction) => void;
  incrementTransactionLimit: (value: number) => void;
  toggleAuthentication: (value: boolean) => void;
  loadFromLocalStorage: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  accounts: JSON.parse(localStorage.getItem("accounts") || "[]"),
  transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
  transactionLimit: Number(localStorage.getItem("transactionLimit") || 0),
  isAuthenticated: JSON.parse(
    localStorage.getItem("isAuthenticated") || "false"
  ),

  updateAccountBalance: (id, newBalance) => {
    set((state) => {
      const updatedAccounts = state.accounts.map((account) =>
        account.id === id
          ? { ...account, availableBalance: newBalance }
          : account
      );
      localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
      return { accounts: updatedAccounts };
    });
  },

  addTransaction: (transaction) => {
    set((state) => {
      const updatedTransactions = [...state.transactions, transaction];
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      return { transactions: updatedTransactions };
    });
  },

  incrementTransactionLimit: (value) => {
    set((state) => {
      const updatedLimit = state.transactionLimit + value;
      localStorage.setItem("transactionLimit", updatedLimit.toString());
      return { transactionLimit: updatedLimit };
    });
  },

  toggleAuthentication: (value) => {
    set(() => {
      localStorage.setItem("isAuthenticated", JSON.stringify(value));
      return { isAuthenticated: value };
    });
  },

  loadFromLocalStorage: () => {
    set({
      accounts: JSON.parse(localStorage.getItem("accounts") || "[]"),
      transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
      transactionLimit: Number(localStorage.getItem("transactionLimit") || 0),
      isAuthenticated: JSON.parse(
        localStorage.getItem("isAuthenticated") || "false"
      ),
    });
  },
}));
