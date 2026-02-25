/**
 * Bitcoin Monthly Price Data (2010-2026)
 * Prices represent approximate monthly values in USD
 * 
 * Data sources: Historical exchange data, CoinGecko, CoinMarketCap
 * Note: Early 2010 prices are from Mt. Gox launch (July 2010)
 */

export const BTC_PRICES = {
    // 2010 (Mt. Gox launched July 2010)
    '2010-07': 0.05, '2010-08': 0.07, '2010-09': 0.06, '2010-10': 0.10,
    '2010-11': 0.20, '2010-12': 0.30,
    
    // 2011 - First major rally and crash
    '2011-01': 0.30, '2011-02': 1.00, '2011-03': 0.80, '2011-04': 1.10,
    '2011-05': 8.00, '2011-06': 29.00, '2011-07': 14.00, '2011-08': 11.00,
    '2011-09': 5.00, '2011-10': 3.20, '2011-11': 2.50, '2011-12': 4.70,
    
    // 2012 - Consolidation year, first halving (Nov 2012)
    '2012-01': 6.00, '2012-02': 4.50, '2012-03': 5.00, '2012-04': 5.00,
    '2012-05': 5.10, '2012-06': 5.50, '2012-07': 7.50, '2012-08': 10.00,
    '2012-09': 11.00, '2012-10': 11.50, '2012-11': 12.00, '2012-12': 13.50,
    
    // 2013 - First major bull run to $1000+
    '2013-01': 13.50, '2013-02': 22.00, '2013-03': 47.00, '2013-04': 135.00,
    '2013-05': 120.00, '2013-06': 100.00, '2013-07': 68.00, '2013-08': 110.00,
    '2013-09': 130.00, '2013-10': 140.00, '2013-11': 350.00, '2013-12': 750.00,
    
    // 2014 - Mt. Gox collapse, bear market begins
    '2014-01': 850.00, '2014-02': 700.00, '2014-03': 620.00, '2014-04': 500.00,
    '2014-05': 450.00, '2014-06': 600.00, '2014-07': 580.00, '2014-08': 500.00,
    '2014-09': 480.00, '2014-10': 380.00, '2014-11': 350.00, '2014-12': 320.00,
    
    // 2015 - Bear market bottom, accumulation
    '2015-01': 280.00, '2015-02': 220.00, '2015-03': 250.00, '2015-04': 240.00,
    '2015-05': 230.00, '2015-06': 250.00, '2015-07': 280.00, '2015-08': 230.00,
    '2015-09': 240.00, '2015-10': 270.00, '2015-11': 330.00, '2015-12': 430.00,
    
    // 2016 - Second halving (July 2016), slow recovery
    '2016-01': 430, '2016-02': 380, '2016-03': 430, '2016-04': 420,
    '2016-05': 450, '2016-06': 530, '2016-07': 680, '2016-08': 600,
    '2016-09': 610, '2016-10': 615, '2016-11': 710, '2016-12': 770,
    
    // 2017 - Parabolic bull run to $20K
    '2017-01': 970, '2017-02': 970, '2017-03': 1190, '2017-04': 1080,
    '2017-05': 1400, '2017-06': 2500, '2017-07': 2550, '2017-08': 2875,
    '2017-09': 4700, '2017-10': 4400, '2017-11': 6400, '2017-12': 10800,
    
    // 2018 - Crypto winter begins
    '2018-01': 14000, '2018-02': 10200, '2018-03': 10800, '2018-04': 7000,
    '2018-05': 9200, '2018-06': 7500, '2018-07': 6400, '2018-08': 7600,
    '2018-09': 7050, '2018-10': 6600, '2018-11': 6350, '2018-12': 4000,
    
    // 2019 - Recovery and consolidation
    '2019-01': 3750, '2019-02': 3450, '2019-03': 3850, '2019-04': 4100,
    '2019-05': 5350, '2019-06': 8550, '2019-07': 10800, '2019-08': 10400,
    '2019-09': 9600, '2019-10': 8300, '2019-11': 9200, '2019-12': 7200,
    
    // 2020 - COVID crash and recovery, third halving (May 2020)
    '2020-01': 7200, '2020-02': 9400, '2020-03': 8600, '2020-04': 6800,
    '2020-05': 8800, '2020-06': 9500, '2020-07': 9100, '2020-08': 11700,
    '2020-09': 10800, '2020-10': 10800, '2020-11': 13700, '2020-12': 19000,
    
    // 2021 - Institutional adoption, new ATH at $69K
    '2021-01': 29300, '2021-02': 33100, '2021-03': 45100, '2021-04': 58800,
    '2021-05': 57700, '2021-06': 35600, '2021-07': 33800, '2021-08': 39800,
    '2021-09': 47100, '2021-10': 43800, '2021-11': 61300, '2021-12': 57000,
    
    // 2022 - Bear market, FTX collapse
    '2022-01': 46300, '2022-02': 38500, '2022-03': 43100, '2022-04': 45500,
    '2022-05': 38500, '2022-06': 31800, '2022-07': 19900, '2022-08': 23300,
    '2022-09': 20000, '2022-10': 19400, '2022-11': 20500, '2022-12': 17000,
    
    // 2023 - Recovery year
    '2023-01': 16600, '2023-02': 23100, '2023-03': 23500, '2023-04': 28400,
    '2023-05': 29200, '2023-06': 27200, '2023-07': 30400, '2023-08': 29200,
    '2023-09': 25900, '2023-10': 26900, '2023-11': 34700, '2023-12': 37700,
    
    // 2024 - ETF approval, fourth halving (April 2024), new ATH
    '2024-01': 42500, '2024-02': 43000, '2024-03': 62400, '2024-04': 71000,
    '2024-05': 63500, '2024-06': 67500, '2024-07': 63000, '2024-08': 64600,
    '2024-09': 57300, '2024-10': 63400, '2024-11': 70000, '2024-12': 96400,
    
    // 2025 - Continued bull market
    '2025-01': 93500, '2025-02': 102000, '2025-03': 84000, '2025-04': 83000,
    '2025-05': 95000, '2025-06': 107000, '2025-07': 103000, '2025-08': 98000,
    '2025-09': 100000, '2025-10': 126000, '2025-11': 96000, '2025-12': 95000,
    
    // 2026
    '2026-01': 88000, '2026-02': 84000
};

