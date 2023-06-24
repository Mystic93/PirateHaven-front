import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="notFound-container">
      <div className="info-cotainer">
        <h1 className="info-cotainer__title">Sorry page not found</h1>
      </div>
      <img
        className="notFound-container__image"
        src="images/notFoundPageimage.webp"
        alt="A devil fruit in the ocean"
        width={278}
        height={275}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
