# Express + Knex + Postgres MVC Boilerplate

Minimal, production-ready API starter with Express, PostgreSQL, Knex, and MVC layering (routes, controllers, services, repositories), including a Categories CRUD with soft deletes.

## Stack
- Express, Knex, pg, Joi, dotenv
- PostgreSQL
- Migrations with Knex

## Getting started
1. Copy .env.example to .env and set DATABASE_URL and PORT.
2. Install deps:
   npm install
3. Create DB and run migrations:
   npm run migrate
4. Run the seed command
   npm run seed:run
5. Start dev server:
   npm run dev

## Scripts
- npm run dev — start with nodemon
- npm start — start server
- npm run migrate — run latest migrations
- npm run rollback — rollback last migration
- npm run seed:run — rollback last seed:run

## API
- GET /categories?limit=&offset=&product_id=&type=&q=
- GET /categories/:id
- POST /categories
- PATCH /categories/:id
- DELETE /categories/:id
