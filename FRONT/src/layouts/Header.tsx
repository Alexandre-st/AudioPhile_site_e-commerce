import { useState } from "react";
import { Link } from "react-router-dom";
import cartLogo from "../assets/shared/desktop/icon-cart.svg";
import audiophile from "../assets/shared/desktop/logo.svg";
import Menu from "../components/Menu";

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header-container container">
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Link to="/">
          <img src={audiophile} alt="Audiophile logo" />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/headphones">HEADPHONES</Link>
            </li>
            <li>
              <Link to="/speakers">SPEAKERS</Link>
            </li>
            <li>
              <Link to="/earphones">EARPHONES</Link>
            </li>
          </ul>
        </nav>
        <div className="header-cart">
          <img src={cartLogo} alt="Open the basket" />
        </div>
      </div>
      <div className="border-bottom container-img"></div>
    </header>
  );
};

export default Header;
