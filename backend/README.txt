# Role-Based Auth Backend

This is a Node.js, Express, and MongoDB backend for a role-based authentication system.

## Features
- JWT-based authentication (register, login, logout)
- Password hashing with bcrypt
- Role-based access (user/admin)
- Protected routes (profile, admin-only user management)
- Error handling for invalid credentials, unauthorized access, expired tokens
- Last login time tracking

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up MongoDB (local or Atlas) and update `.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/local
   JWT_SECRET=your_jwt_secret
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT
- `POST /api/auth/logout` — Logout (client-side)
- `GET /api/users/profile` — Get logged-in user's profile
- `GET /api/users` — Get all users (admin only)
- `DELETE /api/users/:id` — Delete user (admin only)
