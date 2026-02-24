export default function Filter({ setSearch }) {
  return (
    <input
      className="input"
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}