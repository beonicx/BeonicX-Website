#!/bin/bash

# Get the script directory and project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"

cd "$PROJECT_ROOT"

echo "🧪 Testing BeonicX AI Agent Integration"
echo "========================================"
echo ""
echo "Project root: $PROJECT_ROOT"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Check if backend files exist
echo "1️⃣  Checking backend files..."
if [ -f "backend/routes/ai.js" ]; then
    echo -e "${GREEN}✓${NC} backend/routes/ai.js exists"
else
    echo -e "${RED}✗${NC} backend/routes/ai.js missing"
fi

if [ -f "backend/.env" ]; then
    echo -e "${GREEN}✓${NC} backend/.env exists"

    # Check if Google API key is set
    if grep -q "GOOGLE_API_KEY=AIzaSy" backend/.env 2>/dev/null; then
        echo -e "${GREEN}✓${NC} GOOGLE_API_KEY is configured"
    else
        echo -e "${YELLOW}⚠${NC}  GOOGLE_API_KEY not set or using placeholder"
        echo "    Add your key from: https://aistudio.google.com/app/apikey"
    fi
else
    echo -e "${RED}✗${NC} backend/.env missing"
    echo "    Run: cp backend/.env.example backend/.env"
fi

# Test 2: Check if frontend files exist
echo ""
echo "2️⃣  Checking frontend files..."
if [ -f "frontend/src/components/ai/ChatWidget.jsx" ]; then
    echo -e "${GREEN}✓${NC} ChatWidget.jsx exists"
else
    echo -e "${RED}✗${NC} ChatWidget.jsx missing"
fi

# Check if documentation moved
if [ -d "frontend/ai-docs" ]; then
    echo -e "${GREEN}✓${NC} Documentation folder exists (frontend/ai-docs)"
else
    echo -e "${YELLOW}⚠${NC}  Documentation folder not found"
fi

# Test 3: Check dependencies
echo ""
echo "3️⃣  Checking dependencies..."
if [ -d "backend/node_modules/@google" ]; then
    echo -e "${GREEN}✓${NC} @google/generative-ai installed"
else
    echo -e "${YELLOW}⚠${NC}  @google/generative-ai not installed"
    echo "    Run: cd backend && npm install"
fi

# Test 4: Check if backend is running
echo ""
echo "4️⃣  Checking if backend is running..."
if curl -s http://localhost:5001/api/ai/health > /dev/null 2>&1; then
    response=$(curl -s http://localhost:5001/api/ai/health)
    if echo "$response" | grep -q "ok"; then
        echo -e "${GREEN}✓${NC} Backend is running and healthy"
        echo "    Response: $response"
    else
        echo -e "${YELLOW}⚠${NC}  Backend responded but health check failed"
    fi
else
    echo -e "${YELLOW}⚠${NC}  Backend not running on port 5001"
    echo "    Start with: cd backend && npm run dev"
fi

# Test 5: Check if frontend is running
echo ""
echo "5️⃣  Checking if frontend is running..."
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Frontend is running on port 3000"
else
    echo -e "${YELLOW}⚠${NC}  Frontend not running on port 3000"
    echo "    Start with: cd frontend && npm run dev"
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Test Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Next steps:"
echo ""
echo "1. If API key not set:"
echo "   • Get key from: https://aistudio.google.com/app/apikey"
echo "   • Add to backend/.env: GOOGLE_API_KEY=your_key_here"
echo ""
echo "2. If dependencies missing:"
echo "   • Run: cd backend && npm install"
echo ""
echo "3. If servers not running:"
echo "   • Terminal 1: cd backend && npm run dev"
echo "   • Terminal 2: cd frontend && npm run dev"
echo ""
echo "4. Test the chat widget:"
echo "   • Open: http://localhost:3000"
echo "   • Look for chat bubble in bottom-right corner"
echo "   • Try asking: 'Tell me about BeonicX'"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📖 Documentation: frontend/ai-docs/"
echo "   Start here: frontend/ai-docs/START_HERE.md"
