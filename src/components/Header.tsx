import mainLogo from "../assets/logo.webp";
import mainLogo2X from "../assets/logo@2x.webp";

function Header() {
  let logoSrcSet = `${mainLogo} 24w, ${mainLogo2X} 40w`;
  return (
    <header className="flex flex-row justify-between items-center">
      <img
        srcSet={logoSrcSet}
        sizes="(width >= 40rem) 40px, 24px"
        src={mainLogo2X}
        alt="Logo of the website"
      />
      <nav>
        <ol className="flex flex-row gap-3 items-center">
          <li>Home</li>
          <li>Products</li>
          <li className="material-symbols-outlined">shopping_cart</li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
