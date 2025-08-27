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
    userId: 'KMUN25001',
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
    userId: 'KMUN25002',
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
    userId: 'KMUN25003',
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
    userId: 'KMUN25004',
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
    userId: 'KMUN25005',
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
    userId: 'KMUN25006',
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

// Mock pricing data
export const mockPricing: PricingConfig = {
  id: '1',
  internalDelegate: 1399,
  externalDelegate: 1599,
  accommodationCharge: 800,
  currency: 'INR',
  isActive: true,
  updatedBy: 'admin@mun.com',
  updatedAt: '2024-01-01T10:00:00Z'
};

// Mock committees data
export const mockCommittees: Committee[] = [
  {
    id: '1',
    name: 'United Nations Security Council',
    agenda: 'The Question of Nuclear Disarmament in the Korean Peninsula',
    backgroundGuide: '/guides/unsc-bg.pdf',
    logo: '🛡️',
    executiveBoard: [],
    portfolios: ['United States', 'China', 'Russia', 'United Kingdom', 'France', 'Germany', 'Japan', 'India', 'Brazil', 'South Africa']
  },
  {
    id: '2',
    name: 'General Assembly First Committee',
    agenda: 'Disarmament and International Security',
    backgroundGuide: '/guides/ga1-bg.pdf',
    logo: '🌍',
    executiveBoard: [],
    portfolios: ['India', 'Germany', 'Japan', 'Brazil', 'South Africa', 'Canada', 'Australia', 'Mexico', 'Argentina', 'Egypt']
  },
  {
    id: '3',
    name: 'Economic and Social Council',
    agenda: 'Sustainable Development Goals: Progress and Challenges',
    backgroundGuide: '/guides/ecosoc-bg.pdf',
    logo: '💼',
    executiveBoard: [],
    portfolios: ['Canada', 'Australia', 'Mexico', 'Argentina', 'Egypt', 'Nigeria', 'Kenya', 'Thailand', 'Indonesia', 'Philippines']
  },
  {
    id: '4',
    name: 'Human Rights Council',
    agenda: 'Protection of Human Rights in Conflict Zones',
    backgroundGuide: '/guides/hrc-bg.pdf',
    logo: '⚖️',
    executiveBoard: [],
    portfolios: ['Netherlands', 'Sweden', 'Norway', 'Switzerland', 'Belgium', 'Denmark', 'Finland', 'Austria', 'Ireland', 'Luxembourg']
  },
  {
    id: '5',
    name: 'International Court of Justice',
    agenda: 'Maritime Boundary Disputes in the South China Sea',
    backgroundGuide: '/guides/icj-bg.pdf',
    logo: '🏛️',
    executiveBoard: [],
    portfolios: ['Judge from India', 'Judge from USA', 'Judge from UK', 'Judge from France', 'Judge from Germany', 'Judge from Japan', 'Judge from Brazil', 'Judge from Australia', 'Judge from Canada', 'Judge from Netherlands']
  },
  {
    id: '6',
    name: 'World Health Organization',
    agenda: 'Global Health Security and Pandemic Preparedness',
    backgroundGuide: '/guides/who-bg.pdf',
    logo: '🏥',
    executiveBoard: [],
    portfolios: ['WHO Director', 'India', 'USA', 'China', 'Germany', 'Japan', 'Brazil', 'Australia', 'Canada', 'United Kingdom']
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