import { awards } from "../utils/data";

export default function Events() {
  return (
    <div className="px-4 sm:px-10 lg:px-30 pb-10 pt-30 space-y-12">
      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
          Important Dates
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {dates.map((date, index) => (
            <div
              key={index}
              className="p-4 bg-[var(--color-secondary)]/20 rounded shadow h-20 flex items-center justify-center"
            >
              <h3 className="text-center">{date}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Scientific Sessions */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
          Scientific Sessions
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {scientificSessions.map((session, index) => (
            <div
              key={index}
              className="p-4 bg-[var(--color-secondary)]/20 rounded shadow h-20 flex items-center justify-center"
            >
              <h3 className="font-semibold text-center">{session.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
          Awards & Recognitions
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-4 bg-[var(--color-secondary)]/20 rounded shadow h-20 flex items-center justify-center"
            >
              <h3 className="font-semibold text-center">{award}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
          Themes
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="p-4 bg-[var(--color-secondary)]/20 rounded shadow h-20 flex items-center justify-center"
            >
              <h3 className="font-semibold text-center">{theme}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const scientificSessions = [
  { title: "Dr. Richard P. Masillamony Oration Award Lecture" },
  { title: "One Health Frontiers: Combating Emerging Zoonoses" },
  {
    title:
      "One Health Approach to Antimicrobial Resistance, Microbiome, Food Safety, and Biosecurity",
  },
  { title: "Omics and Innovation in Vaccines, Diagnostics, and Therapeutics" },
  { title: "Genomics, Disease Surveillance, and Epidemiology" },
  {
    title:
      "Genome Editing and Data-Driven Smart Livestock Farming and Production",
  },
  { title: "Frontiers in Translational Biotechnology" },
  { title: "ISVIB Award Session" },
];

const dates = [
  <>
    <b>Abstract Submission Opens</b>: July 31, 2025
  </>,
  <>
    <b>Abstract Submission Deadline</b>: September 30, 2025
  </>,
  <>
    <b>Notification of Acceptance</b>: October 07, 2025
  </>,
  <>
    <b>Early Bird Registration Deadline</b>: September 30, 2025
  </>,
  <>
    <b>Standard Registration Deadline</b>: October 15, 2025
  </>,
];

const themes = [
  "Cutting-edge research in veterinary immunology & biotechnology",
  "One Health approach to global health challenges",
  "Innovations in vaccines, diagnostics, and therapeutics",
  "Sustainable livestock production through technology,",
];
