import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'plus' | 'minus';
}

let Id = 0;

/*
    Process the expense and income transactions
    Used in the AddTransaction.vue component
*/
export const useTransaction = defineStore('transaction', () => {
  const transactions = reactive<Transaction[]>([]);

  // Add transaction item
  const addTransaction = (title: string, amount: number) => {
    const id = Id++;
    const transaction: Transaction = {
      id,
      title,
      amount,
      type: amount > 0 ? 'plus' : 'minus'
    };
    transactions.push(transaction);

    return transaction;
  };

  // Delete transaction item
  const removeTransaction = (id: number) => {
    const index = transactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
    }
  };

  // Calculate the total amount
  const totalAmount = computed(() => {
    return transactions.reduce((total, t) => total + t.amount, 0);
  });

  // Calculate the total income
  const totalIncome = computed(() =>
    transactions.filter((t) => t.type === 'plus').reduce((total, t) => total + t.amount, 0)
  );

  // Calculate the total expense
  const totalExpense = computed(() =>
    transactions.filter((t) => t.type === 'minus').reduce((total, t) => total + t.amount, 0)
  );

  return {
    totalAmount,
    totalIncome,
    totalExpense,
    transactions,
    removeTransaction,
    addTransaction
  };
});
