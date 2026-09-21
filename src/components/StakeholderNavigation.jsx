export default function StakeholderNavigation({ stakeholders, activeId, onSelect }) {
  return (
    <nav className="navigation">
      {stakeholders.map(stakeholder => (
        <button
          key={stakeholder.id}
          className={`nav-item ${activeId === stakeholder.id ? 'active' : ''}`}
          onClick={() => onSelect(stakeholder.id)}
          aria-current={activeId === stakeholder.id ? 'page' : undefined}
        >
          {stakeholder.title}
        </button>
      ))}
    </nav>
  );
}
