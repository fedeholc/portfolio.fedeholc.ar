# Federico Holc

**Desarrollador Web Full Stack · Desarrollo asistido por IA**

[portfolio.fedeholc.ar](https://portfolio.fedeholc.ar/) · [github.com/fedeholc](https://github.com/fedeholc) · [linkedin.com/in/federicoholc](https://linkedin.com/in/federicoholc)

federicoholc@gmail.com · +54-11-2394-8988 · Buenos Aires, Argentina

## Perfil

Desarrollador web full stack con 2 años de experiencia. Me gusta crear soluciones de principio a fin, desde el diseño UX/UI hasta el backend y la infraestructura. Empecé a programar escribiendo código a mano, y esa base de fundamentos es la que hoy me permite generar procesos de trabajo y automatizaciones integrando inteligencia artificial para potenciar el desarrollo sin sacrificar la calidad técnica ni la experiencia del usuario. También integro IA en el producto cuando aporta valor: generación de contenido, búsqueda semántica con embeddings y procesamiento de imágenes y documentos. Además, mi experiencia en docencia y ciencias sociales complementa mi perfil técnico, aportando una comunicación clara y la capacidad de traducir temas complejos para cualquier equipo o cliente.

## Experiencia

### Desarrollador Web Full Stack · Mindcircus · Feb. 2025 – a la actualidad

Desarrollo full stack de [empleosmundodigital.com](https://empleosmundodigital.com), la plataforma de oferta y búsqueda de empleo del sector marketing digital, diseño y tecnología. Reconstruí un proyecto que estaba inconcluso y lo llevé a producción, usando IA en el proceso de desarrollo y también dentro del producto, con foco en la calidad técnica.

**Desarrollo asistido por IA**

- Uso agentes de IA como parte del workflow diario —escritura de código, tests, linting y documentación—, conectados a las herramientas del proyecto mediante **MCP (Model Context Protocol)**, con revisión humana en cada paso.
- Diseñé _skills_ de agentes que codifican los patrones del proyecto (migraciones, tests, permisos, hooks), para que la IA reproduzca las convenciones en lugar de improvisar.
- Definí guardrails obligatorios antes de dar una tarea por cerrada: **type-check (tsgo), oxlint + ESLint, Prettier y una base de ~430 archivos de test** (Vitest, Testing Library, MSW, Supertest, Playwright).
- Un agente revisa **Sentry** periódicamente, detecta issues, analiza el contexto y abre un **PR con una propuesta de fix** para revisión.

**Producto e ingeniería**

- Reconstruí de cero el **frontend (React 19 + TypeScript sobre Astro)** y extendí el **backend (Node.js / Express + TypeScript, Sequelize sobre MySQL)**.
- Desarrollé **permisos por plan**, **suscripciones y pagos con Stripe** (webhooks), **auth con JWT y Google OAuth** y verificación con Cloudflare Turnstile.
- Implementé **chat en tiempo real con Socket.IO + Redis** y **jobs asíncronos con BullMQ**.

**Infraestructura y despliegue**

- Armé el **CI/CD con GitHub Actions** para producción y staging: build, deploy al VPS, reinicio de contenedores y **health checks que validan la frescura del SSR**.
- Desplegué el stack con **Docker Compose**: MySQL, Redis, **4 réplicas del backend (escalado horizontal)**, migrator, nginx como reverse proxy y SSL con certbot.
- Configuré **backups automáticos** de MySQL y assets a Google Cloud Storage, y observabilidad con **Sentry** (front y back) y logging estructurado con pino.
- Corrí **pruebas de carga y estrés con k6** (hasta 500 usuarios concurrentes) para detectar el punto de quiebre y documentar resultados: con 100 usuarios, **p95 ≈ 187 ms y 0 % de errores**.

**IA en el producto**

- Implementé un **generador de ofertas laborales con IA** (pipeline de dos pasadas con Gemini / Vertex AI) y un **parser de CVs a JSON estructurado**, hoy en producción.
- Construí **búsqueda semántica con embeddings** y similitud coseno para normalizar posiciones y mejorar el matching entre ofertas y talento.
- Diseñé la capa de IA **multi-proveedor y conmutable** (Gemini, OpenAI SDK apuntado a DeepSeek), eligiendo el modelo según el caso de uso para optimizar costo y latencia.
- Integré **salida estructurada** de los modelos y **Google Cloud Vision** para procesar documentos e imágenes.

### Desarrollador Web · No Country, práctica de simulación laboral · Oct. – Nov. 2024

- Desarrollo en equipo de la aplicación de telemedicina **Health Pro**. Estuve a cargo de los módulos de **videollamadas y salas de espera**, con React, Node, WebSockets y WebRTC.

### Docencia y ciencias sociales · 2007 – 2024

- Profesor de Sociología / Ciencias Sociales en escuelas secundarias de CABA, docente y tutor universitario en la UBA y sociólogo en el Departamento de Salud Ambiental del Ministerio de Salud (GCABA). Una trayectoria que hoy aporta comunicación, mentoría, análisis de datos y capacidad de explicar ideas complejas.

## Skills

**IA y LLMs** — desarrollo asistido por IA (agentes, skills, MCP) · Gemini / Vertex AI · OpenAI / DeepSeek · embeddings y búsqueda semántica · salida estructurada · prompting · procesamiento de imágenes y documentos

**Frontend** — React 19 · TypeScript · Astro · Next.js · MUI / Mantine · HTML / CSS / Responsive design

**Backend** — Node.js · Express · Sequelize / MySQL · MongoDB · Socket.IO · BullMQ / Redis · Zod

**Testing** — Vitest · React Testing Library · MSW · Supertest · Playwright

**DevOps e infraestructura** — Docker · Docker Compose · CI/CD (GitHub Actions) · Nginx · Linux · Sentry

**Otros** — Stripe · JWT / OAuth · Git / GitHub · Figma

## Proyectos propios

Proyectos construidos a mano, antes de que la IA escribiera código. Son mi base de fundamentos: entender qué hace el código (y qué no) es lo que me permite hoy revisar y sostener el que produce la IA.

- **Full size images for IG** — Extensión para Chrome que permite ver imágenes de Instagram a máxima resolución. **+6000 usuarios** en la Chrome Web Store. Stack: JavaScript, HTML, CSS, WebExtension API.
- **fotoYOP & foto-V** — Transformación de imágenes y collages, y conversión de imágenes en videos con efectos. Producto propio, PWA instalable y usable offline. Stack: JavaScript / TypeScript, React / Next, Canvas API, PWA. [fotoyop.fedeholc.ar](http://fotoyop.fedeholc.ar) · [foto-v.fedeholc.ar](http://foto-v.fedeholc.ar)
- **JWT Learning Kit** — Guía y código para aprender a construir desde cero un sistema de autenticación con JSON Web Token, explicando procesos y conceptos. Stack: Node, Express, SQLite, Vitest, Playwright, JSDoc. [jwtlk.fedeholc.ar](http://jwtlk.fedeholc.ar)

## Formación

- **Tecnicatura Superior en Desarrollo de Software.** Instituto de Formación Técnica Superior N.º 29, CABA. 2023 – 2025. Graduado.
- **Licenciatura en Sociología** (UBA, 2002 – 2007) y **Profesorado en Sociología** (UBA, 2007 – 2009). Graduado. Especialización Docente en ESI (ISP Dr. Joaquín V. González, 2017 – 2019). Escuela Técnica en Computación (E.T. N.º 3, 1992 – 1998).
- **Proyectos de formación** (desarrollo de software): Java / Spring + Angular · Kotlin / Android · C# / MySQL · MongoDB / Node.
- **Cursos:** Google Cloud Computing Foundations (2025) · AWS Academy Cloud Foundations (2024) · Argentina Programa v3.0 Full Stack (INTI, 2022 – 2023) · Codo a Codo 4.0 Full Stack Java (2022) · freeCodeCamp: Responsive Web Design / JavaScript Algorithms and Data Structures / Back End Development and APIs (2022).

## Idiomas

- **Español:** nativo.
- **Inglés:** professional working proficiency. First Certificate Exam (B2 First), Cambridge University.
