import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import {
  accountItems,
  budgetItems,
  cashFlowData,
  dashboardKpis,
  dashboardNavLinks,
  recentTransactions,
} from '@/data/dashboard/mockData';
import { PlusIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const maxCashFlow = Math.max(
  ...cashFlowData.flatMap((point) => [point.income, point.spent]),
);

export default function DashboardPage() {
  return (
    <div className="w-full bg-amber-50/60 px-4 pb-10 pt-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-6 h-16 rounded-xl border border-amber-200/80 bg-amber-50/85 px-3 shadow-sm backdrop-blur dark:border-amber-200/10 dark:bg-slate-900/85 sm:px-4">
          <div className="flex h-full items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-300 text-sm font-bold text-amber-950">
                M
              </div>
              <span className="truncate text-sm font-semibold sm:text-base">
                Mevolut
              </span>
            </div>

            <nav className="hidden items-center gap-1 md:flex">
              {dashboardNavLinks.map((link) => (
                <button
                  key={link}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    link === 'Overview'
                      ? 'bg-amber-200/80 text-amber-950 dark:bg-amber-300/20 dark:text-amber-100'
                      : 'text-slate-600 hover:bg-amber-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                  }`}
                  type="button"
                >
                  {link}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                className="hidden h-10 items-center gap-2 rounded-xl bg-amber-300 px-4 text-sm font-semibold text-amber-950 transition-colors hover:bg-amber-200 sm:inline-flex"
                type="button"
              >
                <PlusIcon className="h-4 w-4" />
                New transfer
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/90 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                <ThemeSwitch />
              </div>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/90 bg-white text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-100 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-100 dark:hover:bg-slate-700"
                type="button"
              >
                AL
              </button>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {dashboardKpis.map((kpi) => (
              <article
                key={kpi.label}
                className="rounded-xl border border-amber-100/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {kpi.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{kpi.value}</p>
                <p className="mt-2 text-xs font-medium text-amber-700 dark:text-amber-300">
                  {kpi.delta}
                </p>
              </article>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-8">
            <article className="rounded-xl border border-amber-100/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">Cash flow</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Income vs spending (last 30 days)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-2 sm:gap-3">
                {cashFlowData.map((point) => (
                  <div key={point.label} className="space-y-2">
                    <div className="flex h-40 items-end justify-center gap-1 sm:h-48">
                      <div
                        className="w-full max-w-3 rounded-t-md bg-amber-300 dark:bg-amber-400/90"
                        style={{
                          height: `${(point.income / maxCashFlow) * 100}%`,
                        }}
                        title={`Income ${point.income}`}
                      />
                      <div
                        className="w-full max-w-3 rounded-t-md bg-slate-300 dark:bg-slate-600"
                        style={{
                          height: `${(point.spent / maxCashFlow) * 100}%`,
                        }}
                        title={`Spent ${point.spent}`}
                      />
                    </div>
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                      {point.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300 dark:bg-amber-400/90" />
                  Income
                </span>
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  Spending
                </span>
              </div>
            </article>

            <article className="rounded-xl border border-amber-100/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">Recent transactions</h2>
                <button
                  type="button"
                  className="rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-100 dark:border-slate-700 dark:text-amber-200 dark:hover:bg-slate-800"
                >
                  Filter
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-amber-100 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                      <th className="px-2 py-3 font-medium">Merchant</th>
                      <th className="px-2 py-3 font-medium">Category</th>
                      <th className="px-2 py-3 font-medium">Date</th>
                      <th className="px-2 py-3 font-medium text-right">
                        Amount
                      </th>
                      <th className="px-2 py-3 font-medium text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((row) => (
                      <tr
                        key={`${row.merchant}-${row.date}`}
                        className="border-b border-amber-50 text-slate-700 dark:border-slate-800 dark:text-slate-200"
                      >
                        <td className="px-2 py-3">{row.merchant}</td>
                        <td className="px-2 py-3">{row.category}</td>
                        <td className="px-2 py-3">{row.date}</td>
                        <td className="px-2 py-3 text-right font-medium">
                          {row.amount}
                        </td>
                        <td className="px-2 py-3 text-right">
                          <button
                            type="button"
                            className="rounded-md px-2.5 py-1 text-xs font-semibold text-amber-800 hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-slate-800"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <aside className="space-y-4 lg:col-span-4">
            <article className="rounded-xl border border-amber-100/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5">
              <h2 className="mb-4 text-lg font-semibold">Accounts</h2>
              <ul className="space-y-3">
                {accountItems.map((account) => (
                  <li
                    key={account.name}
                    className="flex items-center justify-between gap-3 rounded-lg bg-amber-50/70 px-3 py-2.5 dark:bg-slate-800/80"
                  >
                    <div>
                      <p className="text-sm font-medium">{account.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {account.meta}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">{account.amount}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-amber-100/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5">
              <h2 className="mb-4 text-lg font-semibold">Budgets</h2>
              <ul className="space-y-4">
                {budgetItems.map((budget) => (
                  <li key={budget.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-sm font-medium">{budget.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {budget.value}
                      </p>
                    </div>
                    <div className="h-2 rounded-full bg-amber-100 dark:bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-amber-300 dark:bg-amber-400/90"
                        style={{ width: `${budget.progress * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </aside>
        </section>
      </div>
    </div>
  );
}
