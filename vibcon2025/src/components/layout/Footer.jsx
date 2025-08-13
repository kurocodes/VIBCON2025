import { icons, images } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const linkStyle =
  "w-fit hover:text-[var(--color-accent)] hover:max-lg:-translate-y-1 hover:lg:translate-x-2 transition-all duration-300";

export default function Footer() {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-text)] pt-10 text-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-20 px-4 sm:px-10 md:px-30 mb-10">
        <div className="text-start">
          {/* Footer Images */}
          <div className="flex items-center mb-2 bg-white w-fit rounded-md py-2 px-1 gap-4">
            <div className="w-15 h-15 place-content-center place-items-center">
              <img src={images.icar_logo} alt="logo" className="w-10" />
            </div>
            <div className="w-15 h-15 place-content-center">
              <img
                src={images.ivri_signature_logo}
                alt="logo"
                className="w-full h-auto"
              />
            </div>
            <div className="w-15 h-15 bg-white rounded-full place-content-center place-items-center">
              <img
                src={images.isvib_logo}
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-15 h-15 bg-white rounded-full place-content-center place-items-center">
              <img src={images.ivri_logo} alt="logo" className="w-10" />
            </div>
          </div>

          {/* Footer VIBCON paragraph */}
          <p className="text-sm">
            <b>VIBCON 2025</b> is the XXX Annual Convention of{" "}
            <b>
              the Indian Society for Veterinary Immunology & Biotechnology
              (ISVIB)
            </b>
            , hosted at the
            <b>tranquil ICAR-IVRI Mukteswar campus</b>. It brings together
            global experts to explore innovations in animal health under the One
            Health vision.
          </p>
        </div>

        {/* Nav Links */}
        <div className="text-start mt-10">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 max-lg:flex max-lg:flex-wrap gap-4">
            <li className={linkStyle}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={linkStyle}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={linkStyle}>
              <NavLink to="/events">Program & Events</NavLink>
            </li>
            <li className={linkStyle}>
              <NavLink to="/organizers">Organizers</NavLink>
            </li>
            <li className={linkStyle}>
              <NavLink to="/registration">Registration</NavLink>
            </li>
            <li className={linkStyle}>
              <NavLink to="/travel">Travel</NavLink>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="text-start mt-10">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <img src={icons.mail_icon} alt="mail_icon" />
              <span className="text-[var(--color-accent)]">
                isvibcon2025@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={icons.phone_icon} alt="phone_icon" />
              <span className="text-[var(--color-accent)]">05942-286346</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 py-5 max-md:px-4 border-t-2 border-[var(--color-accent)] text-sm font-bold text-[var(--color-text)]/60">
        © Copyright 2025 - ICAR-Indian Veterinary Research Institute, Mukteshwar
        Campus, Uttarakhand, India
      </div>
    </div>
  );
}
