/**
 * Bitcoin DCA vs Loan Strategy Analyzer
 * Core analysis functions for comparing investment strategies
 */

import { BTC_PRICES, ALL_MONTHS } from './data.js';

/**
 * Default configuration
 */
export const DEFAULTS = {
    downPaymentPct: 0.30,           // 30% down payment
    liquidationThreshold: 0.50,     // 50% price drop triggers liquidation
    investmentAmount: 10000         // $10,000 default investment
};

/**
 * Calculate monthly payment for an amortizing loan
 * @param {number} principal - Loan principal amount
 * @param {number} annualRate - Annual interest rate (decimal, e.g., 0.15 for 15%)
 * @param {number} months - Loan term in months
 * @returns {number} Monthly payment amount
 */
export function calculateMonthlyPayment(principal, annualRate, months) {
    const monthlyRate = annualRate / 12;
    if (monthlyRate === 0) return principal / months;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
           (Math.pow(1 + monthlyRate, months) - 1);
}

/**
 * Check if a loan would have been liquidated during the period
 * @param {number} startPrice - BTC price at loan start
 * @param {number[]} prices - Array of prices during loan term
 * @param {number} threshold - Liquidation threshold (default 0.50 = 50% drop)
 * @returns {Object} Liquidation info including whether liquidated and details
 */
export function checkLiquidation(startPrice, prices, threshold = DEFAULTS.liquidationThreshold) {
    const liquidationPrice = startPrice * (1 - threshold);
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= liquidationPrice) {
            return {
                liquidated: true,
                liquidationMonth: i,
                lowestPrice: Math.min(...prices),
                dropPercent: ((startPrice - Math.min(...prices)) / startPrice) * 100
            };
        }
    }
    
    return {
        liquidated: false,
        lowestPrice: Math.min(...prices),
        dropPercent: ((startPrice - Math.min(...prices)) / startPrice) * 100
    };
}

/**
 * Analyze a single period comparing Loan vs DCA strategy
 * @param {string} startMonth - Start month in YYYY-MM format
 * @param {number} loanMonths - Loan term in months
 * @param {number} apr - Annual percentage rate (e.g., 15 for 15%)
 * @param {number} originationFee - Origination fee percentage (e.g., 2 for 2%)
 * @param {number} investmentAmount - Total investment amount in USD
 * @returns {Object|null} Analysis results or null if invalid period
 */
export function analyzePeriod(startMonth, loanMonths, apr, originationFee, investmentAmount = DEFAULTS.investmentAmount) {
    const startIdx = ALL_MONTHS.indexOf(startMonth);
    if (startIdx === -1 || startIdx + loanMonths > ALL_MONTHS.length) return null;
    
    const months = ALL_MONTHS.slice(startIdx, startIdx + loanMonths);
    const prices = months.map(m => BTC_PRICES[m]);
    
    // Loan strategy calculations
    const downPayment = investmentAmount * DEFAULTS.downPaymentPct;
    const loanAmount = investmentAmount * (1 - DEFAULTS.downPaymentPct);
    const loanWithFees = loanAmount * (1 + originationFee / 100);
    const monthlyPayment = calculateMonthlyPayment(loanWithFees, apr / 100, loanMonths);
    const totalCashOutlay = downPayment + (monthlyPayment * loanMonths);
    
    // BTC accumulated with loan (buy all upfront)
    const btcFromLoan = investmentAmount / prices[0];
    
    // DCA strategy calculations
    const dcaMonthly = totalCashOutlay / loanMonths;
    const btcFromDca = prices.reduce((sum, price) => sum + dcaMonthly / price, 0);
    const avgDcaPrice = totalCashOutlay / btcFromDca;
    
    // Check for liquidation
    const liquidationInfo = checkLiquidation(prices[0], prices);
    
    return {
        // Period info
        startMonth,
        endMonth: months[months.length - 1],
        months,
        prices,
        
        // Results
        loanWins: btcFromLoan > btcFromDca,
        loanAdvantage: ((btcFromLoan / btcFromDca) - 1) * 100,
        
        // Loan details
        investmentAmount,
        downPayment,
        loanAmount,
        loanWithFees,
        monthlyPayment,
        totalCashOutlay,
        btcFromLoan,
        
        // DCA details
        btcFromDca,
        dcaMonthly,
        avgDcaPrice,
        
        // Price stats
        startPrice: prices[0],
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices),
        
        // Liquidation data
        ...liquidationInfo,
        liquidationMonthName: liquidationInfo.liquidated ? months[liquidationInfo.liquidationMonth] : null
    };
}

