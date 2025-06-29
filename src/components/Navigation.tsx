import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && location.pathname !== '/') {
      window.location.href = '/' + href;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          <Link to="/" className="text-white font-medium tracking-tight text-xl sm:text-2xl">
            @samarjit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={location.pathname === '/' ? item.href : '/' + item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Smooth Expand/Collapse */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden bg-black/95 backdrop-blur-sm`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) =>
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={location.pathname === '/' ? item.href : '/' + item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
