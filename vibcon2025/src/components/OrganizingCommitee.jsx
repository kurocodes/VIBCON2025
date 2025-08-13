import { organizingCommitte } from "../utils/data";
import OrganizerCard from "./OrganizerCard";

export default function OrganizingCommitee() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[var(--color-secondary)] text-center lg:pb-2 lg:border-b-2 lg:border-[var(--color-secondary)]">
        Organizing Committee
      </h2>

      {/* Large Scrren - Tree Structure */}
      <div className="max-lg:hidden space-y-2 mt-5">
        <div className="place-items-center">
          <OrganizerCard organizer={organizingCommitte[0]} />
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 ">
            <OrganizerCard organizer={organizingCommitte[1]} />
            <OrganizerCard organizer={organizingCommitte[2]} />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 ">
            <OrganizerCard organizer={organizingCommitte[3]} />
            <OrganizerCard organizer={organizingCommitte[4]} />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 ">
            <OrganizerCard organizer={organizingCommitte[5]} />
            <OrganizerCard organizer={organizingCommitte[6]} />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2 flex-wrap justify-center">
            <OrganizerCard organizer={organizingCommitte[7]} smallWidth />
            <OrganizerCard organizer={organizingCommitte[8]} smallWidth />
            <OrganizerCard organizer={organizingCommitte[9]} smallWidth />
            <OrganizerCard organizer={organizingCommitte[10]} smallWidth />
            <OrganizerCard organizer={organizingCommitte[11]} smallWidth />
          </div>
        </div>
        <div className="place-items-center">
          <div className="flex gap-2">
            <OrganizerCard organizer={organizingCommitte[12]} />
          </div>
        </div>
      </div>

      {/* Small Screen - List Structure */}
      <div className="lg:hidden space-y-4 mt-5">
        {/* Chief Patron */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Chief Patron</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[0]}
              smallScreen={true}
            />
          </div>
        </div>

        {/* Patron */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Patron</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[1]}
              smallScreen={true}
            />
          </div>
        </div>

        {/* Chairman Organizing Commitee */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Chairman Organizing Commitee</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[2]}
              smallScreen={true}
            />
          </div>
        </div>

        {/* Organizing Secretaries */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Organizing Secretaries</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[3]}
              smallScreen={true}
            />
            <OrganizerCard
              organizer={organizingCommitte[4]}
              smallScreen={true}
            />
          </div>
        </div>

        {/* Co-Organizing Secretaries */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Co-Organizing Secretaries</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[5]}
              smallScreen={true}
            />
            <OrganizerCard
              organizer={organizingCommitte[6]}
              smallScreen={true}
            />
          </div>
        </div>

        {/* Joint Organizing Secretaries */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Joint Organizing Secretaries</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[7]}
              smallScreen={true}
            />
            <OrganizerCard
              organizer={organizingCommitte[8]}
              smallScreen={true}
            />
            <OrganizerCard
              organizer={organizingCommitte[9]}
              smallScreen={true}
            />
            <OrganizerCard
              organizer={organizingCommitte[10]}
              smallScreen={true}
            />
            <OrganizerCard
              organizer={organizingCommitte[11]}
              smallScreen={true}
            />
          </div>
        </div>

        {/* Finance Secretaries */}
        <div className="space-y-2">
          <h3 className="flex items-center gap-4">
            <span className="text-xl font-bold">Finance Secretaries</span>{" "}
            <div className="h-[1px] grow bg-black"></div>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
            <OrganizerCard
              organizer={organizingCommitte[12]}
              smallScreen={true}
            />
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
