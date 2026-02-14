export type Kpi = {
  label: string;
  value: string;
  delta: string;
};

export type CashFlowPoint = {
  label: string;
  income: number;
  spent: number;
};

export type Transaction = {
  merchant: string;
  category: string;
  date: string;
  amount: string;
};

export type Account = {
  name: string;
  meta: string;
  amount: string;
};

export type Budget = {
  name: string;
  value: string;
  progress: number;
};

export const dashboardNavLinks = [
  'Overview',
  'Accounts',
  'Transactions',
  'Cards',
  'Insights',
];

export const dashboardKpis: Kpi[] = [
  { label: 'Balance', value: '$24,680.12', delta: '+2.1% this month' },
  { label: 'Spent', value: '$3,142.55', delta: '-4.3% vs last month' },
  { label: 'Income', value: '$6,980.00', delta: '+8.0% vs last month' },
  { label: 'Savings rate', value: '31%', delta: '+3 pts' },
];

export const cashFlowData: CashFlowPoint[] = [
  { label: 'Jan 15', income: 4200, spent: 1800 },
  { label: 'Jan 20', income: 4700, spent: 2200 },
  { label: 'Jan 25', income: 3900, spent: 2400 },
  { label: 'Jan 30', income: 5200, spent: 2600 },
  { label: 'Feb 04', income: 5100, spent: 2300 },
  { label: 'Feb 09', income: 5600, spent: 2800 },
];

export const recentTransactions: Transaction[] = [
  { merchant: 'Fresh Market', category: 'Groceries', date: 'Feb 10', amount: '-$84.22' },
  { merchant: 'Oak Coffee', category: 'Dining', date: 'Feb 10', amount: '-$16.40' },
  { merchant: 'Payroll', category: 'Income', date: 'Feb 09', amount: '+$3,490.00' },
  { merchant: 'City Fuel', category: 'Gas', date: 'Feb 08', amount: '-$52.80' },
  { merchant: 'Nimbus Cloud', category: 'Subscriptions', date: 'Feb 08', amount: '-$29.00' },
  { merchant: 'North Gym', category: 'Health', date: 'Feb 07', amount: '-$65.00' },
  { merchant: 'Home Electric', category: 'Utilities', date: 'Feb 06', amount: '-$118.35' },
  { merchant: 'Book Corner', category: 'Shopping', date: 'Feb 05', amount: '-$42.70' },
];

export const accountItems: Account[] = [
  { name: 'Checking', meta: '... 1832', amount: '$8,420.11' },
  { name: 'Savings', meta: '... 9920', amount: '$14,900.01' },
  { name: 'Card', meta: '... 4401', amount: '-$1,360.00' },
];

export const budgetItems: Budget[] = [
  { name: 'Groceries', value: '$320 / $500', progress: 0.64 },
  { name: 'Dining', value: '$210 / $300', progress: 0.7 },
  { name: 'Gas', value: '$95 / $200', progress: 0.48 },
];
