export default function ThemeBox({ name }) {
  const middle = name.length / 2;
  const firstHalf = name.slice(0, middle);
  const secondHalf = name.slice(middle, name.length);

  return (
    <div className="w-32">
      <div className="">{firstHalf}</div>
      <div></div>
    </div>
  );
}
