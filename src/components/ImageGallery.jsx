export default function ImageGallery({ images }) {
  if (!images || images.length === 0) return null;

  // Layout 1: Single image
  // Layout 2: Two images (Primary large, secondary smaller)
  const layoutClass = images.length === 1 ? 'layout-1' : 'layout-2';

  return (
    <div className={`image-gallery ${layoutClass}`}>
      {images.map((imgSrc, idx) => (
        <div key={idx} className="img-wrapper">
          <img 
            src={imgSrc} 
            alt="Fieldwork observation" 
            className="gallery-img"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