/**
 * Get all available months sorted chronologically
 * @returns {string[]} Array of month strings in YYYY-MM format
 */
export const ALL_MONTHS = Object.keys(BTC_PRICES).sort();

/**
 * Loan term options with labels
 */
export const LOAN_TERMS = [
    { label: '3 Months', value: 3 },
    { label: '6 Months', value: 6 },
    { label: '9 Months', value: 9 },
    { label: '1 Year', value: 12 },
    { label: '2 Years', value: 24 },
    { label: '3 Years', value: 36 },
    { label: '4 Years', value: 48 },
    { label: '5 Years', value: 60 },
];

/**
 * Get term label from months
 * @param {number} months - Number of months
 * @returns {string} Human-readable label
 */
export function getTermLabel(months) {
    const term = LOAN_TERMS.find(t => t.value === months);
    return term ? term.label : `${months} Months`;
}

/**
 * Get BTC price for a specific month
 * @param {string} month - Month in YYYY-MM format
 * @returns {number|null} Price or null if not found
 */
export function getPrice(month) {
    return BTC_PRICES[month] || null;
}

/**
 * Get prices for a range of months
 * @param {string} startMonth - Start month in YYYY-MM format
 * @param {number} count - Number of months to retrieve
 * @returns {number[]|null} Array of prices or null if invalid range
 */
export function getPriceRange(startMonth, count) {
    const startIdx = ALL_MONTHS.indexOf(startMonth);
    if (startIdx === -1 || startIdx + count > ALL_MONTHS.length) return null;
    
    const months = ALL_MONTHS.slice(startIdx, startIdx + count);
    return months.map(m => BTC_PRICES[m]);
}
