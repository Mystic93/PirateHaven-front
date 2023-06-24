import styled from "styled-components";

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.navBar};
  padding: 8px 12px;
  border-radius: 5px;

  .navbar-links {
    padding-left: 10px;
    padding-right: 10px;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.title};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 21px;

    .active {
      color: ${(props) => props.theme.colors.dark};
    }
  }

  .navbar-links__login {
    height: 28px;
    width: 76px;
  }

  .navbar-links__create {
    height: 28px;
    width: 76px;
  }

  .navbar-links__pirates {
    height: 28px;
    width: 76px;
  }

  .navbar-button {
    padding-left: 10px;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.title};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 76px;
    background: none;
    gap: 21px;
  }

  .navbar-links__disabledcreate {
    display: none;
  }
`;
export default NavBarStyled;
