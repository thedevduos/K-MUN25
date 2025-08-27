# K-MUN 2025 Role-Based Access Control System

## Overview

This document outlines the comprehensive role-based access control system implemented for K-MUN 2025. The system provides distinct dashboards and functionalities for different user roles, ensuring proper access control and efficient event management.

## Role Structure

### 1. Dev Admin (`DEV_ADMIN`)
**Access Level:** Super Administrator
**Dashboard Route:** `/dashboard/dev-admin`

#### Capabilities:
- **Complete System Access:** Full access to all features and processes
- **Admin Logs:** View and manage system activity logs
- **User Management:** Create, update, delete, and manage all users
- **Transaction Details:** View and manage all payment transactions
- **Event Registration Fees Management:** Configure and manage registration fees
- **Committees Management:** Create, update, and manage committees
- **Popup Manager:** Manage system-wide popup notifications
- **Mailer:** Send bulk emails and manage email templates
- **Attendance Event:** View and manage event attendance
- **Attendance:** Comprehensive attendance tracking
- **Notifications:** Send and manage system notifications

#### Key Features:
- System statistics and monitoring
- Database management and backups
- Security monitoring and logs
- Development tools and API management
- Performance monitoring

---

### 2. Delegate Affairs (`DELEGATE_AFFAIRS`)
**Access Level:** Registration and Assignment Manager
**Dashboard Route:** `/dashboard/delegate-affairs`

#### Capabilities:
- **View Registrations:** Access all delegate registration data
- **Committee Allocation:** Allocate delegates to committees and portfolios based on preferences
- **Mailer:** Send communications to delegates
- **Notifications:** Send targeted notifications

#### Key Features:
- Registration status management
- Committee and portfolio assignment
- Bulk allocation tools
- Communication management
- Registration statistics

---

### 3. Delegate (`DELEGATE`)
**Access Level:** Event Participant
**Dashboard Route:** `/dashboard/delegate`

#### Capabilities:
- **Profile Management:** View and edit personal profile
- **Notifications:** Receive and view notifications

#### Key Features:
- Personal dashboard with registration status
- Document management and submission
- Event schedule viewing
- Committee information access
- Profile completion tracking

---

### 4. Front Desk Admin (`FRONT_DESK_ADMIN`)
**Access Level:** Event Check-in Manager
**Dashboard Route:** `/dashboard/front-desk`

#### Capabilities:
- **Check-in Management:** Check in users with search functionality
- **Kit Distribution:** Mark kit received during check-in
- **Check-out Management:** Process user check-outs
- **User Information:** Access detailed user information
- **Notifications:** Receive and manage notifications

#### Key Features:
- User search by ID, name, or email
- Modal-based check-in process
- Kit distribution tracking
- Check-in/check-out history
- Real-time user status

---

### 5. Committee Director (`COMMITTEE_DIRECTOR`)
**Access Level:** Committee Session Manager
**Dashboard Route:** `/dashboard/committee-director`

#### Capabilities:
- **Attendance Management:** Mark attendance for committee members during events
- **Attendance Viewing:** View comprehensive attendance records
- **Marks Upload:** Upload and manage delegate marks
- **Notifications:** Receive and manage notifications

#### Key Features:
- Committee selection interface
- Real-time attendance marking
- Marks management system
- Attendance reports
- Committee statistics

---

### 6. Hospitality Admin (`HOSPITALITY_ADMIN`)
**Access Level:** Accommodation Manager
**Dashboard Route:** `/dashboard/hospitality`

#### Capabilities:
- **Participant Management:** View interested participants
- **Payment Status:** Monitor payment status
- **Room Management:** Manage accommodation rooms
- **Room Allocation:** Allocate rooms to participants
- **Notifications:** Receive and manage notifications

#### Key Features:
- Room availability tracking
- Payment status monitoring
- Room allocation management
- Check-in/check-out coordination
- Accommodation statistics

---

## Database Schema

### Core Models

#### User
```prisma
model User {
  id                String   @id @default(uuid())
  firstName         String
  lastName          String
  email             String   @unique
  password          String
  phone             String?
  role              UserRole @default(DELEGATE)
  profileImage      String?
  isActive          Boolean  @default(true)
  lastLogin         DateTime?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}
```

#### Registration
```prisma
model Registration {
  id                    String   @id @default(uuid())
  userId                String   @unique
  institution           String
  committeePreference1  String
  portfolioPreference1  String
  committeePreference2  String
  portfolioPreference2  String
  committeePreference3  String
  portfolioPreference3  String
  status                String   @default("PENDING")
  paymentStatus         String   @default("PENDING")
  allocatedCommittee    String?
  allocatedPortfolio    String?
  submittedAt           DateTime @default(now())
  user                  User     @relation(fields: [userId], references: [id])
}
```

