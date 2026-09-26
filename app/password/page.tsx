// app/password/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Get password from environment variable
    const correctPassword = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD;
    
    // If no password is set, use a default (for development)
    if (!correctPassword) {
      console.warn('No password set in .env.local! Using default.');
    }
    
    if (password === (correctPassword || 'yourSecurePassword123')) {
      document.cookie = 'auth_token=authenticated; path=/; max-age=86400';
      router.push('/');
    } else {
      setError('Incorrect passkey. Please try again.');
      setPassword('');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Lock className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Portfolio Protected
          </h1>
          <p className="text-white/80 text-center mb-8">
            Enter the passkey to view my work
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter passkey"
                className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 pr-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            {error && (
              <p className="text-red-200 text-sm text-center animate-pulse">
                ❌ {error}
              </p>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
            >
              {loading ? 'Unlocking...' : '🔓 Unlock Portfolio'}
            </button>
          </form>
          
          <p className="text-white/40 text-center text-sm mt-6">
            Built with ❤️ using Next.js
          </p>
        </div>
      </div>
    </div>
  );
}