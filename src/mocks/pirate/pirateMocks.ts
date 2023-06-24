import { PirateStructure } from "../../store/pirate/types";

export const fullPiratesStateMock: PirateStructure[] = [
  {
    id: "1",
    name: "Monkey D. Luffy",
    bounty: 1500000000,
    hasDevilFruit: true,
    isAlive: true,
    imgUrl: "exampel",
    crew: "Straw Hat Pirates",
    position: "Captain",
    dream: "Find the One Piece",
  },
  {
    id: "2",
    name: "Roronoa Zoro",
    bounty: 320000000,
    hasDevilFruit: false,
    isAlive: true,
    imgUrl: "example",
    crew: "Straw Hat Pirates",
    position: "Swordsman",
    dream: "Become the World's Greatest Swordsman",
  },
];

export const threePiratesStateMock: PirateStructure[] = [
  {
    id: "1",
    name: "Monkey D. Luffy",
    bounty: 1500000000,
    hasDevilFruit: true,
    isAlive: true,
    imgUrl: "exampel",
    crew: "Straw Hat Pirates",
    position: "Captain",
    dream: "Find the One Piece",
  },
  {
    id: "2",
    name: "Roronoa Zoro",
    bounty: 320000000,
    hasDevilFruit: false,
    isAlive: true,
    imgUrl: "example",
    crew: "Straw Hat Pirates",
    position: "Swordsman",
    dream: "Become the World's Greatest Swordsman",
  },
  {
    id: "3",
    name: "Nami",
    bounty: 320000000,
    hasDevilFruit: false,
    isAlive: true,
    imgUrl: "example3",
    crew: "Straw Hat Pirates",
    position: "navigator",
    dream: "Become the World's Greatest navigator",
  },
];

export const newPirateMock: PirateStructure = {
  id: "4",
  name: "buggy",
  bounty: 32000000000,
  hasDevilFruit: true,
  isAlive: true,
  imgUrl: "example3",
  crew: "buggy Pirates",
  position: "captain",
  dream: "Become rich",
};