#### Committee
```prisma
model Committee {
  id              String   @id @default(uuid())
  name            String
  shortName       String
  level           String
  agenda          String?
  backgroundGuide String?
  isActive        Boolean  @default(true)
  creator         String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

#### Room
```prisma
model Room {
  id          String   @id @default(uuid())
  roomNumber  String   @unique
  type        String
  capacity    Int
  price       Float
  isAvailable Boolean  @default(true)
  createdBy   String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Dev Admin Routes (`/api/admin`)
- `GET /system-stats` - System statistics
- `GET /users` - All users
- `PATCH /users/:userId/status` - Update user status
- `DELETE /users/:userId` - Delete user
- `GET /transactions` - All transactions
- `GET /committees` - All committees
- `GET /activity-logs` - System logs
- `POST /notifications` - Send notifications

### Delegate Affairs Routes (`/api/delegate-affairs`)
- `GET /registrations` - All registrations
- `PATCH /registrations/:registrationId/status` - Update registration status
- `GET /committees` - Available committees
- `POST /allocations` - Create allocation
- `POST /notifications` - Send notifications
- `POST /send-email` - Send emails

### Delegate Routes (`/api/delegate`)
- `GET /profile` - User profile
- `PATCH /profile` - Update profile
- `GET /notifications` - User notifications
- `PATCH /notifications/:notificationId/read` - Mark notification as read
- `GET /documents` - User documents
- `POST /documents/upload` - Upload document

### Front Desk Routes (`/api/front-desk`)
- `GET /users` - All users
- `GET /users/search` - Search user
- `POST /check-in` - Check in user
- `POST /check-out` - Check out user
- `GET /check-ins` - Check-in records
- `GET /notifications` - Notifications

### Committee Director Routes (`/api/committee-director`)
- `GET /committees` - Available committees
- `GET /committees/:committeeId/delegates` - Committee delegates
- `GET /committees/:committeeId/events` - Committee events
- `POST /attendance` - Mark attendance
- `GET /committees/:committeeId/attendance` - Attendance records
- `POST /marks` - Upload marks

### Hospitality Routes (`/api/hospitality`)
- `GET /participants` - Interested participants
- `GET /payments` - Payment status
- `GET /rooms` - All rooms
- `POST /rooms` - Create room
- `GET /allocations` - Room allocations
- `POST /allocations` - Create allocation

## Security Features

### Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Session management
- Role-based access control

### Authorization
- Route-level protection
- Role-specific middleware
- API endpoint security
- Data access control

### Data Protection
- Input validation
- SQL injection prevention
- XSS protection
- CSRF protection

## Setup Instructions

### 1. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with initial data
npm run db:seed
```

### 2. Environment Variables
```env
DATABASE_URL="postgresql://username:password@localhost:5432/kmun25"
JWT_SECRET="your-jwt-secret"
VITE_APP_URL="http://localhost:5173"
```

### 3. Running the Application
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Default Login Credentials

### Admin Users
- **Dev Admin:** devadmin@kmun25.com / password123
- **Delegate Affairs:** delegateaffairs@kmun25.com / password123
- **Front Desk Admin:** frontdesk@kmun25.com / password123
- **Committee Director:** committeedirector@kmun25.com / password123
- **Hospitality Admin:** hospitality@kmun25.com / password123

### Sample Delegates
- john.smith@university.edu / password123
- sarah.johnson@college.edu / password123
- michael.brown@school.edu / password123
- emily.davis@institute.edu / password123
- david.wilson@academy.edu / password123

## Features by Role

### Dev Admin Features
- Complete system overview
- User management interface
- Transaction monitoring
- Committee management
- System logs and monitoring
- Notification management
- Database administration

### Delegate Affairs Features
- Registration management
- Committee allocation tools
- Communication management
- Statistics and reporting
- Bulk operations

### Delegate Features
- Personal profile management
- Document submission
- Event schedule access
- Committee information
- Notification center

### Front Desk Features
- User search and lookup
- Check-in/check-out management
- Kit distribution tracking
- User information access
- Activity monitoring

### Committee Director Features
- Committee selection
- Attendance management
- Marks upload and management
- Committee statistics
- Session management

### Hospitality Features
- Participant management
- Room allocation
- Payment status monitoring
- Accommodation management
- Check-in coordination

## Technical Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express
- Prisma ORM
- PostgreSQL database
- JWT authentication
- bcrypt for password hashing

### Development Tools
- Vite for build tooling
- ESLint for code linting
- TypeScript for type safety
- Hot reload for development

## Deployment

### Production Build
```bash
# Build frontend
npm run build

# Start production server
npm start
```

### Environment Configuration
- Set production environment variables
- Configure database connection
- Set up SSL certificates
- Configure reverse proxy

## Support and Maintenance

### Monitoring
- Application performance monitoring
- Error tracking and logging
- Database performance monitoring
- User activity tracking

### Backup and Recovery
- Automated database backups
- File system backups
- Disaster recovery procedures
- Data retention policies

---

This role-based access control system provides a comprehensive solution for managing K-MUN 2025 with proper security, scalability, and user experience considerations.

