# Backend API

FastAPI service for skill discovery using LangChain agents.

## Setup

```bash
# Install dependencies
uv sync

# Run development server
uv run fastapi dev server.py

# Run production server
uv run fastapi run server.py --host 0.0.0.0 --port 8000
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your API keys:

```bash
cp .env.example .env
```

## API Endpoint

**POST** `/skills`

Request:
```json
{
  "position": "Python Developer"
}
```
