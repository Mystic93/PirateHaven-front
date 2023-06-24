import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../store";
import Feedback from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const { isLoading, showFeedback } = useAppSelector((store) => store.ui);

  return (
    <LayoutStyled>
      <Header />
      {showFeedback && <Feedback />}
      {isLoading && <Loader />}
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
