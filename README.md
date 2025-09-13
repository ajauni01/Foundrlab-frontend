FoundrLab is an open‑source platform that helps computer‑science students in rural colleges shift from an employee mindset to an entrepreneurial mindset. By blending AI‑driven insights with a structured, gamified curriculum, FoundrLab guides students through every stage of building a startup—from identifying a problem to planning a minimum viable product (MVP) and beyond.

🚀 The Problem

Many students in rural communities have limited exposure to entrepreneurship. They struggle to identify real‑world problems, validate ideas or connect with mentors, which leads to fewer startups and missed opportunities. Traditional curricula often focus on employability rather than innovation and venture creation.

💡 The Solution

FoundrLab provides a structured, interactive learning experience that walks learners through the entire startup lifecycle. AI‑powered modules generate problem statements, suggest business concepts, create validation tasks, analyse markets and plan MVPs, while gamified progress tracking keeps users engaged. The platform also integrates an AI mentor chat and supports human mentors for feedback, creating a hybrid learning environment.

Technical Approach

⚡ AI‑integrated Content: Leverages OpenAI via a custom service to generate problem statements, market analyses and chat‑based mentorship.

🎮 Gamified Learning: Tracks experience points (XP) and levels with a React context and scoreboard; actions like completing tasks or generating ideas earn points.

🧭 Structured Curriculum: Modules mirror the entrepreneurial process—Problem → Concept → Validation → Market → MVP → Jobs‑to‑Be‑Done (JTBD) & Disruption.

🔒 Secure Backend: Built with ASP.NET Core 8 and Entity Framework Core; uses PostgreSQL and cookie‑based authentication with role‑based authorization.

🌐 Interactive Frontend: Developed in Next.js with TypeScript, Tailwind CSS and shadcn/ui; uses modern React hooks and context for state management.

🏗️ System Architecture

FoundrLab uses a simple yet scalable layered architecture:

Learner
   ↓
Next.js Frontend (XP & gamification UI)
   ↕ (HTTP, cookies)
ASP.NET Core API (Problem, Concept, Validation, Market, MVP, JTBD modules)
   ↕ (EF Core)
PostgreSQL Database
   ↕
IOpenAIService → OpenAI API


Each feature (Problem generation, Validation, Market research, etc.) is exposed via a RESTful controller in the backend and consumed by the frontend through fetch calls with credentials included. The backend parses the DATABASE_URL environment variable to construct its connection string
chatgpt.com
, ensuring the database configuration is flexible and secure.

Core Modules
🧠 Problem Generator

Generates tailored problem statements based on a student’s background or interests. Uses AI prompts to identify meaningful challenges that could become viable startup ideas.

✨ Concept Creator

Transforms a validated problem into a concise startup concept with a defined value proposition and target audience. Stores concepts for later refinement and pitching.

✅ Validation Framework

Produces actionable validation tasks—like customer interviews and surveys—to test assumptions. Encourages students to gather evidence and iterate on their concept.

📊 Market Research

Uses AI to analyse relevant markets, identify competitors and estimate market size. Provides summarised insights and includes a downloadable report for deeper study.

🧪 MVP Planner

Helps students outline a minimum viable product. Suggests core features, milestones and a lightweight roadmap to launch quickly.

🔍 JTBD & Disruption Analysis

Prompts learners to investigate non‑consumption, overserved customers and latent needs, based on Clayton Christensen’s Jobs‑to‑Be‑Done framework. Encourages creative, disruptive ideas.

🤖 Mentor Chat

A chat interface powered by the same AI integration. Answers domain‑specific questions, connects learners to resources and simulates mentor feedback when a human isn’t available.

⚙️ Technology Stack
Backend & AI

ASP.NET Core 8 – Minimal hosting model with REST controllers and OpenAPI documentation.

Entity Framework Core – Code‑first migrations and PostgreSQL provider.

PostgreSQL 16 – Relational database with JSON support for flexible schemas.

OpenAI via IOpenAIService – Prompt‑driven content generation and analysis.

BCrypt.Net – Secure password hashing for user credentials.

Frontend & Gamification

Next.js 14 + TypeScript – App Router with file‑based routing and API routes.

Tailwind CSS + shadcn/ui – Utility‑first styling and accessible components.

React Context & Hooks – XP/level state management and scoreboard UI.

Framer Motion – Smooth animations for interactive transitions.

Infrastructure & Deployment

Docker – Containerized Postgres database for local development.

EF Core Migrations – Migrate database schema from models.

