# AI Chatbot — Gemini AI

A modern, interactive AI-powered chatbot built with React, providing a smooth conversational experience with real-time streaming responses.

---

## Features

- Real-time chat with an AI assistant
- Animated message transitions using `framer-motion`
- User and bot avatars for clear message distinction
- Client-side timestamps to prevent hydration issues
- Loading animations indicating AI thinking state
- Error handling and user feedback
- Accessible input with ARIA labels
- Clean and customizable CSS styling

---

## Tech Stack

- **Frontend:** React (client components)
- **Animations:** framer-motion
- **Icons:** react-icons (FontAwesome)
- **API Integration:** `@ai-sdk/react` for chat state management and communication
- **Backend:** Custom API endpoint (`/api/chat`) to handle AI queries (implementation not included here)

---

## Getting Started

### Prerequisites

- Node.js 16+ installed
- React 18+ environment (e.g., Next.js or Create React App)
- An AI API backend at `/api/chat` or modification to suit your AI backend

### Installation

1. Clone the repository

```bash
git clone https://github.com/Sam1635/Intern-Screening-Test.git
cd your-repo
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000/chat) in your browser

---

## Usage

- Type a message in the input box.
- Press **Enter** or click the send button.
- The AI will respond in real-time.
- Loading dots will show while waiting for the AI’s response.
- Timestamps appear next to each message.
- Errors will be displayed below the chat.

---

## Code Overview

- `ChatBot.tsx` — main React component implementing chat UI and logic
- `LoadingDots.tsx` — animated dots shown during AI response loading
- `Timestamp.tsx` — client-only timestamp to avoid hydration mismatch
- `ChatBot.css` — styling for chat interface
- Backend API (`/api/chat`) — expected to handle user messages and return AI responses

---

## Customization

- Modify CSS in `ChatBot.css` to change appearance.
- Replace `/api/chat` endpoint with your AI backend integration.
- Add message persistence, user authentication, or advanced features as needed.

---

## License

This project is licensed under the MIT License.

---

## Author

Sam Jebaraj  
Chatbot powered by Gemini AI
