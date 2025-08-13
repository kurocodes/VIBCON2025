import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { icons, images } from "../../assets/assets";
import { useGeneralContext } from "../../context/genrealContext";

export default function Navbar() {
  const { setShowSidebar, navigate } = useGeneralContext();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItemBaseStyle =
    "hover:text-[var(--color-accent)] transition-colors font-light";

  const getNavItemStyle = ({ isActive }) =>
    `${navItemBaseStyle} ${
      isActive ? "border-b-2 border-[var(--color-accent)] pb-1" : ""
    }`;

  const allowTransparent =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/home";

  const isTransparent = allowTransparent && !scrolled;

  return (
    <div
      className={`fixed w-full px-5 xl:px-26 flex items-center justify-between transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-[var(--color-primary)]"
      } z-2`}
    >
      {/* Logo (IVRI signature logo) */}
      <div
        className={`${
          !isTransparent && "bg-white"
        } h-18 place-content-center px-2 transition duration-300`}
      >
        <img
          src={images.ivri_signature_logo}
          alt="Logo"
          className="w-20 cursor-pointer drop"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-[var(--color-text)] text-md font-bold">
          <li>
            <NavLink to="/" className={getNavItemStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavItemStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={getNavItemStyle}>
              Program & Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/organizers" className={getNavItemStyle}>
              Organizers
            </NavLink>
          </li>
          <li>
            <NavLink to="/travel" className={getNavItemStyle}>
              Travel
            </NavLink>
          </li>
          <li>
            <NavLink to="/abstract" className={getNavItemStyle}>
              Abstract
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" className={getNavItemStyle}>
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/company/vibcon2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icons.linkedin_icon}
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/vibcon2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icons.x_icon}
                alt="X"
                className="w-8 h-8 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Menu icon for small screens */}
      <div className="text-[var(--color-text)] lg:hidden">
        <button onClick={() => setShowSidebar(true)}>
          <img
            src={icons.menu_icon}
            alt="menu_icon"
            className="w-10 h-10 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
