import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import FeedbackStyled from "./ModalStyled";

const Feedback = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };
  return (
    <FeedbackStyled
      role="button"
      tabIndex={0}
      onClick={handleOnClose}
      onKeyPress={handleOnClose}
    >
      <article
        className={`modal-container ${isError && `modal-container--error`}`}
        aria-label="feedback modal"
      >
        <h2
          className={`modal-container__title${
            isError ? " modal-container__title--error" : ""
          }`}
        >
          {isError ? "Error" : "Success"}
        </h2>
        <p className="modal-container__text">{message}</p>
        {isError ? (
          <img
            className="modal-container__close"
            src="images/close.svg"
            alt="error icon"
            width={40}
            height={40}
            loading="lazy"
          />
        ) : (
          <img
            className="modal-container__done"
            src="images/done.svg"
            alt="successful icon"
            width={40}
            height={40}
            loading="lazy"
          />
        )}
        <Button className="modal-container__button" text="Close" />
      </article>
    </FeedbackStyled>
  );
};

export default Feedback;
