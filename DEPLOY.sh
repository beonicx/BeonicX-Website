#!/bin/bash

# BeonicX Production Deployment Script
# Run this script from the frontend directory

set -e  # Exit on error

echo "======================================"
echo "BeonicX Production Deployment"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: Must be run from frontend directory${NC}"
    echo "Run: cd /Users/ansh/Project/Beonix/BeonicX-Website/frontend"
    exit 1
fi

echo "Step 1: Installing dependencies..."
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

echo "Step 2: Running production build..."
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi
echo ""

echo "Step 3: Verification checks..."

# Start dev server for testing
echo "Starting test server..."
npm run dev > /tmp/next-test.log 2>&1 &
SERVER_PID=$!
sleep 8

# Test homepage H1
echo -n "Checking H1 tags... "
H1_COUNT=$(curl -s http://localhost:3000 | grep -o "<h1[^>]*>.*</h1>" | wc -l | tr -d ' ')
if [ "$H1_COUNT" -eq "1" ]; then
    echo -e "${GREEN}✓ Pass (1 H1 tag)${NC}"
else
    echo -e "${RED}✗ Fail ($H1_COUNT H1 tags)${NC}"
    kill $SERVER_PID
    exit 1
fi

# Test canonical
echo -n "Checking canonical tag... "
CANONICAL=$(curl -s http://localhost:3000 | grep -o 'rel="canonical" href="https://beonicx.com"')
if [ -n "$CANONICAL" ]; then
    echo -e "${GREEN}✓ Pass${NC}"
else
    echo -e "${RED}✗ Fail${NC}"
    kill $SERVER_PID
    exit 1
fi

# Test sitemap
echo -n "Checking sitemap... "
SITEMAP_URLS=$(curl -s http://localhost:3000/sitemap.xml | grep -c "<url>")
HOME_IN_SITEMAP=$(curl -s http://localhost:3000/sitemap.xml | grep -c "/home" || true)
if [ "$SITEMAP_URLS" -eq "22" ] && [ "$HOME_IN_SITEMAP" -eq "0" ]; then
    echo -e "${GREEN}✓ Pass (22 URLs, no /home)${NC}"
else
    echo -e "${RED}✗ Fail ($SITEMAP_URLS URLs, /home count: $HOME_IN_SITEMAP)${NC}"
    kill $SERVER_PID
    exit 1
fi

# Stop test server
kill $SERVER_PID
wait $SERVER_PID 2>/dev/null || true

echo ""
echo -e "${GREEN}======================================"
echo "All checks passed!"
echo "======================================${NC}"
echo ""

echo "Next steps:"
echo "1. Review VERIFICATION_REPORT.md"
echo "2. Deploy to production:"
echo "   - Vercel: vercel --prod"
echo "   - Custom: npm run start"
echo "3. Submit sitemap to Google Search Console"
echo "4. Request indexing for priority URLs"
echo ""

echo "Priority URLs to request indexing:"
echo "  1. https://beonicx.com/"
echo "  2. https://beonicx.com/services/ai-solutions"
echo "  3. https://beonicx.com/get-started"
echo "  4. https://beonicx.com/services"
echo "  5. https://beonicx.com/blog"
echo ""

echo -e "${GREEN}Ready for production deployment!${NC}"
