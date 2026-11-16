import { rimInterests } from "./rim";

export const historicalFinancials = {
  revenueTrillions: 11.8,
  netIncomeTrillions: 1.45,
  employees: 25200,
  sharePrice: 3200,
  sharesOutstandingBillions: 8.52,
  assetsTrillions: 34.3,
};

// Revenue inputs come from the supplied FY26 profile. Margins and holding expenses
// are illustrative assumptions for review, replacing the obsolete control model.
export const rimEstimates = {
  shippingRevenueTrillions: 5.8,
  retailRevenueTrillions: 12.4,
  shippingNetMargin: 0.08,
  retailNetMargin: 0.03,
  holdingExpensesTrillions: 0.025,
};

export const rimAssociateProfitTrillions =
  rimEstimates.shippingRevenueTrillions *
    rimEstimates.shippingNetMargin *
    rimInterests.rimco +
  rimEstimates.retailRevenueTrillions *
    rimEstimates.retailNetMargin *
    rimInterests.rimPlc -
  rimEstimates.holdingExpensesTrillions;

export const danhassanRimEarningsTrillions =
  rimAssociateProfitTrillions * rimInterests.danhassan;

const referenceMarketCapTrillions =
  (historicalFinancials.sharePrice *
    historicalFinancials.sharesOutstandingBillions) /
  1000;
const referenceEarningsMultiple =
  referenceMarketCapTrillions / historicalFinancials.netIncomeTrillions;
const projectedNetIncomeTrillions =
  historicalFinancials.netIncomeTrillions + danhassanRimEarningsTrillions;

export const groupEstimates = {
  revenueTrillions: historicalFinancials.revenueTrillions,
  netIncomeTrillions: projectedNetIncomeTrillions,
  marketCapTrillions: projectedNetIncomeTrillions * referenceEarningsMultiple,
  earningsPerShare:
    (projectedNetIncomeTrillions * 1000) /
    historicalFinancials.sharesOutstandingBillions,
  valuePerShare:
    (projectedNetIncomeTrillions * referenceEarningsMultiple * 1000) /
    historicalFinancials.sharesOutstandingBillions,
  earningsMultiple: referenceEarningsMultiple,
  employees: historicalFinancials.employees,
};

export const estimateBasis =
  "FY2026 estimates based on stable operating activity and the reference earnings multiple.";

export const groupHighlights = [
  {
    end: groupEstimates.marketCapTrillions,
    prefix: "₦",
    suffix: "T",
    decimals: 1,
    label: "Estimated market capitalisation",
  },
  {
    end: groupEstimates.revenueTrillions,
    prefix: "₦",
    suffix: "T",
    decimals: 1,
    label: "FY2026 revenue estimate",
  },
  {
    end: groupEstimates.employees,
    suffix: "+",
    label: "People across the group",
  },
  { end: 4, minimumIntegerDigits: 2, label: "Portfolio companies" },
];
