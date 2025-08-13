export default function OrganizerCard({ organizer, smallWidth = false, smallScreen = false }) {
    
  return (
    <div className={`border border-[var(--color-secondary)] rounded-md p-4 space-y-2 ${smallWidth ? "max-xl:w-60 max-2xl:w-50" : smallScreen ? "" : "w-60"}`}>
      <div className="w-full rounded-md overflow-hidden bg-[var(--color-secondary)]"></div>
      <span className="text-lg font-semibold text-[var(--color-accent)]">{organizer.name}</span>
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{organizer.position}</span>
        {!smallScreen && <span className="text-sm font-semibold opacity-60">
          {organizer.role}
        </span>}
      </div>
    </div>
  );
}
