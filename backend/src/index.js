import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// Import routes
import authRoutes from './routes/auth.js';
import registrationRoutes from './routes/registration.js';
import committeeRoutes from './routes/committees.js';
import pricingRoutes from './routes/pricing.js';
import userRoutes from './routes/users.js';
import paymentRoutes from './routes/payments.js';
import checkInRoutes from './routes/checkin.js';
import accommodationRoutes from './routes/accommodation.js';
import eventRoutes from './routes/events.js';
import attendanceRoutes from './routes/attendance.js';
import marksRoutes from './routes/marks.js';
import contactRoutes from './routes/contact.js';
import notificationRoutes from './routes/notifications.js';
import popupRoutes from './routes/popups.js';
import resourceRoutes from './routes/resources.js';
import activityLogRoutes from './routes/activityLogs.js';
import dashboardRoutes from './routes/dashboard.js';
import healthRoutes from './routes/health.js';

// Import middleware
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Prisma Client
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/committees', committeeRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/checkin', checkInRoutes);
app.use('/api/accommodation', accommodationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/popups', popupRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/health', healthRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: 'Connected'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Kumaraguru MUN 2025 API Server',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      registrations: '/api/registrations',
      committees: '/api/committees',
      pricing: '/api/pricing',
      users: '/api/users',
      payments: '/api/payments',
      checkin: '/api/checkin',
      accommodation: '/api/accommodation',
      events: '/api/events',
      attendance: '/api/attendance',
      marks: '/api/marks',
      contact: '/api/contact',
      notifications: '/api/notifications',
      popups: '/api/popups',
      resources: '/api/resources',
      activityLogs: '/api/activity-logs'
    }
  });
});

// Error handling middleware
app.use(errorHandler);

// Database connection test
async function connectDatabase() {
  try {
    await prisma.$connect();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🔄 Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

// Start server
console.log('🎯 Starting server...');
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API Documentation: http://localhost:${PORT}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});

// Try to connect to database after server starts
connectDatabase().then((connected) => {
  if (connected) {
    console.log('✅ Server is fully operational with database connection');
  } else {
    console.log('⚠️  Server is running without database connection');
  }
});