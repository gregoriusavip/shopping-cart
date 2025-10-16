import mainLogo from "../assets/logo.webp";

function Header() {
  return (
    <header className="flex flex-row justify-between items-start sm:items-center">
      <img src={mainLogo} alt="Logo of the website" className="rounded-2xl" />
      <nav>
        <ol className="flex flex-col gap-3 sm:flex-row sm:items-center not-sm:leading-none">
          <li>Home</li>
          <li>Products</li>
          <li className="material-symbols-outlined">shopping_cart</li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
