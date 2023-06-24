import { NavLink, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavbarStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Navbar = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.users.isLogged);

  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const navigate = useNavigate();

  const actionOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeToken("token");
    navigate("/");
  };

  return (
    <NavBarStyled>
      <ul className="navbar-links">
        {isLogged ? (
          <li>
            <button className="navbar-button" onClick={actionOnClick}>
              Logout
            </button>
          </li>
        ) : (
          <li className="navbar-links__login">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        <li className="navbar-links__pirates">
          <NavLink to="/pirates">Pirates</NavLink>
        </li>
        {isLogged && (
          <li className="navbar-links__create">
            <NavLink to="/create">Create</NavLink>
          </li>
        )}
      </ul>
    </NavBarStyled>
  );
};

export default Navbar;
