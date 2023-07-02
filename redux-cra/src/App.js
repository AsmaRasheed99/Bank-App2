import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import Navbar from "./layout/Navbar";
import Footer from '../src/layout/Footer'

const App = () => {
  const accounts = useSelector((state) => state.accounts);

  return (
    <>
      <Navbar />
      <div class="p-4 min-h-screen">
        <header></header>
        <main>
          <table class="w-full mt-4 bg-white border border-gray-200">
            <thead>
              <tr>
                <th class="py-2 px-4 bg-emerald-100">ID</th>
                <th class="py-2 px-4 bg-emerald-100">Customer Name</th>
                <th class="py-2 px-4 bg-emerald-100">Account Number</th>
                <th class="py-2 px-4 bg-emerald-100">Account Type</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td class="py-2 px-4 border-t border-gray-200 text-center">
                    {account.id}
                  </td>
                  <td class="py-2 px-4 border-t border-gray-200 text-center">
                    {account.customerName}
                  </td>
                  <td class="py-2 px-4 border-t border-gray-200 text-center">
                    {account.accountNumber}
                  </td>
                  <td class="py-2 px-4 border-t border-gray-200 text-center">
                    {account.accountType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      <Footer/>
    </>
  );
};

export default App;
