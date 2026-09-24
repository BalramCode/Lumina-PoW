import ImageGallery from './ImageGallery';
import Observations from './Observations';

export default function StakeholderContent({ stakeholder, isActive }) {
  const profiles = stakeholder.profiles || [stakeholder];
  const isCompact = stakeholder.id === 'overview' || stakeholder.id === 'parent';

  return (
    <article className={`stakeholder-view ${isActive ? 'active' : ''}`} aria-hidden={!isActive}>
      {profiles.map((profile, index) => (
        <div key={index} className={`profile-section ${isCompact ? 'compact' : 'full'}`}>
          <div className="content-text">
            <div className="location-label">
              {profile.location} &mdash; Fieldwork Visit
            </div>
            
            <h1 className="stakeholder-heading">
              {profile.heading}
            </h1>
            
            <p className="stakeholder-description">
              {profile.description}
            </p>

            <Observations items={profile.observations} />
          </div>

          <div className="content-photo">
            <ImageGallery images={profile.images} />
          </div>
        </div>
      ))}
    </article>
  );
}
