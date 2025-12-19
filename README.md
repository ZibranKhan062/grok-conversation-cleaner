# Grok Conversation Cleaner 🚀

A lightweight JavaScript snippet designed specifically to batch-process "Force Delete" actions on the Grok "Deleted Conversations" page. This tool helps users clear their deleted history in seconds without clicking every button manually.

## ⚡ Quick Start (Copy & Paste)

For the fastest results, copy the one-liner below, paste it into your browser console, and press **Enter**:

```javascript
Array.from(document.querySelectorAll('button')).filter(b => b.textContent.includes('Force Delete')).forEach((b, i) => setTimeout(() => b.click(), i * 200));
