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
  username: "angeldon@gmail.com",
  password: "angeldon2024",
};

export const USER = {
  id: "1",
  firstName: "Angel",
  lastName: "Don",
  email: "angeldon@gmail.com",
  city: "Los Angelis",
};

export const ACCOUNTS = [
  {
    id: "1",
    availableBalance: 28000,
    officialName: "Angel Don",
    accountName: "Don Savings",
  },
  {
    id: "2",
    availableBalance: 28000,
    officialName: "Angel Don",
    accountName: "Adv Checking",
  },
];

export const BENEFICIARIES = [
  {
    id: "1",
    name: "AUSTIN JAMES",
    accountNumber: "1234567890",
    bank: "Unity",
  },
  {
    id: "2",
    name: "AUSTIN JAMES2",
    accountNumber: "1234567891",
    bank: "Unity",
  },
  {
    id: "3",
    name: "AUSTIN JAMES3",
    accountNumber: "1234567892",
    bank: "Unity",
  },
];

export const TRANSACTIONS = [
  {
    id: "1",
    type: "debit",
    amount: 2000,
    date: new Date(),
    receiverName: "thomas",
    pending: false,
    receiverBank: "PHB",
    note: "bills",
  },
  {
    id: "2",
    type: "debit",
    amount: 2000,
    date: new Date(),
    receiverName: "thomas",
    pending: false,
    receiverBank: "PHB",
    Note: "bills",
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
