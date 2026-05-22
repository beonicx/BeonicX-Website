#!/bin/bash

# Get the script directory and project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"

cd "$PROJECT_ROOT"

echo "🤖 BeonicX AI Agent Setup Script"
echo "=================================="
echo ""
echo "Project root: $PROJECT_ROOT"
echo ""

# Check if .env exists
if [ -f "backend/.env" ]; then
    echo "✅ Found existing .env file"

    # Check if Google API key is set
    if grep -q "GOOGLE_API_KEY=AIzaSy" backend/.env 2>/dev/null; then
        echo "✅ GOOGLE_API_KEY is configured"
    else
        echo "⚠️  GOOGLE_API_KEY not set properly"
        echo "    Add your key from: https://aistudio.google.com/app/apikey"
    fi
else
    echo "📝 Creating .env file from template..."
    cp backend/.env.example backend/.env
    echo "⚠️  Please edit backend/.env and add your GOOGLE_API_KEY"
    echo ""
fi

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Check if @google/generative-ai is installed
if npm list @google/generative-ai &> /dev/null; then
    echo "✅ Google Generative AI SDK installed"
else
    echo "❌ Google Generative AI SDK not found, installing..."
    npm install @google/generative-ai
fi

cd ..

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Next steps:"
echo ""
echo "1. Verify API key (if needed):"
echo "   Edit: backend/.env"
echo "   Add: GOOGLE_API_KEY=your_key_here"
echo "   Get key: https://aistudio.google.com/app/apikey"
echo ""
echo "2. Start the backend server:"
echo "   cd backend && npm run dev"
echo ""
echo "3. In a new terminal, start the frontend:"
echo "   cd frontend && npm run dev"
echo ""
echo "4. Open http://localhost:3000 and look for the chat widget!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📖 Documentation: frontend/ai-docs/"
echo "   Quick start: frontend/ai-docs/START_HERE.md"
echo "   Gemini guide: frontend/ai-docs/GEMINI_QUICKSTART.md"
