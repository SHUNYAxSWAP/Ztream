# 🎬 Ztream — AI-Powered Movie Discovery Platform

Ztream is a movie browsing and AI-driven recommendation platform that combines Large Language Models (LLMs) with real movie data to provide intelligent movie discovery.

The application integrates Groq LLM inference, TMDB’s movie database, Firebase authentication, and a modern React + Redux architecture to deliver dynamic movie recommendations based on natural language queries.

## 🚀 Core Features
### 🤖 AI-Powered Movie Recommendations

- Natural language movie search

- LLM-generated movie recommendations

- Structured JSON responses for reliable parsing

### 🔐 Secure Authentication

- Powered by Firebase Authentication

- Email/password authentication

- Secure login and signup flow

- Persistent user session management

### 🎥 TMDB Movie Integration

- Movie metadata retrieval

- Poster and backdrop rendering

- Intelligent filtering for accurate movie matching

### 🍿 Netflix-Inspired UI

- Clean streaming-style interface

- Dynamic movie lists

- Category-based browsing

### 🌍 Multi-Language Support

- Language selector with Redux state

- Internationalization support

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| ⚛️ React | Frontend user interface |
| 🧠 Redux Toolkit | Global state management |
| 🎨 Tailwind CSS | Styling and responsive UI |
| 🔐 Firebase Authentication | User authentication and session management |
| 🤖 Groq API | LLM-powered movie recommendations |
| 🎬 TMDB API | Movie database and metadata retrieval |
| 📡 Axios | HTTP requests to external APIs |
| 🧭 React Router | Client-side routing and navigation |
| 🟨 JavaScript (ES6+) | Application logic and asynchronous operations |

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory of the project and add the following variables.

### 🔥 Firebase Configuration

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key  
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com  
REACT_APP_FIREBASE_PROJECT_ID=your_project_id  
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id  
REACT_APP_FIREBASE_APP_ID=your_app_id  
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id  

### 🔑 API Keys

REACT_APP_API_AUTH=your_tmdb_api_auth_token  
REACT_APP_GROQ_API_KEY=your_groq_api_key

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/ztream.git
cd ztream
npm install
npm start
```

## 🧪 Known Issues / Pending Improvements

| Category | Description |
|---------|-------------|
| 📱 Responsive Design | Improve UI responsiveness across mobile and tablet devices |
| ⚡ Memoization | Optimize rendering using `React.memo`, `useMemo`, and `useCallback` |
| ⏳ Loading States | Add loading skeletons while fetching recommendations |

## 👨‍💻 Author
- Swapnil Deo
