import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 28px;
  color: ${(props) => props.theme.colors.dark};
  margin-top: 46px;

  .notFound-container {
    &__image {
      margin-top: 50px;
    }
  }
`;

export default NotFoundPageStyled;
