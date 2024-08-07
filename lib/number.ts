interface ExpensesDTO {
  account_id: number;
  amount: number;
  bank_id: number;
  bank_name: string;
  bank_number: number;
  category: string;
  minute: number;
  hour: number;
  day: number;
  month: number;
  yaer: number;
  note: string;
}

export const getAllPrice = (expenses: ExpensesDTO[]): number => {
  let prices: number = 0;

  expenses.forEach((item: ExpensesDTO): void => {
    prices += item.amount;
  });

  return prices;
};
