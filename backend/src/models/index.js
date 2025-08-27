import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

// User Model
export const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 50],
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 50],
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 255],
    },
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
      is: /^[+]?[1-9][\d\s\-\(\)]{7,15}$/,
    },
  },
  role: {
    type: DataTypes.ENUM(
      'PARTICIPANT',
      'EXECUTIVE_BOARD',
      'SOFTWARE_ADMIN',
      'REGISTRATION_ADMIN',
      'HOSPITALITY_ADMIN',
      'ALLOCATION_ADMIN',
      'SUPER_ADMIN'
    ),
    defaultValue: 'PARTICIPANT',
  },
  profileImage: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'users',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['email'],
    },
    {
      fields: ['role'],
    },
  ],
});

// Registration Model
export const Registration = sequelize.define('Registration', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    references: {
      model: User,
      key: 'id',
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('MALE', 'FEMALE', 'OTHER'),
    allowNull: false,
  },
  isKumaraguru: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  rollNumber: {
    type: DataTypes.STRING,
  },
  institutionType: {
    type: DataTypes.ENUM('SCHOOL', 'COLLEGE', 'COMPANY'),
  },
  institution: {
    type: DataTypes.STRING,
  },
  grade: {
    type: DataTypes.STRING,
  },
  totalMuns: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  committeePreference1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  portfolioPreference1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  committeePreference2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  portfolioPreference2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  committeePreference3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  portfolioPreference3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idDocument: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  munResume: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'SHORTLISTED', 'CONFIRMED', 'REJECTED'),
    defaultValue: 'PENDING',
  },
  allocatedCommittee: {
    type: DataTypes.STRING,
  },
  allocatedPortfolio: {
    type: DataTypes.STRING,
  },
  paymentStatus: {
    type: DataTypes.ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED'),
    defaultValue: 'PENDING',
  },
  submittedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'registrations',
  timestamps: true,
});

// Committee Model
export const Committee = sequelize.define('Committee', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  shortName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  agenda: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  backgroundGuide: {
    type: DataTypes.STRING,
  },
  logo: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  tableName: 'committees',
  timestamps: true,
});

// Portfolio Model
export const Portfolio = sequelize.define('Portfolio', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  committeeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Committee,
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAllocated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'portfolios',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['committeeId', 'name'],
    },
  ],
});

// Payment Model
export const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  registrationId: {
    type: DataTypes.UUID,
    references: {
      model: Registration,
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: 'INR',
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED'),
    defaultValue: 'PENDING',
  },
  razorpayOrderId: {
    type: DataTypes.STRING,
  },
  razorpayPaymentId: {
    type: DataTypes.STRING,
  },
  razorpaySignature: {
    type: DataTypes.STRING,
  },
  invoiceUrl: {
    type: DataTypes.STRING,
  },
  failureReason: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'payments',
  timestamps: true,
});

// CheckIn Model
export const CheckIn = sequelize.define('CheckIn', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  type: {
    type: DataTypes.ENUM('CONFERENCE', 'ACCOMMODATION'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('CHECKED_IN', 'CHECKED_OUT'),
    allowNull: false,
  },
  markedBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  markedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  location: {
    type: DataTypes.STRING,
  },
  notes: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'check_ins',
  timestamps: false,
});

// Define Associations
User.hasOne(Registration, { foreignKey: 'userId', as: 'registration' });
Registration.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Payment, { foreignKey: 'userId', as: 'payments' });
Payment.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(CheckIn, { foreignKey: 'userId', as: 'checkIns' });
CheckIn.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(CheckIn, { foreignKey: 'markedBy', as: 'markedCheckIns' });
CheckIn.belongsTo(User, { foreignKey: 'markedBy', as: 'marker' });

Committee.hasMany(Portfolio, { foreignKey: 'committeeId', as: 'portfolios' });
Portfolio.belongsTo(Committee, { foreignKey: 'committeeId', as: 'committee' });

User.hasMany(Committee, { foreignKey: 'createdBy', as: 'createdCommittees' });
Committee.belongsTo(User, { foreignKey: 'createdBy', as: 'creator' });

export { sequelize };