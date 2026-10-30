# FORM — Gym Booking System

Next.js App Router + TypeScript + custom CSS + Lucide icons. Includes a member-facing booking interface and admin dashboard.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Member view is `/member`; admin view is `/admin`.

## Demo features
- Member: browse/filter/search classes, book classes, prevent duplicate bookings, view and cancel bookings.
- Admin: overview metrics, create/delete classes, manage bookings, see derived member directory.
- Uses browser localStorage so changes persist between page refreshes in the *same browser*.
- Reset demo data via the footer.

## Database placeholder (not connected)
- `src/lib/mock-db.ts`: initial records, localStorage read/write. Replace with database queries.
- `src/components/GymProvider.tsx`: state and booking operations. Replace with calls to server actions or API routes, then refresh data from backend.
- `src/lib/types.ts`: strongly typed data models.

Suggested real database collections/tables: `users(id, name, email, role)`, `classes(id, name, category, coach, date, time, duration, capacity, room, intensity)`, `bookings(id, user_id, class_id, status, created_at)`.

## IMPORTANT before production
This is a **UI prototype**, NOT a secure reservation system. The `/admin` route is publicly accessible; the member identity is hardcoded; localStorage is not shared across users or devices. Implement real authentication, authorization (server-side admin guard), database constraints, validated API/server actions and atomic transactions to avoid overselling capacity. Do not trust `role` or `userId` from the browser.

## Deploy
`npm run build` then deploy to Vercel. Demo localStorage state is only per browser, even when deployed.
