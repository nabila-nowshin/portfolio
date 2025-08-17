import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Provider/ThemeContext";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { FaCircleArrowLeft, FaHandPointLeft } from "react-icons/fa6";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300  
        ${isScrolled ? "py-2 shadow-2xl" : "py-4 shadow-lg"} 
        px-6 max-w-7xl w-11/12 rounded-full border backdrop-blur-lg
        ${theme === "light" ? "border-blue-300" : "border-gray-600"}`}
      >
        <div className="flex items-center justify-between font-poppins">
          {/* Logo */}
          <div
            className="text-xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            Nabila <span>Nowshin</span>
          </div>

          {/* Center Nav Links (hidden on mobile) */}
          <ul className="hidden lg:flex gap-6 text-md font-medium">
            {navLinks.map((item) => (
              <li key={item.name} className="relative cursor-pointer">
                <a
                  href={item.href}
                  className="after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 hover:text-blue-500 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="btn btn-sm btn-ghost">
              {theme === "light" ? (
                <FiMoon className="text-blue-500 w-6 h-6" />
              ) : (
                <FiSun className="text-yellow-400 w-6 h-6" />
              )}
            </button>

            {/* Hamburger for Mobile */}
            <button
              className="lg:hidden btn btn-ghost btn-circle"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-2xl transform transition-transform duration-300 z-100 bg-base-100
        ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-6`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg font-medium">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <a
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 bg-base-200 w-100 btn justify-start"
              >
                <FaCircleArrowLeft />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
