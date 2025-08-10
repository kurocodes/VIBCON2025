import PrimaryButton from "./PrimaryButton";

export default function CTASection({
  heading,
  listTitle,
  listItems,
  image,
  btnLabel,
  btnAction,
}) {
  return (
    <div className="bg-[var(--color-tertiary)]/30 px-10 py-5 rounded-md space-y-6">
      <h3 className="text-center text-xl font-medium">{heading}</h3>
      <div className="flex max-md:flex-col items-center gap-10">
        {/* CTA image */}
        <div className="w-full md:w-1/2 h-80 overflow-hidden rounded-md">
          <img
            src={image}
            alt="mukteswar_mother_campus"
            className="w-full h-full rounded-md hover:scale-110 transition duration-500 object-cover"
          />
        </div>

        {/* CTA content */}
        <div className="space-y-4 max-md:text-center">
          <h3 className="text-lg font-semibold">{listTitle}</h3>
          <ul className="space-y-2">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <PrimaryButton
            label={btnLabel}
            action={btnAction}
            style={
              "w-fit px-6 bg-[var(--color-primary)] hover:bg-[var(--color-accent)]"
            }
          />
        </div>
      </div>
    </div>
  );
}
