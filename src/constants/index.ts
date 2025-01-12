import { format } from "date-fns";

export const sidebarLinks = [
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/account",
    label: "Accounts",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transactions",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/payment-transfer",
    label: "Tranfers",
  },

  {
    imgURL: "/icons/profile.png",
    route: "#",
    label: "Profile",
  },
  {
    imgURL: "/icons/support.png",
    route: "#",
    label: "Support",
  },
  {
    imgURL: "/icons/messages.png",
    route: "#",
    label: "Messages",
  },
  {
    imgURL: "/icons/settings.png",
    route: "#",
    label: "Settings",
  },
];

export const LOGIN = {
  username: "007natalie.lee@gmail.com",
  password: "natalie2025",
};

export const USER = {
  id: "1",
  firstName: "Natasha",
  lastName: "Krasavina",
  email: "007natalie.lee@gmail.com",
  city: "Fort Lauderdale ",
};

export const ACCOUNTS = [
  {
    id: "1",
    availableBalance: 428735,
    officialName: "Natasha Krasavina",
    accountName: "Natasha Savings",
  },
  {
    id: "2",
    availableBalance: 53000,
    officialName: "Natasha Krasavina",
    accountName: "Adv Checking",
  },
];

export const BENEFICIARIES = [
  {
    id: "1",
    name: "NEAL SCHOFEL",
    accountNumber: "0346483381",
    bank: "Regions bank",
    RoutingNumber: "063104668",
  },
  {
    id: "2",
    name: "CECELIA VEGA",
    accountNumber: "604571802",
    RoutingNumber: "122106455",
    bank: "FirstNationalBank",
  },
  {
    id: "3",
    name: "MARK  DINE",
    accountNumber: "40630250596286563",
    RoutingNumber: "121000248",
    bank: "WellsFargo",
  },
];

export const TRANSACTIONS = [
  {
    id: "1",
    type: "credit",
    amount: 144000,
    date: new Date("2024-01-09"),
    receiverName: "DOGEVEST",
    pending: false,
    receiverBank: "CapitalOne",
    note: "ROI",
    transactionId: "9879898438238765hsh",
    accountName: "Natasha Savings",
    availableBalance: 196830,
  },
  {
    id: "2",
    type: "debit",
    amount: 13900,
    date: new Date("2024-12-29"),
    receiverName: "Gucci store",
    pending: false,
    receiverBank: "BofA",
    note: "shopping",
    transactionId: "987989843823822hsh",
    accountName: "Natasha Savings",
    availableBalance: 52830,
  },
  {
    id: "3",
    type: "debit",
    amount: 2000,
    date: new Date("2024-12-24"),
    receiverName: "Mike",
    pending: false,
    receiverBank: "WellsFargo",
    Note: "Merry Xmas",
    transactionId: "987699879823822hsh",
    accountName: "Natasha Savings",
    availableBalance: 66780,
  },
  {
    id: "4",
    type: "debit",
    amount: 2000,
    date: new Date("2024-12-24"),
    receiverName: "Neal",
    pending: false,
    receiverBank: "RegionsBank",
    note: "Merry Xmas",
    transactionId: "98769889823822hsh",
    accountName: "Natasha Savings",
    availableBalance: 68830,
  },
  {
    id: "5",
    type: "debit",
    amount: 2000,
    date: new Date("2024-12-24"),
    receiverName: "Cecelia",
    pending: false,
    receiverBank: "FirstNational",
    note: "Merry Xmas",
    transactionId: "87889889823822hsh",
    accountName: "Natasha Savings",
    availableBalance: 70850,
  },
  {
    id: "6",
    type: "debit",
    amount: 5800,
    date: new Date("2024-12-12"),
    receiverName: "FlyEmirates",
    pending: false,
    receiverBank: "Wellsfargo",
    note: "tickets",
    transactionId: "8879889823822hsh",
    accountName: "Natasha Savings",
    availableBalance: 72880,
  },
  {
    id: "7",
    type: "debit",
    amount: 21330,
    date: new Date("2024-12-04"),
    receiverName: "Fendi",
    pending: false,
    receiverBank: "BofA",
    note: "Shopping",
    transactionId: "8879887353828jush",
    accountName: "Natasha Savings",
    availableBalance: 78730,
  },
  {
    id: "8",
    type: "debit",
    amount: 9000,
    date: new Date("2024-11-25"),
    receiverName: "Cecelia",
    pending: false,
    receiverBank: "FirstNational",
    note: "November",
    transactionId: "887988735908722hsh",
    accountName: "Natasha Savings",
    availableBalance: 100000,
  },
  {
    id: "9",
    type: "debit",
    amount: 42340,
    date: new Date("2024-11-17"),
    receiverName: "Neal",
    pending: false,
    receiverBank: "RegionsBank",
    note: "Renovation",
    transactionId: "8879887623822hsh",
    accountName: "Natasha Savings",
    availableBalance: 109110,
  },
  {
    id: "10",
    type: "credit",
    amount: 89800,
    date: new Date("2024-11-09"),
    receiverName: "Neal",
    pending: false,
    receiverBank: "RegionsBank",
    note: "rent",
    transactionId: "8879898273822hsh",
    accountName: "Natasha Savings",
    availableBalance: 151450,
  },
  {
    id: "11",
    type: "debit",
    amount: 38350,
    accountName: "Natasha Savings",
    date: new Date("2024-10-27"),
    receiverName: "ChanelStore",
    pending: false,
    receiverBank: "WellsFargo",
    note: "shopping",
    transactionId: "8879839443822hsh",
    availableBalance: 61650,
  },
  {
    id: "12",
    type: "debit",
    accountName: "Natasha Savings",
    amount: 18030,
    date: new Date("2024-10-14"),
    receiverName: "thomas",
    pending: false,
    receiverBank: "Capital One",
    note: "bills",
    transactionId: "887983944383uhsh",
    availableBalance: 100000,
  },
];

export function generateRandomId(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export function formatDateToString(date: Date): string {
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

export function generateTransactionId(): string {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base 36
  const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
  return `${timestamp}-${randomString}`;
}

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

export const CHARGES = 30;
export const MYPIN = "1234";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};
