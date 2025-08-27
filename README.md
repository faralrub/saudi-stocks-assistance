# Saudi Stock Exchange AI Assistant & Monitor

A sophisticated financial platform providing AI-powered stock analysis and real-time monitoring for the Saudi Stock Exchange, featuring a luxury design palette that embodies professionalism, trust, and exclusivity.

## 🌟 Features

### 🤖 **Saudi Stock AI Assistant**
- Intelligent stock analysis and predictions
- Real-time market insights
- Islamic finance considerations
- Cultural awareness in responses

### 📈 **Stock Monitor Dashboard**
- Real-time Saudi stock tracking
- Professional financial metrics
- Luxurious, responsive design
- Market data visualization

### 🎨 **Luxury Design System**
- **Saudi Emerald** (#0B4A3F) - Primary brand color
- **Saudi Gold** (#D4AF37) - Premium accents
- **Saudi Sapphire** (#1E3A8A) - Professional secondary
- **Saudi Onyx** (#0F0F0F) - Sophisticated text
- Glass morphism effects and smooth animations

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd saudi-stocks-assistance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your DeepSeek API key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Main App: `http://localhost:3000`
   - Saudi AI: `http://localhost:3000/saudi-ai`
   - Stock Monitor: `http://localhost:3000/stock-monitor`

## 🌐 Deployment on Render

### Step 1: Prepare Your Repository

1. **Ensure all files are committed to Git**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Verify your package.json has the correct scripts**
   ```json
   {
     "scripts": {
       "start": "node server/server.js",
       "build": "echo 'No build step required'"
     }
   }
   ```

### Step 2: Deploy on Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**

2. **Click "New +" and select "Web Service"**

3. **Connect your GitHub repository**

4. **Configure the service:**
   - **Name**: `saudi-stocks-assistance`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or upgrade as needed)

5. **Add Environment Variables:**
   - `DEEPSEEK_API_KEY` = Your DeepSeek API key
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render sets this automatically)

6. **Click "Create Web Service"**

### Step 3: Update Frontend URLs

After deployment, update your HTML files to use the production URL:

```javascript
// Replace all localhost:3000 references with your Render URL
// Example: https://saudi-stocks-assistance.onrender.com
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DEEPSEEK_API_KEY` | Your DeepSeek API key | Yes |
| `PORT` | Server port (Render sets automatically) | No |
| `NODE_ENV` | Environment (development/production) | No |

## 📁 Project Structure

```
saudi-stocks-assistance/
├── server/
│   └── server.js          # Express server
├── src/
│   ├── index.html         # Main landing page
│   ├── saudi-ai.html      # AI chatbot interface
│   ├── stock-monitor.html # Stock monitoring dashboard
│   └── pagesCss/          # Styling files
│       ├── saudiStockPalette.css
│       ├── saudiAi.css
│       └── stockMonitor.css
├── package.json           # Dependencies and scripts
├── render.yaml           # Render deployment config
└── README.md             # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Saudi Emerald (#0B4A3F)
- **Accent**: Saudi Gold (#D4AF37)
- **Secondary**: Saudi Sapphire (#1E3A8A)
- **Text**: Saudi Onyx (#0F0F0F)

### Typography
- **Primary**: Inter (Clean, professional)
- **Secondary**: Poppins (Headings, premium feel)

### Components
- Luxury gradients and glass morphism
- Professional shadows and animations
- Responsive design patterns
- Cultural sensitivity considerations

## 🔒 Security

- Environment variables for API keys
- CORS configuration
- Input validation
- Error handling

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues or questions:
1. Check the documentation
2. Review existing issues
3. Create a new issue with details

---

**Built with ❤️ for the Saudi Stock Exchange**
