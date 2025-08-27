import { Sequelize } from 'sequelize';
import pkg from '@prisma/client';
import dotenv from 'dotenv';

const { PrismaClient } = pkg;

dotenv.config();

// Sequelize Configuration
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
});

// Prisma Client
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

// Test database connection
export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    
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
    await sequelize.close();
    await prisma.$disconnect();
    console.log('✅ Database connections closed successfully.');
  } catch (error) {
    console.error('❌ Error closing database connections:', error);
  }
};

export { sequelize, prisma };