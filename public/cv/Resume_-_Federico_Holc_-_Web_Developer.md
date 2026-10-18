# Federico Holc

**Full Stack Web Developer · AI applied to product**

[portfolio.fedeholc.ar](https://portfolio.fedeholc.ar/) · [github.com/fedeholc](https://github.com/fedeholc) · [linkedin.com/in/federicoholc](https://linkedin.com/in/federicoholc)

federicoholc@gmail.com · +54-11-2394-8988 · Buenos Aires, Argentina

## Profile

Full stack web developer with almost 2 years of experience, focused on building end-to-end products with integrated AI. I work with React, TypeScript and Node, and I ship AI features to production: LLMs, semantic search with embeddings, OCR and streaming. I am interested both in AI inside the software and in designing AI-assisted development workflows that speed things up without sacrificing technical quality or user experience. I come from teaching and social sciences, which I bring as the ability to communicate and explain complex ideas.

## Experience

### Full Stack Web Developer · Mindcircus · Feb. 2025 – present

Full stack development of [empleosmundodigital.com](https://empleosmundodigital.com), the job platform for the digital marketing, design and technology industry. I rebuilt an unfinished project and took it to production, focusing on integrating generative AI and keeping technical quality.

**AI in the product**
- I implemented an AI job-offer generator (two-pass pipeline with Gemini / Vertex AI) and a resume-to-structured-JSON parser, both in production today.
- I built semantic search with embeddings and cosine similarity to normalize positions and improve offer–talent matching.
- I designed the multi-provider, swappable AI layer (Gemini, OpenAI SDK pointed at DeepSeek), choosing the model per use case to optimize cost and latency.
- I integrated structured model output, end-to-end SSE response streaming and OCR with Google Cloud Vision for documents and images.

**Product and engineering**
- I rebuilt the frontend from scratch (React 19 + TypeScript on Astro) and extended the backend (Node.js / Express + TypeScript, Sequelize on MySQL).
- I developed plan-based permissions, subscriptions and payments with Stripe (webhooks), auth with JWT and Google OAuth, and Cloudflare Turnstile verification.
- I implemented real-time chat with Socket.IO + Redis and asynchronous jobs with BullMQ.

**Infrastructure and deployment**
- I set up CI/CD with GitHub Actions for production and staging: build, deploy to the VPS, container restart and health checks that validate SSR freshness.
- I deployed the stack with Docker Compose: MySQL, Redis, 4 backend replicas (horizontal scaling), migrator, nginx as reverse proxy and SSL with certbot.
- I set up automatic backups of MySQL and assets to Google Cloud Storage, plus observability with Sentry (front and back) and structured logging with pino.
- I ran load and stress tests with k6 (up to 500 concurrent users) to find the breaking point and document results: with 100 users, p95 ≈ 187 ms and 0% errors.

**Quality and AI-assisted development**
- I maintain a base of ~430 test files (Vitest, React Testing Library, MSW, Supertest, Playwright) with three execution strategies (shared MySQL, parallel multiworker and in-memory SQLite).
- I maintain a strict quality chain: type-check (tsgo), oxlint + ESLint, Prettier and Zod validation.
- I designed AI-assisted development workflows: agent skills that encode project patterns (migrations, tests, permissions, hooks), a claude.md with mandatory guardrails (type-check + lint before closing a task) and technical docs intended as context for agents.

### Web Developer · No Country, work simulation internship · Oct. – Nov. 2024

- Team development of the telemedicine application **Health Pro**. I was in charge of the **video call and waiting room** modules, using React, Node, WebSockets and WebRTC.

### Teaching and social sciences · 2007 – 2024

- Teacher of Sociology / Social Sciences in high schools in Buenos Aires, university professor and tutor at UBA, and sociologist at the Environmental Health Department of the Ministry of Health (GCABA). A background that today brings communication, mentoring, data analysis and the ability to explain complex ideas.

## Skills

**AI and LLMs** — Gemini / Vertex AI · OpenAI / DeepSeek · embeddings and semantic search · structured output · prompting · streaming (SSE) · OCR · AI-assisted development (agents, skills, MCP)

**Frontend** — React 19 · TypeScript · Astro · Next.js · MUI / Mantine · HTML / CSS / Responsive design

**Backend** — Node.js · Express · Sequelize / MySQL · MongoDB · Socket.IO · BullMQ / Redis · Zod

**Testing** — Vitest · React Testing Library · MSW · Supertest · Playwright

**DevOps and infrastructure** — Docker · Docker Compose · CI/CD (GitHub Actions) · Nginx · Linux · pino · Sentry · k6

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
