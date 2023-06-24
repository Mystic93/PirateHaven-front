import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <span className="header-container__title">Pirate Haven</span>
        <img
          className="header-container__logo"
          src="/images/logo.svg"
          alt="logo"
          width={44}
          height={44}
        />
      </div>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
