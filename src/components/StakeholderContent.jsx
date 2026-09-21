import ImageGallery from './ImageGallery';
import Observations from './Observations';

export default function StakeholderContent({ stakeholder, isActive }) {
  return (
    <article className={`stakeholder-view ${isActive ? 'active' : ''}`} aria-hidden={!isActive}>
      <div className="content-text">
        <div className="location-label">
          {stakeholder.location} &mdash; Fieldwork Visit
        </div>
        
        <h1 className="stakeholder-heading">
          {stakeholder.heading}
        </h1>
        
        <p className="stakeholder-description">
          {stakeholder.description}
        </p>

        <Observations items={stakeholder.observations} />
      </div>

      <div className="content-photo">
        <ImageGallery images={stakeholder.images} />
      </div>
    </article>
  );
}
