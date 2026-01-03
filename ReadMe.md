# Dayflow - Human Resource Management System

**Every workday, perfectly aligned.**

A modern, full-stack HRMS built for efficiency and ease of use. Manage employees, track attendance, handle leave requests, and oversee payroll—all in one beautiful interface.

![Project Status](https://img.shields.io/badge/status-in%20development-yellow)
![Backend](https://img.shields.io/badge/backend-complete-green)
![Frontend](https://img.shields.io/badge/frontend-pending-orange)

## ✨ Features

### For Employees
- 👤 **Profile Management** - View and update personal information
- ⏰ **Attendance Tracking** - Easy check-in/check-out with daily/weekly views
- 🏖️ **Leave Management** - Apply for leave and track request status
- 💰 **Payroll Visibility** - View salary structure and breakdown

### For HR/Admin
- 📊 **Employee Management** - Complete employee lifecycle management
- 📅 **Attendance Oversight** - View and manage all employee attendance
- ✅ **Leave Approvals** - Review and approve/reject leave requests
- 💵 **Payroll Management** - Configure and update salary structures
- 📈 **Analytics** - Attendance summaries and insights

## 🚀 Tech Stack

### Backend
- **Runtime:** Node.js with Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (Access + Refresh tokens)
- **File Upload:** Cloudinary
- **Validation:** express-validator
- **Security:** bcrypt for password hashing

### Frontend
- **Framework:** React 18 with Vite
- **UI Library:** shadcn/ui components
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **State Management:** React Context API

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Cloudinary account (for file uploads)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/dayflow-hrms.git
cd dayflow-hrms
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# - MONGODB_URI
# - DB_NAME
# - ACCESS_TOKEN_SECRET
# - REFRESH_TOKEN_SECRET
# - CLOUDINARY credentials
# - CORS_ORIGIN
```

**Environment Variables:**
```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=dayflow_hrms
PORT=8000
NODE_ENV=development

ACCESS_TOKEN_SECRET=your_secret_here
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_secret_here
REFRESH_TOKEN_EXPIRY=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CORS_ORIGIN=http://localhost:5173
```

**Start Backend Server:**
```bash
npm run dev
```

Server will run on `http://localhost:8000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env
VITE_API_URL=http://localhost:8000/api/v1
```

**Start Frontend Dev Server:**
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📚 API Documentation

Complete API documentation is available in [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md).

### Quick API Overview

**Base URL:** `http://localhost:8000/api/v1`

**Authentication:**
- POST `/auth/signup` - Register new user
- POST `/auth/signin` - Login
- POST `/auth/logout` - Logout
- GET `/auth/me` - Get current user

**Employees:**
- GET `/employees/profile` - Get own profile
- PUT `/employees/profile` - Update profile
- GET `/employees` - List all employees (Admin/HR)

**Attendance:**
- POST `/attendance/check-in` - Check in
- POST `/attendance/check-out` - Check out
- GET `/attendance/my-attendance` - View own attendance

**Leaves:**
- POST `/leaves/apply` - Apply for leave
- GET `/leaves/my-leaves` - View own leaves
- PATCH `/leaves/:id/approve` - Approve leave (Admin/HR)

**Payroll:**
- GET `/payroll/my-payroll` - View own payroll
- POST `/payroll` - Create/update payroll (Admin/HR)

## 🗂️ Project Structure

```
dayflow-hrms/
├── backend/
│   ├── scr/
│   │   ├── controllers/      # Request handlers
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API routes
│   │   ├── middlewares/      # Auth, validation, etc.
│   │   ├── utils/            # Helper functions
│   │   ├── db/               # Database connection
│   │   ├── app.js            # Express app setup
│   │   └── index.js          # Entry point
│   ├── public/               # Static files
│   ├── .env.example          # Environment template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── context/          # React context
│   │   ├── lib/              # Utilities
│   │   └── App.jsx           # Main app component
│   ├── .env.example
│   └── package.json
│
└── README.md
```

## 🔐 Security Features

- ✅ JWT-based authentication with refresh tokens
- ✅ Password hashing with bcrypt
- ✅ Role-based access control (Employee, HR, Admin)
- ✅ HTTP-only cookies for token storage
- ✅ Input validation on all endpoints
- ✅ CORS configuration
- ✅ Secure environment variable management

## 👥 User Roles

### Employee
- View and edit own profile (limited fields)
- Check-in/check-out for attendance
- View own attendance records
- Apply for leave
- View own payroll information

### HR
- All employee permissions
- View all employees
- View all attendance records
- Approve/reject leave requests
- Manage payroll for all employees

### Admin
- All HR permissions
- Update employee status
- Delete payroll records
- Full system access

## 🧪 Testing

### Backend API Testing

Use the health check endpoint:
```bash
curl http://localhost:8000/api/v1/health
```

Test authentication:
```bash
# Signup
curl -X POST http://localhost:8000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123",
    "fullName": "Test User",
    "designation": "Developer",
    "department": "Engineering"
  }'
```

## 🎨 UI/UX Features (Planned)

- Modern glassmorphism design
- Smooth animations and transitions
- Responsive mobile-first layout
- Dark mode support
- Interactive dashboards
- Calendar views for attendance
- Real-time notifications

## 🚧 Development Status

### ✅ Completed
- [x] Backend API (100%)
  - [x] Database models
  - [x] Authentication & authorization
  - [x] All CRUD endpoints
  - [x] Validation middleware
  - [x] Error handling
- [x] API Documentation
- [x] Security implementation

### 🔄 In Progress
- [ ] Frontend initialization
- [ ] UI component library setup
- [ ] Authentication flow
- [ ] Dashboard pages

### 📅 Upcoming
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Report generation
- [ ] Deployment configuration

## 🤝 Contributing

This project is currently in development for a hackathon. Contributions, issues, and feature requests are welcome!

## 📄 License

ISC License

## 👨‍💻 Author

**Rishi Thakkar**

---

**Built with ❤️ for efficient HR management**
