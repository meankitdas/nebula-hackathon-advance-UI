export default function ThemeBox({ name }) {
  const middle = name.length / 2;
  
  return (
    <div className="w-32">
      <div className="">{name}</div>
    </div>
  );
}
