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

        <div className="w-full mt-10 border-s-4 border-[var(--color-primary)] p-5 bg-[var(--color-secondary)]/20 rounded-lg">
          <h4 className="text-[var(--color-secondary)] text-xl font-bold">
            Conditions of the Award
          </h4>
          <p>
            Soft copy of applications for the awards (except for ISVIB fellow)
            shall be sent to the Secretary, ISVIB at manoulagai@gmail.com
            strictly before 30th September, 2025. The contestants' must be a
            life member of ISVIB before 30th September 2025. Membership
            application form, detailed guidelines for awards and application
            proforma for awards can be downloaded from the society website:{" "}
            <a
              href="https://www.isvib.org/"
              target="_blank"
              className="text-[var(--color-primary)] hover:underline"
            >
              www.isvib.org
            </a>
          </p>
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

      {/* Presentation Guidelines */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
          Presentation Guidelines for Oral Presenters
        </h2>

        {/* Overview */}
        <div className="space-y-3 bg-[var(--color-secondary)]/20 p-5 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Total Time:</b> 5 minutes for presentation (strictly enforced)
              + 2 minutes for discussion.
            </li>
            <li>
              <b>Slide Design:</b> Use a light background, high-contrast text,
              and ensure readability from a distance. Avoid clutter—space
              elements optimally.
            </li>
          </ul>
        </div>

        {/* Slide Structure */}
        <div className="mt-8 border-s-4 border-[var(--color-primary)] p-3 bg-[var(--color-secondary)]/20 rounded-lg">
          <h3 className="text-xl font-bold text-[var(--color-accent)]">
            Slide Structure
          </h3>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-6">
          <div className="bg-[var(--color-secondary)]/20 p-5 rounded-lg space-y-2">
            <h4 className="font-semibold text-[var(--color-primary)]">
              1. Title Slide (1 slide)
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Presentation title (concise and informative)</li>
              <li>Presenter’s name and institutional affiliation</li>
              <li>Co-author names and affiliations</li>
            </ul>
          </div>

          <div className="bg-[var(--color-secondary)]/20 p-5 rounded-lg space-y-2">
            <h4 className="font-semibold text-[var(--color-primary)]">
              2. Introduction (1–2 slides)
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Set the context: briefly outline the background and significance
                of the work
              </li>
              <li>
                Clearly state the purpose, research question, or objectives
              </li>
              <li>Keep it focused—avoid excessive literature review</li>
            </ul>
          </div>

          <div className="bg-[var(--color-secondary)]/20 p-5 rounded-lg space-y-2">
            <h4 className="font-semibold text-[var(--color-primary)]">
              3. Body (5–6 slides)
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <b>Methodology:</b> Summarize key methods, tools, or
                experimental design concisely
              </li>
              <li>
                <b>Findings/Results:</b> Present important data using clear
                visuals (figures, graphs, or tables)
              </li>
              <li>
                <b>Discussion:</b> Highlight interpretation, implications, and
                novelty of findings
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-secondary)]/20 p-5 rounded-lg space-y-2">
            <h4 className="font-semibold text-[var(--color-primary)]">
              4. Conclusion (1–2 slides)
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Summarize main findings in 2–3 bullet points</li>
              <li>State key takeaways or broader impact</li>
              <li>Mention future directions or applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Poster Guidelines */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
          Poster Guidelines
        </h2>

        <div className="grid sm:grid-cols-7 auto-rows-max gap-6">
          {/* General */}
          <div className="sm:col-span-4 space-y-3 bg-[var(--color-secondary)]/20 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              General
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Only registered delegates are eligible to present posters.
              </li>
              <li>
                Posters will be displayed in the designated poster area during
                the conference, and presenters must be available during the
                scheduled evaluation time.
              </li>
              <li>
                Posters must be mounted before the start of the scheduled
                session and removed after judging.
              </li>
            </ul>
          </div>

          {/* Poster Dimensions */}
          <div className="sm:col-span-3 p-5 bg-[var(--color-secondary)]/20 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              Poster Dimensions
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Orientation:</b> Portrait (vertical)
              </li>
              <li>
                <b>Poster size:</b> 3 ft (width) × 4 ft (height)
              </li>
              <li>Posters exceeding the specified size may be disqualified.</li>
              <li>
                Mounting materials (pins/tape) will be provided at the venue.
              </li>
            </ul>
          </div>

          {/* Design Specifications */}
          <div className="sm:col-span-3 p-5 bg-[var(--color-secondary)]/20 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              Design Specifications
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Font:</b> Use readable fonts such as Arial, Calibri, or Times
                New Roman.
              </li>
              <li>
                <b>Text size:</b> Title ≈ 70 pt Headings ≈ 40 pt Body text ≥ 24
                pt.
              </li>
              <li>
                <b>Colour scheme:</b> Light background with dark text for
                contrast.
              </li>
              <li>
                <b>Images & Graphs:</b> Minimum 300 dpi resolution. Label all
                axes, figures, and tables.
              </li>
              <li>
                <b>Language:</b> English only. Proof-read for grammar and
                spelling.
              </li>
              <li>
                <b>Avoid:</b> Overcrowded text, flashy colours.
              </li>
            </ul>
          </div>

          {/* Poster Format & Layout */}
          <div className="sm:col-span-4 p-5 bg-[var(--color-secondary)]/20 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              Poster Format & Layout
            </h3>
            <p>Each poster should clearly display the following sections:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Title:</b> Concise and identical to submitted abstract. Font
                size ≈ 70 pt (visible from ~2 m distance).
              </li>
              <li>
                <b>Authors & Affiliations:</b> Full names, institutional
                addresses, presenting author underlined.
              </li>
              <li>
                <b>Introduction / Background:</b> Briefly describe the problem
                and rationale of the study.
              </li>
              <li>
                <b>Objectives / Hypothesis:</b> State clearly and concisely.
              </li>
              <li>
                <b>Materials & Methods:</b> Present key methodology details
                using bullets or flow diagrams.
              </li>
              <li>
                <b>Results:</b> Display key findings using figures, tables, or
                graphs—avoid dense text.
              </li>
              <li>
                <b>Discussion & Conclusion:</b> Summarize major outcomes and
                their significance.
              </li>
              <li>
                <b>References / Acknowledgements (if applicable):</b> Keep
                concise and relevant (max 5).
              </li>
            </ul>
          </div>
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
