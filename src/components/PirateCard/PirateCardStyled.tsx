import styled from "styled-components";

const PirateCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 5px;
  align-items: center;
  width: 280px;
  padding: 12px 18px;
  gap: 10px;
  margin-top: 58px;

  .card__header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .card__title {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 40px;
  }

  .card__image {
    padding-top: 23px;
    padding-bottom: 12px;
    height: 244px;
    width: 244px;
    object-fit: cover;
    padding: 0px;
  }

  .card__info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card__subtitle {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 32px;
  }

  .card__name {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 24px;
    padding-bottom: 14px;
    padding-top: 14px;
  }

  .card__bounty {
    padding-bottom: 3px;
    font-size: 25px;
    width: 143px;
    text-align: center;
  }

  .card__buttons {
    display: flex;
    align-items: center;
  }
`;

export default PirateCardStyled;
