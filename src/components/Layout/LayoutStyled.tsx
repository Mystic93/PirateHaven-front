import styled from "styled-components";

const LayoutStyled = styled.div`
  max-width: 1000px;
  padding: 15px;
  margin-inline: auto;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  align-items: center;
`;

export default LayoutStyled;
