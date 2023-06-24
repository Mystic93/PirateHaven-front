import { useNavigate } from "react-router-dom";
import PirateForm from "../../components/PirateForm/PirateForm";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import CreatePageStyled from "./CreatePageStyled";
import { PirateStructure } from "../../store/pirate/types";
import { createPirateActionCreator } from "../../store/pirate/piratesSlice";

const CreatePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { createPirate } = useApi();
  const navigate = useNavigate();

  const submitPirateForm = async (pirate: PirateStructure) => {
    const newPirate = await createPirate(pirate);

    if (newPirate) {
      dispatch(createPirateActionCreator(pirate));
      navigate("/pirates");
    }
  };

  return (
    <CreatePageStyled className="createPage-container">
      <h1 className="createPage-container__title">Create a Pirate</h1>
      <PirateForm submitPirateForm={submitPirateForm} />
    </CreatePageStyled>
  );
};

export default CreatePage;
