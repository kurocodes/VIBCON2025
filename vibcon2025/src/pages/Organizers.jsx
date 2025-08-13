import OfficeBearers from "../components/OfficeBearers";
import OrganizingCommitee from "../components/OrganizingCommitee";

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
