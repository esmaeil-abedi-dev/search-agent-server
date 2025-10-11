#!/bin/bash

echo "🎯 Skill Finder AI - Quick Start Script"
echo "======================================="
echo ""

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found!"
    echo "Creating .env file from template..."
    cat > .env << EOF
OPEN_ROUTER_API_KEY=your_openrouter_api_key_here
TAVILY_API_KEY=your_tavily_api_key_here
EOF
    echo "✅ .env file created. Please edit it with your API keys."
    echo "Then run this script again."
    exit 1
fi

echo "🚀 Starting services with docker-compose..."
echo ""

if command -v docker-compose &> /dev/null; then
    docker-compose up
elif command -v podman-compose &> /dev/null; then
    podman-compose up
else
    echo "❌ Neither docker-compose nor podman-compose found!"
    echo "Please install Docker or Podman to continue."
    exit 1
fi
