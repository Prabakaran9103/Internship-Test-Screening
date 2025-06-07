
# Internship Projects Portfolio

A **Next.js** based portfolio showcasing multiple internship projects:

- **Todo List** — A simple task manager app  
- **NoteSync** — Note-taking and syncing tool  
- **AI Chatbot** — Real-time AI-powered chat interface  
- **Documents** — Document management interface  

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Running Locally](#running-locally)  
- [Project Structure](#project-structure)  
- [Navigation](#navigation)  
- [Deployment](#deployment)  
- [License](#license)  

---

## Project Overview

### 1. Todo List  
A simple app to add, view, edit, and delete daily tasks with persistent state.

### 2. NoteSync  
Create, edit, and sync notes efficiently with a clean UI.

### 3. AI Chatbot  
An AI-powered chat interface integrating with OpenAI or Vercel AI SDK for real-time conversational AI.

### 4. Documents  
Manage, view, and organize documents with an intuitive interface.

---

## Tech Stack

- **Next.js 14** (App Router)  
- **React** (Functional Components & Hooks)  
- **React Icons** for UI icons  
- **CSS / CSS Modules** for styling  
- **OpenAI or Vercel AI SDK** for AI integration (Chatbot)  

---

## Installation & Setup

Clone the repo:

```bash
git clone https://github.com/Sam1635/Intern-Screening-Test.git
cd Intern-Screening-Test
npm install
```

---

## Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

## Project Structure

```
.vscode/
app/
├── api/
│   ├── chat/
│   │   └── route.ts
│   ├── notes/
│   │   └── route.ts
│   └── todos/
│       └── route.ts
├── chat/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatBot.css
│   └── ChatBot.tsx
├── doc/
│   └── page.tsx
├── notes/
│   ├── NotesSync.css
│   └── page.tsx
└── todos/
    ├── page.tsx
    └── TodosPage.css
---

## Navigation

The home page (`/`) lists all projects with icons and buttons for navigation. Clicking a project button routes to the respective project page:

| Project    | Route      | 
|------------|------------|
| Todo List  | `/todos`   | 
| NoteSync   | `/notes`   | 
| AI Chatbot | `/chat`    | 
| Documents  | `/doc`     | 

---

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Import the repo to [Vercel](https://vercel.com/).
3. Set up any environment variables needed (for AI keys, if any).
4. Deploy and get the live URL.

### Netlify

1. Push code to GitHub.
2. Connect your repo in [Netlify](https://netlify.com).
3. Set build command: `npm run build`
4. Set publish directory: `out` (if using static export) or default `.next`
5. Deploy your site.

---

## License

 © 2025 [Sam Jebaraj](https://github.com/Sam1635)
