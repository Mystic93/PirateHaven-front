import styled from "styled-components";

const PirateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.primary};
  border-radius: 5px;
  margin-top: 58px;
  min-width: 280px;
  margin-bottom: 33px;
  color: ${(props) => props.theme.colors.title};
  font-size: 24px;

  .pirateform-input {
    height: 60px;
    width: 280px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 24px;
  }

  .pirateform-label {
    align-self: self-start;
    padding: 15px 0;
  }

  .pirateform-textarea {
    height: 172px;
    width: 280px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 24px;
  }

  .pirateform-checkbox {
    height: 50px;
    width: 50px;
    margin: 0;
    align-self: self-start;
  }

  .pirateform-button {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 26px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.button};
    margin-top: 40px;
    margin-bottom: 61px;
    height: 51px;
    min-width: 140px;
  }
`;
export default PirateFormStyled;
