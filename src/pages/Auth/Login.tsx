import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Layout/Header';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const demoAccounts = [
    { email: 'participant@mun.com', role: 'Participant', password: 'demo123' },
    { email: 'admin@mun.com', role: 'Software Admin', password: 'demo123' },
    { email: 'registration@mun.com', role: 'Registration Admin', password: 'demo123' },
    { email: 'hospitality@mun.com', role: 'Hospitality Admin', password: 'demo123' },
    { email: 'allocation@mun.com', role: 'Allocation Admin', password: 'demo123' },
    { email: 'executive@mun.com', role: 'Executive Board', password: 'demo123' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white">
              <img
                src="/logo.png"
                alt="K-MUN 2025 Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              to="/register"
              className="font-medium text-blue-800 hover:text-blue-900"
            >
              Register for Kumaraguru MUN 2025
            </Link>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Notification Above Demo Accounts */}
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
            Please login using credentials sent through E-Mail
          </div>

          {/* Demo Accounts */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Demo Accounts:</h3>
            <div className="space-y-1 text-xs text-blue-800">
              {demoAccounts.map((account, index) => (
                <div key={index} className="flex justify-between">
                  <span>{account.role}:</span>
                  <span className="font-mono">{account.email}</span>
                </div>
              ))}
              <div className="text-center mt-2 text-blue-600">
                Password: <span className="font-mono">demo123</span>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>

            {/* Sign in with Google */}
            <div>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303C33.602,32.329,29.174,36,24,36c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.156,7.961,3.039l5.657-5.657C33.64,6.053,28.983,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,13,24,13c3.059,0,5.842,1.156,7.961,3.039l5.657-5.657 C33.64,6.053,28.983,4,24,4C16.316,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c4.874,0,9.29-1.833,12.661-4.839l-5.84-4.934C29.422,35.523,26.829,36,24,36 c-5.152,0-9.567-3.289-11.291-7.854l-6.541,5.036C9.584,39.556,16.292,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-1.363,3.246-4.35,5.678-8.303,5.678 c-2.477,0-4.731-0.999-6.364-2.621l-6.541,5.036C16.292,39.556,20.292,41,24,41c7.18,0,13.243-4.861,15.249-11.322 C43.862,21.35,44,22.659,44,24c0-1.14-0.102-2.253-0.389-3.917H43.611z"/></svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Login;