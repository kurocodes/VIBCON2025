import Hero from "../components/Hero";
import { FaCloudDownloadAlt } from "react-icons/fa";
import PrimaryButton from "../components/PrimaryButton";
import {
  aboutLists,
  organizingCommitte,
} from "../utils/data";

export default function About() {
  return (
    <div>
      <Hero
        height="65vh"
        compact={true}
        marginTop="mt-20"
        title="VIBCON 2025"
      />

      <div className="px-4 sm:px-10 lg:px-30 py-20">
        {/* About VIBCON and ISVIB */}
        <div className="space-y-10 text-center">
          {aboutParagraphs.map((paragraph, index) => (
            <AboutText
              key={index}
              title={paragraph.title}
              about={paragraph.about}
            />
          ))}
        </div>

        {/* Conference Objectives */}
        <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-5 mt-20">
          {aboutLists.map((list, index) => (
            <AboutList title={list.title} list={list.list} key={index} />
          ))}
        </div>

        {/* Organizers */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
            Organizing Committee
          </h2>

          <div className="grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
            {organizingCommitte.map((organizer, index) => (
              <OrganizerCard key={index} organizer={organizer} />
            ))}
          </div>
        </div>

        {/* Download Brochure */}
        <div className="w-full flex justify-center mt-20">
          <PrimaryButton
            label="Download Brochure"
            action={() => window.open("/src/vibcon_brochure.pdf", "_blank")}
            style="w-fit px-6 bg-[var(--color-primary)] hover:bg-[var(--color-accent))] flex items-center gap-4"
            Icon={FaCloudDownloadAlt}
          />
        </div>
      </div>
    </div>
  );
}

// AboutText Component - About VIBCON and ISVIB
function AboutText({ title, about }) {
  return (
    <div className="space-y-2">
      <h2 className="text-[var(--color-secondary)] text-3xl font-bold">
        {title}
      </h2>
      <p>{about}</p>
    </div>
  );
}

// List of conference highlights, scientific sessions, and awards
function AboutList({ title, list, index }) {
  return (
    <div key={index} className="rounded-md px-2 py-4 space-y-4">
      <h3 className="text-xl text-[var(--color-accent)] text-center font-semibold">
        {title}
      </h3>
      <ul className="space-y-2 text-[var(--color-text)] text-center">
        {list.map((item, index) => (
          <li
            key={index}
            className="bg-[var(--color-secondary)] px-2 py-1 rounded-md h-15 max-xl:h-25 max-lg:h-15 flex items-center justify-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrganizerCard({ organizer }) {
  return (
    <div className="border border-[var(--color-secondary)] rounded-md p-4 space-y-2">
      <div className="w-full rounded-md overflow-hidden bg-[var(--color-secondary)]"></div>
      <span className="text-lg font-semibold">{organizer.name}</span>
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{organizer.position}</span>
        <span className="text-sm font-semibold opacity-60">
          {organizer.role}
        </span>
      </div>
    </div>
  );
}

export const aboutParagraphs = [
  {
    title: "About VIBCON 2025",
    about: (
      <>
        VIBCON 2025 is the XXX Annual Convention of the Indian Society for
        Veterinary Immunology & Biotechnology (ISVIB), hosted by ICAR-IVRI
        Mukteswar. This premier international conference is themed “Envisioning
        Livestock Production and Protection under the One Health Landscape” and
        is dedicated to advancing veterinary immunology and biotechnology to
        safeguard animal health and productivity. It brings together scientists,
        researchers, academicians, veterinarians, policymakers, and industry
        professionals from across the globe in the serene and picturesque
        Himalayas.
      </>
    ),
  },
  {
    title: "About ISVIB",
    about: (
      <>
        Established in 1990, the Indian Society of Veterinary Immunology and
        Biotechnology (ISVIB) is a scientific society comprising experts in
        microbiology, biotechnology, parasitology, preventive medicine,
        reproduction, and fisheries. The society aims to promote growth in
        veterinary science and improve animal health through gene-based
        technologies, research, and collaboration. ISVIB hosts annual national
        conventions and symposiums to facilitate critical discussions and
        updates in the field.
      </>
    ),
  },
];