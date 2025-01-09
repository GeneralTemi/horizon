"use client";
import { create } from "zustand";

// Uncomment your interfaces if needed
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

export const useAppStore = create<AppState>((set) => {
  const isClient = typeof window !== "undefined";

  const getInitialAccounts = () =>
    isClient ? JSON.parse(localStorage.getItem("accounts") || "[]") : [];
  const getInitialTransactions = () =>
    isClient ? JSON.parse(localStorage.getItem("transactions") || "[]") : [];
  const getInitialTransactionLimit = () =>
    isClient ? Number(localStorage.getItem("transactionLimit") || 0) : 0;
  const getInitialAuthentication = () =>
    isClient
      ? JSON.parse(localStorage.getItem("isAuthenticated") || "false")
      : false;

  return {
    accounts: getInitialAccounts(),
    transactions: getInitialTransactions(),
    transactionLimit: getInitialTransactionLimit(),
    isAuthenticated: getInitialAuthentication(),

    updateAccountBalance: (id, newBalance) => {
      set((state) => {
        const updatedAccounts = state.accounts.map((account) =>
          account.id === id
            ? { ...account, availableBalance: newBalance }
            : account
        );
        if (isClient) {
          localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
        }
        return { accounts: updatedAccounts };
      });
    },

    addTransaction: (transaction) => {
      set((state) => {
        const updatedTransactions = [...state.transactions, transaction];
        if (isClient) {
          localStorage.setItem(
            "transactions",
            JSON.stringify(updatedTransactions)
          );
        }
        return { transactions: updatedTransactions };
      });
    },

    incrementTransactionLimit: (value) => {
      set((state) => {
        const updatedLimit = state.transactionLimit + value;
        if (isClient) {
          localStorage.setItem("transactionLimit", updatedLimit.toString());
        }
        return { transactionLimit: updatedLimit };
      });
    },

    toggleAuthentication: (value) => {
      set(() => {
        if (isClient) {
          localStorage.setItem("isAuthenticated", JSON.stringify(value));
        }
        return { isAuthenticated: value };
      });
    },

    loadFromLocalStorage: () => {
      if (isClient) {
        set({
          accounts: JSON.parse(localStorage.getItem("accounts") || "[]"),
          transactions: JSON.parse(
            localStorage.getItem("transactions") || "[]"
          ),
          transactionLimit: Number(
            localStorage.getItem("transactionLimit") || 0
          ),
          isAuthenticated: JSON.parse(
            localStorage.getItem("isAuthenticated") || "false"
          ),
        });
      }
    },
  };
});
