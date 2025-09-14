# FoundrLab

FoundrLab is an open-source platform that helps computer-science students in rural colleges shift from an employee mindset to an entrepreneurial mindset. By blending AI-driven insights with a structured, gamified curriculum, FoundrLab guides students through every stage of building a startup—from identifying a problem to planning a minimum viable product (MVP) and beyond.

---

## The Problem
Many students in rural communities have limited exposure to entrepreneurship. They struggle to identify real-world problems, validate ideas, or connect with mentors, which leads to fewer startups and missed opportunities. Traditional curricula often focus on employability rather than innovation and venture creation.

---

## 💡 The Solution
FoundrLab provides a structured, interactive learning experience that walks learners through the entire startup lifecycle:

- **AI-powered modules** generate problem statements, suggest business concepts, create validation tasks, analyse markets, and plan MVPs.  
- **Gamified progress tracking** keeps users engaged.  
- **AI mentor chat + human mentors** create a hybrid support environment.  

---

## ⚙️ Technical Approach

- ⚡ **AI-integrated Content**: Leverages OpenAI via a custom service to generate problem statements, market analyses, and chat-based mentorship.  
- 🎮 **Gamified Learning**: Tracks XP and levels with React Context and a scoreboard.  
- 🧭 **Structured Curriculum**: Modules mirror the entrepreneurial process — Problem → Concept → Validation → Market → MVP → JTBD.  
- 🔒 **Secure Backend**: ASP.NET Core 8 + EF Core; PostgreSQL; cookie-based authentication; role-based authorization.  
- 🌐 **Interactive Frontend**: Next.js + TypeScript, Tailwind CSS, shadcn/ui; modern React hooks & context.  

---

## 🏗️ System Architecture

Learner
↓
Next.js Frontend (XP & gamification UI)
↕ (HTTP, cookies)
ASP.NET Core API (Problem, Concept, Validation, Market, MVP, JTBD modules)
↕ (EF Core)
PostgreSQL Database
↕
IOpenAIService → OpenAI API


Each feature (Problem generation, Validation, Market research, etc.) is exposed via RESTful controllers and consumed by the frontend using fetch calls.  

---

## 📚 Core Modules

-  **Problem Generator** – Creates tailored problem statements.  
-  **Concept Creator** – Turns validated problems into startup concepts.  
-  **Validation Framework** – Produces actionable validation tasks.  
-  **Market Research** – AI-driven competitor & market analysis with downloadable reports.  
-  **MVP Planner** – Helps outline features, milestones, and roadmaps.  
-  **JTBD & Disruption Analysis** – Encourages creative, disruptive ideas.  
-  **Mentor Chat** – AI-powered mentor interface + human mentor integration.  

---

## 🛠️ Technology Stack

**Backend & AI:**  
- ASP.NET Core 8  
- Entity Framework Core  
- PostgreSQL 16  
- OpenAI via IOpenAIService  
- BCrypt.Net  

**Frontend & Gamification:**  
- Next.js 14 + TypeScript  
- Tailwind CSS + shadcn/ui  
- React Context & Hooks  
- Framer Motion  

**Infrastructure & Deployment:**  
- Docker, Docker Compose  
- EF Core Migrations  
- CORS & Secure Cookies  

---

## 🌟 Achievements & Impact

- 💰 Secured a **$5 K grant** from Northeast Community College.  
- 👩‍🎓 Guided dozens of students to prototypes, pitch decks, and validation reports.  
- 🎮 Improved engagement by gamifying entrepreneurship.  

---

## Quick Start

### Prerequisites
- .NET 8 SDK  
- Node.js 18+ with npm  
- PostgreSQL or Docker  
- (Optional) OpenAI API key
  
```bash
### Setup

# Clone repo
git clone https://github.com/your-org/foundrlab.git
cd foundrlab

# Start PostgreSQL in Docker
docker run --name foundrlab-pg -e POSTGRES_USER=foundrlab -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=foundrlab -p 5432:5432 -d postgres:16

# Run backend (ASP.NET Core)
cd backend
dotnet tool install --global dotnet-ef  # if not installed
export DATABASE_URL=postgresql://foundrlab:secret@localhost:5432/foundrlab
dotnet ef database update
dotnet run

# Run frontend (Next.js)
cd ../frontend
npm install
npm run dev
```

## Access Points

- **Backend API** → [https://localhost:8080](https://localhost:8080)  
- **Frontend App** → [http://localhost:3000](http://localhost:3000)  


## 🧑‍💻 Development Guide

Environment Variables: DATABASE_URL, NEXT_PUBLIC_API_BASE, OPENAI_API_KEY

Migrations: dotnet ef migrations add InitialCreate + dotnet ef database update

Tests: Coming soon

Contribute: Fork → Feature branch → PR (use conventional commits)

## 🎯 Use Cases & Applications

Students & Educators: Hands-on startup education with gamified XP/levels.

Universities & Incubators: Accelerators, online learning, engagement metrics.

Community & Mentors: Volunteer mentorship, AI-chat feedback loops.

## 🏆 Key Features

AI-Driven Ideation & Analysis (Problem, Concept, Market, Validation, MVP)

Gamification (XP, Levels, Badges – future work)

Secure Backend (Role-Based Access, Cookie Auth, Entity Modelling)

## Production Deployment

Dockerize API + Database

Host frontend on Vercel (or similar)

Use docker-compose.yml (coming soon)

Configure SameSite=None + secure cookies

## 🤝 Contributing

We welcome contributions!

Add new AI prompts and refine content generation.

Improve gamification with new badges & challenges.

Translate UI/content into additional languages.

Build analytics dashboards.

Open issues for bugs/requests → submit PRs (follow conventional commits).

