function ImageLink({ image, link, alt }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <img className="image-link" src={image} alt={alt} />
    </a>
  );
}

export default ImageLink;
