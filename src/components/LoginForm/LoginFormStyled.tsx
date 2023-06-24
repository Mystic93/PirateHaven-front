import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 5px;
  margin-top: 58px;
  min-width: 280px;
  margin-bottom: 33px;

  .loginform-label {
    font-size: 24px;
    margin-top: 51px;
    margin-bottom: 20px;
  }

  .loginform-input {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
    min-width: 238px;
    min-height: 48px;
    font-size: 24px;
    font-family: Sail;
    margin: 0 12px;
    padding-top: 10px;
    padding-left: 10px;
  }

  .loginform-button {
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
export default LoginFormStyled;
