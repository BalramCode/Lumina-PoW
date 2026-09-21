export default function Observations({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="observations">
      <h3 className="observations-title">Key Observations</h3>
      <ul className="observation-list">
        {items.map((obs, idx) => (
          <li key={idx} className="observation-item">
            <span className="observation-icon" aria-hidden="true">↗</span>
            <span>{obs}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
