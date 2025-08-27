export interface User {
  id: string;
  userId?: string; // KMUN25xxx format
  userId?: string; // KMUN25xxx format
  name: string;
  email: string;
  phone: string;
  institution: string;
  grade: string;
  role: UserRole;
  profileImage?: string;
  registrationStatus: 'registered' | 'shortlisted' | 'confirmed';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  allocatedCommittee?: string;
  allocatedPortfolio?: string;
  checkInStatus?: 'checked-in' | 'checked-out' | 'not-checked-in';
  createdAt: string;
}

export type UserRole = 
  | 'participant' 
  | 'executive-board' 
  | 'software-admin' 
  | 'registration-admin' 
  | 'hospitality-admin' 
  | 'allocation-admin' 
  | 'super-admin';

export interface Committee {
  id: string;
  name: string;
  agenda: string;
  backgroundGuide?: string;
  logo?: string;
  executiveBoard: ExecutiveBoardMember[];
  portfolios: string[];
}

export interface ExecutiveBoardMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  committee: string;
}

export interface Registration {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  isKumaraguru: string;
  rollNumber?: string;
  institutionType?: string;
  institution?: string;
  grade?: string;
  totalMuns: string;
  committeePreferences: string[];
  portfolioPreferences: string[];
  idDocument: string;
  munResume?: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'success' | 'failed' | 'refunded';
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  invoiceUrl?: string;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  role: UserRole;
  timestamp: string;
  details?: string;
  markedBy?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'resolved';
  submittedAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  targetAudience: 'all' | 'paid' | 'unpaid' | 'allocated' | 'specific';
  specificUsers?: string[];
  createdBy: string;
  createdAt: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'active' | 'completed';
  createdBy: string;
  createdAt: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guides' | 'rules' | 'templates' | 'videos';
  format: string;
  size: string;
  url: string;
  uploadDate: string;
  downloads: number;
  uploadedBy: string;
}