import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600"> CyberED</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/news" className="text-gray-700 hover:text-blue-600">Новости</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600">Команда</Link>
        
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Контакты</Link>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/news" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Новости
              </Link>
              <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Команда
              </Link>
              
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Контакты
              </Link>
              <Link to="/admin" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Админ панель
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;