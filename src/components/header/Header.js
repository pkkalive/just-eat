import logo from "../../../public/assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
