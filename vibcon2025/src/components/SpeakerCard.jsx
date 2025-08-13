export default function SpeakerCard({ speaker }) {
  return (
    <div className="border border-[var(--color-secondary)] rounded-md p-4 space-y-2 w-60 h-full flex-shrink-0">
      <div className="w-full rounded-md overflow-hidden bg-[var(--color-secondary)]">
        <img
          src={speaker.image || "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg"}
          alt={speaker.name}
          className="h-56 w-full object-cover object-top"
        />
      </div>
      <span className="text-md font-semibold text-[var(--color-accent)]">{speaker.name}</span>
    </div>
  );
}
