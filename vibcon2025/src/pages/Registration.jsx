import PrimaryButton from "../components/PrimaryButton";
import { registrationFees } from "../utils/data";
import { IoIosArrowDown } from "react-icons/io";

export default function Registration() {
  return (
    <div className="pt-30 pb-10">
      <div className="px-4 sm:px-10 lg:px-30">
        <div className="mb-10 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
              Register online for VIBCON 2025
            </h2>
            <span className="text-4xl text-[var(--color-secondary)] bounceY mt-2">
              <IoIosArrowDown />
            </span>
          </div>
          {/* Go to register form */}
          <PrimaryButton
            label="Register Now"
            action={() =>
              window.open(
                "https://docs.google.com/forms/d/10tcJXBJ8VjWJylywuE-UvCerqQZ0XKhl5lfAQY0SFF8/viewform?pli=1&pli=1&edit_requested=true",
                "_blank"
              )
            }
            style={
              "w-fit px-6 bg-[var(--color-primary)] hover:bg-[var(--color-tertiary)] hover:text-[var(--color-secondary)]"
            }
          />
        </div>

        {/* Registration fee structure table */}
        <div className="space-y-8">
          <h2 className="text-[var(--color-primary)] text-2xl font-bold text-center">
            Registration Fee Structure
          </h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-[var(--color-text)]">
              <thead className="text-sm text-[var(--color-text)] uppercase bg-[var(--color-primary)]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Early Bird (upto 30.09.2025)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Standard (upto 15.10.2025)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Spot Registration
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-primary)] border-b">
                {registrationFees.map((fee, index) => (
                  <tr
                    key={index}
                    className="bg-[var(--color-tertiary)]/30 border-t"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      {fee.category}
                    </th>
                    <td className="px-6 py-4">{fee.earlyBird}</td>
                    <td className="px-6 py-4">{fee.standard}</td>
                    <td className="px-6 py-4">{fee.spot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="text-xs text-[var(--color-secondary)]">
              *Without conference kit
            </span>
          </div>
        </div>

        {/* Payment details */}
        <div className="mt-10 space-y-8">
          <h2 className="text-[var(--color-primary)] text-2xl font-bold text-center">
            Payment Instructions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {/*  */}
            <div className="bg-[var(--color-tertiary)]/30 px-4 py-3 rounded-md text-center place-content-center">
              During registration, please upload proof of payment confirmation.
            </div>

            {/* fee details */}
            <div className="bg-[var(--color-tertiary)]/30 px-4 py-3 rounded-md text-center place-content-center">
              <span className="text-xl text-[var(--color-secondary)] font-extrabold">
                Registration fee includes:
              </span>
              <ul>
                <li>Access to all scientific sessions,</li>
                <li>Conference kit,</li>
                <li>Tea/coffee breaks, lunches, and dinner</li>
              </ul>
            </div>

            {/* Bank details */}
            <div className="bg-[var(--color-tertiary)]/30 px-4 py-3 rounded-md place-content-center max-md:col-span-2 max-sm:col-span-1">
              <span className="text-[var(--color-secondary)] inline-block w-full text-center">
                <b>Payment through NEFT:</b>
              </span>
              <br />
              <span className="text-[var(--color-secondary)] inline-block w-full text-center">
                <b>Bank Details:</b>
              </span>
              <div className="place-items-center">
                <ul className="text-sm">
                  <li>
                    <b>Name:</b> Organising Secretary, VIBCON 2019
                  </li>
                  <li>
                    <b>Bank:</b> HDFC, Priyadarshini Nagar, Bareilly
                  </li>
                  <li>
                    <b>Account Number:</b> 50100322363522
                  </li>
                  <li>
                    <b>IFSC:</b> HDFC0000860
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
