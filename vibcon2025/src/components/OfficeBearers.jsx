import { officeBearers } from "../utils/peoples";
import OrganizerCard from "./OrganizerCard";

export default function OfficeBearers() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[var(--color-secondary)] text-center lg:pb-2 lg:border-b-2 lg:border-[var(--color-secondary)]">
        ISVIB Office-Bearers
      </h2>

      {/* Large Screen - Tree Structure */}
      <div className="hidden lg:block space-y-2 mt-5">
        <div className="place-items-center">
          <OrganizerCard organizer={officeBearers[0]} />
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 ">
            <OrganizerCard organizer={officeBearers[1]} />
            <OrganizerCard organizer={officeBearers[2]} />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 ">
            <OrganizerCard organizer={officeBearers[3]} />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 ">
            <OrganizerCard organizer={officeBearers[4]} />
            <OrganizerCard organizer={officeBearers[5]} />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2">
            <OrganizerCard organizer={officeBearers[6]} />
          </div>
        </div>
      </div>

      {/* Small Screen - List Structure */}
      <div className="lg:hidden space-y-4 mt-5">
        <div className="space-y-2">
          <h3 className="flex items-center gap-4"><span className="text-xl font-bold">President</span> <div className="h-[1px] grow bg-black"></div></h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard organizer={officeBearers[0]} smallScreen={true} />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-4"><span className="text-xl font-bold">Vice-President</span> <div className="h-[1px] grow bg-black"></div></h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard organizer={officeBearers[1]} smallScreen={true} />
            <OrganizerCard organizer={officeBearers[2]} smallScreen={true} />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-4"><span className="text-xl font-bold">Secretary</span> <div className="h-[1px] grow bg-black"></div></h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard organizer={officeBearers[3]} smallScreen={true} />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-4"><span className="text-xl font-bold">Joint-Secretary</span> <div className="h-[1px] grow bg-black"></div></h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard organizer={officeBearers[4]} smallScreen={true} />
            <OrganizerCard organizer={officeBearers[5]} smallScreen={true} />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="flex items-center gap-4"><span className="text-xl font-bold">Treasurer</span> <div className="h-[1px] grow bg-black"></div></h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard organizer={officeBearers[6]} smallScreen={true} />
          </div>
        </div>
      </div>

      {/* <div className="grid max-xs:grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-5">
          {organizingCommitte.map((organizer, index) => (
            <OrganizerCard key={index} organizer={organizer} />
          ))}
        </div> */}
    </div>
  );
}
