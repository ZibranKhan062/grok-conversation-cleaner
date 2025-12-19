# Grok Conversation Cleaner 🚀

A lightweight JavaScript snippet designed specifically to batch-process "Force Delete" actions on the Grok "Deleted Conversations" page. This tool helps users clear their deleted history in seconds without clicking every button manually.

## ⚡ Quick Start (Copy & Paste)

For the fastest results, copy the one-liner below, paste it into your browser console, and press **Enter**:

```javascript
Array.from(document.querySelectorAll('button')).filter(b => b.textContent.includes('Force Delete')).forEach((b, i) => setTimeout(() => b.click(), i * 200));

🛠 Detailed Usage
Open Grok and navigate to your Deleted Conversations page.

Open the Browser Developer Tools:

Windows/Linux: F12 or Ctrl + Shift + J

macOS: Cmd + Option + J

Click the Console tab.

Copy the full contents of script.js from this repository.

Paste it into the console and press Enter.

🛡 Features
Batch Processing: Clicks every "Force Delete" button visible on the page.

Staggered Execution: Uses a 200ms delay between clicks to prevent browser lag and respect server limits.

Text-Targeting: Specifically looks for buttons containing the "Force Delete" label.

⚠️ Warning
This script automates a destructive action. "Force Delete" is permanent and cannot be undone. Please ensure you are on the correct page and intend to delete all visible items before running the script.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.
