# Grok Conversation Cleaner 🚀

A lightweight, browser-agnostic JavaScript utility designed specifically to automate the "Force Delete" process on the Grok "Deleted Conversations" page. This script saves you from manual clicking by batch-processing all visible deletion buttons in seconds.

## ⚡ Quick Start (Copy & Paste)

If you just want to run it immediately without downloading any files, copy the one-liner below, paste it into your browser console, and press **Enter**:

```javascript
Array.from(document.querySelectorAll('button')).filter(b => b.textContent.includes('Force Delete')).forEach((b, i) => setTimeout(() => b.click(), i * 200));
```
🛠 How to Use
Navigate: Go to the Grok Deleted Conversations page (ensure the items you want to delete are visible on the screen).

Open Console: Open your Browser Developer Tools:

Windows/Linux: F12 or Ctrl + Shift + J

macOS: Cmd + Option + J

Paste & Run: Paste the code from script.js (or the one-liner above) into the Console tab and press Enter.

🛡 Features
Batch Automation: Automatically identifies and clicks every "Force Delete" button visible in the DOM.

Staggered Execution: Includes a 200ms delay between clicks to prevent browser freezing and ensure the server processes each request correctly.

Simple Logic: Zero dependencies; runs entirely within your browser's native environment.

⚠️ Warning
This action is irreversible. "Force Delete" typically bypasses the trash/recovery phase. Once the script runs, the conversations are permanently removed from your account. Please use with caution and ensure you are on the correct page before execution.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed for the Grok Community. ```
