import { useEffect, useState } from "react";
import { images, icons } from "../assets/assets";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { useGeneralContext } from "../context/genrealContext";

const IVRI_MUKTESWAR_LOCATION =
  "https://www.google.com/maps/place/IVRI+Campus+Mukteshwar/@29.4723296,79.6475247,18.93z/data=!4m6!3m5!1s0x39a0bd00579c3efb:0x7d41d68ceee15acd!8m2!3d29.4723312!4d79.648013!16s%2Fg%2F11x82xc9gl?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D";

export default function Hero({
  height,
  compact = false,
  marginTop = "mt-30",
  title,
  image,
}) {
  const { navigate } = useGeneralContext();

  const targetDate = new Date("2025-11-06T00:00:00");

  // Function to calculate the time left until the target date
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div
      className="relative flex text-[var(--color-text)] text-center py-5"
      style={{
        backgroundImage: `url(${image || images.mukteshwar_view_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: height || "100vh",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-75 z-0" />

      <div
        className={`relative px-2 xs:px-10 lg:px-30 w-full z-1 flex max-md:flex-col md:justify-between md:items-center max-md:gap-10 max-xs:mx-auto ${marginTop}`}
      >
        {/* Hero Text */}
        <div className="text-start space-y-8">
          <div>
            {!compact && (
              <h1 className="text-xl sm:text-2xl font-medium text-[var(--color-accent)]">
                VIBCON 2025
              </h1>
            )}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold mt-1">
              {title}
            </h2>
            {!compact && (
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
                Indian Society of Veterinary Immunology <br /> & Biotechnology
                (ISVIB)
              </h2>
            )}
          </div>

          {/* Date and Location */}
          <div className="flex max-sm:flex-col gap-2 sm:gap-10">
            <div className="flex items-center gap-2">
              <img src={icons.calendar_icon} alt="calendar icon" />
              <span className="text-[var(--color-accent)] font-bold text-lg">
                6 - 8 November 2025
              </span>
            </div>
            <a href={IVRI_MUKTESWAR_LOCATION} target="_blank" className="flex items-center gap-2 cursor-pointer">
              <img src={icons.location_icon} alt="location icon" />
              <span className="text-[var(--color-accent)] font-bold text-lg">
                Nainital, (Uttarakhand) INDIA
              </span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="space-x-6 max-xs:space-y-2">
            <PrimaryButton
              label="SHOW INTEREST"
              action={() => navigate("/registration")}
              style="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)]"
            />
            <SecondaryButton action={() => navigate("/about")} />
          </div>

          {/* Organizer */}
          <div className="flex items-center gap-4 text-[var(--color-text)]">
            <img src={icons.message_icon} alt="message_icon" className="w-12" />
            <div className="flex flex-col">
              <span className="text-[var(--color-accent)]">
                <b>Chairman:</b> Dr. Yashpal Singh Malik
              </span>
              <span className="text-sm">
                Joint Director, ICAR-IVRI, Mukteswar
              </span>
            </div>
          </div>
        </div>

        {/* Countdown */}
        {!compact && (
          <div className="flex flex-col max-md:flex-row gap-4 items-center text-[var(--color-text)] text-center">
            <div className="bg-[var(--color-overlay)] px-4 py-2 rounded-md w-20 h-20 xs:w-30 xs:h-25 place-items-center place-content-center border border-[#FFFFFF26]">
              <span className="text-2xl xs:text-4xl font-extrabold">
                {timeLeft.days}
              </span>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-[var(--color-overlay)] px-4 py-2 rounded-md w-20 h-20 xs:w-30 xs:h-25 place-items-center place-content-center border border-[#FFFFFF26]">
              <span className="text-2xl xs:text-4xl font-extrabold">
                {timeLeft.hours}
              </span>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-[var(--color-overlay)] px-4 py-2 rounded-md w-20 h-20 xs:w-30 xs:h-25 place-items-center place-content-center border border-[#FFFFFF26]">
              <span className="text-2xl xs:text-4xl font-extrabold">
                {timeLeft.minutes}
              </span>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-[var(--color-overlay)] px-4 py-2 rounded-md w-20 h-20 xs:w-30 xs:h-25 place-items-center place-content-center border border-[#FFFFFF26]">
              <span className="text-2xl xs:text-4xl font-extrabold">
                {timeLeft.seconds}
              </span>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
