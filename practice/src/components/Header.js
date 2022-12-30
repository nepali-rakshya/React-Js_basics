import logo from "../img/logo192.png";

const Header = () => {
  return (
    <header className="img center">
      <img src={logo} alt="react-logo" width="50px" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
