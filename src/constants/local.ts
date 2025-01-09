export const initializeLocalStorage = () => {
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem(
      "accounts",
      JSON.stringify([
        {
          id: "1",
          availableBalance: 28000,
          officialName: "Angel Don",
          accountName: "Savings",
        },
        {
          id: "2",
          availableBalance: 28000,
          officialName: "Angel Don",
          accountName: "Adv Checking",
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
          accountName: "savings",
          amount: 2000,
          date: "10/12/2024",
          receiverName: "thomas",
          pending: false,
          receiverBank: "PHB",
          availableBalance: 30100,
          transactionId: "887983938983uhsh",
          Note: "bills",
        },
        {
          id: "2",
          type: "debit",
          accountName: "Adv Checking",
          amount: 2000,
          date: "10/12/2024",
          receiverName: "thomas",
          pending: false,
          receiverBank: "PHB",
          transactionId: "887983944383uhsh",
          availableBalance: 30100,
          Note: "bills",
        },
      ])
    );
    console.log("Transactions initialized in local storage.");
  } else {
    console.log("Transactions already exist in local storage.");
  }
};
