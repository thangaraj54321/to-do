function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p> Copyright© {year} My Website</p>
    </footer>
  );
}

export default Footer;