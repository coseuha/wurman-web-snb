
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/site';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-color/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container flex items-center justify-between h-20">
        <NavLink to="/" className="text-2xl font-bold font-sans">
          Richard Saul Wurman
        </NavLink>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold hover:text-accent-blue transition-colors ${
                  isActive ? 'text-accent-blue border-b-2 border-accent-blue' : 'text-text-color'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-bg-color border-b border-gray-200">
          <nav className="container flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-semibold hover:text-accent-blue transition-colors ${
                    isActive ? 'text-accent-blue' : 'text-text-color'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
