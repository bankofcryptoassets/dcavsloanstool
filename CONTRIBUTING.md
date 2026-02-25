# Contributing to BTC Loan Analyzer

First off, thank you for considering contributing to BTC Loan Analyzer! It's people like you that make this tool better for everyone.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct: be respectful, inclusive, and constructive.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (screenshots, console errors, etc.)
- **Describe the behavior you observed and what you expected**
- **Include your browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **Include mockups or examples if applicable**

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** with clear, descriptive commits
3. **Test your changes** thoroughly in multiple browsers
4. **Update documentation** if you're changing functionality
5. **Submit your pull request** with a clear description

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/btc-loan-analyzer.git
cd btc-loan-analyzer

# Start a local server
python -m http.server 8000
# or
npx serve

# Open in browser
open http://localhost:8000
```

## Project Structure

```
btc-loan-analyzer/
├── index.html          # Main standalone application
├── example.html        # Module usage examples
├── src/
│   ├── data.js         # Bitcoin price data
│   └── analyzer.js     # Core analysis functions
├── assets/
│   └── preview.png     # README screenshot
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── package.json
```

## Coding Guidelines

### JavaScript

- Use ES6+ features (const/let, arrow functions, template literals)
- Use meaningful variable and function names
- Add JSDoc comments for exported functions
- Keep functions small and focused

### HTML/CSS

- Use semantic HTML elements
- Use Tailwind CSS classes (loaded via CDN)
- Ensure mobile responsiveness
- Test in Chrome, Firefox, and Safari

### Commits

- Use clear, descriptive commit messages
- Reference issue numbers when applicable
- Keep commits focused on single changes

## Areas Where We Need Help

- **Price Data**: Adding/verifying historical BTC prices
- **Features**: New analysis metrics or visualizations
- **Documentation**: Improving README, adding tutorials
- **Testing**: Cross-browser testing, edge cases
- **Internationalization**: Translations for other languages
- **Performance**: Optimizations for large date ranges

## Questions?

Feel free to open an issue with your question or reach out to us at [Bitmor Protocol](https://bitmor.xyz).

Thank you for contributing! 🎉
