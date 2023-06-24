import { PirateStructure } from "../../store/pirate/types";
import Button from "../Button/Button";
import PirateCardStyled from "./PirateCardStyled";

interface PirateCardProps {
  pirate: PirateStructure;
  actionOnClick: (pirateId: string) => void;
  showUserView: boolean | undefined;
}

const PirateCard = ({
  pirate: { name, bounty, imgUrl, id },
  actionOnClick: actionOnclick,
  showUserView: showUserView,
}: PirateCardProps): React.ReactElement => {
  return (
    <PirateCardStyled className="card">
      <div className="card__header">
        <h2 className="card__title">WANTED</h2>
        <img
          className="card__image"
          src={imgUrl}
          alt={`Pirate ${name}`}
          width={244}
          height={244}
        />
      </div>

      <div className="card__info">
        <h2 className="card__subtitle">Dead or Alive</h2>
        <h2 className="card__name">{name}</h2>
        <div className="card__buttons">
          {showUserView && (
            <Button
              className="card__deleteButton"
              ariaLabel="delete"
              actionOnClick={() => actionOnclick(id as string)}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0714 31.7778C17.0714 33 18.0357 34 19.2143 34H27.7857C28.9643 34 29.9286 33 29.9286 31.7778V18.4444H17.0714L17.0714 31.7778ZM31 15.1111H27.25L26.1786 14L20.8214 14L19.75 15.1111H16V17.3333H31V15.1111Z"
                  fill="black"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="4.5"
                  stroke="black"
                  strokeOpacity="0.5"
                />
              </svg>
            </Button>
          )}

          <span className="card__bounty">
            {bounty}{" "}
            <img src="images/Beli.svg" alt="beli-icon" height={15} width={9} />
          </span>
          {showUserView && (
            <Button className="card__editButton" ariaLabel="edit">
              <svg
                width="51"
                height="48"
                viewBox="0 0 51 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="4.5"
                  stroke="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.8992 21.5358L29.223 18.212L29.9301 18.9191L26.6063 22.2429L25.6305 22.5116L25.8992 21.5358ZM30.6372 16.7978L31.3443 17.5049L32.237 16.6122L32.2373 16.6069L32.2373 16.6067C32.2376 16.5991 32.2384 16.5779 32.2204 16.5332C32.2017 16.4864 32.1421 16.364 31.9601 16.182C31.7781 16 31.6557 15.9405 31.6089 15.9217C31.5642 15.9037 31.543 15.9045 31.5354 15.9048L31.5352 15.9048L31.5299 15.9051L30.6372 16.7978ZM30.285 14.3216C30.3175 14.2891 30.3514 14.2592 30.3901 14.2345C30.6716 14.0548 31.9675 13.3609 33.3743 14.7678C34.7812 16.1746 34.0873 17.4705 33.9076 17.752C33.8829 17.7907 33.853 17.8246 33.8205 17.8571L27.8336 23.844C27.7112 23.9665 27.559 24.055 27.392 24.101L24.4646 24.9071C23.7165 25.1131 23.029 24.4256 23.235 23.6775L24.0411 20.7501C24.0871 20.5831 24.1756 20.4309 24.2981 20.3085L30.285 14.3216ZM17 16C16.4477 16 16 16.4477 16 17V31C16 31.5523 16.4477 32 17 32H32C32.5523 32 33 31.5523 33 31V25C33 24.4477 32.5523 24 32 24C31.4477 24 31 24.4477 31 25V30H18V18H23.5C24.0523 18 24.5 17.5523 24.5 17C24.5 16.4477 24.0523 16 23.5 16H17Z"
                  fill="#222222"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </PirateCardStyled>
  );
};

export default PirateCard;
