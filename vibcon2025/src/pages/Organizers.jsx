import OfficeBearers from "../components/OfficeBearers";
import OrganizerCard from "../components/OrganizerCard";
import OrganizingCommitee from "../components/OrganizingCommitee";
import { organizingCommitte } from "../utils/data";

export default function Organizers() {
  return (
    <div className="px-4 sm:px-10 lg:px-30 pt-30 mb-20">
      <div className="space-y-15">
        <OrganizingCommitee />
        <OfficeBearers />
      </div>
    </div>
  );
}
