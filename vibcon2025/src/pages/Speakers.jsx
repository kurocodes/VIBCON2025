import SpeakerCard from "../components/SpeakerCard";
import { speakersList } from "../utils/speakers";

export default function Speakers() {
  return (
    <div className="px-4 sm:px-10 lg:px-30 pt-30 mb-20">
      <h2 className="text-3xl font-bold text-[var(--color-secondary)] text-center lg:pb-2 lg:border-b-2 lg:border-[var(--color-secondary)]">
        Speakers
      </h2>

      <div className="flex flex-wrap justify-around gap-6 mt-6">
        {speakersList.map((speaker) => (
            <SpeakerCard speaker={speaker} />
        ))}
      </div>
    </div>
  );
}
