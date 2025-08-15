import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function SocialMedia({
  hideOnSmallScreen = false,
  iconColor = "text-white",
}) {
  return (
    <div className={`${hideOnSmallScreen && "hidden md:block"}`}>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href="http://www.linkedin.com/in/vibcon-ivri"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
              src={icons.linkedin_icon}
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            /> */}
            <FaLinkedinIn
              className={`w-6 h-6 hover:scale-110 transition-all duration-200 ${iconColor} hover:text-[var(--color-accent)]`}
            />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Vibcon2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              className={`w-6 h-6 hover:scale-110 transition-all duration-200 ${iconColor} hover:text-[var(--color-accent)]`}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61579149309685"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className={`w-6 h-6 hover:scale-110 transition-all duration-200 ${iconColor} hover:text-[var(--color-accent)]`}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/vibcon2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className={`w-6 h-6 hover:scale-110 transition-all duration-200 ${iconColor} hover:text-[var(--color-accent)]`}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
