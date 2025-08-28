import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

// Prisma Client
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

// Test database connection
export const connectDatabase = async () => {
  try {
    // Test Prisma connection
    await prisma.$connect();
    console.log('✅ Prisma client connected successfully.');
    
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
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