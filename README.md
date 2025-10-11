# 🎯 Skill Finder Agent API

A FastAPI-based web service that uses LangChain and AI agents to automatically discover and categorize job skills for any position by searching LinkedIn and other sources.

## ✨ Features

- 🤖 **AI-Powered Skill Discovery**: Uses ReAct agent pattern with LangChain
- 🔍 **Real-time Search**: Integrates with Tavily Search to find current job requirements
- 📊 **Structured Output**: Returns categorized skills with descriptions
- 🚀 **FastAPI REST API**: Fast, modern, and easy-to-use API
- 🐳 **Containerized**: Ready-to-deploy with Docker/Podman

## 🏗️ Architecture

- **LangChain ReAct Agent**: Implements reasoning and acting pattern for intelligent skill discovery
- **OpenRouter AI**: Uses Qwen 3 235B model for natural language processing
- **Tavily Search**: Web search API for finding real-time job postings
- **FastAPI**: High-performance web framework
- **Pydantic**: Data validation and structured outputs

## 📋 Prerequisites

- Python 3.13+
- UV package manager
- Docker or Podman (for containerization)
- API Keys:
  - [OpenRouter API Key](https://openrouter.ai/)
  - [Tavily API Key](https://tavily.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd search_agent
```

### 2. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
OPEN_ROUTER_API_KEY=your_openrouter_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
```

### 3. Install Dependencies

```bash
# Using UV
uv sync

# Or with pip
pip install -r requirements.txt
```

### 4. Run Locally

```bash
# Development mode
uv run fastapi dev server.py

# Production mode
uv run fastapi run server.py
```

The API will be available at `http://localhost:8000`

## 🐳 Docker/Podman Deployment

### Build Image

```bash
# Using Docker
docker build -t search-agent .

# Using Podman
podman build -t search-agent .
```

### Run Container

```bash
# Using Docker
docker run -d -p 8000:8000 --env-file .env --name search-agent search-agent

# Using Podman
podman run -d -p 8000:8000 --env-file .env --name search-agent search-agent
```

### Container Management

```bash
# View logs
podman logs -f search-agent

# Stop container
podman stop search-agent

# Start container
podman start search-agent

# Remove container
podman rm -f search-agent
```

## 📡 API Usage

### Endpoint

**POST** `/skills`

### Request Body

```json
{
  "position": "Python Developer"
}
```

### Response

```json
{
  "skills": {
    "name": "Python Developer Skills",
    "description": "Essential skills for Python Developer position",
    "skills": [
      {
        "name": "Python Programming",
        "description": "Proficiency in Python 3.x with knowledge of frameworks like Django or Flask"
      },
      {
        "name": "API Development",
        "description": "Experience building RESTful APIs and microservices"
      },
      {
        "name": "Database Management",
        "description": "Knowledge of SQL and NoSQL databases (PostgreSQL, MongoDB)"
      }
    ]
  }
}
```

### Example with cURL

```bash
curl -X POST http://localhost:8000/skills \
  -H "Content-Type: application/json" \
  -d '{"position": "Data Scientist"}'
```

### Example with Python

```python
import requests

response = requests.post(
    "http://localhost:8000/skills",
    json={"position": "Full Stack Developer"}
)

skills = response.json()
print(skills)
```

### Example with JavaScript/Node.js

```javascript
const response = await fetch('http://localhost:8000/skills', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ position: 'DevOps Engineer' })
});

const skills = await response.json();
console.log(skills);
```

## 🏗️ Project Structure

```
search_agent/
├── server.py                 # FastAPI application
├── skill_finder_agent.py     # LangChain agent logic
├── schema.py                 # Pydantic models
├── prompt.py                 # ReAct prompt template
├── pyproject.toml            # Project dependencies
├── uv.lock                   # Locked dependencies
├── Dockerfile                # Container configuration
├── .env                      # Environment variables (create this)
└── README.md                 # This file
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPEN_ROUTER_API_KEY` | API key for OpenRouter AI service | Yes |
| `TAVILY_API_KEY` | API key for Tavily search service | Yes |

### Model Configuration

The default model is `qwen/qwen3-235b-a22b:free`. You can change it in `skill_finder_agent.py`:

```python
llm = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",
    model="your-preferred-model",  # Change here
    api_key=OPEN_ROUTER_API_KEY,
    temperature=0,
)
```

## 🚀 Deployment Options

### 1. Railway
1. Push code to GitHub
2. Visit [railway.app](https://railway.app)
3. New Project → Deploy from GitHub
4. Add environment variables
5. Deploy automatically!

### 2. Render
1. Push code to GitHub
2. Visit [render.com](https://render.com)
3. New → Web Service
4. Connect your repo
5. Add environment variables
6. Deploy!

### 3. Fly.io
```bash
# Install flyctl
brew install flyctl

# Login
flyctl auth login

# Deploy
flyctl launch
```

### 4. Google Cloud Run / AWS ECS / Azure Container Instances
Push your Docker image to container registry and deploy using their respective services.

## 🧪 Testing

```bash
# Run the API
uv run fastapi dev server.py

# In another terminal, test the endpoint
curl -X POST http://localhost:8000/skills \
  -H "Content-Type: application/json" \
  -d '{"position": "Machine Learning Engineer"}'
```

## 🛠️ Development

### Install Development Dependencies

```bash
uv sync
```

### Code Formatting

```bash
# Format with Black
uv run black .

# Sort imports with isort
uv run isort .
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on GitHub.

## 🔗 Links

- [LangChain Documentation](https://python.langchain.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [OpenRouter](https://openrouter.ai/)
- [Tavily Search](https://tavily.com/)

---

Made with ❤️ using LangChain, FastAPI, and AI