/**
 * Run full analysis across a date range
 * @param {string} startDate - Start date in YYYY-MM format
 * @param {string} endDate - End date in YYYY-MM format
 * @param {number} loanMonths - Loan term in months
 * @param {number} apr - Annual percentage rate
 * @param {number} originationFee - Origination fee percentage
 * @returns {Object} Complete analysis results with summary statistics
 */
export function runFullAnalysis(startDate, endDate, loanMonths, apr, originationFee) {
    const startIdx = ALL_MONTHS.indexOf(startDate);
    const endIdx = ALL_MONTHS.indexOf(endDate);
    
    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        return { error: 'Invalid date range', results: [], summary: null };
    }
    
    const results = [];
    const resultsMap = {};
    
    // Analyze each possible starting period
    for (let i = startIdx; i <= endIdx - loanMonths + 1; i++) {
        const result = analyzePeriod(ALL_MONTHS[i], loanMonths, apr, originationFee);
        if (result) {
            results.push(result);
            resultsMap[result.startMonth] = result;
        }
    }
    
    // Calculate summary statistics
    const loanWins = results.filter(r => r.loanWins).length;
    const dcaWins = results.length - loanWins;
    const liquidations = results.filter(r => r.liquidated).length;
    
    const summary = {
        total: results.length,
        loanWins,
        dcaWins,
        loanWinPct: results.length > 0 ? (loanWins / results.length) * 100 : 0,
        dcaWinPct: results.length > 0 ? (dcaWins / results.length) * 100 : 0,
        avgAdvantage: results.length > 0 
            ? results.reduce((sum, r) => sum + r.loanAdvantage, 0) / results.length 
            : 0,
        liquidations,
        liquidationPct: results.length > 0 ? (liquidations / results.length) * 100 : 0,
        
        // Additional stats
        maxLoanAdvantage: results.length > 0 
            ? Math.max(...results.map(r => r.loanAdvantage)) 
            : 0,
        minLoanAdvantage: results.length > 0 
            ? Math.min(...results.map(r => r.loanAdvantage)) 
            : 0
    };
    
    return {
        results,
        resultsMap,
        summary,
        params: { startDate, endDate, loanMonths, apr, originationFee }
    };
}

/**
 * Format currency for display
 * @param {number} value - Value to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted currency string
 */
export function formatCurrency(value, decimals = 2) {
    if (value >= 1000000) {
        return '$' + (value / 1000000).toFixed(2) + 'M';
    }
    if (value >= 1000) {
        return '$' + (value / 1000).toFixed(decimals) + 'K';
    }
    if (value >= 1) {
        return '$' + value.toFixed(decimals);
    }
    return '$' + value.toFixed(4);
}

/**
 * Format BTC amount for display
 * @param {number} btc - BTC amount
 * @returns {string} Formatted BTC string
 */
export function formatBTC(btc) {
    if (btc >= 1) {
        return btc.toFixed(4) + ' BTC';
    }
    return btc.toFixed(6) + ' BTC';
}

/**
 * Format percentage for display
 * @param {number} pct - Percentage value
 * @param {boolean} showSign - Whether to show + for positive values
 * @returns {string} Formatted percentage string
 */
export function formatPercent(pct, showSign = false) {
    const sign = showSign && pct > 0 ? '+' : '';
    return sign + pct.toFixed(1) + '%';
}
