import {
  nearbyAttractions,
  travelHighlights,
  weatherInfo,
} from "../assets/assets";

export default function Travel() {
  return (
    <div className="pt-20">
      <div className="px-4 sm:px-10 lg:px-30">
        {/* Travel Highlights */}
        <div className="py-10">
          <h2 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
            Tourism Highlights
          </h2>
          <div className="flex max-md:flex-col gap-5 mt-10 bg-[var(--color-tertiary)]/30 p-4 rounded-lg">
            {travelHighlights.map((highlight, index) => (
              <div
                className="group relative h-100 flex-1 hover:flex-4 shadow-lg rounded-lg overflow-hidden transition-all duration-300"
                key={index}
              >
                <img
                  src={highlight.image}
                  alt={highlight.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 w-full h-full bg-[var(--color-primary)]/60 text-[var(--color-text)] place-content-center flex flex-col items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl font-bold text-center text-[var(--color-accent)]">
                    {highlight.name}
                  </span>
                  <p className="text-center max-sm:px-4 px-2">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attraction */}
        <div className="pb-10">
          <h2 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
            Nearby Attractions
          </h2>
          <div className="flex max-md:flex-col gap-5 mt-10 bg-[var(--color-tertiary)]/30 p-4 rounded-lg">
            {nearbyAttractions.map((highlight, index) => (
              <div
                className="group relative flex-1 hover:flex-5 h-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300"
                key={index}
              >
                <img
                  src={highlight.image}
                  alt={highlight.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 w-full h-full bg-[var(--color-primary)]/60 text-[var(--color-text)] place-content-center flex flex-col items-center justify-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl font-bold text-center max-xs:px-2 px-1 text-[var(--color-accent)]">
                    {highlight.name}
                  </span>
                  <p className="text-center max-sm:px-10 px-2">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Info */}
        <div className="pb-10">
          <h2 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
            Weather Info
          </h2>
          <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5 mt-10 rounded-lg">
            {weatherInfo.map((info, index) => (
              <div
                className="group relative flex-1 shadow-lg rounded-lg overflow-hidden bg-[var(--color-tertiary)]/30 p-5 text-center hover:translate-y-1 hover:translate-x-1 hover:scale-105 transition-transform duration-300"
                key={index}
              >
                <span className="text-3xl">{info.icon}</span>
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <span className="text-sm opacity-75">{info.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Info */}
        <div className="pb-10">
          <h2 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
            Travel Info
          </h2>
          <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5 mt-10 rounded-lg">
            <div className="shadow-lg rounded-lg bg-[var(--color-tertiary)]/30 p-5 text-center hover:translate-y-1 hover:translate-x-1 hover:scale-105 transition-transform duration-300">
              <span className="text-3xl">✈️</span>
              <h3 className="text-xl font-semibold">By Air</h3>
              <div className="text-sm opacity-75 flex flex-col items-center">
                <span>
                  <b>Pantnagar Airport (PGH)</b> – ~100 km
                </span>

                <span>
                  <b>Bareilly Airport</b> – ~174 km
                </span>
                <span>Taxis available from both airports.</span>
              </div>
            </div>
            <div className="shadow-lg rounded-lg bg-[var(--color-tertiary)]/30 p-5 text-center hover:translate-y-1 hover:translate-x-1 hover:scale-105 transition-transform duration-300">
              <span className="text-3xl">🚉</span>
              <h3 className="text-xl font-semibold">By Rail</h3>
              <div className="text-sm opacity-75 flex flex-col items-center">
                <span>
                  <b>Nearest station: Kathgodam (KGM)</b> – 69 km
                </span>
                <span>Taxis and shared cabs easily available.</span>
              </div>
            </div>
            <div className="shadow-lg rounded-lg bg-[var(--color-tertiary)]/30 p-5 text-center hover:translate-y-1 hover:translate-x-1 hover:scale-105 transition-transform duration-300">
              <span className="text-3xl">🚗</span>
              <h3 className="text-xl font-semibold">By Road</h3>
              <div className="text-sm opacity-75 flex flex-col items-center">
                <span>
                  Mukteshwar is well-connected by road from{" "}
                  <b>Kathgodam and Haldwani</b>.
                </span>
                <span>
                  Smooth drive through hilly terrain with scenic views.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accomodation and More details */}
        <div className="w-full mb-10 border-s-4 border-[var(--color-primary)] p-5 bg-[var(--color-tertiary)]/30 rounded-lg">
          <p>
            Mukteshwar offers a variety of accommodation options — from guest
            houses and eco-lodges to budget-friendly hotels. Delegates are
            advised to book early, as limited on-campus rooms at IVRI Mukteshwar
            may be available (updates will be shared via email or official
            website).
          </p>
          <div>
          <span className="text-[var(--color-primary)] font-bold text-lg">For More Details: </span>
          <a
            href="https://uttarakhandtourism.gov.in/destination/nainital"
            target="_blank"
            className="hover:underline whitespace-normal"
          >
            Visit Uttarakhand Tourism
          </a>
          </div>
        </div>
      </div>

      {/* Map (embeded from google maps) */}
      <div className="w-full h-[80vh] overflow-hidden shadow-lg">
        <iframe
          title="ICAR-IVRI Mukteswar Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.729497679635!2d79.64770937557193!3d29.472606243687735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b61e61a3fca9%3A0x89163b79f3fd7e03!2sICAR-IVRI%20Mukteswar%20Campus!5e0!3m2!1sen!2sin!4v1692288543684!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
