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

// Demo users with new role structure
const demoUsers: User[] = [
  {
    id: '1',
    userId: 'KMUN25001',
    firstName: 'John',
    lastName: 'Delegate',
    email: 'delegate@mun.com',
    phone: '+91 9876543210',
    institution: 'Harvard University',
    grade: 'Undergraduate',
    role: 'DELEGATE',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    userId: 'KMUN25002',
    firstName: 'Dev',
    lastName: 'Admin',
    email: 'dev@mun.com',
    phone: '+91 9876543211',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'DEV_ADMIN',
    isActive: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '3',
    userId: 'KMUN25003',
    firstName: 'Delegate',
    lastName: 'Affairs',
    email: 'affairs@mun.com',
    phone: '+91 9876543212',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'DELEGATE_AFFAIRS',
    isActive: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '4',
    userId: 'KMUN25004',
    firstName: 'Front',
    lastName: 'Desk',
    email: 'frontdesk@mun.com',
    phone: '+91 9876543213',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'FRONT_DESK_ADMIN',
    isActive: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '5',
    userId: 'KMUN25005',
    firstName: 'Committee',
    lastName: 'Director',
    email: 'director@mun.com',
    phone: '+91 9876543214',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'COMMITTEE_DIRECTOR',
    isActive: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '6',
    userId: 'KMUN25006',
    firstName: 'Hospitality',
    lastName: 'Admin',
    email: 'hospitality@mun.com',
    phone: '+91 9876543215',
    institution: 'MUN Organization',
    grade: 'Staff',
    role: 'HOSPITALITY_ADMIN',
    isActive: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
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
    const foundUser = demoUsers.find(u => u.email === email);
    if (foundUser) {
      // Check if password matches the format: Iam{FirstName}1!@#
      const firstName = foundUser.firstName;
      const expectedPassword = `Iam${firstName}1!@#`;
      
      if (password === expectedPassword || password === 'kmun2025') {
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