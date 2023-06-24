import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadPiratesActionCreator } from "../../store/pirate/piratesSlice";
import ListPageStyled from "./ListPageStyled";
import PiratesList from "../../components/PiratesList/PiratesList";
import useApi from "../../hooks/useApi/useApi";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPirates } = useApi();

  useEffect(() => {
    (async () => {
      const pirates = await getPirates();
      if (pirates) {
        dispatch(loadPiratesActionCreator(pirates));
        const firstPirate = pirates[0].imgUrl;

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = firstPirate;

        const parent = document.head;
        const firstChild = document.head.firstChild;
        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getPirates]);

  return (
    <>
      <ListPageStyled>
        <h1 className="list-title">Explore Pirates</h1>
      </ListPageStyled>
      <PiratesList />
    </>
  );
};

export default ListPage;
