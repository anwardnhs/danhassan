import {
  groupEstimates,
  estimateBasis,
  rimEstimates,
  historicalFinancials,
  danhassanRimEarningsTrillions,
} from "../data/financials";
import CountUpText from "../components/CountUpText";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, FileText, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import {
  NextChapter,
  PageLink,
  type CorporatePageProps,
} from "../components/CorporateLayout";

const metrics = [
  {
    end: groupEstimates.marketCapTrillions,
    prefix: "₦",
    suffix: "T",
    decimals: 1,
    label: "Market capitalisation",
    note: "Valuation estimate",
  },
  {
    end: groupEstimates.revenueTrillions,
    prefix: "₦",
    suffix: "T",
    decimals: 1,
    label: "Revenue",
    note: "Operating business estimate",
  },
  {
    end: groupEstimates.netIncomeTrillions,
    prefix: "₦",
    suffix: "T",
    decimals: 2,
    label: "Net income",
    note: "Including associate earnings",
  },
  {
    end: groupEstimates.earningsPerShare,
    prefix: "₦",
    suffix: "",
    decimals: 2,
    label: "Earnings per share",
    note: "Based on existing share capital",
  },
  {
    end: danhassanRimEarningsTrillions * 1000,
    prefix: "₦",
    suffix: "B",
    decimals: 1,
    label: "Associate earnings",
    note: "Annual contribution estimate",
  },
  {
    end: groupEstimates.earningsMultiple,
    prefix: "",
    suffix: "x",
    decimals: 1,
    label: "Valuation multiple",
    note: "Reference earnings basis",
  },
];
const reports = [
  {
    title: "FY2026 Financial Outlook & Valuation Model",
    date: "16 Nov 2026",
    type: "Financial outlook",
    size: "",
  },
  {
    title: "FY2025 Audited Financial Results",
    date: "24 Jan 2026",
    type: "Annual report",
    size: "4.2 MB",
  },
  {
    title: "Q4 2025 Investor Presentation",
    date: "15 Jan 2026",
    type: "Presentation",
    size: "2.8 MB",
  },
  {
    title: "2025 Sustainability & ESG Report",
    date: "10 Dec 2025",
    type: "ESG report",
    size: "6.1 MB",
  },
];
const policies = [
  "Code of Business Ethics",
  "Board Charter",
  "Risk Management Framework",
  "Whistleblowing Policy",
  "Sustainability Policy",
  "Audit Committee Charter",
];
const ratings = [
  {
    agency: "Fitch Ratings",
    rating: "BB-",
    outlook: "Stable",
    date: "Dec 2025",
  },
  { agency: "Moody’s", rating: "Ba3", outlook: "Positive", date: "Nov 2025" },
  {
    agency: "Standard & Poor’s",
    rating: "BB-",
    outlook: "Stable",
    date: "Oct 2025",
  },
];

