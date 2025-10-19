# Candidate Referral Management System

Live Demo: [Deployed Link](https://candidate-referral-system-ten.vercel.app)

## Features implemented
- Frontend React app with:
  - Dashboard showing list of referred candidates.
  - Candidate card showing Name, Job Title, Status, Email, Phone.
  - Search bar (searches name / job title / email).
  - Referral form to refer a candidate (client-side validation).
  - Status dropdown to change candidate status (Pending, Reviewed, Hired).
  - Delete candidate .
- Backend Node/Express with:
  - POST /candidates/
  - GET /candidates
  - PUT /candidates/:id/status
  - DELETE /candidates/:id
  

## Tech stack
- Frontend: React 
- Backend: Node.js + Express + Mongoose (MongoDB)
- Database: MongoDB (local or Atlas)

## Run locally

### Backend
1. `cd backend`
2. Copy `.env.example` to `.env` and edit `MONGO_URL` if needed.
3. Install dependencies: `npm install`
4. Start server: `npm run dev` (requires nodemon) or `npm start`
   - Backend runs on port 8080 by default.

### Frontend
1. `cd frontend`
2. `npm install`
3. (optional) ensure `proxy` in `package.json` points to backend (http://localhost:8080).
4. `npm start`
   - Frontend runs on http://localhost:5173



