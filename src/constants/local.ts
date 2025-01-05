export const initializeLocalStorage = () => {
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem(
      "accounts",
      JSON.stringify([
        {
          id: "1",
          availableBalance: 20000,
          officialName: "Angel Don",
          accountName: "Don Savings",
        },
      ])
    );
    console.log("Accounts initialized in local storage.");
  } else {
    console.log("Accounts already exist in local storage.");
  }

  if (!localStorage.getItem("transactions")) {
    localStorage.setItem(
      "transactions",
      JSON.stringify([
        {
          id: "1",
          type: "debit",
          amount: 2000,
          date: "10/12/2024",
          receiverName: "thomas",
          pending: false,
          receiverBank: "PHB",
          Note: "bills",
        },
        {
          id: "2",
          type: "debit",
          amount: 2000,
          date: "10/12/2024",
          receiverName: "thomas",
          pending: false,
          receiverBank: "PHB",
          Note: "bills",
        },
      ])
    );
    console.log("Transactions initialized in local storage.");
  } else {
    console.log("Transactions already exist in local storage.");
  }
};
