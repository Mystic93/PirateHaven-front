import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <img className="loader" src="/images/loader.svg" alt="spinner" />
    </LoaderStyled>
  );
};

export default Loader;
