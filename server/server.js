const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../src')));

// DeepSeek API configuration
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../src/index.html');
});

app.get('/saudi-ai', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/saudi-ai.html'));
});

app.get('/stock-monitor', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/stock-monitor.html'));
});

// Saudi AI Chatbot endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationHistory } = req.body;
        
        if (!DEEPSEEK_API_KEY) {
            return res.status(500).json({ 
                error: 'DeepSeek API key not configured' 
            });
        }

        // Prepare conversation context for Saudi Stock AI
        const systemPrompt = `You are Saudi Stock AI, a helpful and knowledgeable AI assistant focused on Saudi exchange. 
        You can help with various topics including stock analysis, stock price, stock prediction, stock forecast, stock past, etc...
        on the saudi exchange. Always be respectful and culturally aware. Respond in a helpful and informative manner, but only use english if they 
        ask can you speak arabic say i can only respond with english.`;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory,
            { role: 'user', content: message }
        ];

        const response = await axios.post(DEEPSEEK_API_URL, {
            model: 'deepseek-chat',
            messages: messages,
            max_tokens: 1000,
            temperature: 0.7,
            stream: false
        }, {
            headers: {
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const aiResponse = response.data.choices[0].message.content;
        
        res.json({
            response: aiResponse,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        res.status(500).json({ 
            error: 'Failed to get response from Saudi Stock AI',
            details: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Function to generate comprehensive stock data with realistic values
function generateComprehensiveStockData(symbol) {
    const now = new Date();
    const baseData = {
        '2222.SR': { // Saudi Aramco - Oil & Gas
            name: 'Saudi Aramco',
            price: 23.78,
            change: 0.15,
            changePercent: 0.63,
            open: 23.80,
            previousClose: 23.63,
            high: 23.90,
            low: 23.73,
            volume: 15.85,
            marketCap: 4750.2,
            peRatio: 15.2,
            roe: 18.5,
            roa: 12.3,
            beta: 0.8,
            profitMargin: 25.6,
            operatingMargin: 32.1,
            currentRatio: 1.8,
            quickRatio: 1.5,
            debtToEquity: 0.3,
            dividendYield: 4.2,
            payoutRatio: 65.0
        },
        '1180.SR': { // Saudi National Bank - Banking
            name: 'Saudi National Bank',
            price: 42.15,
            change: -0.25,
            changePercent: -0.59,
            open: 42.40,
            previousClose: 42.40,
            high: 42.60,
            low: 42.10,
            volume: 8.92,
            marketCap: 89.5,
            peRatio: 12.8,
            roe: 15.2,
            roa: 1.8,
            beta: 1.1,
            profitMargin: 35.2,
            operatingMargin: 42.5,
            currentRatio: 0.9,
            quickRatio: 0.8,
            debtToEquity: 2.1,
            dividendYield: 3.8,
            payoutRatio: 45.2
        },
        '1010.SR': { // Riyad Bank - Banking
            name: 'Riyad Bank',
            price: 28.75,
            change: 0.35,
            changePercent: 1.23,
            open: 28.40,
            previousClose: 28.40,
            high: 28.80,
            low: 28.35,
            volume: 12.45,
            marketCap: 67.8,
            peRatio: 11.5,
            roe: 14.8,
            roa: 1.6,
            beta: 1.0,
            profitMargin: 33.8,
            operatingMargin: 40.2,
            currentRatio: 0.95,
            quickRatio: 0.85,
            debtToEquity: 1.9,
            dividendYield: 4.1,
            payoutRatio: 48.5
        },
        '3020.SR': { // SRMG - Media
            name: 'Saudi Research and Media Group',
            price: 185.50,
            change: -2.50,
            changePercent: -1.33,
            open: 188.00,
            previousClose: 188.00,
            high: 188.50,
            low: 185.00,
            volume: 2.15,
            marketCap: 12.8,
            peRatio: 18.5,
            roe: 22.1,
            roa: 8.9,
            beta: 1.3,
            profitMargin: 28.5,
            operatingMargin: 35.2,
            currentRatio: 2.1,
            quickRatio: 1.8,
            debtToEquity: 0.4,
            dividendYield: 2.8,
            payoutRatio: 52.1
        },
        '7010.SR': { // STC - Telecom
            name: 'Saudi Telecom Company',
            price: 67.80,
            change: 1.20,
            changePercent: 1.80,
            open: 66.60,
            previousClose: 66.60,
            high: 68.00,
            low: 66.50,
            volume: 6.78,
            marketCap: 34.2,
            peRatio: 16.8,
            roe: 19.5,
            roa: 10.2,
            beta: 0.9,
            profitMargin: 26.8,
            operatingMargin: 33.5,
            currentRatio: 1.6,
            quickRatio: 1.4,
            debtToEquity: 0.6,
            dividendYield: 3.5,
            payoutRatio: 58.7
        }
    };
    
    const stockData = baseData[symbol] || {
        name: 'Unknown Stock',
        price: 50.00,
        change: 0.00,
        changePercent: 0.00,
        open: 50.00,
        previousClose: 50.00,
        high: 50.00,
        low: 50.00,
        volume: 10.00,
        marketCap: 100.0,
        peRatio: 15.0,
        roe: 16.0,
        roa: 8.0,
        beta: 1.0,
        profitMargin: 25.0,
        operatingMargin: 30.0,
        currentRatio: 1.5,
        quickRatio: 1.2,
        debtToEquity: 0.5,
        dividendYield: 3.5,
        payoutRatio: 55.0
    };
    
    // Add some realistic price variation
    const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
    const currentPrice = stockData.price * (1 + variation);
    const currentChange = currentPrice - stockData.previousClose;
    const currentChangePercent = (currentChange / stockData.previousClose) * 100;
    
    return {
        chart: {
            result: [{
                meta: {
                    regularMarketPrice: currentPrice,
                    regularMarketOpen: stockData.open,
                    previousClose: stockData.previousClose,
                    regularMarketDayHigh: stockData.high,
                    regularMarketDayLow: stockData.low,
                    regularMarketVolume: stockData.volume * 1000000,
                    marketCap: stockData.marketCap * 1000000000
                },
                indicators: {
                    quote: [{
                        volume: [stockData.volume * 1000000],
                        open: [stockData.open],
                        high: [stockData.high],
                        low: [stockData.low]
                    }]
                }
            }]
        },
        keyStats: {
            beta: stockData.beta
        },
        financialData: {
            forwardPE: stockData.peRatio,
            returnOnEquity: stockData.roe,
            returnOnAssets: stockData.roa,
            debtToEquity: stockData.debtToEquity,
            profitMargins: stockData.profitMargin,
            operatingMargins: stockData.operatingMargin,
            currentRatio: stockData.currentRatio,
            quickRatio: stockData.quickRatio,
            dividendYield: stockData.dividendYield,
            payoutRatio: stockData.payoutRatio
        }
    };
}

// Yahoo Finance proxy endpoint to avoid CORS issues
app.get('/api/stock/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params;
        
        // Generate comprehensive mock data for the stock
        const mockData = generateComprehensiveStockData(symbol);
        
        res.json(mockData);
    } catch (error) {
        console.error('Stock API Error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch stock data',
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Saudi Stock AI server is ready!`);
});
