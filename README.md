# 🎯 Skill Finder AI - Full Stack Application

A modern full-stack web application that uses AI agents to automatically discover and categorize job skills for any position by searching LinkedIn and other sources.

## ✨ Features

- 🤖 **AI-Powered Skill Discovery**: Uses LangChain ReAct agent pattern
- 🔍 **Real-time Search**: Integrates with Tavily Search API
- 📊 **Structured Results**: Returns categorized skills with detailed descriptions
- � **Beautiful UI**: Modern Next.js 15 frontend with Tailwind CSS
- 🚀 **FastAPI Backend**: High-performance REST API
- 🐳 **Fully Containerized**: Docker/Podman ready with docker-compose

## 🏗️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **LangChain** - AI agent orchestration
- **OpenRouter** - AI model provider (Qwen 3 235B)
- **Tavily Search** - Web search API
- **Pydantic** - Data validation
- **UV** - Fast Python package manager

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - Modern state management

## 📁 Project Structure

```
search_agent/
├── backend/                  # FastAPI backend
│   ├── server.py            # Main API server
│   ├── skill_finder_agent.py # LangChain agent logic
│   ├── schema.py            # Pydantic models
│   ├── prompt.py            # ReAct prompt template
│   ├── pyproject.toml       # Python dependencies
│   ├── Dockerfile           # Backend container
│   └── README.md            # Backend docs
├── frontend/                 # Next.js frontend
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   ├── types/               # TypeScript types
│   ├── package.json         # Node dependencies
│   ├── Dockerfile           # Frontend container
│   └── README.md            # Frontend docs
├── docker-compose.yml        # Multi-container setup
└── README.md                # This file
```

## � Quick Start

### Prerequisites

- Python 3.13+
- Node.js 22+
- UV package manager
- Docker or Podman (optional)
- API Keys:
  - [OpenRouter API Key](https://openrouter.ai/)
  - [Tavily API Key](https://tavily.com/)

### Option 1: Using Docker Compose (Recommended)

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd search_agent
```

2. **Set up environment variables**
```bash
# Create .env file in root
cat > .env << EOF
OPEN_ROUTER_API_KEY=your_openrouter_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
EOF
```

3. **Start both services**
```bash
# Using Docker
docker-compose up

# Using Podman
podman-compose up
```

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Option 2: Manual Setup

#### Backend Setup

```bash
cd backend

# Copy environment template
cp .env.example .env
# Edit .env and add your API keys

# Install dependencies
uv sync

# Run development server
uv run fastapi dev server.py

# Backend will be available at http://localhost:8000
```

#### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Run development server
npm run dev

# Frontend will be available at http://localhost:3000
```

## 🎨 Frontend Features

- **Modern UI**: Clean, responsive design with dark mode support
- **Real-time Search**: Instant skill discovery with loading states
- **Skill Cards**: Beautiful card layout with numbered skills
- **Error Handling**: User-friendly error messages
- **Animations**: Smooth transitions and loading animations

## 📡 API Endpoints

### Health Check
```bash
GET http://localhost:8000/
```

### Find Skills
```bash
POST http://localhost:8000/skills
Content-Type: application/json

{
  "position": "Python Developer"
}
```

**Response:**
```json
{
  "skills": {
    "name": "Python Developer Skills",
    "description": "Essential skills for Python Developer position",
    "skills": [
      {
        "name": "Python Programming",
        "description": "Proficiency in Python 3.x..."
      }
    ]
  }
}
```

## 🧪 Testing the Application

1. Start both backend and frontend servers
2. Open http://localhost:3000 in your browser
3. Enter a job position (e.g., "Data Scientist")
4. Click "Find Skills 🔍"
5. View the AI-generated skill list!

## 🐳 Docker/Podman Commands

### Build Images
```bash
# Build both images
docker-compose build

# Or individually
cd backend && docker build -t skill-finder-backend .
cd frontend && docker build -t skill-finder-frontend .
```

### Run Containers
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🚀 Deployment

### Backend Deployment Options

1. **Railway/Render** - One-click deployment
2. **Fly.io** - Global edge deployment
3. **AWS/GCP/Azure** - Cloud platforms
4. **Docker Hub** - Container registry

### Frontend Deployment Options

1. **Vercel** (Recommended for Next.js)
   ```bash
   npm install -g vercel
   cd frontend
   vercel
   ```

2. **Netlify**
3. **Railway**
4. **Docker/Podman on any platform**

### Environment Variables for Production

**Backend:**
```env
OPEN_ROUTER_API_KEY=your_key
TAVILY_API_KEY=your_key
```

**Frontend:**
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

## 🛠️ Development

### Backend Development
```bash
cd backend

# Format code
uv run black .
uv run isort .

# Run tests (if available)
uv run pytest
```

### Frontend Development
```bash
cd frontend

# Format code
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## � Configuration

### Backend Configuration

Edit `backend/skill_finder_agent.py` to change:
- AI model (default: `qwen/qwen3-235b-a22b:free`)
- Temperature settings
- Search parameters

### Frontend Configuration

Edit `frontend/lib/api.ts` to change:
- API URL
- Request timeout
- Error handling

## � Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## � License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [LangChain Documentation](https://python.langchain.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenRouter](https://openrouter.ai/)
- [Tavily Search](https://tavily.com/)

## 📧 Support

For issues and questions, please open an issue on GitHub.

## 🎉 Acknowledgments

- Built with LangChain, FastAPI, and Next.js
- Powered by OpenRouter and Tavily APIs
- Styled with Tailwind CSS

---

Made with ❤️ using AI and modern web technologies
