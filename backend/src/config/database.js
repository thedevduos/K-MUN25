import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables from root .env file
dotenv.config({ path: '../../.env' });

// Prisma Client
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

// Test database connection
export const connectDatabase = async () => {
  try {
    // Test Prisma connection
    await prisma.$connect();
    console.log('✅ Database connected successfully to:', process.env.DATABASE_URL?.split('@')[1] || 'database');
    
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
    console.log('💡 Make sure PostgreSQL is running and the database exists');
    return false;
  }
};

// Graceful shutdown
export const disconnectDatabase = async () => {
  try {
    await prisma.$disconnect();
    console.log('✅ Database connections closed successfully.');
  } catch (error) {
    console.error('❌ Error closing database connections:', error);
  }
};

export { prisma };