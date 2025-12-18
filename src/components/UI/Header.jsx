import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const getLinkClassName = ({ isActive }) => {
    const baseClasses = "transition-colors duration-200";
    return isActive
      ? `${baseClasses} text-blue-400 border-b-2 border-blue-400 pb-1`
      : `${baseClasses} text-white hover:text-blue-400`;
  };

  const getLinkClassNameMobile = ({ isActive }) => {
    const baseClasses = "block px-6 py-4 transition-colors";
    return isActive
      ? `${baseClasses} text-blue-400 bg-gray-800/50`
      : `${baseClasses} text-white hover:bg-gray-800/30 hover:text-blue-400`;
  };
  
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/country", label: "Country" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-[#202020] text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <NavLink to="/" onClick={closeMenu}>
              <h1 className="text-xl lg:text-2xl font-bold hover:text-blue-400 transition-colors">
                World Explorer
              </h1>
            </NavLink>
          </div>

          {/* desktop Navigation */}
          <ul className=" hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={getLinkClassName}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* mobile navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* menu */}
            <div className="absolute left-0 right-0 top-16 bg-[#0d1212] shadow-2xl md:hidden z-50">
              <ul className="flex flex-col items-center py-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={closeMenu}
                      className={getLinkClassNameMobile}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