export default function Investors({ onNavigate }: CorporatePageProps) {
  const [category, setCategory] = useState<"reports" | "governance">("reports");
  const [requestedResource, setRequestedResource] = useState<string | null>(
    null,
  );

  return (
    <div className="redesign investors-redesign">
      <section className="investor-opening">
        <div className="site-container investor-opening-grid">
          <div>
            <h1>
              Conviction in our future.
              <br />
              <em>Clarity in our performance.</em>
            </h1>
            <p>
              Financial performance, shareholder information, and the discipline
              behind our long-term investments.
            </p>
            <a className="action-link on-dark" href="#financial-results">
              Explore the financial outlook <ArrowDown size={20} />
            </a>
          </div>
          <div className="annual-report-feature">
            <span>Danhassan & Co.</span>
            <div>
              <p>Financial outlook</p>
              <strong>2026</strong>
              <h2>
                Investing in
                <br />
                what comes next.
              </h2>
            </div>
            <a href="#financial-results">
              View the outlook <ArrowUpRight size={22} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="results-section site-container"
        id="financial-results"
      >
        <div className="redesign-section-title">
          <h2>A broader earnings base.</h2>
          <p>
            FY2026 estimates
            <br />
            Updated 16 November 2026
          </p>
        </div>
        <dl className="financial-metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>
                <CountUpText
                  end={metric.end}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </dd>
              <span>{metric.note}</span>
            </div>
          ))}
        </dl>
        <p className="figure-note">{estimateBasis}</p>
        <details className="financial-assumptions" id="valuation-model">
          <summary>Basis of estimates</summary>
          <div>
            <p>
              Operating revenue is held at the previous year’s level. The
              earnings outlook includes our share of associate profits, after
              estimated holding-company costs. The valuation applies the
              reference earnings multiple to the updated earnings base.
            </p>
            <dl className="financial-model-inputs">
              <div>
                <dt>Shipping revenue assumption</dt>
                <dd>₦{rimEstimates.shippingRevenueTrillions.toFixed(1)}T</dd>
              </div>
              <div>
                <dt>Retail revenue assumption</dt>
                <dd>₦{rimEstimates.retailRevenueTrillions.toFixed(1)}T</dd>
              </div>
              <div>
                <dt>Shipping / retail net margins</dt>
                <dd>
                  {(rimEstimates.shippingNetMargin * 100).toFixed(0)}% /{" "}
                  {(rimEstimates.retailNetMargin * 100).toFixed(0)}%
                </dd>
              </div>
              <div>
                <dt>Annual holding-company costs</dt>
                <dd>
                  ₦{(rimEstimates.holdingExpensesTrillions * 1000).toFixed(0)}B
                </dd>
              </div>
              <div>
                <dt>Reference share price · 24 January 2026</dt>
                <dd>
                  ₦{historicalFinancials.sharePrice.toLocaleString("en-NG")}
                </dd>
              </div>
              <div>
                <dt>Shares outstanding</dt>
                <dd>
                  {historicalFinancials.sharesOutstandingBillions.toFixed(2)}B
                </dd>
              </div>
            </dl>
            <p>
              Estimates assume a full year of earnings participation and no
              additional acquisition financing costs. They are unaudited,
              exclude unquantified property and investment earnings, and remain
              subject to accounting adjustments. Associate revenue and employees
              are reported separately from the operating group.
            </p>
          </div>
        </details>
        <details className="financial-assumptions" id="historical-results">
          <summary>FY2025 results</summary>
          <div>
            <dl className="financial-model-inputs">
              <div>
                <dt>Revenue</dt>
                <dd>₦{historicalFinancials.revenueTrillions.toFixed(1)}T</dd>
              </div>
              <div>
                <dt>Net income</dt>
                <dd>₦{historicalFinancials.netIncomeTrillions.toFixed(2)}T</dd>
              </div>
              <div>
                <dt>Total assets</dt>
                <dd>₦{historicalFinancials.assetsTrillions.toFixed(1)}T</dd>
              </div>
              <div>
                <dt>EBITDA</dt>
                <dd>₦2.9T</dd>
              </div>
            </dl>
            <p>
              Asset and leverage updates depend on the investment carrying value
              and its funding. Historical results retain their original
              reporting period.
            </p>
          </div>
        </details>
      </section>

      <section className="site-container portfolio-investment">
        <div className="redesign-section-title">
          <h2>Investing across the value chain.</h2>
        </div>
        <p>
          Our interests in shipping, logistics, and retail extend the portfolio
          into the movement and distribution of goods. Established management
          teams lead the businesses, with long-term investment and board
          oversight supporting their development.
        </p>
        <PageLink page="portfolio#rim" onNavigate={onNavigate}>
          Explore shipping & logistics
        </PageLink>
      </section>

      <section id="market-performance" className="investor-market">
        <div className="site-container market-grid">
          <div className="share-snapshot">
            <div className="market-heading">
              <h2>Equity valuation</h2>
              <span>FY2026 estimate</span>
            </div>
            <div className="share-price">
              <strong>
                <CountUpText
                  end={groupEstimates.valuePerShare}
                  prefix="₦"
                  decimals={2}
                />
              </strong>
            </div>
            <p>Estimated value per share · 16 November 2026</p>
            <dl className="share-details">
              {[
                [
                  "Market capitalisation",
                  "₦" + groupEstimates.marketCapTrillions.toFixed(1) + "T",
                ],
                [
                  "Shares outstanding",
                  historicalFinancials.sharesOutstandingBillions.toFixed(2) +
                    "B",
                ],
                [
                  "Earnings per share",
                  "₦" + groupEstimates.earningsPerShare.toFixed(2),
                ],
                [
                  "Earnings multiple",
                  groupEstimates.earningsMultiple.toFixed(1) + "x",
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="figure-note">Modelled valuation · see assumptions</p>
            <a
              className="action-link"
              href="#valuation-model"
              onClick={() => {
                const model = document.getElementById("valuation-model");
                if (model instanceof HTMLDetailsElement) model.open = true;
              }}
            >
              View valuation assumptions <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="credit-ratings">
            <h2>Credit ratings</h2>
            {ratings.map((rating) => (
              <div className="rating-row" key={rating.agency}>
                <div>
                  <h3>{rating.agency}</h3>
                  <p>
                    {rating.outlook} outlook · {rating.date}
                  </p>
                </div>
                <strong>{rating.rating}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-library site-container" id="reports">
        <div className="library-heading">
          <h2>Reports & disclosures</h2>
          <button
            className="action-link"
            onClick={() => setRequestedResource("Financial reports archive")}
          >
            Request archive <ArrowUpRight size={20} />
          </button>
        </div>
        <div
          className="library-controls"
          role="group"
          aria-label="Choose document category"
        >
          <button
            aria-pressed={category === "reports"}
            onClick={() => setCategory("reports")}
          >
            Financial reports
          </button>
          <button
            aria-pressed={category === "governance"}
            onClick={() => setCategory("governance")}
          >
            Governance documents
          </button>
        </div>
        <div className="document-list" aria-live="polite">
          {category === "reports"
            ? reports.map((report) => (
                <button
                  className="document-row"
                  key={report.title}
                  onClick={() => setRequestedResource(report.title)}
                >
                  <FileText size={25} aria-hidden="true" />
                  <span>
                    <strong>{report.title}</strong>
                    <span>
                      {report.type} · {report.date} · PDF
                      {report.size ? ` · ${report.size}` : ""}
                    </span>
                  </span>
                  <span className="document-action">
                    Request PDF <ArrowUpRight size={20} />
                  </span>
                </button>
              ))
            : policies.map((policy) => (
                <button
                  className="document-row"
                  key={policy}
                  onClick={() => setRequestedResource(policy)}
                >
                  <FileText size={25} aria-hidden="true" />
                  <span>
                    <strong>{policy}</strong>
                    <span>Group governance</span>
                  </span>
                  <span className="document-action">
                    Request document <ArrowUpRight size={20} />
                  </span>
                </button>
              ))}
        </div>
        <p className="library-note">
          To obtain a document, send a request to our investor relations team.
        </p>
      </section>

      <section id="shareholder-services" className="shareholder-services">
        <div className="site-container">
          <div className="redesign-section-title">
            <h2>Here for our shareholders.</h2>
            <p>Find the information and support you need.</p>
          </div>
          <div className="shareholder-links">
            {["AGM information", "Dividend history", "Financial calendar"].map(
              (title) => (
                <button key={title} onClick={() => setRequestedResource(title)}>
                  {title}
                  <ArrowUpRight size={22} />
                </button>
              ),
            )}
          </div>
          <div className="investor-contacts">
            <div>
              <h3>Investor relations</h3>
              <p>For investors, analysts, and financial enquiries.</p>
              <a href="mailto:ir@danhassan.co">
                <Mail size={19} /> ir@danhassan.co
              </a>
              <a href="tel:+23494614100">
                <Phone size={19} /> +234 9 461 4100
              </a>
            </div>
            <div>
              <h3>Registrar services</h3>
              <p>
                For share certificates, dividend payments, and account updates.
              </p>
              <a href="mailto:registrars@danhassan.co">
                <Mail size={19} /> registrars@danhassan.co
              </a>
            </div>
          </div>
        </div>
      </section>
      <NextChapter
        title="Stay close to the group."
        copy="Read our latest announcements, company news, and operational updates."
        page="newsroom"
        label="Visit the newsroom"
        onNavigate={onNavigate}
      />

      <Dialog
        open={!!requestedResource}
        onOpenChange={(open) => {
          if (!open) setRequestedResource(null);
        }}
      >
        <DialogContent className="story-dialog resource-dialog">
          <DialogTitle>{requestedResource}</DialogTitle>
          <DialogDescription>
            Contact our investor relations team to request this document or the
            latest information. The link below opens a draft in your email app.
          </DialogDescription>
          <a
            className="action-link"
            href={`mailto:ir@danhassan.co?subject=${encodeURIComponent(`Request: ${requestedResource}`)}`}
          >
            Request from investor relations <ArrowUpRight size={20} />
          </a>
        </DialogContent>
      </Dialog>
    </div>
  );
}
