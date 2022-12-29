import logo from "./logo192.png";

const Header = () => {
  const image = { logo };

  return (
    <header className="img center">
      <img src={image} alt="react-logo" width="50px" />
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
