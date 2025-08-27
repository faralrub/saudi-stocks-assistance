# Saudi Stock AI Assistant & Exchange Monitor

A modern web application featuring a Saudi AI stock assistant powered by DeepSeek API and a Saudi Exchange monitoring system.

## Features

- **Saudi Stock AI Assistant**: Intelligent AI assistant focused on Saudi Exchange stocks and analysis
- **Saudi Exchange Monitor**: Real-time Saudi stock monitoring capabilities
- **Modern UI**: Beautiful, responsive design with smooth animations
- **DeepSeek Integration**: Powered by advanced AI language models

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- DeepSeek API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saudi-stocks-assistance
```

2. Install server dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
# DeepSeek API Configuration
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# Server Configuration
PORT=5000
```

4. Get your DeepSeek API key:
   - Visit [DeepSeek AI](https://platform.deepseek.com/)
   - Sign up and get your API key
   - Add it to your `.env` file

### Running the Application

1. Start the server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

2. The server will run on `http://localhost:3000`

3. Open your browser and navigate to the application

## Project Structure

```
saudi-stocks-assistance/
├── server/
│   └── server.js          # Express server with DeepSeek API integration
├── src/
│   ├── pages/
│   │   ├── saudiAi.jsx    # Saudi Stock AI assistant component
│   │   └── stockMonitor.jsx # Stock monitoring component
│   └── pagesCss/
│       ├── saudiAi.css    # Saudi Stock AI styling
│       └── stockMonitor.css # Stock monitor styling
├── package.json           # Server dependencies
└── README.md             # This file
```

## API Endpoints

- `GET /` - Landing page
- `POST /api/chat` - Saudi Stock AI assistant endpoint
- `GET /api/health` - Health check

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, HTML5, CSS3
- **AI Integration**: DeepSeek API
- **Styling**: CSS3 with modern design principles
- **Real-time**: WebSocket support (planned)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support or questions, please open an issue in the repository.
