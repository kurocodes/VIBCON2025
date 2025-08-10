import Hero from "../components/Hero";
import { FaCloudDownloadAlt } from "react-icons/fa";
import PrimaryButton from "../components/PrimaryButton";
import { aboutLists, organizingCommitte } from "../utils/data";
import { icons, images } from "../assets/assets";

export default function About() {
  return (
    <div>
      <Hero
        height="65vh"
        compact={true}
        marginTop="mt-20"
        title="VIBCON 2025"
        image={images.preview_image_2}
      />

      <div className="px-4 sm:px-10 lg:px-30 py-20">
        {/* Logos - ICAR, ISVIB, IVRI */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <img
            src={images.icar_logo}
            alt=""
            className="w-16 xs:w-21 sm:w-30 h-full"
          />
          <img
            src={images.isvib_logo}
            alt=""
            className="w-35 xs:w-43 sm:w-55 h-full"
          />
          <img
            src={images.ivri_logo}
            alt=""
            className="w-17 xs:w-23 sm:w-35 h-full"
          />
        </div>

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

        {/* About section image gallery */}
        <div className="py-10">
          <div className="flex max-md:flex-col gap-5 mt-10 bg-[var(--color-tertiary)]/30 p-4 rounded-lg">
            <div className="group relative h-100 flex-1 hover:flex-4 shadow-lg rounded-lg overflow-hidden transition-all duration-500">
              <img
                src={images.preview_image_1}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative h-100 flex-1 hover:flex-4 shadow-lg rounded-lg overflow-hidden transition-all duration-300">
              <img
                src={images.preview_image_2}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative h-100 flex-1 hover:flex-4 shadow-lg rounded-lg overflow-hidden transition-all duration-300">
              <img
                src={images.preview_image_3}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative h-100 flex-1 hover:flex-4 shadow-lg rounded-lg overflow-hidden transition-all duration-300">
              <img
                src={images.preview_image_4}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Conference Objectives */}
        <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-5">
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
      <div className=" flex flex-col items-center">
        <h2 className="text-[var(--color-secondary)] text-3xl font-bold">
          {title}
        </h2>
      </div>
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

// OrganizerCard Component - Displaying each organizer's details
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
];
