import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';

interface ScreenSizeState {
  width: number;
}

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<ScreenSizeState>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenSize({
        width: newWidth,
      });

      if (newWidth > 550 && isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white font-bold text-xl cursor-pointer"
          >
            Your Name
          </Link>

          {screenSize.width > 550 ? (
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          )}
        </div>

        {isOpen && screenSize.width <= 550 && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;