CORS & Cookie Settings – Configured to allow cross‑site cookie auth for the Next.js frontend.

Docker Compose (optional) – Compose file to orchestrate API and database for development.

🎯 Achievements & Impact

Secured a $5 K grant from Northeast Community College to fund initial development and testing, validating the project’s social impact and potential.

Guided dozens of students through the startup process during pilot runs; early participants created prototypes, pitch decks and validation reports.

Improved engagement by gamifying entrepreneurship—students spend longer in each module and voluntarily complete more validation tasks.

⚡ Quick Start
Prerequisites

.NET 8 SDK

Node.js 18+ with npm

PostgreSQL or Docker

(Optional) OpenAI API key for full AI functionality

One‑Command Development Setup

Clone this repository and start the stack:

git clone https://github.com/your‑org/foundrlab.git
cd foundrlab

# Start PostgreSQL in Docker
docker run --name foundrlab-pg -e POSTGRES_USER=foundrlab -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=foundrlab -p 5432:5432 -d postgres:16

# Run backend (ASP.NET Core)
cd backend
dotnet tool install --global dotnet-ef  # if not installed
export DATABASE_URL=postgresql://foundrlab:secret@localhost:5432/foundrlab
dotnet ef database update
dotnet run

# In a new terminal, run frontend (Next.js)
cd ../frontend
npm install
npm run dev


The API will be available at https://localhost:8080 (or the port specified in your environment) and the Next.js app at http://localhost:3000. Sign up as a SuperAdmin via the API or seed a default user in development to explore all modules.

🛠️ Development Guide

Configure Environment Variables: Set DATABASE_URL for the backend and NEXT_PUBLIC_API_BASE for the frontend. Set OPENAI_API_KEY if you want AI features to work in development.

Run Migrations: Use dotnet ef migrations add InitialCreate and dotnet ef database update whenever you change your models.

Run Tests (coming soon): Unit and integration tests can be executed from the tests folder (future enhancement).

Contribute: Fork the repository, create a feature branch, and open a pull request. Please follow conventional commits and include relevant tests.

🎓 Use Cases & Applications
Students & Educators

Provide a hands‑on supplement to entrepreneurship or capstone courses.

Encourage discovery of problems rooted in community needs.

Track progress through gamified XP and levels.

Universities & Incubators

Integrate into accelerator programs for early idea validation.

Provide online access for students who cannot attend in‑person workshops.

Collect anonymized metrics to assess engagement and learning outcomes.

Community & Mentors

Allow local entrepreneurs to volunteer as mentors and review student ideas.

Enable feedback loops via the AI mentor chat for asynchronous guidance.

📈 Key Features in Detail
AI‑Driven Ideation & Analysis

Problem & Concept Generation: AI uses prompts tailored to a user’s background to surface niche problems and potential solutions.

Market Research: Summarizes current market conditions, potential competitors and gaps.

Validation & MVP Planning: Generates actionable tasks and MVP roadmaps to reduce time to product‑market fit.

Gamification & Progress Tracking

XP & Levels: Encourage experimentation and iteration; bigger tasks yield more XP.

Badges & Achievements (future work): Recognize major milestones like launching an MVP or conducting 10 customer interviews.

Secure & Scalable Backend

Role‑Based Access: Separate routes for students, professors and administrators.

Cookie Auth: Secure session management via cookies configured for cross‑site requests.

Entity Modelling: Users, Problems, Concepts, Validations, MarketReports, MVPs and Batches are represented as first‑class entities in the database.

🚀 Production Deployment

For a production deployment, we recommend Dockerizing the API and database and hosting the frontend on Vercel or another static hosting provider. You can use docker-compose.yml in the deploy folder (coming soon) to orchestrate the services. Set proper SameSite=None and secure cookies in production.

🤝 Contributing

We welcome contributions! Some ways to get involved:

Add new AI prompts and refine the content generation.

Improve gamification with new badges and challenges.

Translate the UI and content into additional languages.

Build analytics dashboards to measure student success.

Please open issues for bugs or feature requests and submit pull requests following conventional commit guidelines.

📞 Support & Community

Bug reports & feature requests: GitHub Issues

Discussion & questions: GitHub Discussions

Documentation: (Coming soon) A full developer guide will live in the /docs directory.

About

FoundrLab is an open‑source project developed to democratize entrepreneurship education. Built by students for students, it combines cutting‑edge AI with proven frameworks from innovators like Clayton Christensen to inspire the next generation of entrepreneurs.
