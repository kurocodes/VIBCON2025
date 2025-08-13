import { NavLink } from "react-router-dom";
import { icons } from "../../assets/assets";
import { useGeneralContext } from "../../context/genrealContext";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import SocialMedia from "../SocialMedia";

export default function Sidebar() {
  const { setShowSidebar } = useGeneralContext();

  return (
    <div className="w-full xs:w-70 h-full bg-white fixed z-4 top-0 right-0">
      {/* Sidebar header */}
      <div className="w-full flex justify-between items-center p-4 border-b-2 border-[var(--color-secondary)]">
        {/* Social media links for small screens */}
        <SocialMedia iconColor="black" />

        {/* Close sidebar button */}
        <button
          onClick={() => setShowSidebar(false)}
          className="cursor-pointer"
        >
          <img
            src={icons.close_icon}
            alt="close_icon"
            className="w-8 h-8 hover:scale-110 transition-transform duration-200"
          />
        </button>
      </div>

      <nav className="mt-4">
        {/* Nav Links */}
        <ul className="flex flex-col items-center gap-6 text-[var(--color-primary)] text-md font-bold">
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/about">About</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/events">Program & Events</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/organizers">Organizers</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/travel">Travel</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/abstract">Abstract</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)]"
            onClick={() => setShowSidebar(false)}
          >
            <NavLink to="/feedback">Feedback</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
