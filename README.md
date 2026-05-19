# AI Chat Assistant

An AI-powered chatbot application built using React.js, Node.js, Express.js, and OpenAI/Groq APIs.

---

## Features

- AI chatbot interface
- Real-time conversation support
- React.js frontend
- Node.js + Express backend
- OpenAI/Groq API integration
- Responsive chat UI
- Secure API handling using `.env`

 ## Future Improvements

- Authentication system
- Chat history database
- Voice assistant support
- Dark mode UI
- File upload support
- AI image generation
- Cloud deployment

## Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js

### AI Integration
- OpenAI API / Groq API

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Pankaj-K-Yadav/AI-Chat-Assistant.git
cd AI-Chat-Assistant
```

### Install Root Dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file inside the backend folder and add:

```env
OPENAI_API_KEY=your_api_key
MODEL=llama3-70b-8192
EXPRESS_PORT=3000
```

### 4. Start backend server

```bash
npm start
```

Server will run on:

```text
http://127.0.0.1:3000
```
git clone https://github.com/Pankaj-K-Yadav/AI-Chat-Assistant.git
cd AI-Chat-Assistant    
## Frontend Setup

### 1. Move to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Start frontend

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## Usage

1. Start backend server
2. Start frontend server
3. Open browser:
   
```text
http://localhost:5173
```

4. Start chatting with the AI assistant



## Environment Variables

The project uses environment variables for API security.

Example `.env`:

```env
OPENAI_API_KEY=your_api_key
MODEL=llama3-70b-8192

## Author

### Pankaj Kumar Yadav

GitHub:
https://github.com/Pankaj-K-Yadav

git add .
git commit -m "Updated README"
git push
EXPRESS_PORT=3000
```

Never upload `.env` files to GitHub.
