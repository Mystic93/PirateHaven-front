import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { removePirateActionCreator } from "../../store/pirate/piratesSlice";
import PirateCard from "../PirateCard/PirateCard";
import PirateListStyled from "./PirateListStyled";

const PiratesList = (): React.ReactElement => {
  const pirates = useAppSelector((state) => state.pirate);
  const isLogged = useAppSelector((state) => state.users.isLogged);
  const dispatch = useAppDispatch();
  const { removePirate } = useApi();

  const deleteOnClick = async (pirateId: string) => {
    const status = await removePirate(pirateId);
    if (status === 200) {
      dispatch(removePirateActionCreator(pirateId));
    }
  };

  return (
    <PirateListStyled>
      {pirates.map((pirate) => (
        <li className="pirate" key={pirate.id}>
          <PirateCard
            pirate={pirate}
            actionOnClick={deleteOnClick}
            showUserView={isLogged}
          />
        </li>
      ))}
    </PirateListStyled>
  );
};

export default PiratesList;
