import { sponsersList } from "../utils/sponsers";

export default function Sponsers() {
  return (
    <div className="px-4 sm:px-10 lg:px-30 pt-30 mb-20">
      <h2 className="text-3xl font-bold text-[var(--color-secondary)] text-center lg:pb-2 lg:border-b-2 lg:border-[var(--color-secondary)]">
        Our Sponsors
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-10 place-items-center">
        {sponsersList.map((sponsor, index) => (
          <div
            key={index}
            className="w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-[var(--color-secondary)]/10 rounded-xl shadow flex flex-col items-center justify-center p-3 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-24 flex items-center justify-center overflow-hidden">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-[var(--color-secondary)] leading-tight">
              {sponsor.name.replace(/^\d+\.\s*/, "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
