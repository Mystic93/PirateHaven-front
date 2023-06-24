import { PirateStructure } from "../../store/pirate/types";
import Button from "../Button/Button";
import PirateFormStyled from "./PirateFormStyled";
import { useState } from "react";

interface PirateFormProps {
  submitPirateForm: (pirate: PirateStructure) => Promise<void>;
}

const PirateForm = ({
  submitPirateForm,
}: PirateFormProps): React.ReactElement => {
  const initialPirateData: PirateStructure = {
    name: "",
    crew: "",
    dream: "",
    imgUrl: "",
    position: "",
    bounty: 0,
    hasDevilFruit: false,
    isAlive: false,
  };
  const [pirateData, setPirateData] = useState(initialPirateData);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPirateData({
      ...pirateData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitPirateForm(pirateData);
    setPirateData(initialPirateData);
  };

  const isFilled =
    pirateData.name !== "" &&
    pirateData.crew !== "" &&
    pirateData.bounty !== 0 &&
    pirateData.dream !== "" &&
    pirateData.imgUrl !== "" &&
    pirateData.position !== "";

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPirateData({
      ...pirateData,
      [event.target.id]: event.target.checked,
    });
  };
  return (
    <PirateFormStyled onSubmit={handleOnSubmit}>
      <label className="pirateform-label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        className="pirateform-input"
        id="name"
        value={pirateData.name}
        onChange={onChangeData}
        autoComplete="off"
      />
      <label className="pirateform-label" htmlFor="bounty">
        Bounty
      </label>
      <input
        type="number"
        className="pirateform-input"
        id="bounty"
        value={pirateData.bounty || ""}
        onChange={onChangeData}
        autoComplete="off"
      />
      <label className="pirateform-label" htmlFor="hasDevilFruit">
        Has Devil Fruit
      </label>
      <input
        type="checkbox"
        className="pirateform-checkbox"
        id="hasDevilFruit"
        checked={pirateData.hasDevilFruit}
        onChange={handleCheckbox}
      />
      <label className="pirateform-label" htmlFor="isAlive">
        Is Alive
      </label>
      <input
        type="checkbox"
        className="pirateform-checkbox"
        id="isAlive"
        checked={pirateData.isAlive}
        onChange={handleCheckbox}
      />
      <label className="pirateform-label" htmlFor="imgUrl">
        Image
      </label>
      <input
        type="url"
        className="pirateform-input"
        id="imgUrl"
        value={pirateData.imgUrl}
        onChange={onChangeData}
        autoComplete="off"
      />
      <label className="pirateform-label" htmlFor="crew">
        Crew
      </label>
      <input
        type="text"
        className="pirateform-input"
        id="crew"
        value={pirateData.crew}
        onChange={onChangeData}
        autoComplete="off"
      />
      <label className="pirateform-label" htmlFor="position">
        Position
      </label>
      <input
        type="text"
        className="pirateform-input"
        id="position"
        value={pirateData.position}
        onChange={onChangeData}
        autoComplete="off"
      />
      <label className="pirateform-label" htmlFor="dream">
        Dream
      </label>
      <textarea
        className="pirateform-textarea"
        id="dream"
        value={pirateData.dream}
        onChange={onChangeData}
        autoComplete="off"
      />
      <Button
        type="submit"
        className="pirateform-button"
        text="Create"
        disabled={!isFilled}
        actionOnClick={() => handleOnSubmit}
      />
    </PirateFormStyled>
  );
};

export default PirateForm;
