import Hero from "../components/Hero";
import { images } from "../assets/assets";
import PrimaryButton from "../components/PrimaryButton";
import { useGeneralContext } from "../context/genrealContext";
import CTASection from "../components/CTASection";

export default function Home() {
  const { navigate } = useGeneralContext();

  return (
    <div className="">
      <Hero height="100vh" title="XXX Annual Convention" />
      <div className="px-4 sm:px-10 lg:px-30 pb-20">
        {/* Welcome intro paragraph */}
        <div className="py-20 xl:px-10 flex max-md:flex-col gap-10 md:gap-20 justify-between items-center">
          <div className="min-w-80 xl:min-w-120 h-80 xl:h-120 rounded-full overflow-hidden bg-[var(--color-tertiary)]/30 p-4">
            <img
              src={images.pexels_conference_image}
              alt="conference_image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="space-y-4 w-fit max-md:text-center">
            <h2 className="text-xl font-bold">
              Welcome to{" "}
              <span className="text-[var(--color-accent)]">VIBCON 2025</span>
            </h2>
            <p className="">{introParagraph}</p>

            <PrimaryButton
              label="ABOUT CONFERENCE"
              action={() => navigate("/about")}
              style="w-fit px-6 bg-[var(--color-primary)] hover:bg-[var(--color-tertiary)]"
            />
          </div>
        </div>

        <div className="space-y-10">
          {/* Conference Highlights Section */}
          <CTASection
            heading="Why You Shouldn't Miss This Event"
            image={images.mukteshwar_mother_campus}
            listTitle={
              <>
                <span className="text-[var(--color-accent)]">VIBCON 2025</span>{" "}
                Will Provide:
              </>
            }
            listItems={conferenceHightlights}
            btnLabel="REGISTER FOR CONFERENCE"
            btnAction={() => navigate("/registration")}
          />

          {/* Abstract Submission CTA Section */}
          <CTASection
            heading="Abstract Submission Open!"
            image={images.pexels_team_image}
            listTitle={<>Share your <span className="text-[var(--color-accent)]">Research with the World!</span></>}
            listItems={abstractList}
            btnLabel="SUBMIT ABSTRACT"
            btnAction={() => navigate("/abstract")}
          />

          {/* Travel CTA Section */}
          <CTASection
            heading="Explore Mukteshwar & Plan Your Travel"
            image={images.mukteshwar_view_6}
            listTitle={<>Make Your <span className="text-[var(--color-accent)]">Conference Trip Unforgettable!</span></>}
            listItems={travelList}
            btnLabel="PLAN YOUR TRAVEL"
            btnAction={() => navigate("/travel")}
          />
        </div>
      </div>
    </div>
  );
}

const introParagraph = (
  <>
    <b>Welcome to VIBCON 2025</b> — an international conference hosted by <b>ICAR-IVRI
    Mukteswar</b> in collaboration with <b>ISVIB</b>, dedicated to advancing veterinary
    immunology and biotechnology under the theme <span className="text-[var(--color-accent)]">“Envisioning Livestock
    Production and Protection under the One Health Landscape.”</span> Set against the
    tranquil backdrop of the Kumaon Himalayas, this event offers a dynamic
    platform for scientists, researchers, and professionals to exchange
    cutting-edge ideas and solutions shaping the future of animal health and
    productivity.
  </>
);

const conferenceHightlights = [
  "✔️ Keynote Presentations by Internationally Renowned Experts",
  "✔️ Invited Talks by Leading Researchers",
  "✔️ Oral and Poster Presentations of Original Research",
  "✔️ Networking Opportunities with Peers and Potential Collaborators",
  "✔️ Exhibition of the Latest Technologies and Products",
];

const abstractList = [
  "💡 Easy abstract submission – no login required",
  "💡 Fields include Name, Affiliation, Email, Title, Text/Upload",
  "💡 Choose category & presentation type (Oral/Poster)",
  "💡 Confirmation message shown after successful submission",
  "💡 Submit directly to our conference email",
];

const travelList = [
  "✔️ Discover Nanda Devi, Chauli ki Jali, sacred temples, and more",
  "✔️ Scenic forest walks and serene mountain views",
  "✔️ Get tips on accommodation & local travel routes",
  "✔️ Weather guidance and a handy location map included",
  "✔️ Perfect destination for academic + leisure escape",
];
