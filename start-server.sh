#!/bin/bash

# bytecrafts.ca — Local Development Server Launcher

echo "🚀 Starting bytecrafts.ca local development server..."
echo ""

# Check for Python 3
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3"
    echo "📍 Server running at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop"
    echo ""
    python3 -m http.server 8000
# Check for Python 2
elif command -v python &> /dev/null; then
    echo "✅ Using Python 2"
    echo "📍 Server running at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop"
    echo ""
    python -m SimpleHTTPServer 8000
# Check for Node.js
elif command -v node &> /dev/null; then
    echo "✅ Using Node.js http-server"
    echo "📍 Server running at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop"
    echo ""
    npx http-server -p 8000
# Check for PHP
elif command -v php &> /dev/null; then
    echo "✅ Using PHP"
    echo "📍 Server running at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop"
    echo ""
    php -S localhost:8000
else
    echo "❌ No suitable server found."
    echo "Please install one of: Python, Node.js, or PHP"
    exit 1
fi
