export default function PrimaryButton({ label ,action, style, Icon }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-[16px] text-white font-medium transition-colors cursor-pointer ${style}`}
      onClick={action}
    >
      {Icon && <Icon />}
      <span>{ label }</span>
    </button>
  );
}
