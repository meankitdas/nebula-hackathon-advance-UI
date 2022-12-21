export default function ThemeBox({ name }) {
  const middle = name.length / 2;
  const firstHalf = name.slice(0, middle);
  return (
    <div className="w-32">
      <div className="">{name}</div>
    </div>
  );
}
