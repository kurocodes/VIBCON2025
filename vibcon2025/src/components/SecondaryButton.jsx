export default function SecondaryButton({ action }) {
  return (
    <button
      className="px-6 py-2 rounded-md text-[16px] text-white font-medium border-2 border-[var(--color-text)] hover:border-transparent hover:bg-[var(--color-primary)] transition-colors cursor-pointer"
      onClick={action}
    >
      <span>MORE DETAILS</span>
    </button>
  );
}
