# Bitcoin DCA vs Loan Strategy Analyzer

An interactive tool to compare Bitcoin lump-sum loan purchases vs Dollar Cost Averaging (DCA) using historical data from 2010-2026.

![Bitcoin Analyzer Preview](assets/preview.png)

## 🎯 What This Tool Does

This analyzer helps you understand the historical performance of two Bitcoin investment strategies:

1. **Loan Strategy**: Put 30% down, finance 70% with an amortizing loan, and buy all BTC upfront
2. **DCA Strategy**: Spread the same total cash outlay across monthly purchases

The tool runs a rolling window analysis across all historical periods and shows you:
- Which strategy won more often
- Average advantage of the winning strategy
- Liquidation risk with traditional lending

## 🚀 Live Demo

[Try it live](https://bitmor.xyz/loans)

## ✨ Features

- **Historical Data**: Bitcoin monthly prices from July 2010 to February 2026
- **Configurable Parameters**:
  - Custom date ranges
  - Loan terms (3 months to 5 years)
  - APR (0-50%)
  - Origination fees
- **Interactive Chart**: Click any period to see detailed $10,000 comparison
- **Liquidation Analysis**: Shows how many periods would have triggered liquidation with traditional lenders (50% price drop)
- **Mobile Responsive**: Works on all devices

## 📊 Key Findings

Based on historical analysis with 15% APR and 30% down payment:

| Loan Term | Loan Win Rate | Avg Advantage |
|-----------|---------------|---------------|
| 3 Months  | ~55%          | +2.9%         |
| 1 Year    | ~67%          | +25.0%        |
| 3 Years   | ~69%          | +72.7%        |
| 5 Years   | ~89%          | +146.4%       |

**Pattern**: Longer terms = higher loan win rate (due to Bitcoin's secular uptrend)

## 🛠️ Installation

### Option 1: Just Open the HTML File
```bash
# Clone the repo
git clone https://github.com/bitmor-protocol/btc-loan-analyzer.git

# Open in browser
open index.html
```

### Option 2: Serve Locally
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
btc-loan-analyzer/
├── index.html          # Main application (standalone)
├── README.md           # This file
├── LICENSE             # MIT License
├── assets/
│   └── preview.png     # Screenshot for README
└── src/
    ├── data.js         # Bitcoin price data (for modular use)
    └── analyzer.js     # Core analysis functions (for modular use)
```

## 🔧 Configuration

All parameters are configurable via the UI, but you can also modify defaults in the code:

```javascript
// Default settings
const DEFAULTS = {
    startDate: '2016-01',
    endDate: '2026-02',
    loanTerm: 36,           // months
    apr: 15,                // percent
    originationFee: 0,      // percent
    downPayment: 0.30,      // 30%
    liquidationThreshold: 0.50  // 50% drop
};
```

## 📈 How It Works

### Loan Strategy Calculation
```
BTC Purchased = Investment Amount / BTC Price at Start
Total Cost = Down Payment + (Monthly Payment × Loan Term)
```

### DCA Strategy Calculation
```
Monthly Investment = Total Cost / Loan Term
BTC Accumulated = Σ (Monthly Investment / BTC Price each month)
```

### Liquidation Check
```
If any price during loan term ≤ Start Price × 0.5:
    → Liquidation would occur with traditional lenders
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is for educational and informational purposes only. It is not financial advice. Past performance does not guarantee future results. Bitcoin is a volatile asset and you could lose money. Always do your own research before making investment decisions.

## 🔗 Links

- [Bitmor Protocol](https://bitmor.xyz) - Bitcoin mortgages with PUT protection
- [Join Waitlist](https://bitmor.xyz/loans)

## 📊 Data Sources

Bitcoin price data is compiled from historical records. Prices represent approximate monthly values and may not reflect exact historical prices on any given day.

---

Built with ❤️ by [Bitmor Protocol](https://bitmor.xyz)
