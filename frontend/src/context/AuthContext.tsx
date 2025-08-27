import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'participant@mun.com',
    phone: '+91 9876543210',
    institution: 'Harvard University',
    grade: 'Undergraduate',
    role: 'participant',
    registrationStatus: 'confirmed',
    paymentStatus: 'paid',
    allocatedCommittee: 'UNSC',
    allocatedPortfolio: 'United States',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Software Admin',
    email: 'admin@mun.com',
    phone: '+91 9876543211',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'software-admin',
    registrationStatus: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '3',
    name: 'Registration Staff',
    email: 'registration@mun.com',
    phone: '+91 9876543212',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'registration-admin',
    registrationStatus: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '4',
    name: 'Hospitality Staff',
    email: 'hospitality@mun.com',
    phone: '+91 9876543213',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'hospitality-admin',
    registrationStatus: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '5',
    name: 'Allocation Staff',
    email: 'allocation@mun.com',
    phone: '+91 9876543214',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'allocation-admin',
    registrationStatus: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '6',
    name: 'Executive Board Member',
    email: 'executive@mun.com',
    phone: '+91 9876543215',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'executive-board',
    registrationStatus: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-01-01T10:00:00Z'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('munUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const loadingToast = toast.loading('Signing in...');
    
    // Mock authentication with new password format
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      // Check if password matches the format: Iam{FirstName}1!@#
      const firstName = foundUser.name.split(' ')[0];
      const expectedPassword = `Iam${firstName}1!@#`;
      
      if (password === expectedPassword || password === 'demo123') {
        setUser(foundUser);
        localStorage.setItem('munUser', JSON.stringify(foundUser));
        toast.success('Login successful!', { id: loadingToast });
      } else {
        toast.error('Invalid credentials', { id: loadingToast });
        throw new Error('Invalid credentials');
      }
    } else {
      toast.error('Invalid credentials', { id: loadingToast });
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('munUser');
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};