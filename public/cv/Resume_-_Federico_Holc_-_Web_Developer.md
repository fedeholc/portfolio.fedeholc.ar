# Federico Holc

**Full Stack Web Developer · AI-assisted development**

[portfolio.fedeholc.ar](https://portfolio.fedeholc.ar/) · [github.com/fedeholc](https://github.com/fedeholc) · [linkedin.com/in/federicoholc](https://linkedin.com/in/federicoholc)

federicoholc@gmail.com · +54-11-2394-8988 · Buenos Aires, Argentina

## Profile

Full stack web developer with 2 years of experience. I like creating solutions end to end, from UX/UI design to the backend and the infrastructure. I started programming writing code by hand, and that foundation is what today lets me build work processes and automations that integrate artificial intelligence to boost development without sacrificing technical quality or user experience. I also integrate AI into the product when it adds value: content generation, semantic search with embeddings, and image and document processing. On top of that, my experience in teaching and social sciences complements my technical profile, bringing clear communication and the ability to translate complex topics for any team or client.

## Experience

### Full Stack Web Developer · Mindcircus · Feb. 2025 – present

Full stack development of [empleosmundodigital.com](https://empleosmundodigital.com), the job platform for the digital marketing, design and technology industry. I rebuilt an unfinished project and took it to production, using AI in the development process and also inside the product, with a focus on technical quality.

**AI-assisted development**

- I use AI agents as part of my daily workflow —writing code, tests, linting and documentation—, connected to the project's tools through **MCP (Model Context Protocol)**, with human review at every step.
- I designed agent skills that encode the project's patterns (migrations, tests, permissions, hooks), so AI reproduces conventions instead of improvising.
- I defined mandatory guardrails before considering a task done: **type-check (tsgo), oxlint + ESLint, Prettier and a base of ~430 test files** (Vitest, Testing Library, MSW, Supertest, Playwright).
- An agent periodically checks **Sentry**, detects issues, analyzes the context and opens a **PR with a proposed fix** for review.

**Product and engineering**

- I rebuilt the frontend from scratch (React 19 + TypeScript on Astro) and extended the backend (Node.js / Express + TypeScript, Sequelize on MySQL).
- I developed plan-based permissions, subscriptions and payments with Stripe (webhooks), auth with JWT and Google OAuth, and Cloudflare Turnstile verification.
- I implemented real-time chat with Socket.IO + Redis and asynchronous jobs with BullMQ.

**Infrastructure and deployment**

- I set up CI/CD with GitHub Actions for production and staging: build, deploy to the VPS, container restart and health checks that validate SSR freshness.
- I deployed the stack with Docker Compose: MySQL, Redis, 4 backend replicas (horizontal scaling), migrator, nginx as reverse proxy and SSL with certbot.
- I set up automatic backups of MySQL and assets to Google Cloud Storage, plus observability with Sentry (front and back) and structured logging with pino.
- I ran load and stress tests with k6 (up to 500 concurrent users) to find the breaking point and document results: with 100 users, p95 ≈ 187 ms and 0% errors.

**AI in the product**

- I implemented an AI job-offer generator (two-pass pipeline with Gemini / Vertex AI) and a resume-to-structured-JSON parser, both in production today.
- I built semantic search with embeddings and cosine similarity to normalize positions and improve offer–talent matching.
- I designed the multi-provider, swappable AI layer (Gemini, OpenAI SDK pointed at DeepSeek), choosing the model per use case to optimize cost and latency.
- I integrated structured model output and Google Cloud Vision to process documents and images.

### Web Developer · No Country, work simulation internship · Oct. – Nov. 2024

- Team development of the telemedicine application **Health Pro**. I was in charge of the **video call and waiting room** modules, using React, Node, WebSockets and WebRTC.

### Teaching and social sciences · 2007 – 2024

- Teacher of Sociology / Social Sciences in high schools in Buenos Aires, university professor and tutor at UBA, and sociologist at the Environmental Health Department of the Ministry of Health (GCABA). A background that today brings communication, mentoring, data analysis and the ability to explain complex ideas.

## Skills

**AI and LLMs** — AI-assisted development (agents, skills, MCP) · Gemini / Vertex AI · OpenAI / DeepSeek · embeddings and semantic search · structured output · prompting · image and document processing

**Frontend** — React 19 · TypeScript · Astro · Next.js · MUI / Mantine · HTML / CSS / Responsive design

**Backend** — Node.js · Express · Sequelize / MySQL · MongoDB · Socket.IO · BullMQ / Redis · Zod

**Testing** — Vitest · React Testing Library · MSW · Supertest · Playwright

**DevOps and infrastructure** — Docker · Docker Compose · CI/CD (GitHub Actions) · Nginx · Linux · Sentry

**Other** — Stripe · JWT / OAuth · Git / GitHub · Figma

## Personal projects

Projects built by hand, before AI wrote code. They are my foundation: understanding what the code does (and does not do) is what lets me review and sustain what AI produces today.

- **Full size images for IG** — Chrome extension to view Instagram images at full resolution. **+2000 users** on the Chrome Web Store. Stack: JavaScript, HTML, CSS, WebExtension API.
- **fotoYOP & foto-V** — Image transformation and collages, and conversion of images into videos with effects. Installable, offline-capable PWA. Stack: JavaScript / TypeScript, React / Next, Canvas API, PWA. [fotoyop.fedeholc.ar](http://fotoyop.fedeholc.ar) · [foto-v.fedeholc.ar](http://foto-v.fedeholc.ar)
- **JWT Learning Kit** — Guide and code to learn how to build a JSON Web Token authentication system from scratch, with explanations of processes and concepts. Stack: Node, Express, SQLite, Vitest, Playwright, JSDoc. [jwtlk.fedeholc.ar](http://jwtlk.fedeholc.ar)

## Education

- **Higher Technician Degree in Software Development.** Higher Technical Training Institute No. 29, Buenos Aires. 2023 – 2025. Graduated.
- **Bachelor's Degree in Sociology** (UBA, 2002 – 2007) and **Professorship in Sociology** (UBA, 2007 – 2009). Graduated. Teaching Specialization in Comprehensive Sexual Education (ISP Dr. Joaquín V. González, 2017 – 2019). Technical School in Computing (E.T. No. 3, 1992 – 1998).
- **Training projects** (software development): Java / Spring + Angular · Kotlin / Android · C# / MySQL · MongoDB / Node.
- **Courses:** Google Cloud Computing Foundations (2025) · AWS Academy Cloud Foundations (2024) · Argentina Programa v3.0 Full Stack (INTI, 2022 – 2023) · Codo a Codo 4.0 Full Stack Java (2022) · freeCodeCamp: Responsive Web Design / JavaScript Algorithms and Data Structures / Back End Development and APIs (2022).

## Languages

- **Spanish:** native.
- **English:** professional working proficiency. First Certificate Exam (B2 First), Cambridge University.
