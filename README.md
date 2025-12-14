# US Stock Portfolio OS

US Stock Portfolio OS is a premium-grade web platform for tracking, researching, and stress-testing US equity and ETF portfolios. It ships with a Next.js App Router frontend, Prisma/PostgreSQL persistence, Redis-backed background jobs, and pluggable market data providers.

## Tech stack
- Next.js 14 (App Router) + TypeScript + Tailwind + shadcn-inspired UI
- TanStack Query for client data fetching
- NextAuth-ready auth pages (email/password + OAuth friendly)
- Prisma + PostgreSQL schema for portfolios, transactions, holdings, analytics caches, alerts, and notes
- BullMQ + Redis for background analytics jobs
- Recharts for charting
- Vitest + Playwright test scaffolding

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env and adjust values:
   ```bash
   cp .env.example .env
   ```
3. Start Postgres and Redis:
   ```bash
   docker-compose up -d
   ```
4. Run Prisma migrations and seed sample data:
   ```bash
   npx prisma migrate dev --name init
   npx prisma db seed
   ```
5. Start the app:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` – Next.js dev server
- `npm run build` – production build
- `npm run start` – start built app
- `npm run prisma:migrate` – run migrations
- `npm run seed` – seed sample tickers and demo portfolio
- `npm run test` – unit tests via Vitest
- `npm run test:e2e` – Playwright smoke tests

## Directory structure
- `app/` – Next.js routes (App Router) including API handlers and UI pages
- `components/` – UI building blocks (cards, tables, layouts)
- `lib/` – market data providers, analytics engine, job queue setup
- `prisma/` – Prisma schema and seeds
- `scripts/` – background workers and utilities
- `tests/` – unit and e2e test scaffolding

## Market data providers
Two providers implement a shared interface in `lib/market-data/provider.ts`:
- `MockMarketDataProvider` – free/dev stub with cached sample data
- `PolygonLikeProvider` – production-oriented stub ready for a premium API key

Switch providers via `MARKET_DATA_PROVIDER` environment variable. Responses are cached in-memory and persisted via Prisma when wired up.

## Analytics engine
`lib/analytics/portfolio-analytics.ts` contains functions to compute daily values, volatility, drawdowns, and VaR from transaction and price inputs. Background recomputations are queued through BullMQ (`lib/jobs/queues.ts`) and executed by worker scripts such as `scripts/analytics-worker.ts`.

## Database schema highlights
- Users, sessions, and notes
- Portfolios with transactions and cached holding snapshots
- Securities with price history, dividends, and corporate actions
- Watchlists, alerts, and notification logs
- Benchmarks for SPY/QQQ/VTI and other indices

## Testing
Vitest and Playwright are configured for unit and smoke testing. Add scenarios under `tests/unit` and `tests/e2e` to expand coverage of analytics calculations, API endpoints, and critical user flows.

## Security & operations
- Environment variables for secrets and API keys
- OWASP-friendly defaults (CSRF handled by NextAuth when wired)
- Redis-backed queues for heavy analytics work
- Docker Compose for repeatable local environments

## Roadmap
- Wire NextAuth providers and MFA
- Implement broker CSV import wizard and command palette
- Persist market data to PostgreSQL with caching TTLs
- Build PDF reporting and export flows
