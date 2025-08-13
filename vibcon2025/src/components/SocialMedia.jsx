import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SocialMedia({ hideOnSmallScreen = false, iconColor = "white" }) {
  return (
    <div className={hideOnSmallScreen && "hidden md:block"}>
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.linkedin.com/company/vibcon2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
                    src={icons.linkedin_icon}
                    alt="LinkedIn"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                  /> */}
            <FaFacebook
              color={iconColor}
              className="w-6 h-6 hover:scale-110 transition-all duration-200"
            />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/vibcon2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              color={iconColor}
              className="w-6 h-6 hover:scale-110 transition-all duration-200"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
