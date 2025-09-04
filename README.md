# Role-Based Auth Frontend

This is a React frontend for a role-based authentication system.

## Features
- Register and login forms with real-time feedback
- Professional UI with icons and modern layout
- Role selection (user/admin) during registration
- Success/error messages for all actions
- Profile page showing user info and last login
- Admin panel for user management (delete users)
- Protected routes (profile, admin panel)

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the frontend React app:
   ```bash
   npm start
   ```
3. The app will run at `http://localhost:3000` and connect to the backend at `http://localhost:5000`

## Usage
- Register a new user or admin
- Login with your credentials
- View your profile
- If admin, access the admin panel to manage users

## Notes
- Make sure the backend is running at `http://localhost:5000`
- All API calls are made to `/api/*` endpoints
- UI is responsive and works on desktop/mobile
