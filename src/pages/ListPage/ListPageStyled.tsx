import styled from "styled-components";

const ListPageStyled = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 28px;
  color: ${(props) => props.theme.colors.dark};
  margin-top: 46px;
`;
export default ListPageStyled;
