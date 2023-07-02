import { configureStore } from "@reduxjs/toolkit";

const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 3,
            customerName: "John Doe",
            accountNumber: "567890",
            accountType: "Checking"
        },
        {
            id: 4,
            customerName: "Jane Smith",
            accountNumber: "456789",
            accountType: "Savings"
        },
        {
            id: 5,
            customerName: "Sarah Johnson",
            accountNumber: "246813",
            accountType: "Checking"
        },
        {
            id: 6,
            customerName: "Michael Davis",
            accountNumber: "135792",
            accountType: "Savings"
        },
        {
            id: 7,
            customerName: "Emma Thompson",
            accountNumber: "987123",
            accountType: "Checking"
        },
        {
            id: 8,
            customerName: "David Wilson",
            accountNumber: "456321",
            accountType: "Savings"
        }
    ]
};


const reducer = (state = initState, action) => {
  // You can add more functionality to the reducer if needed
  return state;
};

const store = configureStore({
  reducer: reducer,
});

export default store;