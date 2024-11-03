import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Globe2, 
  Megaphone, 
  Users2, 
  BarChart2, 
  Target, 
  Zap,
  Menu,
  X,
  Building2,
  ShoppingBag,
  Rocket,
  BookOpen,
  FileText,
  Play
} from 'lucide-react';

// ... rest of the Navbar code remains the same ...

const Navbar = () => {
  // ... existing Navbar code ...

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap size={32} className="text-primary-600" />
            <span className="text-xl font-bold">OneTap Media</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* ... existing navigation items ... */}
            
            <Link 
              to="/portal/login"
              className="px-6 py-2.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Client Portal
            </Link>
          </div>

          {/* ... rest of the Navbar code ... */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;