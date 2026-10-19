# Mychat

This is a simple chat application.

## Frontend

The Next.js frontend lives in [`frontend/`](./frontend/) and currently provides:

- Login and registration screens with basic client-side validation
- A responsive chat workspace with conversation list, message history, and composer
- In-memory demo interactions so the UI can be tried before auth and chat APIs are complete

Run it locally:

```bash
cd frontend
npm install
npm run dev
```

The frontend is intentionally kept separate from the FastAPI backend. API calls can be added in [`frontend/app/page.tsx`](./frontend/app/page.tsx) and [`frontend/app/chat.tsx`](./frontend/app/chat.tsx) as the backend contracts are finalized.
