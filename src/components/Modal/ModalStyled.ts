import styled from "styled-components";

const FeedbackStyled = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightOpacity};
  top: 0;
  left: 0;

  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: fixed;
    gap: 5px;
    padding: 20px;
    width: 60vw;
    background-color: ${(props) => props.theme.colors.positiveFeedback};
    border-radius: 10px;
    min-width: 200px;
    max-width: 400px;
    font-family: ${(props) => props.theme.fonts.primary};

    &--error {
      background-color: ${(props) => props.theme.colors.secondary};
    }

    &__title {
      color: ${(props) => props.theme.colors.dark};
      font-size: 1.25rem;

      &--error {
        color: ${(props) => props.theme.colors.dark};
      }
    }

    &__button {
      padding: 8px 8px;
      margin-top: 10px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colors.button};
      color: ${(props) => props.theme.colors.dark};
      max-width: 400px;
      width: 80%;
    }
  }
`;

export default FeedbackStyled;
