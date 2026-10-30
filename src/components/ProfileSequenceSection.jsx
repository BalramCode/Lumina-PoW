import { useState, useRef, useEffect } from 'react';
import Observations from './Observations';

export default function ProfileSequenceSection({ stakeholder, isActive }) {
  const items = stakeholder.officials || stakeholder.profiles || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const isBureaucrats = stakeholder.id === 'bureaucrats';
  const defaultSubtitle = isBureaucrats
    ? 'District Administration & Public Health Leadership, Kalahandi'
    : 'Clinical, Developmental & Research Perspectives, Kalahandi';
  const defaultEyebrow = isBureaucrats
    ? 'Government Perspective — Fieldwork Consultation'
    : 'Professional Perspective — Fieldwork Visit';

  // Track active profile on scroll using IntersectionObserver
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isActive, items.length]);

  const scrollToItem = (index) => {
    const targetSection = sectionsRef.current[index];
    if (targetSection && containerRef.current) {
      const topBar = containerRef.current.querySelector('.sequence-top-bar');
      const headerOffset = topBar ? topBar.offsetHeight + 10 : 85;
      const targetTop = targetSection.offsetTop - headerOffset;
      containerRef.current.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });
    }
  };

  const getItemShortName = (item) => {
    if (item.shortTitle) return item.shortTitle;
    if (item.id === 'collector') return 'Collector';
    if (item.id === 'cdo') return 'CDO, Zilla Parishad';
    if (item.id === 'cdmo') return 'CDMO';
    if (item.title) return item.title.split('–')[0].split(',')[0].trim();
    if (item.heading) return item.heading.split(',')[0].split('-')[0].trim();
    return `Profile 0${items.indexOf(item) + 1}`;
  };

  const getItemTitle = (item) => {
    if (item.title) return item.title;
    if (item.heading && item.heading !== 'Potential Perspective on Lumina:') {
      return item.heading.split(',')[0].split('-')[0].trim();
    }
    return item.heading || 'Perspective on Lumina';
  };

  const getItemDesignation = (item) => {
    if (item.designation) return item.designation;
    if (item.heading && item.heading.includes(',')) {
      return item.heading.split(',').slice(1).join(',').trim();
    }
    if (item.heading && item.heading.includes('-')) {
      return item.heading.split('-').slice(1).join('-').trim();
    }
    return null;
  };

  const getItemPerspectiveHeading = (item) => {
    if (item.perspectiveHeading) return item.perspectiveHeading;
    if (item.heading && item.heading === 'Potential Perspective on Lumina:') {
      return item.heading;
    }
    return 'Potential Perspective on Lumina:';
  };

  return (
    <article
      ref={containerRef}
      className={`stakeholder-view sequence-view ${isActive ? 'active' : ''}`}
      aria-hidden={!isActive}
    >
      <div className="sequence-container">
        {/* Sticky Top Header Bar */}
        <header className="sequence-top-bar">
          <div className="sequence-top-info">
            <div className="location-label">
              {stakeholder.eyebrow || defaultEyebrow}
            </div>
            <div className="sequence-title-wrap">
              <h1 className="sequence-main-title">{stakeholder.title}</h1>
              <span className="sequence-title-sep">&mdash;</span>
              <span className="sequence-subtitle">
                {stakeholder.subtitle || defaultSubtitle}
              </span>
            </div>
          </div>

          <nav className="sequence-jump-nav" aria-label="Profile switcher">
            {items.map((item, idx) => (
              <button
                key={item.id || idx}
                type="button"
                className={`sequence-jump-btn ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => scrollToItem(idx)}
                aria-label={`Jump to ${getItemTitle(item)}`}
              >
                <span className="jump-index">0{idx + 1}</span>
                <span className="jump-name">{getItemShortName(item)}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Vertical Sequence of Profiles (One at a time) */}
        <div className="sequence-sections-wrapper">
          {items.map((item, index) => (
            <section
              key={item.id || index}
              id={`profile-section-${item.id || index}`}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="sequence-profile-section"
              data-index={index}
            >
              <div className="sequence-single-card">
                <div className="sequence-card-inner">
                  {/* Left Column: Profile Text & Perspectives */}
                  <div className="sequence-card-text">
                    <div className="sequence-official-meta">
                      <span className="sequence-badge">
                        <span className="sequence-badge-dot"></span>
                        {item.location || 'Professional Perspective'}
                      </span>
                      <span className="sequence-counter">
                        Profile 0{index + 1} / 0{items.length}
                      </span>
                    </div>

                    <div className="sequence-header-group">
                      {item.department && (
                        <div className="sequence-dept-label">{item.department}</div>
                      )}
                      <h2 className="sequence-role-heading">{getItemTitle(item)}</h2>
                      {getItemDesignation(item) && (
                        <div className="sequence-designation-sub">
                          {getItemDesignation(item)}
                        </div>
                      )}
                    </div>

                    <div className="sequence-card-divider" />

                    <div className="sequence-perspective-box">
                      <h3 className="sequence-heading-label">
                        {getItemPerspectiveHeading(item)}
                      </h3>
                      <div className="sequence-description-text">
                        {item.description.split('\n\n').map((para, pIdx) => {
                          const isQuote = para.trim().startsWith('“') || para.trim().startsWith('"');
                          return (
                            <p key={pIdx} className={isQuote ? 'sequence-quote-para' : ''}>
                              {para}
                            </p>
                          );
                        })}
                      </div>
                    </div>

                    {item.observations && item.observations.length > 0 && (
                      <div className="sequence-card-observations">
                        <Observations items={item.observations} />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Enlarged Photograph & Framing */}
                  <div className="sequence-card-photo-panel">
                    <div className="sequence-photo-frame">
                      {item.images && item.images.length > 0 && (
                        <img
                          src={item.images[0]}
                          alt={getItemTitle(item)}
                          className="sequence-portrait-img"
                          style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      )}
                      <div className="sequence-photo-tag">
                        {item.tag || (isBureaucrats ? 'District Headquarters • Kalahandi' : 'Fieldwork Consultation • Kalahandi')}
                      </div>
                    </div>

                    {item.caption && (
                      <div className="sequence-photo-caption">
                        {item.caption}
                      </div>
                    )}

                    {/* Next / Scroll prompt indicator */}
                    {index < items.length - 1 ? (
                      <button
                        type="button"
                        className="sequence-next-btn"
                        onClick={() => scrollToItem(index + 1)}
                        aria-label={`Scroll to next profile: ${getItemTitle(items[index + 1])}`}
                      >
                        <span>Scroll to next profile</span>
                        <span className="sequence-next-arrow">&darr;</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="sequence-next-btn"
                        onClick={() => scrollToItem(0)}
                        aria-label="Back to first profile"
                      >
                        <span>Back to first profile</span>
                        <span className="sequence-next-arrow">&uarr;</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
