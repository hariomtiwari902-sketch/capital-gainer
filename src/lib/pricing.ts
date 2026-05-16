/**
 * Pricing tiers — amounts are representative advisory tiers.
 * Update this file to match your live rate card from the reference site.
 */
export type PlanKey = "weekly" | "monthly" | "quarterly";

export type PricingCategory = {
  id: string;
  name: string;
  popular?: boolean;
  plans: Record<PlanKey, number>;
};

export const PLAN_LABELS: Record<PlanKey, string> = {
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
};

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "stock-cash",
    name: "Stock Cash",
    plans: { weekly: 2999, monthly: 9999, quarterly: 26999 },
  },
  {
    id: "cash-positional",
    name: "Cash Positional",
    plans: { weekly: 3499, monthly: 11499, quarterly: 30999 },
  },
  {
    id: "stock-future",
    name: "Stock Future",
    plans: { weekly: 3999, monthly: 12999, quarterly: 34999 },
  },
  {
    id: "future-stbt-btst",
    name: "Future STBT / BTST",
    plans: { weekly: 4499, monthly: 14499, quarterly: 38999 },
  },
  {
    id: "stock-option",
    name: "Stock Option",
    plans: { weekly: 4999, monthly: 15999, quarterly: 42999 },
  },
  {
    id: "option-btst",
    name: "Option BTST",
    plans: { weekly: 5499, monthly: 17499, quarterly: 46999 },
  },
  {
    id: "index-future",
    name: "Index Future",
    plans: { weekly: 3999, monthly: 12999, quarterly: 34999 },
  },
  {
    id: "index-option",
    name: "Index Option",
    plans: { weekly: 5499, monthly: 17999, quarterly: 47999 },
  },
  {
    id: "equity-combo-standard",
    name: "Equity Combo Standard",
    popular: true,
    plans: { weekly: 7999, monthly: 24999, quarterly: 67999 },
  },
  {
    id: "positional-combo",
    name: "Positional Combo",
    plans: { weekly: 8999, monthly: 27999, quarterly: 74999 },
  },
];

export function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}
