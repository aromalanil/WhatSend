function Logo({ img, title, alt }) {
  return (
    <a className="logo" href="/">
      <img src={img} alt={alt} />
      <p>{title}</p>
    </a>
  );
}

export default Logo;
