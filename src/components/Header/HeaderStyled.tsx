import styled from "styled-components";

const HeaderStyled = styled.header`
  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 32px;
  color: ${(props) => props.theme.colors.title};

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
`;
export default HeaderStyled;
