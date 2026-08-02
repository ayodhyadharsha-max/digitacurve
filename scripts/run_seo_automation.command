#!/usr/bin/env bash

# Mac Double-Clickable Launcher for Digitacurve SEO Automation Engine
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR/.." || exit 1

echo "===================================================="
echo "   🚀 Digitacurve Automated SEO & GEO Engine"
echo "===================================================="
echo ""

# Check python3
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 and try again."
    exit 1
fi

echo "🔍 Checking Python dependencies..."
python3 -c "import PIL" 2>/dev/null || {
    echo "📦 Installing required dependencies (Pillow)..."
    pip3 install Pillow requests
}

echo "🏃 Running SEO Automation Hub..."
python3 "$DIR/seo_automation_hub.py"

echo ""
echo "===================================================="
echo "✅ SEO Automation Run Complete!"
echo "📄 Report written to: seo_health_report.md"
echo "📈 Rank history updated: seo_rank_history.csv"
echo "===================================================="
echo ""
