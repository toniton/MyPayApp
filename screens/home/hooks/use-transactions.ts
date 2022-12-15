import create from 'zustand';
import {TransactionsType} from '../../../models/transactions';

type TransactionsState = {
  balance: number;
  transactions: TransactionsType[];
  addTransaction: (transaction: TransactionsType) => void;
};

export const useTransactions = create<TransactionsState>(set => ({
  balance: 0,
  transactions: [],
  addTransaction: transaction =>
    set(state => ({
      ...state,
      balance: state.balance + transaction.amount,
      transactions: [
        ...state.transactions,
        {
          id: state.transactions.length + 1,
          reference: transaction.reference,
          description: transaction.description,
          createdAt: Date.now(),
          amount: transaction.amount,
        },
      ],
    })),
}));
