import { useState } from 'react';
import './index.css';
import { stakeholders } from './data/stakeholders';
import StakeholderNavigation from './components/StakeholderNavigation';
import StakeholderContent from './components/StakeholderContent';

function App() {
  const [activeId, setActiveId] = useState(stakeholders[0].id);

  return (
    <main className="app-container">
      <header className="app-header">
        {/* <div className="eyebrow">Project Fieldwork — Stakeholder Index</div> */}
        <StakeholderNavigation
          stakeholders={stakeholders}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </header>

      <section className="content-area">
        {stakeholders.map(stakeholder => (
          <StakeholderContent
            key={stakeholder.id}
            stakeholder={stakeholder}
            isActive={stakeholder.id === activeId}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
