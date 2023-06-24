import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightOpacity};
  top: 0;
  left: 0;

  .loader {
    animation: rotate-center 2s linear infinite both;
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
