import React from 'react';
import { ShoppingCart, User, LayoutDashboard, Store } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useStore } from '../hooks/useStore';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const { cartCount, user, setUser } = useStore();

  const toggleUserRole = () => {
    if (user) {
      const newRole = user.role === 'admin' ? 'customer' : 'admin';
      setUser({ ...user, role: newRole });
    } else {
      // Initialize demo user
      setUser({ 
        id: '1', 
        name: 'Demo User', 
        email: 'demo@techflow.com', 
        role: 'admin' 
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('store')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Store className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-900">TechFlow</span>
          </button>

          <nav className="flex items-center gap-2">
            <Button
              variant={currentView === 'store' ? 'default' : 'ghost'}
              onClick={() => onNavigate('store')}
            >
              Shop
            </Button>

            {user?.role === 'admin' && (
              <Button
                variant={currentView === 'admin' ? 'default' : 'ghost'}
                onClick={() => onNavigate('admin')}
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Admin
              </Button>
            )}

            <Button
              variant="ghost"
              className="relative"
              onClick={() => onNavigate('cart')}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              onClick={toggleUserRole}
              title={user ? `Switch to ${user.role === 'admin' ? 'customer' : 'admin'} view` : 'Login'}
            >
              <User className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
