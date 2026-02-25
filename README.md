# Bitcoin DCA vs Loan Strategy Analyzer

Interactive tool comparing Bitcoin lump-sum loan purchases vs Dollar Cost Averaging (DCA) using historical data from 2010-2026.

## What It Does

Compares two Bitcoin investment strategies:

1. **Loan Strategy**: 30% down, finance 70% with amortizing loan, buy all BTC upfront
2. **DCA Strategy**: Spread the same total cash outlay across monthly purchases

## Key Findings

Based on historical analysis (2016-2026) with 15% APR and 30% down:

| Loan Term | Loan Win Rate | Avg Advantage |
|-----------|---------------|---------------|
| 3 Months  | ~55%          | +2.9%         |
| 1 Year    | ~67%          | +25.0%        |
| 3 Years   | ~69%          | +72.7%        |
| 5 Years   | ~89%          | +146.4%       |

**Takeaway**: Longer loan terms historically favor the loan strategy due to Bitcoin's long-term uptrend. However, 20-45% of periods would have triggered liquidation with traditional lenders—wiping out gains entirely. This is why [Bitmor](https://bitmor.xyz) uses PUT options instead of liquidation.

## Features

- Historical BTC prices from July 2010 to February 2026
- Configurable date ranges, loan terms (3mo-5yr), APR, origination fees
- Click any period to see detailed $10,000 comparison
- Liquidation risk analysis (50% price drop threshold)

## Quick Start
```bash
git clone https://github.com/bankofcryptoassets/dcavsloanstool.git
open index.html

# Or serve locally
python -m http.server 8000
```

## Project Structure
```
├── index.html          # Main application (standalone)
├── src/
│   ├── data.js         # Bitcoin price data
│   └── analyzer.js     # Core analysis functions
├── example.html        # Module usage examples
└── README.md
```

## How It Works

**Loan Strategy:**
```
BTC Purchased = Investment Amount / BTC Price at Start
Total Cost = Down Payment + (Monthly Payment × Loan Term)
```

**DCA Strategy:**
```
Monthly Investment = Total Cost / Loan Term
BTC Accumulated = Σ (Monthly Investment / BTC Price each month)
```

**Liquidation Check:**
```
If any price during term ≤ Start Price × 0.5 → Liquidation triggered
```

## Configuration

Defaults can be modified in the code:
```javascript
const DEFAULTS = {
    startDate: '2016-01',
    endDate: '2026-02',
    loanTerm: 36,              // months
    apr: 15,                   // percent
    originationFee: 0,         // percent
    downPayment: 0.30,         // 30%
    liquidationThreshold: 0.50 // 50% drop
};
```

## License

MIT

## Disclaimer

Educational purposes only. Not financial advice. Past performance doesn't guarantee future results.

---

Built by [Bitmor](https://bitmor.xyz) — Bitcoin loans without liquidation risk.
